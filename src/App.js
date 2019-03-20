import React from 'react';

import ProfileList from './components/ProfileList';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=50', { method: 'GET' })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ profiles: data.results }, () => {
          console.log({ state: this.state });
        })
      }).catch((err) => console.error(err))
  }

  render() {
    return (<div className="App">
      <ProfileList profiles={this.state.profiles} />
    </div>)
  }
}
