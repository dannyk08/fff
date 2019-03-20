import React from 'react';

import style from './ProfileCarousel.scss';
import ProfileTile from './ProfileTile';

const ProfileCarousel = ({
  profiles = []
}) => {
  if (!profiles.length) return null

  return <div className={style.ProfileCarousel}>
    {
      profiles && !!profiles.length && profiles.map((p, i) => {
        return <ProfileTile profile={p} key={i * Date.now()} />
      })
    }
  </div>
}

export default ProfileCarousel
