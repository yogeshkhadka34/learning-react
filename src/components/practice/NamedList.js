import React from 'react'
import Person from './Person'

function NamedList() {
  
    const listings = [
        {
            id: 1,
            name: "Bruce"
        },
        {
            id:2,
            name: "Clark"
        }
    ]
    const NamedList = listings.map(person =>(<Person key={person.id} person={person}></Person>))

  return (
    <div>{NamedList}
    </div>
  )
}

export default NamedList