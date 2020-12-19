describe("Visitor can see a collection of articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fx:news_index.json"
    });
  })

  context("On the home page", () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it("visitor can see an article\'s title", () => {
      cy.get("[data-cy='article-1']").within(() => {
        cy.get("[data-cy='article-title']").should("contain",
          "How Do Bitcoin Transactions Work?");
      });
    })

    it("visitor can see an article\'s description", () => {
      cy.get("[data-cy='article-2']").within(() => {
        cy.get("[data-cy='article-desc']").should("contain",
          "The US dollar is still the primary international global reserve currency and still figures as the most important currency in Forex markets");
      });
    })
  })
})