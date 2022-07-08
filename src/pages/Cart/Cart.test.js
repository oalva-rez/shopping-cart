import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockDeleteItem = jest.fn();
const MockEmptyCart = () => (
  <BrowserRouter>
    <Cart cart={[]} deleteItem={mockDeleteItem} />
  </BrowserRouter>
);
const mockCart = [
  {
    item: {
      id: 1,
      title: "Product 1",
      description: "This is a product",
      price: "10.00",
      image: "https://picsum.photos/200",

      size: "S",
    },
    quantity: 1,
  },
  {
    item: {
      id: 2,
      title: "Product 2",
      description: "This is a product",
      price: "10.00",
      image: "https://picsum.photos/200",
      size: "S",
    },
    quantity: 2,
  },
];

describe("Cart with items", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <Cart deleteItem={mockDeleteItem} cart={mockCart} />
    );
    expect(container).toMatchSnapshot();
  });
  it("renders cart items", () => {
    render(<Cart deleteItem={mockDeleteItem} cart={mockCart} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
  it('renders heading "Cart"', () => {
    render(<Cart deleteItem={mockDeleteItem} cart={mockCart} />);
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
  });
  it("renders cart total", () => {
    render(<Cart deleteItem={mockDeleteItem} cart={mockCart} />);
    expect(screen.getByText("Total: $30.00")).toBeInTheDocument();
  });
  it("renders correct item total", () => {
    render(<Cart deleteItem={mockDeleteItem} cart={mockCart} />);
    expect(screen.getByText("$20.00")).toBeInTheDocument();
  });
  it("deletes item from cart", () => {
    render(<Cart deleteItem={mockDeleteItem} cart={mockCart} />);

    const deleteButtons = screen.getAllByRole("button", { name: "X" });
    deleteButtons.forEach((button) => {
      userEvent.click(button);
    });
    expect(mockDeleteItem).toHaveBeenCalledTimes(mockCart.length);
  });
});

describe("Empty items", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <MockEmptyCart deleteItem={mockDeleteItem} cart={[]} />
    );
    expect(container).toMatchSnapshot();
  });
  it('renders heading "Cart"', () => {
    render(<MockEmptyCart deleteItem={mockDeleteItem} cart={[]} />);
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
  });
  it("renders cart items", () => {
    render(<MockEmptyCart deleteItem={mockDeleteItem} cart={[]} />);
    expect(
      screen.getByText("Your cart is currently empty.")
    ).toBeInTheDocument();
  });
  it("renders link to products page", () => {
    render(<MockEmptyCart deleteItem={mockDeleteItem} cart={[]} />);
    expect(screen.getByText("keep shopping.")).toBeInTheDocument();
    expect(screen.getByTestId("keep-shopping-link")).toHaveAttribute(
      "href",
      "/products"
    );
  });
});
