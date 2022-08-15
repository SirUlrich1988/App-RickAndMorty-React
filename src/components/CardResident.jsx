import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

const resident = useFetch(url)

  return (
    <article className='box_article'>
      <header className='box_card'>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div>
        <span className='status'>{resident?.status}</span>
        </div>
      </header>
      <div className='box_card_text'>
        <h2>{resident?.name}</h2>
        <ul>
          <li>
            <span> Species: </span>
            {resident?.species}
          </li>
          <li>
            <span> Origin: </span>
            {resident?.origin.name}
            </li>
          <li>
            <span> Eppisodes where appear: </span>
            {resident?.episode.length}
            </li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident
