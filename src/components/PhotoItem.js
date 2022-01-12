import React from 'react';


function PhotoItem(props) {
  return (
    <>
      <li className='photos__item'>
        <div className='photos__item__link' to={props.path}>
          <figure className='photos__item__pic-wrap' data-category={props.label}>
            <img
              className='photos__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='photos__item__info'>
            <h5 className='photos__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default PhotoItem;