import { fireEvent, render, screen } from "@testing-library/react";
import CartMenu from "@/components/CartMenu";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const setSelectedProperty = jest.fn();

describe("CartMenu", () => {
  test("should be hidden when is Close", () => {
    render(
      <Provider store={store}>
        <CartMenu isOpen={false} setMenu={() => {}} />
      </Provider>
    );

    const cartContainer = screen.getByTestId("cartContainer");

    expect(cartContainer).toHaveStyle("transform: translateX(486px)");
  });

  test("should be showing when is open", () => {
    render(
      <Provider store={store}>
        <CartMenu isOpen={true} setMenu={() => {}} />
      </Provider>
    );

    const cartContainer = screen.getByTestId("cartContainer");

    expect(cartContainer).toHaveStyle("transform: ");
  });

  test("to close when clicks button", () => {
    render(
      <Provider store={store}>
        <CartMenu isOpen={true} setMenu={setSelectedProperty} />
      </Provider>
    );

    const cartContainer = screen.getByTestId("cartContainer");
    const closeBtn = screen.getByText("X");

    expect(cartContainer).toHaveStyle("transform: ");

    fireEvent.click(closeBtn);

    expect(setSelectedProperty).toHaveBeenCalled();
  });
});
