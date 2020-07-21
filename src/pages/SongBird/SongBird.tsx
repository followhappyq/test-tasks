import React, { FC } from "react"

import { Header, QuizDetails, Question, AnswerOptions } from "./containers"
import "./style.scss"

interface Props {
  currentQuestion: listType
  currentQuestionList: Array<listType>
}

export interface listType {
  audio: string
  description: string
  id: number
  image: string
  name: string
  species: string
}

const SongBird: FC<Props> = ({ currentQuestion, currentQuestionList }) => {
  console.log(currentQuestionList)
  return (
    <div className="songbird">
      <Header />
      <QuizDetails />
      <Question question={currentQuestion} />
      <AnswerOptions currentQuestionList={currentQuestionList} />
    </div>
  )
}

export default SongBird
