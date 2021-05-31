import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <div>Chala JAA </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
