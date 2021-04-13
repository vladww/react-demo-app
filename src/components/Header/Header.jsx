import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src='https://w7.pngwing.com/pngs/20/70/png-transparent-universal-declaration-of-human-rights-human-rights-logo-symbol-human-law-blue-hand-logo.png'
        alt="my social_network"
      />
      <div className={s.loginBlock}>
        { props.isAuth ?
          <div>
            <div>{ props.login }</div>
            <button onClick={ props.logout }>Logout</button>
          </div>
          :
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header