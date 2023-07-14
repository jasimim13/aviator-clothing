import React from 'react'
import '../Icon/icon.styles.scss'
function Icon() {
  return (
    <div>
        <img src={require('../../assets/crown.svg')} alt='Logo' className='logo' />
    </div>
  )
}

export default Icon