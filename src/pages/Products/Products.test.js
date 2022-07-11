import { render, screen } from "@testing-library/react";
import Products from "./Products";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockProductsAPICall = [
  {
    description: "Product description",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 10,
    title: "Product 1",
  },
  {
    description: "Product 2 description",
    id: 2,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 11,
    title: "Product 2",
  },
];
const mockProducts = () => {
  return (
    <BrowserRouter>
      <Products products={mockProductsAPICall} />
    </BrowserRouter>
  );
};
describe("Products", () => {
  it("should match snapshot", () => {
    const { container } = render(mockProducts());
    expect(container).toMatchSnapshot();
  });
  it("should render product 1`s title", () => {
    render(mockProducts());
    expect(
      screen.getByRole("heading", { name: "Product 1" })
    ).toBeInTheDocument();
  });
  it("should render product 2`s title", () => {
    render(mockProducts());
    expect(
      screen.getByRole("heading", { name: "Product 2" })
    ).toBeInTheDocument();
  });
  it("has links to each product", () => {
    render(mockProducts());
    const links = screen.getAllByTestId("product-link");
    expect(links[0]).toHaveAttribute("href", "/products/1");
    expect(links[1]).toHaveAttribute("href", "/products/2");
  });
});
