import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import { CloudinaryContext } from "cloudinary-react";

// Pages
import Nav from "./components/Nav";
import LandingPg from "./pages/LandingPg";
import SearchPage from "./pages/SearchPage";
import UserAccountPage from "./pages/UserAccountPage";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <CloudinaryContext cloudName="repotted">
            <Nav />
            <Switch>
              <Route exact path="/" component={LandingPg} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/account-page" component={UserAccountPage} />
              <Route exact path="/login-signup" component={Login} />
            </Switch>
            <Footer />
          </CloudinaryContext>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
