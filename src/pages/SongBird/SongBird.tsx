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
  score: number
  isAnswerIncorrect: () => void
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
  score,
  isAnswerIncorrect,
}) => {
  return (
    <div className="songbird">
      <Header score={score} />
      <QuizDetails />
      <Question question={currentQuestion} foundAnswer={foundAnswer} />
      <div className="songbird__main container row mb2">
        <AnswerOptions
          currentQuestionList={currentQuestionList}
          correctId={currentQuestion.id}
          currentQuestion={currentQuestion}
          onChooseAnswer={onChooseAnswer}
          setFoundAnswer={setFoundAnswer}
          isNextRoundStarted={isNextRoundStarted}
          isAnswerIncorrect={isAnswerIncorrect}
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
