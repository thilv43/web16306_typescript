import { useEffect, useState } from 'react'
import Showinfo from './components/showinfor';
import { list , remove} from './api/product';
import axios from 'axios';
import type { IProduct} from './types/product';
import { NavLink, Route, Navigate, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Dashboard from 




function App(): any {
  const [count, setCount] =  useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      setProducts(data);
    };
    getProducts();

  }, []);
  const removeItem = (id:  number) => {
    // call api
    remove(id);
    //reRender
    setProducts(products.filter(item => item._id !== id));
  }

  return (
    <div className="App">
      {products.map(item => {
        return <div>{item.name} <button onClick={() => removeItem(item._id)}>Remove</button></div>
      })}


      <header>
        <ul>
          <li>
            <NavLink to="/">Home Pages</NavLink>
          </li>

          <li>
            <NavLink to="/product">Products Pages</NavLink>
          </li>

          <li>
            <NavLink to="/about">About Pages</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Pages</h1>} />
          <Route path="/product" element={products.map(item => <div>{item.name}</div>)} />
          <Route path="/about" element={<Showinfo name="abc" age={10}/>} />
        </Routes>
      </main>
    </div>
  )




  // const products = [
  //   {
  //     id: 1,
  //     name: "Product A",
  //   },
  //   {
  //     id:2,
  //     name: "Product B",
  //   },
  //   {
  //     id: 3,
  //     name: "Product C",
  //   },

  // ]

  // const [count, setCout] = useState(0);
  // const [myName, setMyName] = useState("Dat");
  // const [status, setStatus] = useState(false);
  // const [product, setProduct] = useState([
  //       {
  //         id: 1,
  //         name: "Product A",
  //       },
  //       {
  //         id:2,
  //         name: "Product B",
  //       },
  //       {
  //         id: 3,
  //         name: "Product C",
  //       },
  // ]);

  // return (
  //   <div>
  //     Count: {count} <button onClick={() => setCout(count + 1)}>Click</button>
  //     <hr />
  //     {myName}<button onClick={() => setMyName("kien")}>Change Name</button>
  //     <hr />
  //     <button onClick={() => setStatus(!status)}>Toggled</button>
  //     <hr />
  //     {status ? product.map((item, index) => <div key={index}>{item.name}</div>) : ""}
  //     <Showinfo name="Dat" />
  //     <Showinfo name="Kien" />
  //     <Showinfo name="Tuan" />
  //   </div>
  // );



};

export default App;
