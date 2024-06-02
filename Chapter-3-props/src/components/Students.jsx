import React from 'react'
import PropsTypes from 'prop-types'

const Students = (props) => {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Students.PropsTypes = {
    name: PropsTypes.string,
    age: PropsTypes.number,
    isStudent: PropsTypes.bool,
}

Students.defaultProps ={
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Students