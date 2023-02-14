import React from 'react'
import { ButtonUi } from '../../Ui/ButtonUi/ButtonUi'

export const Header = () => {
  return (
    <div>
      <ButtonUi styleButton="styleButto" textButton=" Home " />
      <ButtonUi styleButton="styleButto" textButton=" UseState " />
      <ButtonUi styleButton="styleButto" textButton=" UseCustom " />
      <ButtonUi styleButton="styleButto" textButton=" UseEffect " />
      <ButtonUi styleButton="styleButto" textButton=" Rick And Morty " />
    </div>
  )
}
