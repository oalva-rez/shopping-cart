import { render, screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockUpdateCart = jest.fn();
const mockProducts = [
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
const mockProductDetails = () => {
  return (
    <BrowserRouter>
      <ProductDetails products={mockProducts} updateCart={mockUpdateCart} />
    </BrowserRouter>
  );
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
  useRouteMatch: () => ({
    url: "/products/1",
  }),
}));

describe("ProductDetails", () => {
  it("should match snapshot", () => {
    const { container } = render(mockProductDetails());
    expect(container).toMatchSnapshot();
  });
  it("should render product 1`s title", () => {
    render(mockProductDetails());
    expect(
      screen.getByRole("heading", { name: "Product 1" })
    ).toBeInTheDocument();
  });
  it('should change not change quantity when "-" button is clicked and is already 1', () => {
    render(mockProductDetails());
    const minusButton = screen.getByRole("button", { name: "-" });
    userEvent.click(minusButton);
    expect(screen.getByText("1", { selector: "div" })).toBeInTheDocument();
  });
  it('should add one to quantity when "+" button is clicked', () => {
    render(mockProductDetails());
    const plusButton = screen.getByRole("button", { name: "+" });
    userEvent.click(plusButton);
    expect(screen.getByText("2", { selector: "div" })).toBeInTheDocument();
  });
  it('should add product to cart when "Add to cart" button is clicked', () => {
    render(mockProductDetails());
    const addToCartButton = screen.getByRole("button", { name: "Add to cart" });
    userEvent.click(addToCartButton);
    expect(mockUpdateCart).toHaveBeenCalledTimes(1);
  });
});
