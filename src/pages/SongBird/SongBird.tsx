import React, { FC, Dispatch, SetStateAction } from "react"

import { Header, QuizDetails, Question, AnswerOptions, NextQuestion, AnswerDetails } from "./containers"
import "./style.scss"

interface Props {
  currentQuestion: listType
  currentQuestionList: Array<listType>
  onChangeQuestionNumber: () => void
  onChooseAnswer: (id: number) => void
  chosenAnswer: number
  foundAnswer: boolean
  setFoundAnswer: Dispatch<SetStateAction<boolean>>
  isNextRoundStarted: boolean
}

export interface listType {
  audio: string
  description: string
  id: number
  image: string
  name: string
  species: string
}

const SongBird: FC<Props> = ({
  currentQuestion,
  currentQuestionList,
  onChangeQuestionNumber,
  onChooseAnswer,
  chosenAnswer,
  foundAnswer,
  setFoundAnswer,
  isNextRoundStarted,
}) => {
  return (
    <div className="songbird">
      <Header />
      <QuizDetails />
      <Question question={currentQuestion} />
      <div className="songbird__main container">
        <AnswerOptions
          currentQuestionList={currentQuestionList}
          correctId={currentQuestion.id}
          onChooseAnswer={onChooseAnswer}
          setFoundAnswer={setFoundAnswer}
          isNextRoundStarted={isNextRoundStarted}
        />
        <AnswerDetails chosenAnswer={currentQuestionList[chosenAnswer]} />
      </div>
      <div className="songbird__footer">
        <NextQuestion onChangeQuestionNumber={onChangeQuestionNumber} foundAnswer={foundAnswer} />
      </div>
    </div>
  )
}

export default SongBird
