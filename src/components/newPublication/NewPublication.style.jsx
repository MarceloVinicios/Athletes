import React from 'react'
import { useState } from 'react'

const NewPublication = () => {
  const [isModalVisible, setModalIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsVisible(true)}>open</button>
      {isModalVisible ? <h1>é visiviel</h1> : null}
    </div>
  )
}

export default NewPublication
