describe("Basket Count", () => {
  test("should calculate total from item quantities", () => {
    const cart = {
      products: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 3 },
      ],
    };

    const basketCount = (cart?.products ?? []).reduce(
      (total, item) => total + (item.quantity ?? 1),
      0,
    );

    expect(basketCount).toBe(5);
  });
});
