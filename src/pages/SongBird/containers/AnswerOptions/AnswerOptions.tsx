import React, { FC, useState } from "react"

import { AnswerOptions as BaseAnswerOptions } from "../../components"
import { listType } from "../../SongBird"

export interface Props {
  currentQuestionList: Array<listType>
  correctId: number
  onChooseAnswer: (id: number) => void
}

const AnswerOptions: FC<Props> = ({ currentQuestionList, correctId, onChooseAnswer }) => {
  const [check, setCheck] = useState()
  return (
    <BaseAnswerOptions
      currentQuestionList={currentQuestionList}
      correctId={correctId}
      onChooseAnswer={onChooseAnswer}
    />
  )
}

export default AnswerOptions
