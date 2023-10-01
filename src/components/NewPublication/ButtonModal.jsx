import React, { useState } from 'react'
import { ButtonLoading } from '../common/Header/StyledHeader';
import NewPublicationModal from './NewPublicationModal';

const ButtonModal = () => {
    const [isModalVisible, setModalIsVisible] = useState(false);
  return (
    <div>
          <ButtonLoading onClick={() => setModalIsVisible(true)}>Carregar</ButtonLoading>
          {isModalVisible ? <NewPublicationModal>ok</NewPublicationModal> : null}
    </div>
  )
}

export default ButtonModal
