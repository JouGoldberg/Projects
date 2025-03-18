import React, { useEffect } from 'react'
import PopularMenu from '../../Components/PopularMenu'

const Menu = () => {
    useEffect(() => {
      document.title = 'Delizioso | Menu'
    },[])
  return (
    <div>
      <PopularMenu title='Menu'/>
    </div>
  )
}

export default Menu