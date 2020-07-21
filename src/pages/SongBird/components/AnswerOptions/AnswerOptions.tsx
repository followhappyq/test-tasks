import React, { FC } from "react"

import { Props } from "../../containers/AnswerOptions/AnswerOptions"

const AnswerOptions: FC<Props> = ({ currentQuestionList }) => {
  return (
    <div className="questions">
      <ul className="questions__list">
        {currentQuestionList.map((item) => (
          <li className="questions__item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnswerOptions
