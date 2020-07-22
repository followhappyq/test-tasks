import React, { FC } from "react"

import { AnswerDetails as BaseAnswerDetails } from "../../components"

import { listType } from "../../SongBird"

export interface Props {
  chosenAnswer: listType
}

const AnswerDetails: FC<Props> = ({ chosenAnswer }) => {
  return <BaseAnswerDetails chosenAnswer={chosenAnswer} />
}

export default AnswerDetails
