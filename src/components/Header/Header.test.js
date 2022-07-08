import { render, screen } from "@testing-library/react";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const MockHeader = (props) => {
  return (
    <BrowserRouter>
      <Header cart={props.cart} />
    </BrowserRouter>
  );
};
const cart = [
  {
    item: {
      id: 1,
      name: "Product 1",
    },
    quantity: 1,
  },
  {
    item: {
      id: 2,
      name: "Product 2",
    },
    quantity: 2,
  },
];

describe("Header", () => {
  it("renders", () => {
    render(<MockHeader cart={cart} />);
    expect(screen.getByText("Sensuro")).toBeInTheDocument();
  });

  it('has link to "/cart"', () => {
    render(<MockHeader cart={cart} />);
    expect(screen.getByTestId("cart-link")).toHaveAttribute("href", "/cart");
  });
  it('has link to home page "/"', () => {
    render(<MockHeader cart={cart} />);
    expect(screen.getByTestId("home-link")).toHaveAttribute("href", "/");
  });
  it("has cart count", () => {
    render(<MockHeader cart={cart} />);
    expect(screen.getByText(`${cart.length}`)).toBeInTheDocument();
  });
  it("has cart count when cart is empty", () => {
    render(<MockHeader cart={[]} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const { container } = render(<MockHeader cart={cart} />);
    expect(container).toMatchSnapshot();
  });
});
