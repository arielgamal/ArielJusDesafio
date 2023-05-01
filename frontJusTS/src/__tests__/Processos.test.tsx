import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Processo } from "../components/Processo";

const element = {
  id: 1,
  cnj: "5001682-88.2020.8.13.0672",
  nomeDasPartes: [
    {
      nome: "Paulo Victor",
      posicao: "Advogado"
    },
    {
      nome: "Ariel Gamal",
      posicao: "Réu"
    },
  ],
  tribunalOrigem: "TJRJ",
  dataInicio:"10-01-2000",
  movimentacoes: [
    {
      data: "11-06-2018",
      descricao: "Suspensão"
    },
    {
      data: "12-07-2019",
      descricao: "Suspensão"
    },
  ]
}

describe("Testar o componente Processo", () => {
  test("Se renderiza os processos", () => {
    render(<Processo element={element}/>);

    expect(screen.getByText(/Movimentações/i)).toBeInTheDocument();
    expect(screen.getByText(/Partes Envolvidas/i)).toBeInTheDocument();
    expect(screen.getByText(/5001682-88.2020.8.13.0672/i)).toBeInTheDocument();
  })
})