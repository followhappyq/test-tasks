import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  id: number
  name: string
  handleClick: (id: number) => void
  wrong: boolean | undefined
  success: boolean | undefined
  successAudioRef: any
  wrongAudioRef: any
}

const AnswerOptionsItem: FC<Props> = ({ id, name, handleClick, wrong, success, successAudioRef, wrongAudioRef }) => {
  return (
    <li className="questions__item" onClick={handleClick.bind(null, id)}>
      <span
        className={classNames("questions__circle", { questions__error: wrong, questions__success: success })}
      ></span>
      {name}

      <audio src="/assets/songbird/sound/error.mp3" ref={wrongAudioRef} />
      <audio src="./assets/songbird/sound/success.mp3" ref={successAudioRef} />
    </li>
  )
}

export default AnswerOptionsItem
