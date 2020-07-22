import React, { FC } from "react"

import { listType } from "../../SongBird"
import { AnswerOptionsItem } from "../../containers"
import "./answerOptions.scss"

interface Props {
  currentQuestionList: Array<listType>
  correctId: number
  onChooseAnswer: (id: number) => void
  correctAnswer: boolean
  setCorrectAnswer: (state: boolean) => void
  isNextRoundStarted: boolean
}

const AnswerOptions: FC<Props> = ({
  currentQuestionList,
  correctId,
  correctAnswer,
  setCorrectAnswer,
  isNextRoundStarted,
}) => {
  return (
    <div className="questions">
      <ul className="questions__list">
        {currentQuestionList.map((item) => (
          <AnswerOptionsItem
            name={item.name}
            id={item.id}
            key={item.id}
            correctId={correctId}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            isNextRoundStarted={isNextRoundStarted}
          />
        ))}
      </ul>
    </div>
  )
}

export default AnswerOptions
