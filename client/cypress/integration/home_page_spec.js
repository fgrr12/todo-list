describe("The Program", () => {
  it('should work for a typical user', () => {
    cy.visit("/");
    cy.contains("Sign In").click();
    cy.visit("https://61324e13bd84b40009905e16.auth.us-east-1.amazoncognito.com/login?client_id=ivvpl8ivl2d5pkfqu8idnsgdo&response_type=token&redirect_uri=http://localhost:3000/auth/callback")
    cy.request(
      "POST",
      "https://61324e13bd84b40009905e16.auth.us-east-1.amazoncognito.com",
      { email: "fgrr12@gmail.com", password: "Gabriel4699*" }
    )
      .its("body")
      .as("currentUser");
  });
});
