import React, { FC } from "react"
import classNames from "classnames"

import { Props } from "../../containers/NextQuestion/NextQuestion"
import "./nextQuestion.scss"

const NextQuestion: FC<Props> = ({ onChangeQuestionNumber, foundAnswer }) => {
  return (
    <button
      className={classNames("next-question", "btn", { "btn-info": foundAnswer, "btn-secondary": !foundAnswer })}
      onClick={onChangeQuestionNumber}
      disabled={!foundAnswer}
    >
      Next question
    </button>
  )
}

export default NextQuestion
