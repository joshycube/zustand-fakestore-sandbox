import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsPage from "../ProductsPage";

const products = [
  { id: 1, category: "electronics", title: "Laptop" },
  { id: 2, category: "electronics", title: "Phone" },
  { id: 3, category: "clothing", title: "Shirt" },
];

jest.mock("../useCartStore", () => ({
  useCartStore: () => ({
    products,
    fetchAllProducts: jest.fn(),
    addToCart: jest.fn(),
  }),
}));

test("should render only electronics products when 'electronics' is selected", () => {
  render(<ProductsPage />);

  const select = screen.getByTestId("category-select");
  fireEvent.change(select, { target: { value: "electronics" } });

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Phone")).toBeInTheDocument();
  expect(screen.queryByText("Shirt")).not.toBeInTheDocument();
});
