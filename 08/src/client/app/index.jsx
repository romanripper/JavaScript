import React from 'react';
import {render} from 'react-dom';
import MyForm from './11c.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <MyForm />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));