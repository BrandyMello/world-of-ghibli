import React from 'react';
import images from '../../images/images.js';
import Film from '../Film/Film';

const FilmsDisplay = ({films}) => {
  console.log(images)
  const mappedFilms = films.map((film, index) => {
      return <Film
      key={film.id}
      title={film.title}
      description={film.description}
      photo={images[`film${index}`][1]}
      />
    })

  return (
    
    <div>
      {mappedFilms}
    </div>
  )
}

export default FilmsDisplay;
