import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Video from './components/video';


class App extends Component {
  render() {
    return(
      <div className='App'>
        <Video />
        <Sidebar />
      </div>
    );
  }
}

export default App;
