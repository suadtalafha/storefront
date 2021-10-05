// import './App.css';
import Header from './components/header';
import ActiveCat from './components/activeCat';
import Product from './components/products';
import Footer from './components/footer';
import Categories from './components/category';
import Simplecart from './components/simplecart';

function App() {
  return (
    <>
    <Header/>
    <Simplecart/>
       <Categories/>
        <ActiveCat/>
        <Product/>
    <Footer/>
    </>
  );
}

export default App;