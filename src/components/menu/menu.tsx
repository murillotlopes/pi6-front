import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "../../providers/login"

export const Menu = () => {
  const navigate = useNavigate()

  const { sair } = useLogin()

  return (
    <>
      <header>
        <nav >
          <ul className="nav nav-pills flex-column flex-sm-row">
            <li className="nav-item">
              <Link className="nav-link" to={'/painel'}>Painel de Investimentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/meus-investimentos'}>Meus Investimentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/novo-investimento'}>Nova Operação</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Perfil</a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to={'/'}>Editar</Link>
                <a className="dropdown-item" onClick={() => sair()}>Sair</a>
              </div>
            </li>
            <li className="nav-item" role="button">
              <a className="nav-link" onClick={() => navigate(-1)}>Voltar</a>
            </li>
          </ul>
        </nav>





        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(página atual)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Ação</a>
                  <a className="dropdown-item" href="#">Outra ação</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Algo mais aqui</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Desativado</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
            </form> 
          </div>
        </nav> */}















      </header>
    </>
  )
}