import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Buscar }  from "../components/Buscar";
import { IMyContext, MyContext } from "../context/MyContext";

describe("Testar o componente Buscar", () => {
  test("Se possui um texto 'Consulta Processual' na tela, um botão 'consultar' e um input para digitar", () => {
    const contextValue = { protocolo: '5001682-88.2020.8.13.0672' };
    render(
      <MyContext.Provider value={contextValue as IMyContext}>
        <Buscar />
      </MyContext.Provider>
    );  
    expect(screen.getByText(/CONSULTAR/i)).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByText(/Consulta Processual/i)).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});