const Buscador = () => {

  return(
    <form className="relative">
      <input type="text" placeholder="Buscar" className="text-xl py-2 px-5 w-full border-b-2 input"/>
      <button type="submit" className="absolute right-3 top-2.5 text-red-600"><i className="text-xl fa fa-search"></i></button>
    </form>
  )

}

export default Buscador
