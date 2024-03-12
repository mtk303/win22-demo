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
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { FiGift } from "react-icons/fi";
import { FaViber } from "react-icons/fa";

const Footer = () => {

  const footerAfterLogin = [
    { id: 1, icon: <IoHomeOutline size={26} />, link: '/', title: "အိမ်" },
    { id: 2, icon: <MdOutlineAccountBalanceWallet size={26} />, link: '/wallet', title: "ပိုက်ဆံအိတ်" },
    // { id: 3, icon: <CiGrid41 size={26} />, link: '/', title: "", isMiddle: true },
    { id: 4, icon: <FiGift size={26} />, link: '/promotion', title: "ပရိုမိုးရှင်း" },
    { id: 5, icon: <FaViber size={26} />, link: '/', title: "viber" },
  ];
  return (
    <div className='slotFooter px-2 px-sm-5 py-2 rounded-top-5 d-flex justify-content-between align-items-center d-lg-none'>
      {footerAfterLogin.map(item => {
        return <NavLink className={`
       
        text-decoration-none text-center text-light `} to={item.link}>
          {item.icon}
          <p>{item.title}</p>
        </NavLink>
      })}
    </div>
  )
}

export default Footer