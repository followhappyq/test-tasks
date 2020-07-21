import React, { useState, useEffect, useCallback } from "react"

import SongBird from "./SongBird"
import birds from "./birds"

interface Props {}

const getRandomNumber: (max: number) => number = (max) => {
  return Math.floor(Math.random() * max)
}

const SongBirdContainer = (props: Props) => {
  const [questions, setQuestions] = useState(birds)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [currentQuestionList, setCurrentQuestionList] = useState(questions[0])
  const [isGameEnd, setIsGameEnd] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState<number>(0)

  const chooseCurrentQuestion: () => void = useCallback(() => {
    const currentQuestionListLength = currentQuestionList.length
    setCurrentQuestion(getRandomNumber(currentQuestionListLength))
  }, [currentQuestionList])

  const onChangeQuestionNumber: () => void = () => {
    if (questionNumber === questions.length - 1) {
      setIsGameEnd(true)
    }
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1)
    }
  }

  const onChangeCurrentQuestionList: () => void = useCallback(() => {
    setCurrentQuestionList(questions[questionNumber])
  }, [questionNumber, questions])

  useEffect(() => {
    chooseCurrentQuestion()
  }, [questions, chooseCurrentQuestion])

  useEffect(() => {
    onChangeCurrentQuestionList()
  }, [questionNumber, onChangeCurrentQuestionList])

  useEffect(() => {}, [isGameEnd])

  return (
    <SongBird
      currentQuestion={currentQuestionList[currentQuestion]}
      currentQuestionList={currentQuestionList}
      onChangeQuestionNumber={onChangeQuestionNumber}
    />
  )
}

export default SongBirdContainer
