import {Fragment} from 'react'
import Buscador from '../ui/Buscador'
import Navegacion from './Navegacion'
import Link from 'next/link'

const Header = () => {

  const user = false

  return(
    <nav className="shadow-md items-center p-3">
      <div className="flex justify-around items-center">
        <div className="flex items-center">
          <Link href="/"><h1 className="cursor-pointer font-robotoslab text-4xl mr-5 text-red-600">P</h1></Link>
          <Buscador/>
        </div>
        <Navegacion/>
        <div className="flex items-center">
          {user ? <p className="text-xl text-left mr-3">Hola, <span className="text-red-600 font-bold">Lauty</span></p> : null}
          <div className="flex">
            {user ? <button type="button" className="boton"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</button> :
            <Fragment>
              <Link href='/iniciar-sesion'><p className="boton2">Iniciar Sesión</p></Link>
              <Link href='/crear-cuenta'><p className="boton ml-3">Crear Cuenta</p></Link>
            </Fragment>
            }


          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
