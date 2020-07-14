import React from "react"
import { Switch, Route } from "react-router-dom"

import { Home, FutureGroup } from "./pages/"

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/future-group"]} component={FutureGroup} />
      </Switch>
    </div>
  )
}

export default App
