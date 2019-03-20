import React from 'react';

import ProfileList from './components/ProfileList';
import ProfileCarousel from './components/ProfileCarousel';

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
        this.setState({ profiles: data.results })
      }).catch((err) => console.error(err))
  }

  render() {
    return (<div className="App">
      <ProfileCarousel profiles={this.state.profiles.slice(3, 6)} />

      <ProfileList profiles={this.state.profiles} />
    </div>)
  }
}
