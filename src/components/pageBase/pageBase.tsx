
import { childrenProps } from '../../interfaces';
import { Menu } from '../menu/menu';
import { ContainerPageBase } from './style.pageBase';


export const PageBase = ({ children }: childrenProps) => {
  return (
    <>
      <div className='app-container'>
        <Menu />
        <ContainerPageBase className='row flex-grow-1'>
          {children}
        </ContainerPageBase>
        {/* <footer className='footer'>
          <div>
            Desenvolvido por:
            <p>Tiago</p>
            <p>Valeria</p>
            <p>Nicolas</p>
            <p>Gabriela</p>
            <p>Murillo</p>
          </div>
        </footer> */}
      </div>
    </>
  )
}