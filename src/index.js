import React from 'react';
import ReactDom from 'react-dom';
import ProfileList from './components/ProfileList';

class App extends React.Component {
  render() {
    return (<div>
      <ProfileList />
    </div>)
  }
}

ReactDom.render(<App />, document.getElementById('aboutUs'))
