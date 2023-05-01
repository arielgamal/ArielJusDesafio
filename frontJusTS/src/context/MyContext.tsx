import { createContext, useState } from 'react';

export interface INomeDasPartes {
  nome: string,
  posicao: string,
}

export interface IMovimentacoes {
  data: string,
  descricao: string,
}

export interface IProcessos {
  id: number,
  cnj: string,
  nomeDasPartes: INomeDasPartes[],
  tribunalOrigem: string,
  dataInicio: string,
  movimentacoes: IMovimentacoes[],
}

export type IMyContext = {
  data: IProcessos[],
  setData: React.Dispatch<React.SetStateAction<IProcessos[]>>,
  protocolo: string,
  setProtocolo: React.Dispatch<React.SetStateAction<string>>,
  error: string,
  setError: React.Dispatch<React.SetStateAction<string>>
}

export const MyContext = createContext<IMyContext | null>(null)

type Props = {
  children: JSX.Element
}

export function MyProvider({children}:Props) {
  const [data, setData] = useState<IProcessos[] | null>(null);
  const [protocolo, setProtocolo] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  return(
    <MyContext.Provider value={{
      protocolo, setProtocolo,
      data, setData,
      error, setError,
    } as unknown as IMyContext}>
    {children}
    </MyContext.Provider>
  )
}