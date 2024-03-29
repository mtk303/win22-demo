
import React from 'react';
import '../../assets/css/navbar.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


import home from '../../assets/img/home.png';
import promotion from '../../assets/img/promotion.png';
import viber from '../../assets/img/viber.png';
import tele from '../../assets/img/tele.png';
import profile from '../../assets/img/footer/profile.png'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {
  const navs = [
    // { id: 1, img: home, title: 'အိမ်', link: '/' },
    // { id: 2, img: promotion, title: 'ပရိုမိုးရှင်း', link: '/promotion' },
    // { id: 3, img: viber, title: 'Viber', link: '/' }
    // { id: 4, img: tele, title: 'Telegram', link: '/' },
  ];



  const sidebars = [
    { id: 1, font: ' fa-solid fa-gamepad', title: 'ဂိမ်းအားလုံး', link: '/' },
    // {id:2,font:'fa-solid fa-building-columns',title:'ငွေသွင်းရန်',link:'/topup'},
    // {id:3,font:'fa-solid fa-clipboard-list',title:'ငွေသွင်းငွေထုတ်စာရင်း',link:'/transferlog'},
    { id: 2, font: 'fa-solid fa-user', title: 'အကောင့်', link: '/profile' },
    { id: 3, font: 'fa-solid fa-gamepad', title: 'ဂိမ်းမှတ်တမ်း', link: '/play-history' },
    { id: 4, font: 'fa-solid fa-gift', title: 'ပရိုမိုးရှင်း', link: '/promotion' },
    { id: 5, font: 'fa-solid fa-wallet', title: 'ပိုက်ဆံအိတ်', link: '/wallet' },

    { id: 6, font: 'fa-solid fa-user-pen', title: 'လျှိ့ဝှက်နံပါတ်ပြောင်းရန်', link: '/change-password' },
    // {id:6,font:'fa-solid fa-coins',title:'ငွေထုတ်ရန်',link:'/withdraw'},
    // {id:7,font:'fa-solid fa-file-invoice',title:'ငွေသွင်း/ထုတ်မှတ်တမ်း',link:'/'},
    { id: 7, font: 'fa-solid fa-arrow-right-from-bracket', title: 'ထွက်ရန်', link: '/' },
  ]


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className='py-2 py-sm-0 px-3 px-sm-5 d-flex flex-wrap align-items-center  justify-content-between '>
      <div>
        <Button
          variant='primary'
          onClick={handleShow}
          className='bg-transparent'
        >
          <i class='fa-solid fa-bars'></i>
        </Button>
        <NavLink to={'/'}>
          <img src={logo} />
        </NavLink>
      </div>

      <div className='d-flex align-items-center  gap-4 '>
        <div className='d-none d-lg-flex align-items-center gap-4  '>
          {navs.map((nav) => {
            return (
              <NavLink
                style={{
                  background: '#2D2D2D',
                  border: '2px solid #431F76',
                  width: '100px',
                }}
                className='rounded-bottom-4   py-1 text-decoration-none text-center text-light '
                to={nav.link}
              >
                <img style={{ width: '30px', height: '30px' }} src={nav.img} />
                <p style={{ fontSize: '14px' }} className='mt-1'>
                  {nav.title}
                </p>
              </NavLink>
            );
          })}
        </div>
        <NavLink to={'/profile'}>
          <button className=' navRegisterBtn'>Profile</button>
        </NavLink>
        <NavLink to={'/login'}>
          <button className=' navRegisterBtn'>Login</button>
        </NavLink>
        {/* <NavLink to={'/register'}>
          <button className='navRegisterBtn'>မှတ်ပုံတင်</button>
        </NavLink> */}
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className='bg-dark'
        style={{ color: '#ccc' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fw-bold'>
            အသေးစိတ်အချက်လက်များ
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyleType: 'none' }}>
            {sidebars.map((sidebar) => {
              return (
                <li className='my-4 fw-bold' style={{ fontSize: '16px' }}>
                  <Link
                    to={sidebar.link}
                    id={sidebar.id}
                    style={{ color: '#ccc', textDecoration: 'none' }}
                  >
                    <i
                      className={sidebar.font}
                      style={{ fontSize: '20px' }}
                    ></i>
                    <span className='ms-4'>{sidebar.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Navbar;
