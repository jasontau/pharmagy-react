import React from 'react';
import Flickity from 'react-flickity-component';

const flickityOptions ={
  pageDots: false,
  prevNextButtons: false
}

function Carousel(props) {
  return (
    <Flickity
      className={'carousel'}
      elementType={'div'}
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate
      static
    >
      {props.children}
    </Flickity>
  );
}

export default Carousel