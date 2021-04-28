import React from 'react'

import { Navbar } from 'react-bootstrap'
import { Time } from './Time'

export const Navigation = ({time}) => {
  return (
    <Navbar bg="white justify-content-between">
      <Navbar.Brand>
        <img
          src="metropolia.svg"
          width="150"
          height="50"
          className="d-inline-block align-top"
          alt="Metropolia"
        />
      </Navbar.Brand>
      <Time time={time} />
    </Navbar>
  )
}
