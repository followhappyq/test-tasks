import React, { FC } from "react"

import { AnswerDetails as BaseAnswerDetails } from "../../components"

import { listType } from "../../SongBird"

export interface Props {
  chosenAnswer: listType
  isQuizStarted: boolean
}

const AnswerDetails: FC<Props> = ({ chosenAnswer, isQuizStarted }) => {
  return <BaseAnswerDetails chosenAnswer={chosenAnswer} isQuizStarted={isQuizStarted} />
}

export default AnswerDetails
