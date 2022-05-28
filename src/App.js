
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import ProductCardContainer from './components/mainContent/ProductCardContainer';
import CreationForm from './admin/components/products/CreationForm';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<><Nav />, <ProductCardContainer /></>} />

        <Route exact path='/admin/new' element={<CreationForm />} />
        <Route exact path='/productDetail/:id' element={<ProductDetailContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
