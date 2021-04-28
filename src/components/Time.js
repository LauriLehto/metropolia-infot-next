import React from 'react'

export const Time = ({time}) => {
  const days = [
    'Sunnuntai',
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai'
  ]
  return (
    <h4>{time&&`${days[time.getDay()]}  ${time.toLocaleString()}`}</h4>
  )
}
