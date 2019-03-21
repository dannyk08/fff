import React from 'react';

import style from './App.scss';
import ProfileList from './components/ProfileList';
import ProfileCarousel from './components/ProfileCarousel';
import Loading from './components/Loading';

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

    const {
      carouselProfiles,
      profiles,
    } = this.state

    return (
      <main className={style.App}>
        {!!carouselProfiles.length && <ProfileCarousel profiles={carouselProfiles} />}
        <h1 className={style['App-page-title']}>About Us</h1>
        {
          !!profiles.length &&
          <ProfileList profiles={profiles} handleClick={this.handleCarouselPush} /> || <Loading />
        }
      </main>
    )
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
