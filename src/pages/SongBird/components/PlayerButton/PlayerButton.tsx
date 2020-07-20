import React, { FC } from "react"

import "./playerButton.scss"

interface Props {
  onPlayClicked: (current: any) => void
  audio: any
  isPlaying?: boolean
}

const PlayerButton: FC<Props> = ({ onPlayClicked, audio, isPlaying }) => {
  return (
    <>
      {isPlaying ? (
        <div className="play-container pause" onClick={onPlayClicked.bind(null, audio)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-pause"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
      ) : (
        <div className="play-container play" onClick={onPlayClicked.bind(null, audio)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-play"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
            />
          </svg>
        </div>
      )}
    </>
  )
}

export default PlayerButton
