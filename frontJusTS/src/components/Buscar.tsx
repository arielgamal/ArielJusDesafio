import { useContext, useState } from "react";
import { IMyContext, MyContext } from "../context/MyContext";
import axios from "axios";

export function Buscar() {
  const {protocolo, setProtocolo, setData, setError } = useContext(MyContext) as IMyContext;
  const [emptyInput, setEmptyInput] = useState("");

  async function getByProtocol() {
    if (protocolo.length === 0) {
      setEmptyInput("Voce precisa preencher o campo")
      return 
    } 

    setEmptyInput("")

    axios
      .get(`http://localhost:3001/${protocolo}`)
      .then((data) => {
        setError("")
        setData(data.data)
      })
      .catch((error) => {
        setError(error.response.data.message)
        console.log(error.response.data)
      }).finally(() => {
        setProtocolo("")
      })
  } 


  return(
    <div className="h-40 flex flex-col items-center mt-[100px] mb-[50px]">
      <div className="flex flex-col items-center">
        <h3 className="text-[30px]">Consulta Processual</h3>
        <p>Faca uma busca pelo número do processo ou pela sigla do tribunal</p>
      </div>

      <div className="mt-[20px] flex">
        <div>
          <input
          data-testid="input"
          className="mr-[20px] h-[3rem] w-[20rem] border-[1px] border-solid border-[lightgrey] pl-[10px] rounded hover:border-[darkgrey] focus:border-blue-700"
          onChange={(e) => setProtocolo(e.target.value)}
          name="numberProtocol"
          placeholder="Número de processo ou tribunal"
          value={protocolo}
          />
          <p className="mt-[5px] text-[red]">{emptyInput}</p>
        </div>
          <button 
            data-testid="button"
            className="bg-blue-500 h-[3rem] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={getByProtocol}
            >CONSULTAR</button>
      </div>
    </div>
  )
}