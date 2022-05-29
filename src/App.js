
import { Route, Routes } from 'react-router-dom';
import "./scss/main.scss";
import Nav from './components/nav/Nav';
import ProductCardContainer from './components/mainContent/ProductCardContainer';
import CreationForm from './admin/components/products/CreationForm';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<><Nav />, <ProductCardContainer /></>} />
<<<<<<< HEAD
=======
        <Route exact path='/productDetail/:id' element={<ProductDetailContainer />} />
>>>>>>> d22241002020296cfef8da2b6ca71f533ca17697
        <Route exact path='/admin/new' element={<CreationForm />} />
      </Routes>
    </div>
  );
}

export default App;
