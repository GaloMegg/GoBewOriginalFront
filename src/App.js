import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./scss/main.scss";
import Nav from './components/nav/Nav';
import ProductCardContainer from './components/mainContent/ProductCardContainer';
// import CreationForm from './admin/components/products/CreationForm';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
import CartContainer from './components/cart/CartContainer';
import Login from './components/Login/login'
import LogInGoogle from './components/logInGoogle/LogInGoogle';
// import CategoriesNew from './components/nav/categories/CategoriesNew.jsx';
function App() {

  // const [ViewCategories, setViewCategories] = useState(true);

  return (
    <div >
    <Routes>
        <Route exact path='/' element={<> <Nav showSearch={true} showCategories={true} /><ProductCardContainer /></>} />
        <Route exact path='/cart' element={<> <Nav showSearch={false} showCategories={false} /> <CartContainer /></>} />
        <Route exact path='/productDetail/:id' element={<><Nav showSearch={false} showCategories={false} /> <ProductDetailContainer /> </>} />
        {/* <Route exact path='/admin/new' element={<CreationForm />} /> */}
        <Route exact path='/login' element={<><Login /> <LogInGoogle/> </>} />
      </Routes>
    </div>
  );
}

export default App;
