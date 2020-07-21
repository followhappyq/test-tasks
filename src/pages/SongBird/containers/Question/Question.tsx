import React, { FC } from "react"

import { Question as BaseQuestion } from "../../components"

interface Props {
  question: {
    audio: string
    description: string
    id: number
    image: string
    name: string
    species: string
  }
}

const Question: FC<Props> = ({ question }) => {
  return <BaseQuestion audioSrc={question.audio} imageSrc={question.image} name={question.name} />
}

export default Question
