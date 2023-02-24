
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Loading from './Footer/shared/Loading';
import { router } from './Routes/Footer/Routes';

function App() {
  return (

<div className='max-w-[1440px] mx-auto'>
<RouterProvider router={router}></RouterProvider>
  <Toaster></Toaster>
  <Loading></Loading>
</div>
  );
}

export default App;
