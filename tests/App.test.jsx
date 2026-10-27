import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("App", () => {
  it("renders portfolio app with main sections", () => {
    render(<App />);

    // Check main sections are present
    expect(
      screen.getByRole("navigation", { name: /Main navigation/i })
    ).toBeInTheDocument(); // NavBar
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // Footer
  });

  it("renders hero section", () => {
    render(<App />);
    expect(screen.getByText("John P. Vajda")).toBeInTheDocument();
  });

  it("renders competencies section", () => {
    render(<App />);
    expect(
      screen.getByRole("region", { name: /competencies/i })
    ).toBeInTheDocument();
  });

  it("renders skills section", () => {
    render(<App />);
    expect(screen.getByRole("region", { name: /skills/i })).toBeInTheDocument();
  });

  it("renders MCP Design skill card", () => {
    render(<App />);
    expect(
      screen.getByRole("article", { name: /MCP Design/i })
    ).toBeInTheDocument();
  });

  it("renders certifications section", () => {
    render(<App />);
    expect(
      screen.getByRole("region", { name: /certifications/i })
    ).toBeInTheDocument();
  });

  it("renders newest certifications first", () => {
    render(<App />);
    const section = screen.getByRole("region", { name: /certifications/i });
    const cards = within(section).getAllByRole("article");

    expect(cards[0]).toHaveAccessibleName("AI Product Manager Foundations");
    expect(cards[1]).toHaveAccessibleName("Pain Reprocessing Coaching");
    expect(
      screen.getByRole("link", { name: /AI Product Manager Foundations/i })
    ).toHaveAttribute(
      "href",
      "https://lms.productfaculty.com/verify/john-vajda-48015"
    );
  });

  it("renders Pain Reprocessing Therapy certification", () => {
    render(<App />);
    expect(
      screen.getByRole("article", {
        name: /Pain Reprocessing Coaching/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Pain Reprocessing Coaching/i,
      })
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/johnpvajda/overlay/Education/1269232600/treasury/?profileId=ACoAAADpXKQBgr-cM6S5vcfA2mzehmoMMhi36oo"
    );
  });

  it("has skip to main content link", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", {
      name: /Skip to main content/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });
});
