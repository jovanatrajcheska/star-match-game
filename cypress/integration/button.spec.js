describe("Play Again button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("shows play again button when game is over", () => {
    // wait the timer to run out
    cy.wait(10001);

    cy.get(".game-done").should("exist");
    cy.contains("Play Again").click();

    // clicking the button should reset the game
    cy.get(".game-done").should("not.exist");
  });
});
