import {Fragment} from 'react'
import Layout from '../components/layout/Layout'

export default function CrearCuenta() {
  return (
    <div>
      <Layout>
        <Fragment>
          <h1 className="text-center text-red-600 text-4xl font-bold">Crear Cuenta</h1>
          <div className="flex justify-center mt-5">
            <form className="p-5 w-4/12">
              <div className="flex flex-col">
                <label className="label">Nombre</label>
                <input type="text" name="nombre" className="input"/>
                <label className="label mt-3">E-mail</label>
                <input type="email" name="email" className="input"/>
                <label className="label mt-3">Contraseña</label>
                <input type="password" name="password" className="input"/>
                <button className="boton w-full mt-5">REGISTRARME</button>
              </div>
            </form>
          </div>
        </Fragment>
      </Layout>
    </div>
  )
}
