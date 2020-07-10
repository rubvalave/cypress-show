describe("Form test", () => {
  it("Can fill the first form", () => {
    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Message sent!", code: 201 }
    });
    
    cy.visit("/");
    cy.get("form").first();

    cy.get('input[name="name"]').first()
      .type("Coronavirus")
      .should("have.value", "Coronavirus");

    cy.get('input[name="email"]').first()
      .type("covid19@illness.com")
      .should("have.value", "covid19@illness.com");

    cy.get("textarea").first()
      .type("Im going to kill you all")
      .should("have.value", "Im going to kill you all");

    cy.get("form").first().submit();

    cy.contains("Message sent!");
  });



  it("Can fill the second form", () => {
    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Message sent!", code: 201 }
    });
    
    cy.visit("/");
    cy.get("form").first();

    cy.get('input[name="name"]').last()
      .type("Coronavirus")
      .should("have.value", "Coronavirus");

    cy.get('input[name="email"]').last()
      .type("covid19@illness.com")
      .should("have.value", "covid19@illness.com");

    cy.get("textarea").last()
      .type("Im going to kill you all")
      .should("have.value", "Im going to kill you all");

    cy.get("form").last().submit();

    cy.contains("Message sent!");
  });

});