import React from 'react';

import style from './ProfileCarousel.scss';
import ProfileTile from './ProfileTile';

export default class ProfileCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { profiles } = this.props
    if (!profiles.length) return null

    const carouselClasses = `${style.ProfileCarousel.trim()} ${profiles.length > 3 && style['ProfileCarousel-slide'] || ''}`

    return <div className={carouselClasses}>
      {
        profiles && !!profiles.length && profiles.map((p, i) => {
          return <ProfileTile profile={p} key={i * Date.now()} />
        })
      }
    </div>
  }
}
