import React, { useState } from 'react'
import { Modal } from 'vtex.styleguide'
import './global.css'
// import Amplify from 'aws-amplify'
// import { AmplifySignOut, withAuthentication } from '@aws-amplify/ui-react'

// import awsconfig from '../../../src/aws-exports'

// Amplify.configure(awsconfig)

const LoginForm = () => {
  // const { isMobile } = useDevice()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <button className="login" onClick={() => setIsModalOpen(!isModalOpen)}>
      {/* <button className="helpButton" onClick={() => setIsModalOpen(true)}> Ajuda </button> */}
      <Modal
        centered
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="modal--container">{/* //<AmplifySignOut /> */}</div>
      </Modal>
      <img
        alt="user"
        src="https://hiringcoders2021.vteximg.com.br/arquivos/user.png"
      />
      <p className="helpButton"> ENTRAR </p>
    </button>
  )
}

export default LoginForm
