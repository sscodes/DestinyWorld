import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IcoMoon from 'react-icons/im';
import * as GameIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: 'Home',
    body: 'Dapp Homepage',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    body: 'Register into the smart contract',
    path: '/register',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Bid',
    body: 'Bid on the daily minted tokens',
    path: '/bid',
    icon: <IcoMoon.ImHammer2 />,
    cName: 'nav-text'
  },
  {
    title: 'Stake',
    body: 'Stake tokens in the smart contract',
    path: '/stake',
    icon: <GameIcons.GiReceiveMoney />,
    cName: 'nav-text'
  },
  {
    title: 'FAQ',
    body: 'Frequently Asked Questions',
    path: '/faq',
    icon: <FaIcons.FaRegQuestionCircle />,
    cName: 'nav-text'
  }
];
