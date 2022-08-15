import React from 'react'

const LocationInfo = ({location}) => {

    console.log(location)

  return (
    <article className='box_location'>
        <h1>{location?.name}</h1>
        <ul>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population:</span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo
