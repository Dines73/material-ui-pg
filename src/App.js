import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import StartPage from "./StartPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
