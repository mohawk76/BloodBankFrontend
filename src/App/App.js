import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AuthorizedUserView from "../Views/AuthorizedUserView";
import { Component } from "react";
import { store } from "../store/store";

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <div className="app">
        <BrowserRouter>
          <AuthorizedUserView />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
