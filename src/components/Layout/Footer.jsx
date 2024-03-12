import React from 'react'
import '../../assets/css/footer.css'
import login from '../../assets/img/loginFooter.png'
import promotion from '../../assets/img/promotion.png'
import register from '../../assets/img/registerFooter.png'
import viber from '../../assets/img/viber.png'
import home from '../../assets/img/footer/home.png'
import deposit from '../../assets/img/footer/deposit.png'
import withDraw from '../../assets/img/footer/withDraw.png'
import promotion2 from '../../assets/img/footer/promotion.svg'
import profile from '../../assets/img/footer/profile.jpg'
import menu from '../../assets/img/menu.png'


import { NavLink } from 'react-router-dom'

const Footer = () => {

  const footerAfterLogin = [
    { id: 1, img: home, link: '/', title: "အိမ်" },
    { id: 2, img: deposit, link: '/wallet', title: "ပိုက်ဆံအိတ်" },
    { id: 3, img: menu, link: '/', title: "", isMiddle: true },
    { id: 4, img: promotion2, link: '/promotion', title: "ပရိုမိုးရှင်း" },
    { id: 5, img: viber, link: '/', title: "viber" },
  ];
  return (
    <div className='slotFooter px-2 px-sm-5 py-2 rounded-top-5 d-flex justify-content-between align-items-center d-lg-none'>
      {footerAfterLogin.map(item => {
        return <NavLink className={`${item.isMiddle ? 'middleIcon' : ' '} text-decoration-none text-center text-light `} to={item.link}>
          <img src={item.img} />
          <p>{item.title}</p>
        </NavLink>
      })}
    </div>
  )
}

export default Footer