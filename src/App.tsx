import React, { useState } from "react";
import "styles/index.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MdEditor from "pages/MdEditor";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  const [theme] = useState("default");

  return (
    <div className={`theme-${theme}`}>
      <div className="app">
        <BrowserRouter>
          <Header />
          <main>
            <Switch>
              <Route
                path="/"
                exact={true}
                component={() => <Redirect to="/editor" />}
              />
              <Route path="/editor" component={MdEditor} />
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
