describe("home page", () => {
  beforeEach(() => {
    // run against local server
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("http://localhost:3000/");
  });

  describe("Home page", () => {
    it("Check's Site is available", () => {
      // run against local server
      cy.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit("http://localhost:3000/");
    });
  });

  // NAVBAR

  describe("Click NavBar elements", () => {
    it("Click on Projects", () => {
      cy.get('[href="#projects"]');
    });
    it("Click on References", () => {
      cy.get('[href="#references"]');
    });
    it("Click on References", () => {
      cy.get('[href="#certifications"]');
    });
  });

  // CAROUSEL

  describe("Click Carousel", () => {
    it("Click forward on Carousel 2 times", () => {
      cy.get(".carousel-control-next-icon").click().click();
    });
    it("Click back on Carousel 2 times", () => {
      cy.get(".carousel-control-prev-icon").click().click();
    });
  });

  // PROJECTS COMPONENT

  // describe("Click Projects", () => {
  //   it("Click on Project Buttons", () => {
  // Currently erroring out due to Cloudflare checks
  // cy.get("#projects > :nth-child(3) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(4) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(2) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(5) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(6) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(7) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(8) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(9) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(10) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(11) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(12) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(13) > .card-body > .btn").click();
  // cy.get("#projects > :nth-child(14) > .card-body > .btn").click();
  // });
  // });

  // REFERENCES COMPONENT

  describe("Click References", () => {
    it("Click on Reference Buttons", () => {
      cy.get("#references > :nth-child(2) > .card-body > .btn");
      cy.get("#references > :nth-child(3) > .card-body > .btn");
      cy.get("#references > :nth-child(4) > .card-body > .btn");
      cy.get("#references > :nth-child(5) > .card-body > .btn");
      cy.get("#references > :nth-child(6) > .card-body > .btn");
    });
  });

  // CERTIFICATIONS COMPONENT

  describe("Click Certifications", () => {
    it("Click on Certification Buttons", () => {
      cy.get("#certifications > :nth-child(2) > .card-body > .btn");
      cy.get("#certifications > :nth-child(3) > .card-body > .btn");
      cy.get("#certifications > :nth-child(4) > .card-body > .btn");
      cy.get("#certifications > :nth-child(5) > .card-body > .btn");
      cy.get("#certifications > :nth-child(6) > .card-body > .btn");
      cy.get("#certifications > :nth-child(7) > .card-body > .btn");
      cy.get("#certifications > :nth-child(8) > .card-body > .btn");
      cy.get("#certifications > :nth-child(9) > .card-body > .btn");
    });
  });

  // FOOTER COMPONENT

  describe("Click Footer elements", () => {
    it("Click on Contact Button", () => {
      cy.get(".footer > div > .btn");
    });
  });
});
