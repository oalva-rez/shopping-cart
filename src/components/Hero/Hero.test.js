import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Hero", () => {
  it("matches snapshot", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
  it('has link to products page "/products"', () => {
    render(<Hero />);
    const shopNowButton = screen.getByRole("button", { name: "Shop Now" });
    userEvent.click(shopNowButton);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/products");
  });
});
