import RegisterModal from '@/components/RegisterModal'
import { AuthModal } from '@/components/ui/auth-modal'
import React from 'react'

const LoginModalPage = () => {
  return (
    <AuthModal>
        <RegisterModal/>
    </AuthModal>
  )
}

export default LoginModalPage