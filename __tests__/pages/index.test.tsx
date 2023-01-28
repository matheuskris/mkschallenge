import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/screens/Home";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";

const productsMock = [
  {
    id: 2,
    brand: "HyperX",
    createdAt: "2023-01-23T18:17:04.771Z",
    description:
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
    name: "Headset Cloud Stinger",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: "600.00",
    updatedAt: "2023-01-23T18:17:04.771Z",
  },
  {
    id: 2,
    brand: "óculoss",
    createdAt: "2023-01-23T18:17:04.771Z",
    description:
      "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
    name: "Headset Cloud Stinger",
    photo:
      "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    price: "600.00",
    updatedAt: "2023-01-23T18:17:04.771Z",
  },
];

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get(
    "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products",
    (req, res, ctx) => {
      // respond using a mocked JSON body
      console.log("oi, fui chamado aqui ahsuidhsuaidhsuaidhsui");
      return res(ctx.json({ products: productsMock }));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("homePage", () => {
  test("should render navigation and footer", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });

  test("should fetch and show the products", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const productTitle = await waitFor(() =>
      screen.getByText("Headset Cloud Stinger")
    );

    expect(productTitle).toBeInTheDocument();
  });
});
