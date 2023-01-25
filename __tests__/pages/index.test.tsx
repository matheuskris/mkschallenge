import { render, screen } from "@testing-library/react";
import Home from "@/screens/Home";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("sum", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />{" "}
    </Provider>
  );

  expect(getByText("Sistemas")).toBeTruthy();
});
