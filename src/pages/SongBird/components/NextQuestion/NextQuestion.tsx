import React, { FC } from "react"

import { Props } from "../../containers/NextQuestion/NextQuestion"
import "./nextQuestion.scss"

const NextQuestion: FC<Props> = ({ onChangeQuestionNumber }) => {
  return (
    <button className="next-question btn btn-info" onClick={onChangeQuestionNumber}>
      Next question
    </button>
  )
}

export default NextQuestion
