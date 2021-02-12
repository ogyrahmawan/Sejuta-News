import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/:category">
            <Home></Home>
          </Route>
          <Route to="/">
            <Redirect to="/TOP"></Redirect>
          </Route>
          <Route to="*">
            <Redirect to="/TOP"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
