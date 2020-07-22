import React, { FC } from "react"

import { Props } from "../../containers/AnswerOptions/AnswerOptions"
import { AnswerOptionsItem } from "../../containers"
import "./answerOptions.scss"

const AnswerOptions: FC<Props> = ({ currentQuestionList, correctId }) => {
  return (
    <div className="questions">
      <ul className="questions__list">
        {currentQuestionList.map((item) => (
          <AnswerOptionsItem name={item.name} id={item.id} key={item.id} correctId={correctId} />
        ))}
      </ul>
    </div>
  )
}

export default AnswerOptions
