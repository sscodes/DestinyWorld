import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bid',
    path: '/bid',
    icon: <FaIcons.FaLocationArrow />,
    cName: 'nav-text'
  },
  {
    title: 'Stake',
    path: '/stake',
    icon: <FaIcons.FaLocationArrow />,
    cName: 'nav-text'
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <FaIcons.FaRegQuestionCircle />,
    cName: 'nav-text'
  }
];