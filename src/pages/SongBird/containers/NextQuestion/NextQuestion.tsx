import React, { FC } from "react"
import { NextQuestion as BaseNextQuestion } from "../../components"

export interface Props {
  onChangeQuestionNumber: () => void
  foundAnswer: boolean
}

const NextQuestion: FC<Props> = ({ onChangeQuestionNumber, foundAnswer }) => {
  return <BaseNextQuestion onChangeQuestionNumber={onChangeQuestionNumber} foundAnswer={foundAnswer} />
}

export default NextQuestion
