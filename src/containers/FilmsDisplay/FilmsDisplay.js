import React from 'react';
import images from '../../images/images.js';
import Film from '../Film/Film';

const FilmsDisplay = ({films}) => {
  console.log(images)
// const mappedImage = images.map((image, index) => {
//     console.log(image[`film${index}`][1])
//     // return mappedImages
//   })

  const mappedFilms = films.map((film, index) => {
      return <Film
      key={film.id}
      title={film.title}
      description={film.description}
        photo={images[`film${index}`][1]}
      />
    })

  // const mappedImages = images.map((image, index) => {
  //   console.log(image[`film${index}`][1])
  //   // return mappedImages
  // })
  // const mappedFilms = films.map(film => {
  //   return <Film
  //     key={film.id}
  //     title={film.title}
  //     description={film.description}
  //     // photo={photo}
  //   />
  //   })
  

  return (
    
    <div>
      {mappedFilms}
      {/* {mappedImages} */}
    </div>
  )
}

export default FilmsDisplay;
