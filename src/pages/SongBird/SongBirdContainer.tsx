import React, { useState, useEffect, useCallback } from "react"

import SongBird from "./SongBird"
import birds from "./birds"

interface Props {}

const getRandomNumber: (max: number) => number = (max) => {
  return Math.floor(Math.random() * max)
}

const SongBirdContainer = (props: Props) => {
  const [questions, setQuestions] = useState(birds)
  const [currentAnswer, setCurrentAnswer] = useState()
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [currentQuestionList, setCurrentQuestionList] = useState(birds[currentQuestion])

  const chooseCurrentQuestion: () => void = useCallback(() => {
    const currentQuestionListLength = currentQuestionList.length
    setCurrentQuestion(getRandomNumber(currentQuestionListLength))
  }, [currentQuestionList])

  useEffect(() => {
    chooseCurrentQuestion()
  }, [questions, chooseCurrentQuestion])

  return <SongBird currentQuestion={currentQuestionList[currentQuestion]} currentQuestionList={currentQuestionList} />
}

export default SongBirdContainer
