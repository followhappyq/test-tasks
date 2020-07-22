import React, { FC, useState } from "react"

import { AnswerOptions as BaseAnswerOptions } from "../../components"
import { listType } from "../../SongBird"

export interface Props {
  currentQuestionList: Array<listType>
  correctId: number
  onChooseAnswer: (id: number) => void
}

const AnswerOptions: FC<Props> = ({ currentQuestionList, correctId, onChooseAnswer }) => {
  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false)
  return (
    <BaseAnswerOptions
      currentQuestionList={currentQuestionList}
      correctId={correctId}
      onChooseAnswer={onChooseAnswer}
      correctAnswer={correctAnswer}
      setCorrectAnswer={setCorrectAnswer}
    />
  )
}

export default AnswerOptions
