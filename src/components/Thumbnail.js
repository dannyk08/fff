import React from 'react';

import style from './Thumbnail.scss'

const Thumbnail = ({
  imgUrl = '',
  name = '',
  handleClick = null
}) => {
  if (!imgUrl.length) return null

  const thumbnailClasses = `${style.Thumbnail} ${handleClick !== null && style['Thumbnail-clickable'] || ''} `.trim()

  return <div className={thumbnailClasses} onClick={handleClick}>
    <img
      className={style['Thumbnail-image']}
      src={imgUrl}
      alt={`${name} thumbnail picture`.trim()}
    />
  </div>
}

export default Thumbnail
