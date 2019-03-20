import React from 'react';

import style from './ProfileList.scss';
import Thumbnail from './Thumbnail';

const ProfileList = ({
  profiles = null,
  handleClick = null,
}) => {
  return <div className={style.ProfileList}>
    {
      profiles && !!profiles.length &&
      profiles.map((p, i) => (<Thumbnail
        imgUrl={p.picture.large}
        name={p.id.name}
        handleClick={handleClick(p)}
        key={i * Date.now()}
      />))
    }

  </div>
}

export default ProfileList
