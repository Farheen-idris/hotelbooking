import Home from "./Components/Home";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />}></Route>{" "}
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
