import React, { FC } from "react"

import classNames from "classnames"

import { Props } from "../../containers/AnswerOptions/AnswerOptions"
import "./answerOptions.scss"

const AnswerOptions: FC<Props> = ({ currentQuestionList, onChooseAnswer }) => {
  return (
    <div className="questions">
      <ul className="questions__list">
        {currentQuestionList.map((item) => (
          <li className="questions__item" key={item.id} onClick={onChooseAnswer.bind(null, item.id)}>
            <span className={classNames("questions__circle")}></span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnswerOptions
