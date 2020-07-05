import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./pages/routing/Routes";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header></Header>
          <Switch>
            <Route component={Routes}></Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
