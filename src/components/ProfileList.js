import React from 'react';
import Thumbnail from './Thumbnail';

const ProfileList = ({
  profiles = null
}) => {
  return <div className="ProfileList">
    le ProfileList

    {
      profiles && profiles.length &&
      profiles.map((p, i) => (<Thumbnail
        imgUrl={p.picture.large}
        name={p.id.name}
        key={i * Date.now()}
      />))
    }

  </div>
}

export default ProfileList
