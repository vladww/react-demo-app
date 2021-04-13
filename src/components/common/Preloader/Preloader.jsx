import React from 'react'
import s from './Preloader.module.css'
import preloader_img from '../../../assets/images/spinner200.svg'

const Preloader = (props) => {
  return <div className={s.preloader}><img src={preloader_img} alt="preloader"/></div>
}

export default Preloader