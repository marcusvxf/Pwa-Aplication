import React from 'react';
import { BrowserRouter as Router , Switch,Route } from "react-router-dom";
import './App.css';
import Home from './container/Home';
import Post from './container/Post'

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/:subject/:id">
              <Post></Post>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
