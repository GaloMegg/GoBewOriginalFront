import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./scss/main.scss";
import Nav from './components/nav/Nav';
import ProductCardContainer from './components/mainContent/ProductCardContainer';
import CreationForm from './admin/components/products/CreationForm';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
import NavBarDetail from './components/productDetail/NavBarDetail';
<<<<<<< HEAD
import CreationImage from './admin/components/products/creationImage/CreationImage';
=======
>>>>>>> 4fa82ddc4c07747e2fa0b26576830dfde8991b1c
// import CategoriesNew from './components/nav/categories/CategoriesNew.jsx';
function App() {

  // const [ViewCategories, setViewCategories] = useState(true);

  return (
    <div >
      <Routes>
        <Route exact path='/' element={<><Nav /> <ProductCardContainer /></>} />
        <Route exact path='/productDetail/:id' element={<><NavBarDetail/> <ProductDetailContainer /> </>} />
<<<<<<< HEAD
        <Route exact path='/admin/new' element={[<CreationForm />, <CreationImage/>]} />
=======
        <Route exact path='/admin/new' element={<CreationForm />} />
>>>>>>> 4fa82ddc4c07747e2fa0b26576830dfde8991b1c
      </Routes>
    </div>
  );
}

export default App;
