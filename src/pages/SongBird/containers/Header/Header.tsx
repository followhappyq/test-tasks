import React, { FC } from "react"

import { Header as BaseHeader } from "../../components"

interface Props {
  score: number
}

const Header: FC<Props> = ({ score }) => {
  return <BaseHeader score={score} />
}

export default Header
