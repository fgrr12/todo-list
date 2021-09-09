describe("The Program", () => {
  it("should work for a typical user - save new task", () => {
    cy.visit("/home");
    cy.wait(1500);
    cy.contains("Add other task").click();
    cy.wait(1000);
    cy.get("form").within(() => {
      cy.get('input[name="name"]').type("Develop a software");
      cy.wait(500);
      cy.get('textarea[name="description"]').type("make a CRUD");
      cy.wait(500);
      cy.get('input[name="initialDate"]').type("2021-10-12");
      cy.wait(500);
      cy.get('input[name="deadline"]').type("2021-10-16");
      cy.wait(1000);
      cy.contains("Save task").click();
    });
  });

  it("should work for a typical user - edit task", () => {
    cy.visit("/home");
    cy.wait(1500);
    cy.get("ul").within(() => {
      cy.get("li")
        .first()
        .within(() => {
          cy.get("[name='editImg']").click();
        });
    });
    cy.get("form").within(() => {
      cy.wait(500);
      cy.get('textarea[name="description"]').clear();
      cy.get('textarea[name="description"]').type(
        "make a create, read, update and delete"
      );
      cy.wait(500);
      cy.get('input[name="deadline"]').type("2021-10-17");
      cy.wait(1000);
      cy.get("button[type = 'submit']").focus();
      cy.focused().click();
    });
  });

  it("should work for a typical user - check completed", () => {
    cy.visit("/home");
    cy.wait(1500);
    cy.get("ul").within(() => {
      cy.get("li")
        .first()
        .within(() => {
          cy.get("input").click();
        });
    });
  });

  it("should work for a typical user - delete task", () => {
    cy.visit("/home");
    cy.wait(1500);
    cy.get("ul").within(() => {
      cy.get("li")
        .first()
        .within(() => {
          cy.get("[name='deleteImg']").click();
        });
    });
  });
});
