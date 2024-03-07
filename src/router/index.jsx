import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/Home';
import PromotionPage from '../pages/Promotion';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import ChangePasswordPage from '../pages/ChangePassword';
import PlayHistoryPage from '../pages/PlayHistory';
import Topup from '../pages/Topup';
import Withdraw from '../pages/Withdraw';
import TransferLog from '../pages/TransferLog';
import HomeTabsPage from '../pages/HomeTabs';
import MainLayout from '../components/Main/MainLayout';
import Home from '../pages/Main/Home';
import ServicePhone from '../pages/Main/ServicePhone';
import Promotion from '../pages/Main/Promotion';
import PromotionDetail from '../pages/Main/PromotionDetail'
import TwoD from '../pages/Main/TwoD';
import TwoDBetHistory from '../pages/Main/TwoDBetHistory';
import TwoDWinners from '../pages/Main/TwoDWinners';
import TwoDHoliday from '../pages/Main/TwoDHoliday';
import MePage from '../pages/Main/mepage';
import BetHistory from '../pages/Main/BetHistory';
import Result from '../pages/Main/Result';
import Bank from '../pages/Main/Bank'
import ThreeDPage from '../pages/Main/ThreeD';
import ThreeDBetPage from '../pages/Main/ThreeDBet';
import TwoDBetPage from '../pages/Main/TwoDBet';
import ThreeDWinners from '../pages/Main/ThreeDWinners';
import ThreeDHistoryPage from '../pages/Main/ThreeDHistory';
import ThreeDBetHistoryPage from '../pages/Main/ThreeDBetHistory';
import TwoDComfirm from '../pages/Main/TwoDComfirm';
import ThreeDConfirm from '../pages/Main/ThreeDConfirm';
import WalletPage from '../pages/Wallet';
import ProfilePage from '../pages/Profile';

const router = createBrowserRouter([
  // For Main(Slots) Routes 
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <HomeTabsPage />,
      },
      {
        path:'wallet',
        element:<WalletPage/>
      },
      {
        path:'profile',
        element:<ProfilePage/>
      },
      {
        path:'user',
        element:<HomePage/>
      },
      {
        path: 'promotion',
        element: <PromotionPage />,
      },
      {
        path: 'change-password',
        element: <ChangePasswordPage />,
      },
      {
        path: 'play-history',
        element: <PlayHistoryPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'topup',
        element: <Topup />,
      },
      {
        path: 'withdraw',
        element: <Withdraw />,
      },
      {
        path: 'transferlog',
        element: <TransferLog />,
      },
    ],
  },
  
  // For Lotto (2d,3d) Routes
  {
    path:'/lotto',
    element:<MainLayout/>,
    children:[
      {
       index:true,
        element: <Home />,
      },
      {
        path:'service-phone',
         element: <ServicePhone />,
       },
       {
        path:'promotion',
        element:<Promotion/>
       },
       {
        path:'promotiondetail',
        element:<PromotionDetail/>
       },
       {
        path:'2d/twoD',
        element:<TwoD/>
       },
       {
        path:'2d/twodbet',
        element:<TwoDBetPage/>
       },
       {
        path:'2d/twodcomfirm',
        element:<TwoDComfirm/>
       },
       {
        path:'2d/bet-history',
        element:<TwoDBetHistory/>
       },
       {
        path:'2d/winners',
        element:<TwoDWinners/>
       },
       {
        path:'2d/holiday',
        element:<TwoDHoliday/>
       },
       {
        path:'3d/threeD',
        element:<ThreeDPage/>
       },
       {
        path:'3d/winners',
        element:<ThreeDWinners/>
       },
       //3D မှတ်တမ်း
       {
        path:'3d/bet-history',
        element:<ThreeDBetHistoryPage/>
       },
        // 3D ထွက်ဂဏန်းများ
       {
        path:'3d/history',
        element:<ThreeDHistoryPage/>
       },
       {
        path:'3d/bet',
        element:<ThreeDBetPage/>
       },
       {
        path:'3d/threedConfirm',
        element:<ThreeDConfirm/>
       },

       {
        path:'mepage',
        element:<MePage/>
       },
      
       {
        path:'bet-history',
        element:<BetHistory/>
       },
       {
        path:'result',
        element:<Result/>
       },
       {
        path:'bank',
        element:<Bank/>
       },
        
      
    ]
  },


]);

export default router;
