describe("Star Match Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("displays the initial game screen with stars and number buttons", () => {
    cy.get(".game").should("be.visible");
    cy.get(".star-container").should("be.visible");
    cy.get(".number").should("have.length", 9);
  });

  it("displays the correct number of seconds left", () => {
    // Wait for a 3 seconds
    cy.wait(3000);

    // Verify that the displayed seconds left is updated accordingly
    cy.get(".timer").should("contain", "Time Remaining: 7");
  });

});
