import React from 'react'

export const ButtonUi = ({ styleButton, textButton, event }) => {
  return (
    <button onClick={event} className={styleButton}> {textButton} </button>
  )
}
