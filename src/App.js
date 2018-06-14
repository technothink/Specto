


import React from 'react';
import RightHeader from './Components/RightHeader'
import Header from './Components/Header';

import Table from './Components/Table';
import '../src/css/style.css';

class App extends React.Component {

  render() {


    return (
      <div className='body-wrapper'>

        <header className="mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed">
          <div className='mdc-toolbar__row' >
            <Header />
            <RightHeader />
          </div>
          <Table />
        </header>
        
      </div>




    );
  }
}

export default App;