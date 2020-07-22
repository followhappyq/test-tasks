import React, { FC, useState, useRef, useEffect } from "react"

import { AnswerOptionsItem as BaseAnswerOptionsItem } from "../../components"

export interface Props {
  id: number
  name: string
  correctId: number
  correctAnswer: boolean
  setCorrectAnswer: (state: boolean) => void
  isNextRoundStarted: boolean
}

const AnswerOptionsItem: FC<Props> = ({ id, name, correctId, correctAnswer, setCorrectAnswer, isNextRoundStarted }) => {
  const [wrong, setWrong] = useState<boolean>()
  const [success, setSuccess] = useState<boolean>()

  const wrongAudioRef = useRef<HTMLAudioElement>(null)
  const successAudioRef = useRef<HTMLAudioElement>(null)

  const handleClick: (id: number) => void = (id) => {
    if (!correctAnswer) {
      if (correctId === id) {
        setSuccess(true)
        setCorrectAnswer(true)
        successAudioRef.current?.play()
      } else {
        setWrong(true)
        wrongAudioRef.current?.play()
      }
    }
  }

  useEffect(() => {
    return () => {
      setSuccess(false)
      setWrong(false)
    }
  }, [isNextRoundStarted])

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
