import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/home"
import { Dashboard } from "../pages/Dashboard/dashboard"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/painel" element={<Dashboard />}></Route>
    </Routes>
  )
}