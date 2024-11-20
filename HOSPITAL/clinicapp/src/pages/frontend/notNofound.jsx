
import { Link } from 'react-router-dom'

export default function NotNofound() {
  return (
    
      <>
      <div className='text-center'>
        <h1>La pagina no existe</h1>
        <Link className='btn btn-success' to="/">Regresar a la pagina principal</Link>

      </div>
        
      </>
    
  )
}
