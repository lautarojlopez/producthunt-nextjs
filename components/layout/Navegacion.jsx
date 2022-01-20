import Link from 'next/link'

const Navegacion = () => {

  return(
    <nav className="flex text-xl justify-center">
      <div className="mx-3 hover:text-red-600 transition-all duration-200 ease-linear">
        <Link href="/" className="">Inicio</Link>
      </div>
      <div className="mx-3 hover:text-red-600 transition-all duration-200 ease-linear">
        <Link href="/populares" className="">Populares</Link>
      </div>
      <div className="mx-3 hover:text-red-600 transition-all duration-200 ease-linear">
        <Link href="/nuevo-producto" className="">Nuevo Producto</Link>
      </div>
    </nav>
  )

}

export default Navegacion
