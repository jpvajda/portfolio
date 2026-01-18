import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../../src/components/NavBar";

describe("NavBar", () => {
  it("renders navigation with name", () => {
    render(<NavBar />);
    expect(screen.getByText(/John P. Vajda/)).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<NavBar />);
    expect(
      screen.getByRole("link", {
        name: /Navigate to Core Competencies section/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /Navigate to Technical Skills section/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Navigate to Certifications section/i })
    ).toBeInTheDocument();
  });

  it("has proper aria-label for navigation", () => {
    render(<NavBar />);
    // Use getAllByRole since there might be multiple navigation elements
    const navs = screen.getAllByRole("navigation");
    expect(navs.length).toBeGreaterThan(0);
    // Check that the main nav has the correct aria-label
    const mainNav = navs.find(
      (nav) => nav.getAttribute("aria-label") === "Main navigation"
    );
    expect(mainNav).toBeInTheDocument();
  });

  it("renders mobile menu button", () => {
    render(<NavBar />);
    const menuButton = screen.getByRole("button", {
      name: /Open navigation menu/i,
    });
    expect(menuButton).toBeInTheDocument();
  });
});
