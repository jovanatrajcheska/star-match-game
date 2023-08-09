describe("Numbers component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  
  it("allows the user to select numbers", () => {
    const selectedNumbers = [1, 5, 9]; // random numbers

    // clicking on numbers to check if they are selected
    selectedNumbers.forEach((number) => {
      cy.get(`[data-testid="number-${number}"]`).click();
    });
  });

  it("allows the user to deselect numbers", () => {
    const selectedNumbers = [1, 5, 9]; // random numbers

    // clicking on numbers to check if they are selected
    selectedNumbers.forEach((number) => {
      cy.get(`[data-testid="number-${number}"]`).click();
    });
    // clicking on numbers to check if they are deselected
    selectedNumbers.forEach((number) => {
      cy.get(`[data-testid="number-${number}"]`).click();
    });
  });
});
