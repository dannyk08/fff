import React from 'react';

import style from './Thumbnail.scss'
import { capitalize } from '../utils/helpers';

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
    {handleClick !== null && <h3 className={style['Thumbnail-name']}>{capitalize(name)}</h3>}
  </div>
}

export default Thumbnail
