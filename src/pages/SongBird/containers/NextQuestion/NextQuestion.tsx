import React, { FC } from "react"
import { NextQuestion as BaseNextQuestion } from "../../components"

export interface Props {
  onChangeQuestionNumber: () => void
}

const NextQuestion: FC<Props> = ({ onChangeQuestionNumber }) => {
  return <BaseNextQuestion onChangeQuestionNumber={onChangeQuestionNumber} />
}

export default NextQuestion
