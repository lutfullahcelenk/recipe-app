import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";


function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/details" exact component={Details} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default AppRouter;