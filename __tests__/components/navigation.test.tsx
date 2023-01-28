import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";
("@testing-library/jest-dom");

describe("navigation", () => {
  it("should be rendering tags", () => {
    render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });

  test("when user clicks cartIconButton, should show cart", () => {
    render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    const cartIconBtn = screen.getByTestId("cartIconBtn");
    const cartContainer = screen.getByTestId("cartContainer");

    expect(cartContainer).toHaveStyle("transform: translateX(486px)");

    fireEvent.click(cartIconBtn);

    expect(cartContainer).toHaveStyle("transform: ");
  });
});
