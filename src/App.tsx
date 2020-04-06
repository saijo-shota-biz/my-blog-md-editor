import React from "react";
import "styles/index.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MdEditor from "pages/MdEditor";
import Header from "components/Header";
import Footer from "components/Footer";
import { UserSettingContext, useUserSetting } from "store/context";

function App() {

  const context = useUserSetting();

  return (
    <UserSettingContext.Provider value={context}>
      <div className={`theme-${context.userSetting.theme}`}>
        <div className="app">
          <BrowserRouter  basename={process.env.PUBLIC_URL}>
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
    </UserSettingContext.Provider>
  );
}

export default App;
