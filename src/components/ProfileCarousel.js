import React from 'react';
import { v4 } from 'uuid';

import style from './ProfileCarousel.scss';
import ProfileTile from './ProfileTile';

export default class ProfileCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carouselShift: '0'
    }
  }

  componentDidUpdate(props) {
    if (
      props.profiles.length >= 3 &&
      props.profiles.length !== this.props.profiles.length
    ) {
      const totalNewTitles = Math.floor((this.props.profiles.length - 3) * (window.innerWidth / 3))
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
          profiles && !!profiles.length && profiles.map((p, i) => {
            return <ProfileTile profile={p} key={v4()} />
          })
        }
      </div>
    </section>
  }
}
