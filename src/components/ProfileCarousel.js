import React from 'react';
import { v4 } from 'uuid';

import style from './ProfileCarousel.scss';
import ProfileTile from './ProfileTile';

export default class ProfileCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselShift: '0',
      maxCarouselTiles: 3,
    }
    this.handleComponentResize = this.handleComponentResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleComponentResize, { capture: true })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleComponentResize, { capture: true })
  }

  componentDidUpdate(props) {
    const { maxCarouselTiles } = this.state

    if (
      props.profiles.length >= maxCarouselTiles &&
      props.profiles.length !== this.props.profiles.length
    ) {
      const totalNewTitles = Math.floor((this.props.profiles.length - maxCarouselTiles) * (window.innerWidth / maxCarouselTiles))
      const carouselShift = `${totalNewTitles}px`

      if (totalNewTitles > 0) {
        this.setState({ carouselShift })
      }
    }
  }

  render() {
    const { profiles } = this.props
    const { carouselShift } = this.state
    if (!profiles.length) return null

    return <section className={style.ProfileCarousel}>
      <div className={style['ProfileCarousel-container']} style={{ left: carouselShift }}>
        {
          profiles && !!profiles.length &&
          profiles.map((p) => <ProfileTile profile={p} key={v4()} />)
        }
      </div>
    </section>
  }

  handleComponentResize(e) {
    const { maxCarouselTiles } = this.state
    const { innerWidth } = window
    if (innerWidth < 37 * 14) {
      if (maxCarouselTiles !== 1) {
        this.setState({ maxCarouselTiles: 1 })
      }
    } else if (innerWidth > 37 * 14 && innerWidth < 47 * 16) {
      if (maxCarouselTiles !== 2) {
        this.setState({ maxCarouselTiles: 2 })
      }
    } else {
      if (maxCarouselTiles !== 3) {
        this.setState({ maxCarouselTiles: 3 })
      }
    }
  }
}
