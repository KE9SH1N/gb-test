import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from "./Landing"
import { Checkout } from "./header/Checkout";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
