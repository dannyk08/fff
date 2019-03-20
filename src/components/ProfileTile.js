import React from 'react';

import style from './ProfileTile.scss';
import Thumbnail from './Thumbnail';
import { capitalize } from '../utils/helpers';

const ProfileTile = ({
  profile = {}
}) => {
  if (!profile) return null

  return <div className={style.ProfileTile}>
    <Thumbnail
      imgUrl={profile.picture.large}
      name={profile.id.name}
    />
    <div className={style['ProfileTile-details']}>
      <h3>{`${capitalize(profile.name.title)} ${capitalize(profile.name.first)} ${capitalize(profile.name.last)}`.trim()}</h3>
      <p>{`${capitalize(profile.location.city)}, ${capitalize(profile.location.state)}`}</p>
    </div>
  </div>
}

export default ProfileTile
