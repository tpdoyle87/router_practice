import React from 'react'

const ProjectItem = (props) => {
  return (
    <div>
      <h3>Project: {props.match.params.id}</h3>
    </div>
  )
}

export default ProjectItem
