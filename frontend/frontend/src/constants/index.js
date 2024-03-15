// import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../../public/assets';

// import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../../public/assets';

import createCampaign from "@/assets/create-campaign.svg";
import dashboard from "@/assets/dashboard.svg";
import payment from "@/assets/payment.svg";



export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    // imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    // imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    // imgUrl: logout,
    link: '/',
    disabled: true,
  },
];