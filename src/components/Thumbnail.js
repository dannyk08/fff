import React from 'react';

const Thumbnail = ({
  imgUrl = '',
  name = ''
}) => {
  if (!imgUrl.length) return null
  return <div className="Thumbnail">
    <img className="Thumbnail-image" src={imgUrl} alt={`${name} thumbnail picture`.trim()} />
  </div>
}

export default Thumbnail
