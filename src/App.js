import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./scss/main.scss";
import Nav from './components/nav/Nav';
import ProductCardContainer from './components/mainContent/ProductCardContainer';
// import CreationForm from './admin/components/products/CreationForm';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
import CartContainer from './components/cart/CartContainer';
<<<<<<< HEAD
import Login from './components/login/login'
import LogInGoogle from './components/login/LogInGoogle';
import CreateUserForm from './components/login/CreateUserForm';
=======
import Login from './components/Login/login';
import { ToastContainer, toast } from 'react-toastify';
import Filters from './components/mainContent/Filters';
import MainContentContainer from './components/mainContent/MainContentContainer';
>>>>>>> a930450122a668f1a9d927af10dad51ef8167e3c
// import CategoriesNew from './components/nav/categories/CategoriesNew.jsx';
function App() {

  // const [ViewCategories, setViewCategories] = useState(true);

  return (
<<<<<<< HEAD
    <div >
    <Routes>
        <Route exact path='/' element={<> <Nav showSearch={true} showCategories={true} /><ProductCardContainer /></>} />
=======
    <>
      <Routes>
        <Route exact path='/' element={<> <Nav showSearch={true} showCategories={true} /><MainContentContainer /></>} />
>>>>>>> a930450122a668f1a9d927af10dad51ef8167e3c
        <Route exact path='/cart' element={<> <Nav showSearch={false} showCategories={false} /> <CartContainer /></>} />
        <Route exact path='/productDetail/:id' element={<><Nav showSearch={false} showCategories={false} /> <ProductDetailContainer /> </>} />
        {/* <Route exact path='/admin/new' element={<CreationForm />} /> */}
        <Route exact path='/login' element={<><Login /> <LogInGoogle/> </>} />
        <Route exact path='/logInForm' element= {<CreateUserForm/>} />
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
