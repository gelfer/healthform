import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/homepage/Homepage";
import Auth from "./pages/authPage/Auth";
import Alert from "./components/alert/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";

// const SignIn = props => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push("/")}>Go back Home</button>
//       <h1>Welcome to Sign In</h1>

//       <Link to={`${props.match.url}/13`}>To topic 13</Link>
//     </div>
//   );
// };

// const TopicDetail = props => {
//   console.log(props);

//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE: {props.match.params.id}</h1>
//     </div>
//   );
// };

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header></Header>
        <section className="container">
          <Alert></Alert>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signin" component={Auth}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
