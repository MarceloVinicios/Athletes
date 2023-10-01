import React from 'react'
import { ModalFather, ModalHeader, ModalContent, ModalFooter, DividerStyled } from './StyledNewPublicationModal'
import FormUpload from './FormUpload/FormUpload'

const NewPublicationModal = ({children}) => {
  return (
   <ModalFather >
      <ModalHeader>FAÇA SUA NOVA PUBLICAÇÃO</ModalHeader>
      <DividerStyled  />
        <ModalContent>
          <FormUpload />

        </ModalContent>
    </ModalFather>
  )
}

export default NewPublicationModal

