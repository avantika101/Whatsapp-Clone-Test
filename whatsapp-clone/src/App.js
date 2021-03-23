import React, { useState} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Test from './Test';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  //const [ user, setUser ] = useState(null);
  const [ {user}, dispatch ] = useStateValue();

  console.log("user is: "+user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <div className="app__body">
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Sidebar />
                  <Chat />
                </Route>
                <Route path="/rooms/:roomId" exact>
                  <Sidebar />
                  <Chat />
                </Route>
                <Route path="/test/:testvar" exact>
                  <Test />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
