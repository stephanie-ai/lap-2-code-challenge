import React, { Component } from 'react';
import { NavBar } from './layout/NavBar'; 

class App extends Component {
    render() {
      return (
          <div>
            <header>
                <NavBar />
            </header>
          <main>
              <h1>Hello World!</h1>
              
          </main>
          </div>
      )
    }
}

export default App;