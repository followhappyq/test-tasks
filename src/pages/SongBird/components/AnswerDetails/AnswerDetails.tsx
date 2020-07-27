import React, { FC } from "react"

import { AudioPlayer } from "../../containers"
import { Props } from "../../containers/AnswerDetails/AnswerDetails"
import "./answerDetails.scss"

const AnswerDetails: FC<Props> = ({ chosenAnswer, isQuizStarted }) => {
  return (
    <div className="answer-details col-md-6">
      {isQuizStarted ? (
        <>
          <div className="answer-details__header">
            <div className="answer-details__image">
              <img src={chosenAnswer.image} alt="bird" className="question__bird" />
            </div>
            <div className="answer-details__info">
              <div className="answer-details__name-ru">{chosenAnswer.name}</div>
              <div className="answer-details__name-en">{chosenAnswer.species}</div>
              <div className="answer-deatails__player">
                <AudioPlayer audioSrc={chosenAnswer.audio} />
              </div>
            </div>
          </div>
          <div className="answer-details__footer">
            <div className="answer-details__description">{chosenAnswer.description}</div>
          </div>
        </>
      ) : (
        <p>Послушайте плеер. Выберите птицу из списка</p>
      )}
    </div>
  )
}

export default AnswerDetails
