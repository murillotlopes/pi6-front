
import { childrenProps } from '../../interfaces';
import { Menu } from '../menu/menu';


export const PageBase = ({ children }: childrenProps) => {
  return (
    <>
      <Menu />
      <main className='row'>
        {children}
      </main>
      <footer>
        <div>
          Desenvolvido por:
          <p>Tiago</p>
          <p>Valeria</p>
          <p>Nicolas</p>
          <p>Gabriela</p>
          <p>Murillo</p>
        </div>
      </footer>
    </>
  )
}