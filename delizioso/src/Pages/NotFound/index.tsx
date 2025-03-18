import React, { useEffect } from 'react'
import styles from './notFound.module.css'

const NotFound = () => {
  useEffect(() => {
    document.title = 'Delizioso | Not Found'
  },[])
  return (
    <div>NotFound</div>
  )
}

export default NotFound