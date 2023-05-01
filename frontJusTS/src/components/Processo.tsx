import { IMovimentacoes, INomeDasPartes, IProcessos } from "../context/MyContext";

type Props = {
  element: IProcessos
}

export function Processo({element}: Props) {

  return(
    <div className="flex flex-col items-center mb-[50px]">
      <div>
        <section className="mb-[15px]">
          <h2 className="text-[24px]">
            Processo n. {element.cnj} do {element.tribunalOrigem}
          </h2>
          <p className="text-[18px] text-[#a0a0a0]">
            Distribuido em: {element.dataInicio}
          </p>
        </section>

        <section className="flex">
          <div className="w-[600px] border-[1px] border-solid border-[lightgrey] rounded">
            <div className="py-2.5 text-{24px} font-bold bg-slate-300 p-[20px]">
              <p>Movimentações</p>
            </div>
            {
              element.movimentacoes.map((element: IMovimentacoes, index: number) => (
                <div className="m-[10px] p-[20px] border-b-[1px] border-solid border-[lightgrey]" key={index}>
                  <p>
                    {element.data}
                  </p>
                    
                  <p>
                    {element.descricao}
                  </p>
                </div>
            ))
            }
          </div>
          <div className="ml-[50px]">
            <p className="font-bold">Partes envolvidas</p>
            {
              element.nomeDasPartes.map((element: INomeDasPartes, index: number) => (
                <div className="border-b-[1px]" key={index}>
                <p className="italic underline">{element.nome}</p>
                <p>Parte envolvida: {element.posicao}</p>
                </div>
              ))
            }
          </div>
        </section>
      </div>

    </div>
  )
}
