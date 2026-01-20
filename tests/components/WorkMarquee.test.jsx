import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkMarquee from "../../src/components/WorkMarquee";
import { companies } from "../../src/data/companies";

describe("WorkMarquee", () => {
  it("renders work marquee section with proper aria-label", () => {
    render(<WorkMarquee />);
    const section = screen.getByRole("region", {
      name: /Work experience companies/i,
    });
    expect(section).toBeInTheDocument();
  });

  it("renders all companies from the data", () => {
    render(<WorkMarquee />);
    companies.forEach((company) => {
      const companyElements = screen.getAllByText(company.name);
      // Companies should appear twice (duplicated for seamless scrolling)
      expect(companyElements.length).toBeGreaterThanOrEqual(2);
    });
  });

  it("renders company names correctly", () => {
    render(<WorkMarquee />);
    // Use getAllByText since companies are duplicated for seamless scrolling
    expect(screen.getAllByText("Oracle").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("PayPal").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("SendGrid").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("JumpCloud").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Ethopass").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("New Relic").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Apollo GraphQL").length).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByText("Deepgram").length).toBeGreaterThanOrEqual(2);
  });

  it("duplicates companies array for seamless scrolling", () => {
    render(<WorkMarquee />);
    // Each company should appear at least twice (duplicated)
    companies.forEach((company) => {
      const companyElements = screen.getAllByText(company.name);
      expect(companyElements.length).toBeGreaterThanOrEqual(2);
    });
  });

  it("has scroll marquee animation class", () => {
    render(<WorkMarquee />);
    const marqueeContainer = document.querySelector(".animate-scroll-marquee");
    expect(marqueeContainer).toBeInTheDocument();
    expect(marqueeContainer).toHaveClass("animate-scroll-marquee");
  });

  it("renders icons with proper aria-hidden attribute", () => {
    render(<WorkMarquee />);
    // Icons should be present and have aria-hidden="true"
    const icons = document.querySelectorAll('[aria-hidden="true"]');
    // Should have at least 2 icons per company (duplicated)
    expect(icons.length).toBeGreaterThanOrEqual(companies.length * 2);
  });

  it("has proper container structure with overflow hidden", () => {
    render(<WorkMarquee />);
    const overflowContainer = document.querySelector(".overflow-hidden");
    expect(overflowContainer).toBeInTheDocument();
  });

  it("applies terminal theme classes", () => {
    render(<WorkMarquee />);
    const section = screen.getByRole("region", {
      name: /Work experience companies/i,
    });
    expect(section).toHaveClass("work-marquee");
    expect(section).toHaveClass("bg-terminal-bg-secondary");
  });
});
