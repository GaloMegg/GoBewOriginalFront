import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./scss/main.scss";
import Nav from './components/nav/Nav';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
import CartContainer from './components/cart/CartContainer';
<<<<<<< HEAD
import Login from './components/login/Login'
// import LogInGoogle from './components/login/LogInGoogle';
import CreateUserForm from './components/login/CreateUserForm';
=======
import Login from './components/Login/Login'
// import LogInGoogle from './components/Login/LogInGoogle';
import CreateUserForm from './components/Login/CreateUserForm';
>>>>>>> 04a3d84800ee1f2ad8769eb158b507c4e042f24d
import { ToastContainer } from 'react-toastify';
import MainContentContainer from './components/mainContent/MainContentContainer';
import 'react-toastify/dist/ReactToastify.css';
import Address from './components/cart/Address';
import Checkout from './components/cart/Checkout';
// import CategoriesNew from './components/nav/categories/CategoriesNew.jsx';
function App() {

  // const [ViewCategories, setViewCategories] = useState(true);

  return (
    <>
      <Routes>
        <Route exact path='/' element={<> <Nav showSearch={true} showCategories={true} /><MainContentContainer /></>} />
        <Route exact path='/cart' element={<> <Nav showSearch={false} showCategories={false} /> <CartContainer /></>} />
        <Route exact path='/productDetail/:id' element={<><Nav showSearch={false} showCategories={false} /> <ProductDetailContainer /> </>} />
        {/* <Route exact path='/admin/new' element={<CreationForm />} /> */}
        <Route exact path='/address' element={<><Nav /> <Address /> </>} />
        <Route exact path='/checkout' element={<><Nav /> <Checkout /> </>} />
        <Route exact path='/login' element={<> <Nav /><Login />  </>} />
        <Route exact path='/logInForm' element={<> <Nav /><CreateUserForm /></>} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        theme='colored'
      />
    </>
  );
}

export default App;
