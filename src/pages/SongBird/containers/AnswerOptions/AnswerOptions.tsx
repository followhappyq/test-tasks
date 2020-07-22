import React, { FC } from "react"

import { AnswerOptions as BaseAnswerOptions } from "../../components"
import { listType } from "../../SongBird"

export interface Props {
  currentQuestionList: Array<listType>
  correctId: number
  onChooseAnswer: (id: number) => void
}

const AnswerOptions: FC<Props> = ({ currentQuestionList, correctId, onChooseAnswer }) => {
  return (
    <BaseAnswerOptions
      currentQuestionList={currentQuestionList}
      correctId={correctId}
      onChooseAnswer={onChooseAnswer}
    />
  )
}

export default AnswerOptions
