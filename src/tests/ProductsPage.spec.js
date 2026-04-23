test("should filter products by category", () => {
  const products = [
    { id: 1, category: "electronics", title: "Laptop" },
    { id: 2, category: "electronics", title: "Phone" },
    { id: 3, category: "clothing", title: "Shirt" },
  ];

  const selectedCategory = "electronics";
  const filtered = products.filter((p) => p.category === selectedCategory);

  expect(filtered).toHaveLength(2);
  expect(filtered[0].title).toBe("Laptop");
  expect(filtered[1].title).toBe("Phone");
});
