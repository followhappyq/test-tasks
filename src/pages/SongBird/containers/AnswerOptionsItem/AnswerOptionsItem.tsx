import React, { FC, useState, useRef } from "react"

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

  const wrongAudioRef = useRef<HTMLAudioElement>(null)
  const successAudioRef = useRef<HTMLAudioElement>(null)

  const handleClick: (id: number) => void = (id) => {
    if (!correctAnswer) {
      if (correctId === id) {
        setSuccess(true)
        setCorrectAnswer(true)
        onAnswerClicked(successAudioRef)
      } else {
        setWrong(true)
        wrongAudioRef.current?.play()
      }
    }
  }

  const onAnswerClicked: (current: any) => void = ({ current }) => {
    current.play()
  }

  return (
    <BaseAnswerOptionsItem
      id={id}
      name={name}
      handleClick={handleClick}
      wrong={wrong}
      success={success}
      wrongAudioRef={wrongAudioRef}
      successAudioRef={successAudioRef}
    />
  )
}

export default AnswerOptionsItem
