import { createBrowserRouter } from 'react-router-dom'

import DogHome from './views/dogs/DogHome';
import MasterHome from './views/masters/MasterHome';
import ErrorPage from './views/ErrorPage';
import Root from './views/Root';
import DogDetail from './views/dogs/DogDetail';
import DogEdit from './views/dogs/DogEdit';
import DogDelete from './views/dogs/DogDelete';
import MasterDetail from './views/masters/MasterDetail';
import MasterEdit from './views/masters/MasterEdit';
import MasterDelete from './views/masters/MasterDelete';
import DogAdd from './views/dogs/DogAdd';
import MasterAdd from './views/masters/MasterAdd';
import WelcomeView from './views/WelcomeViex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [

      {path: '/', element: <WelcomeView/> },

      // Dogs 
      { path: '/dogs', element: <DogHome/> },
      { path: '/dogs/add', element: <DogAdd/> },
      { path: '/dogs/details/:dogId', element: <DogDetail /> },
      { path: '/dogs/edit/:dogId', element: <DogEdit /> },
      { path: '/dogs/delete/:dogId', element: <DogDelete /> },

      // Masters
      { path: '/masters', element: <MasterHome/> },
      { path: '/masters/add', element: <MasterAdd/> },
      { path: '/masters/details/:masterId', element: <MasterDetail/> },
      { path: '/masters/edit/:masterId', element: <MasterEdit/> },
      { path: '/masters/delete/:masterId', element: <MasterDelete/> },

      // 404
      { path: '/*', element: <ErrorPage/> }
    ]
  }
])

export default router