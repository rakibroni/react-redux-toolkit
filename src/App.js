import "./App.css";
import Product from "./components/Products";

import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ));
  
  return (
   
      <div className="App"> 
        <RouterProvider router={routes}></RouterProvider> 
      </div> 
  );
}

export default App;
