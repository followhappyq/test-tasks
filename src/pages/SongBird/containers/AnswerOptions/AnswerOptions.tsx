import React, { FC } from "react"

import { AnswerOptions as BaseAnswerOptions } from "../../components"
import { listType } from "../../SongBird"

export interface Props {
  currentQuestionList: Array<listType>
}

const AnswerOptions: FC<Props> = ({ currentQuestionList }) => {
  return <BaseAnswerOptions currentQuestionList={currentQuestionList} />
}

export default AnswerOptions
