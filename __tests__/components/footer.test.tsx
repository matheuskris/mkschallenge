import { getByText, render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import "@testing-library/jest-dom"

describe("footer", () => {
    it("should be rendering text", () => {
        render(<Footer/>)

        expect(screen.getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument()
    })
})