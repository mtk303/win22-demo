import React from 'react'
import '../../assets/css/Main/layout.css'
import { AiFillHome } from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import home from '../../assets/img/footer/home.png'
import deposit from '../../assets/img/footer/deposit.png'
import withDraw from '../../assets/img/footer/withDraw.png'
import promotion2 from '../../assets/img/footer/promotion.svg'
import menu from '../../assets/img/menu.png'
import viber from '../../assets/img/viber.png'
import meIcon from '../../assets/img/registerFooter.png'

const Footer = () => {
  const footerAfterLogin = [
    { id: 1, img: home, link: '/lotto', title: "အိမ်" },
    { id: 2, img: deposit, link: '/wallet', title: "ပိုက်ဆံအိတ်" },
    { id: 3, img: menu, link: '/lotto', title: "", isMiddle: true },
    { id: 4, img: viber, link: '/lotto/service-phone', title: "ဝန်ဆောင်မှုဖုန်း" },
    { id: 5, img: meIcon, link: '/lotto/mePage', title: "ကျွန်ုပ်" },
  ];
  return (
    <div className='px-2  py-2 rounded-top-5 d-flex justify-content-between align-items-center lottoFooter '>
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
