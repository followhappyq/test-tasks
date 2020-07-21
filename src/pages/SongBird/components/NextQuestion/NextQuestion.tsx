import React, { FC } from "react"

import { Props } from "../../containers/NextQuestion/NextQuestion"

const NextQuestion: FC<Props> = ({ onChangeQuestionNumber }) => {
  return (
    <button className="next-question" onClick={onChangeQuestionNumber}>
      Next question
    </button>
  )
}

export default NextQuestion
