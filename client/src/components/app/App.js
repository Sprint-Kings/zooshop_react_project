
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';

import Header from '../header/Header'
import {MainPage, ProductsPage, Page404, NewsPage, ProductPage, SingleNewsPage, CategoriesPage, BoardUser, LoginPage, RegistrationPage, ProfilePage} from "../pages";
import useZooService from "../../services/ZooService";
import CategoryPage from "../CategoryPage/CategoryPage";


function App() {
  const [categoriesList, setCategoriesList] = useState([]);

  const titleList = [
    {title: 'Сухой корм', subtitle: ''},
    {title: 'Холистик', subtitle: ''},
    {title: 'Консервы', subtitle: ''},
    {title: 'Лечебный и ветеринарный корм', subtitle: ''},
    {title: 'Лакомства для чистки зубов', subtitle: ''},
    {title: 'Колбаски', subtitle: ''},
    {title: 'Витамины и минералы', subtitle: ''},
    {title: 'Сухие лакомства', subtitle: ''},
    {title: 'Лежаки', subtitle: ''},
    {title: 'Матрасы', subtitle: ''},
    {title: 'Подушки', subtitle: ''},
    {title: 'Пледы', subtitle: ''},
    {title: 'Миски', subtitle: ''},
    {title: 'Автопоилки', subtitle: ''},
    {title: 'Коврики под миски', subtitle: ''},
    {title: 'Фрисби', subtitle: ''},
    {title: 'Грейферы', subtitle: ''},
    {title: 'Кольца', subtitle: ''},
    {title: 'Мячики', subtitle: ''},
    {title: 'Косточки', subtitle: ''},
  ];

  useEffect(() => {
    onRequest()
  }, [])

  const {getAllCategories} = useZooService();

  const onRequest = () => {
    getAllCategories()
      .then(onCategoriesListLoaded)
  }

  const onCategoriesListLoaded = (newCategoriesList) => {
    setCategoriesList(newCategoriesList)
  }

  const content = categoriesList.map((item, i)=> {
    const path = `/categories/${item}`
    return <Route path={path} element={<CategoryPage category={item} title={titleList[i].title}/>}/>
  })

  return (
    <Router>
      <div className="app">
          <Header/>
          <main>
              <Routes>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/login" element={<LoginPage/>} />
                  <Route path="/register" element={<RegistrationPage/>} />
                  <Route path="/profile" element={<ProfilePage/>} />
                  <Route path="/user" element={<BoardUser/>} />
                  <Route path="/products" element={<ProductsPage/>}/>
                  <Route path="/news" element={<NewsPage/>}/>
                  <Route path="/news/:newsId" element={<SingleNewsPage/>}/>
                  <Route path="/product/:productId" element={<ProductPage/>}/>
                  <Route path="/categories" element={<CategoriesPage/>}/>
                  {content}
                  <Route path="*" element={<Page404/>}/>
              </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
