import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate, Router } from 'react-router-dom';
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove, update } from './api/product';
import axios from 'axios';
import type { IProduct, ProductType } from './types/product';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter';


function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) => {
      // call api
      remove(id);
      // reRender
      setProducts(products.filter(item => item.id !== id));
  }

  const onHandleUpdate = async (product: ProductType) => {
      const { data } = await update(product);
      setProducts(products.map(item => item.id == data.id ? data : item))
  }

  const onHandleAdd = async (product: ProductType) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  return (
    <div className="App">
        <header>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product Page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </header>
        <main>
          
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home />} />
              <Route path="product">
                  <Route index  element={<h1>Hiển thị sản phẩm</h1>} />
                  <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="about" element={<h1>About page</h1>} />
            </Route>
            
            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard"/>} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products">
                    <Route index element={<PrivateRouter><ProductManager products={products} onRemove={removeItem}/></PrivateRouter>} />
                    <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
                    <Route path="add" element={<ProductAdd name="Dat" onAdd={onHandleAdd}/>}/>
                </Route>
            </Route>
          </Routes>
        </main>
    </div>
  )
}

export default App

