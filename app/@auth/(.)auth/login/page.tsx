import LoginModal from '@/components/LoginModal'
import { AuthModal } from '@/components/ui/auth-modal'
import React from 'react'

const LoginModalPage = () => {
  return (
    <AuthModal>
        <LoginModal/>
    </AuthModal>
  )
}

export default LoginModalPage