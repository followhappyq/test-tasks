import React, { FC, useState, Dispatch, SetStateAction, useEffect } from "react"

import { AnswerOptions as BaseAnswerOptions } from "../../components"
import { listType } from "../../SongBird"

export interface Props {
  currentQuestionList: Array<listType>
  correctId: number
  onChooseAnswer: (id: number) => void
  setFoundAnswer: Dispatch<SetStateAction<boolean>>
  isNextRoundStarted: boolean
}

const AnswerOptions: FC<Props> = ({
  currentQuestionList,
  correctId,
  onChooseAnswer,
  setFoundAnswer,
  isNextRoundStarted,
}) => {
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false)
  useEffect(() => {
    return () => {
      if (!correctAnswer) {
        setFoundAnswer(true)
      }
    }
  }, [correctAnswer, setFoundAnswer])

  useEffect(() => {
    return () => {
      setCorrectAnswer(false)
      setFoundAnswer(false)
    }
  }, [isNextRoundStarted, setFoundAnswer])

  return (
    <BaseAnswerOptions
      currentQuestionList={currentQuestionList}
      correctId={correctId}
      onChooseAnswer={onChooseAnswer}
      correctAnswer={correctAnswer}
      setCorrectAnswer={setCorrectAnswer}
      isNextRoundStarted={isNextRoundStarted}
    />
  )
}

export default AnswerOptions
