import React from 'react';
import { v4 } from 'uuid';

import style from './ProfileList.scss';
import Thumbnail from './Thumbnail';

const ProfileList = ({
  profiles = null,
  handleClick = null,
}) => {
  return <section className={style.ProfileList}>
    {
      profiles && !!profiles.length &&
      profiles.map((p) => (<Thumbnail
        imgUrl={p.picture.large}
        name={p.name.first}
        handleClick={handleClick(p)}
        key={v4()}
      />))
    }

  </section>
}

export default ProfileList
