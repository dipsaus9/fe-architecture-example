import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CartPage } from "./pages/cart"
import { ProductPage } from "./pages/product/id"

import { Layout } from "@/Layout"
import { Home } from "@/pages/Home"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
