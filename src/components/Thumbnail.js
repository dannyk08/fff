import React from 'react';

import style from './Thumbnail.scss'

const Thumbnail = ({
  imgUrl = '',
  name = '',
  handleClick = null
}) => {
  if (!imgUrl.length) return null
  return <div className={style.Thumbnail} onClick={handleClick}>
    <img src={imgUrl} alt={`${name} thumbnail picture`.trim()} />
  </div>
}

export default Thumbnail
