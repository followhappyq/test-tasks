import React, { FC, useState, useEffect, useCallback } from "react"

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
  foundAnswer: boolean
}

const Question: FC<Props> = ({ question, foundAnswer }) => {
  const [questionName, setQuestionName] = useState<string>("******")
  const [image, setImage] = useState<string>("./assets/songbird/img/bird.jpg")

  const onAnswerFound: () => void = useCallback(() => {
    if (foundAnswer) {
      setQuestionName(question.name)
      setImage(question.image)
    } else {
      setQuestionName("******")
      setImage("./assets/songbird/img/bird.jpg")
    }
  }, [question, foundAnswer])

  useEffect(() => {
    onAnswerFound()
  }, [foundAnswer, onAnswerFound])
  return <BaseQuestion audioSrc={question.audio} imageSrc={image} name={questionName} />
}

export default Question
