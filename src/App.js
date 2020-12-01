import React, { Component } from 'react';
import { NavBar } from './layout'; 
import  Home  from './pages/Home/index';
// import FetchGitApi from "./components/FetchGit"

class App extends Component {
    render() {
      return (
          <div>
            <header>
                <NavBar />
            </header>
          <main>
              <h1>Hello World!</h1>
              {/* // {<FetchGitApi />} */}
              <Home />
          </main>
          </div>
      )
    }
}

export default App;