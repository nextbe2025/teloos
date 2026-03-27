'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { companyLogin, login } from '@/lib/auth/api'
import { normalizeAuthError } from '@/lib/auth/errors'
import { buildOAuthRedirectUrl } from '@/lib/auth/redirect'
import {
  hasAccessToken,
  type AuthFlowCredentials,
  type CompanyOption,
  type CompanyLoginPayload,
  type LoginPayload,
} from '@/lib/auth/types'

type PendingAction =
  | { type: 'login'; payload: LoginPayload }
  | { type: 'company-login'; payload: CompanyLoginPayload }

type CompanySelectionState = {
  message: string
  companies: CompanyOption[]
  credentials: AuthFlowCredentials
}

export function useAuthLoginFlow() {
  const [busyAction, setBusyAction] = useState<PendingAction['type'] | null>(
    null
  )
  const [companySelection, setCompanySelection] =
    useState<CompanySelectionState | null>(null)
  const [selectedCompanyId, setSelectedCompanyId] = useState('')
  const [pendingForceAction, setPendingForceAction] =
    useState<PendingAction | null>(null)
  const [forceSessionMessage, setForceSessionMessage] = useState('')

  const handleLoginSuccess = (response: {
    access_token: string
    refresh_token: string
    expires_in: number
  }) => {
    window.location.href = buildOAuthRedirectUrl(
      response,
      window.location.origin
    )
  }

  const handleLoginError = (error: unknown, action: PendingAction) => {
    const normalized = normalizeAuthError(error)

    if (normalized.type === 'force-login') {
      setPendingForceAction(action)
      setForceSessionMessage(normalized.message)
      return normalized
    }

    toast.error(normalized.message)
    return normalized
  }

  const clearCompanySelection = () => {
    setCompanySelection(null)
    setSelectedCompanyId('')
  }

  const executeCompanyLogin = async (payload: CompanyLoginPayload) => {
    setBusyAction('company-login')

    try {
      const response = await companyLogin(payload)

      if (hasAccessToken(response)) {
        handleLoginSuccess(response)
      }
    } catch (error) {
      const normalized = handleLoginError(error, {
        type: 'company-login',
        payload,
      })

      if (normalized.type !== 'force-login') {
        clearCompanySelection()
      }

      throw error
    } finally {
      setBusyAction(null)
    }
  }

  const loginWithCredentials = async (
    credentials: AuthFlowCredentials,
    forceLogin = false
  ) => {
    const payload: LoginPayload = {
      ...credentials,
      forceLogin,
    }

    setBusyAction('login')

    try {
      const response = await login(payload)

      if (hasAccessToken(response)) {
        handleLoginSuccess(response)
        return
      }

      setCompanySelection({
        message: response.message,
        companies: response.empresas,
        credentials,
      })

      setSelectedCompanyId(
        response.empresas[0] ? String(response.empresas[0].id) : ''
      )
    } catch (error) {
      handleLoginError(error, { type: 'login', payload })
      throw error
    } finally {
      setBusyAction(null)
    }
  }

  const submitCompanyLogin = async (companyId: string, forceLogin = false) => {
    if (!companySelection) return

    const payload: CompanyLoginPayload = {
      ...companySelection.credentials,
      companyId,
      forceLogin,
    }

    await executeCompanyLogin(payload)
  }

  const confirmForceLogin = async () => {
    if (!pendingForceAction) return

    const action = pendingForceAction
    setPendingForceAction(null)
    setForceSessionMessage('')

    if (action.type === 'login') {
      await loginWithCredentials(
        {
          email: action.payload.email,
          password: action.payload.password,
          remember: action.payload.remember,
        },
        true
      )
      return
    }

    await executeCompanyLogin({
      ...action.payload,
      forceLogin: true,
    })
  }

  return {
    busyAction,
    companySelection,
    selectedCompanyId,
    forceSessionMessage,
    loginWithCredentials,
    submitCompanyLogin,
    confirmForceLogin,
    setSelectedCompanyId,
    closeCompanySelection: () => {
      clearCompanySelection()
    },
    closeForceSession: () => {
      setPendingForceAction(null)
      setForceSessionMessage('')
    },
  }
}
