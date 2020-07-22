import React, { FC, useState } from "react"

import { AnswerOptionsItem as BaseAnswerOptionsItem } from "../../components"

export interface Props {
  id: number
  name: string
  correctId: number
  correctAnswer: boolean
  setCorrectAnswer: (state: boolean) => void
}

const AnswerOptionsItem: FC<Props> = ({ id, name, correctId, correctAnswer, setCorrectAnswer }) => {
  const [wrong, setWrong] = useState<boolean>()
  const [success, setSuccess] = useState<boolean>()
  const handleClick: (id: number) => void = (id) => {
    if (!correctAnswer) {
      if (correctId === id) {
        setSuccess(true)
        setCorrectAnswer(true)
      } else {
        setWrong(true)
      }
    }
  }

  return <BaseAnswerOptionsItem id={id} name={name} handleClick={handleClick} wrong={wrong} success={success} />
}

export default AnswerOptionsItem
