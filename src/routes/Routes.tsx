import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/home"
import { Dashboard } from "../pages/Dashboard/dashboard"
import { NovoInvestimento } from "../pages/NovoInvestimento/novoInvestimento"
import { ListaInvestimento } from "../pages/ListaInvestimento/listaInvestimento"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/painel" element={<Dashboard />} />
      <Route path="/novo-investimento" element={<NovoInvestimento />} />
      <Route path="/meus-investimentos" element={<ListaInvestimento />} />
    </Routes>
  )
}