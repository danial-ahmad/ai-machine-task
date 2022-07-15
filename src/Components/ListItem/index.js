import React from 'react'
import './styles.css'

const ListItem = ({ data, search }) => {
  return (
    <div id={data.id}>
      <div className='list-wrapper ' style={{ backgroundColor: data.id.toString() === search ? 'cyan' : 'transparent'}}>
        <div className='list-text'>{data.id} - {data.userId} - {data.title}</div>
      </div>
    </div>
  )
}

export default ListItem