import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons/faBirthdayCake';

import style from './ProfileTile.scss';
import Thumbnail from './Thumbnail';
import { capitalize, formatDate } from '../utils/helpers';

const ProfileTile = ({
  profile = {}
}) => {
  if (!profile) return null

  const birthday = formatDate(profile.dob.date)

  return <div className={style.ProfileTile}>
    <Thumbnail
      imgUrl={profile.picture.large}
      name={profile.id.name}
    />
    <div className={style['ProfileTile-details']}>
      <h2>{formatName(profile.name)}</h2>
      {
        birthday && birthday.length &&
        <p className={style['ProfileTile-birthday']}>
          <FontAwesomeIcon icon={faBirthdayCake} /> {birthday}
        </p>
      }
      <p>{formatLocation(profile.location)}</p>
    </div>
  </div>


  function formatName(name) {
    return `${capitalize(name.title)} ${capitalize(name.first)} ${capitalize(name.last)}`.trim()
  }

  function formatLocation(location) {
    return `${capitalize(location.city)}, ${capitalize(location.state)}`
  }
}

export default ProfileTile
