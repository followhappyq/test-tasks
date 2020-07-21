import React, { FC } from "react"

import { Header, QuizDetails, Question, AnswerOptions, NextQuestion } from "./containers"
import "./style.scss"

interface Props {
  currentQuestion: listType
  currentQuestionList: Array<listType>
  onChangeQuestionNumber: () => void
}

export interface listType {
  audio: string
  description: string
  id: number
  image: string
  name: string
  species: string
}

const SongBird: FC<Props> = ({ currentQuestion, currentQuestionList, onChangeQuestionNumber }) => {
  return (
    <div className="songbird">
      <Header />
      <QuizDetails />
      <Question question={currentQuestion} />
      <AnswerOptions currentQuestionList={currentQuestionList} />
      <NextQuestion onChangeQuestionNumber={onChangeQuestionNumber} />
    </div>
  )
}

export default SongBird
