import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import GoogleMap from './Components/Maps/GoogleMap'
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import NotFound from './Components/NotFound/NotFound'
import CreateAccountLogin from './Components/CreateAccountLogin/CreateAccountLogin';
import Destination from './Components/Destination/Destination';
import './App.css'
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/destination/:id">
           <Destination></Destination>
          </PrivateRoute>
          <Route path="/login">
           <CreateAccountLogin></CreateAccountLogin>
          </Route>
          <Route path="/destinationMap">
          <GoogleMap></GoogleMap>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}
export default App;
