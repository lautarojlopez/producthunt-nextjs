import React, {useState, useEffect} from 'react'

const useValidacion = (stateInicial, validar, fun) => {

  const [valores, setValores] = useState(stateInicial)
  const [errores, setErrores] = useState({})
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    if(submit){
      const noErrores = Object.keys(errores).length === 0
      if(noErrores){
        fun()
      }
      setSubmit(false)
    }
  }, [])

  return(

  )
}

export default useValidacion
