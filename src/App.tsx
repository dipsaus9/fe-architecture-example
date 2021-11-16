import { BrowserRouter, Routes, Route } from "react-router-dom"

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
