import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';


function App() {
  // const [rawdata, setRawData] = useState<Partial<Class>>({});

  // useEffect(() => {
  //   fetch("http://localhost:8080/rawdata")
  //     .then(res => res.json())
  //     .then((result) => {
  //       setRawData(result);
  //     })
  // }, [])


  return (
    // <div className="App">
    //   <pre style={{ textAlign: "left" }}>
    //     {JSON.stringify(rawdata, null, 2)}
    //   </pre>
    //   <Navbar />
    //   <Filters />
    // </div>
    <>
      
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <a href="/">Home</a>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
