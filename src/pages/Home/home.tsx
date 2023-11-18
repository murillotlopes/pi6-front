// import { PageBase } from "../../components/pageBase/pageBase"
import { useState } from "react"

import { Entrar } from "./entrar"
import { Cadastrar } from "./cadastrar"

export const Home = () => {
  const [entrarOuCadastrar, setEntrarOuCadastrar] = useState(true)

  return (
    <>
      {/* <PageBase> */}
      <div className="col-md-4"></div>
      <div className="col-md-4 text-bg-secondary">

        {entrarOuCadastrar ? (
          <Entrar setEntrarOuCadastrar={setEntrarOuCadastrar} />
        ) : (
          <Cadastrar setEntrarOuCadastrar={setEntrarOuCadastrar} />
        )}

      </div>
      <div className="col-md-4"></div>
      {/* </PageBase> */}
    </>
  )
}