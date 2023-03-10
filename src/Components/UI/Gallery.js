import React from 'react'
import Card from './Card'
import Header from './Header'
import './Gallery.css'
import thumb from './../assets/thumb.jpg'

const Gallery = (props) => {
  return (
    <div className='gallery'>
      <Header header={props.header} />
      <div className='wrapper clearfix'>
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
        <Card title='Fire Pit' path='/' image={thumb} />
      </div>
    </div>
  )
}

export default Gallery