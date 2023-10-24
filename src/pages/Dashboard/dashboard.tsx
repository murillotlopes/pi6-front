import { Link } from "react-router-dom"

export const Dashboard = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/painel'}>
            Painel
          </Link>
        </nav>
      </header>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quo consequatur odio enim perspiciatis voluptatibus ab laborum pariatur aliquid nulla. Odio exercitationem id dolores, aliquam sunt itaque quia quasi aperiam.</div>
      <div>
        SOU O PAINEL
      </div>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quo consequatur odio enim perspiciatis voluptatibus ab laborum pariatur aliquid nulla. Odio exercitationem id dolores, aliquam sunt itaque quia quasi aperiam.</div>
    </>
  )
}