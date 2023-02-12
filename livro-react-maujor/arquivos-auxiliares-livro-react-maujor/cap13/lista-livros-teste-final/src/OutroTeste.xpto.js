import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

describe("Outro arquivo de teste", () => {
  test("renderização texto xpto", () => {
    render(<ListaLivros />);
    const linkElement = screen.getByText(/xpto/i);
    expect(linkElement).toBeInTheDocument();
  });
});
