import { render, screen } from "@testing-library/react";
import Categories from "./Categories";
import "@testing-library/jest-dom";

describe("Categories", () => {
  it("matches snapshot", () => {
    const { container } = render(<Categories />);
    expect(container).toMatchSnapshot();
  });
});
