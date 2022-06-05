import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./scss/main.scss";
import Nav from './components/nav/Nav';
<<<<<<< HEAD
import ProductCardContainer from './components/mainContent/ProductCardContainer';
// import CreationForm from './admin/components/products/CreationForm';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
import CartContainer from './components/cart/CartContainer';
import Login from './components/login/login'
import LogInGoogle from './components/login/LogInGoogle';
import CreateUserForm from './components/login/CreateUserForm';
import { ToastContainer, toast } from 'react-toastify';
import Filters from './components/mainContent/Filters';
=======
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
import CartContainer from './components/cart/CartContainer';
import Login from './components/login/Login'
import LogInGoogle from './components/login/LogInGoogle';
import CreateUserForm from './components/login/CreateUserForm';
import { ToastContainer } from 'react-toastify';
>>>>>>> 95987f389fddb4975a2b987bb88198d63a65c19f
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
<<<<<<< HEAD
        <Route exact path='/login' element={<><Login /> <LogInGoogle/> </>} />
        <Route exact path='/logInForm' element= {<CreateUserForm/>} />
=======
        <Route exact path='/address' element={<><Nav /> <Address /> </>} />
        <Route exact path='/checkout' element={<><Nav /> <Checkout /> </>} />
        <Route exact path='/login' element={<> <Nav /><Login />  </>} />
        <Route exact path='/logInForm' element={<> <Nav /><CreateUserForm /></>} />
>>>>>>> 95987f389fddb4975a2b987bb88198d63a65c19f
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
