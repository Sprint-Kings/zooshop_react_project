
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Header from '../header/Header';
import {MainPage, ProductsPage, Page404, NewsPage, ProductPage, SingleNewsPage, DryFood} from "../pages";

function App() {
  return (
    <Router>
      <div className="app">
          <Header/>
          <main>
              <Routes>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/products" element={<ProductsPage/>}/>
                  <Route path="/news" element={<NewsPage/>}/>
                  <Route path="/news/:newsId" element={<SingleNewsPage/>}/>
                  <Route path="/product/:productId" element={<ProductPage/>}/>
                  <Route path="/dryfood" element={<DryFood/>}/>
                  <Route path="*" element={<Page404/>}/>
              </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
