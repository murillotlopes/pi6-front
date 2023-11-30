import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../../providers/login"

export const Menu = () => {
  const navigate = useNavigate()

  const { sair } = useLogin()

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="navbar-nav flex-column flex-sm-row">
            <li className="nav-item ml-5 mr-5">
              <Link className="nav-link" to={'/painel'}>Painel de Investimentos</Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link" to={'/meus-investimentos'}>Meus Investimentos</Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link" to={'/novo-investimento'}>Nova Operação</Link>
            </li>
            <li className="nav-item dropdown mr-5">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Perfil</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to={'/'}>Editar</Link>
                <a className="dropdown-item" onClick={() => sair()}>Sair</a>
              </div>
            </li>
            <li className="nav-item mr-5" role="button">
              <a className="nav-link" onClick={() => navigate(-1)}>Voltar</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}