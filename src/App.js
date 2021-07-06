import "./App.css";
import Home from "./components/Home";
import NewHome from "./components/NewHome";
import Login from "./components/Login";
import Users from "./components/Users";
import Tooltip from "./components/Tooltip";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home" component={()=><Home/>}>
          </Route>
          <Route path="/Tooltip" component={()=><Tooltip/>} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/NewHome" component={()=><NewHome/>}></Route>
          <Route path="/Users" component={()=><Users/>}></Route>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
