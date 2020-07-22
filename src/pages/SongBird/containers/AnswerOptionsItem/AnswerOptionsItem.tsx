import React, { FC, useState } from "react"

import { AnswerOptionsItem as BaseAnswerOptionsItem } from "../../components"

export interface Props {
  id: number
  name: string
  correctId: number
}

const AnswerOptionsItem: FC<Props> = ({ id, name, correctId }) => {
  const [wrong, setWrong] = useState<boolean>()
  const [success, setSuccess] = useState<boolean>()
  const handleClick: (id: number) => void = (id) => {
    if (success !== true) {
      if (correctId === id) {
        setSuccess(true)
      } else {
        setWrong(true)
      }
    }
  }
  return <BaseAnswerOptionsItem id={id} name={name} handleClick={handleClick} wrong={wrong} success={success} />
}

export default AnswerOptionsItem
