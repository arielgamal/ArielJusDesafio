import { useContext } from 'react';
import './App.css'
import { Buscar } from './components/Buscar'
import { Processo } from './components/Processo';
import { IMyContext, IProcessos, MyContext } from './context/MyContext';

export function App() {
  const {data, error} = useContext(MyContext) as IMyContext;
  
  return (
    <div>
      <Buscar />
      {error ? (
        <div className='flex items-center justify-center flex-col'>
          <h1>{error}</h1>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
  ) : (
    data && data.map((element: IProcessos, index: number) => (
      <Processo element={element} key={index} />
    ))
  )}
    </div>
  )
}
