// import { PageBase } from "../../components/pageBase/pageBase"
import { useState } from "react"

import { Entrar } from "./entrar"
import { Cadastrar } from "./cadastrar"
import { ContainerHome } from "./style.home"

export const Home = () => {
  const [entrarOuCadastrar, setEntrarOuCadastrar] = useState(true)

  return (
    <>
      <ContainerHome>
        <div>



          {entrarOuCadastrar ? (
            <Entrar setEntrarOuCadastrar={setEntrarOuCadastrar} />
          ) : (
            <Cadastrar setEntrarOuCadastrar={setEntrarOuCadastrar} />
          )}

        </div>
      </ContainerHome>
    </>
  )
}