import React from 'react';

import style from './App.scss';
import ProfileList from './components/ProfileList';
import ProfileCarousel from './components/ProfileCarousel';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      profiles: [],
      carouselProfiles: [],
    }

    this.handleCarouselPush = (profile) => this._handleCarouselPush.bind(this, profile)
  }

  componentDidMount() {
    this.fetchProfiles()
  }

  render() {
    return (<div className={style.App}>
      <ProfileCarousel profiles={this.state.carouselProfiles} />
      <ProfileList profiles={this.state.profiles} handleClick={this.handleCarouselPush} />
    </div>)
  }

  fetchProfiles() {
    fetch('https://randomuser.me/api/?results=50', { method: 'GET' })
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          profiles: data.results,
          carouselProfiles: data.results.slice(3, 6),
        })
      }).catch(console.error)
  }

  _handleCarouselPush(profile) {
    const carouselProfiles = [profile, ...this.state.carouselProfiles]
    this.setState({ carouselProfiles })
  }

}
