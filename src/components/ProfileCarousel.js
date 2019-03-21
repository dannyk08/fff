import React from 'react';
import { v4 } from 'uuid';

import style from './ProfileCarousel.scss';
import ProfileTile from './ProfileTile';

export default class ProfileCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUpdate(props) {
    console.log({
      old: this.props,
      new: props
    });
  }

  render() {
    const { profiles } = this.props
    if (!profiles.length) return null

    return <section className={style.ProfileCarousel}>
      <div className={style['ProfileCarousel-container']}>
        {
          profiles && !!profiles.length && profiles.map((p, i) => {
            return <ProfileTile profile={p} key={v4()} />
          })
        }
      </div>
    </section>
  }
}
