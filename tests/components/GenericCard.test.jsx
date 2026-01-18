import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import GenericCard from "../../src/components/GenericCard";

describe("GenericCard", () => {
  const mockItem = {
    id: 1,
    title: "Test Skill",
    description: "Test description",
    icon: "CodeBracketIcon",
    category: "language",
  };

  it("renders card with title and description", () => {
    render(<GenericCard item={mockItem} />);
    expect(screen.getByText("Test Skill")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("renders macOS window chrome dots", () => {
    render(<GenericCard item={mockItem} />);
    const dots = screen.getAllByTitle(/Close|Minimize|Maximize/);
    expect(dots).toHaveLength(3);
  });

  it("renders link button when link and linkText provided", () => {
    const itemWithLink = {
      ...mockItem,
      link: "https://example.com",
      linkText: "View More",
    };
    render(<GenericCard item={itemWithLink} />);
    const link = screen.getByRole("link", {
      name: /View Test Skill View More/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render link button when link is missing", () => {
    render(<GenericCard item={mockItem} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("has proper aria-label", () => {
    render(<GenericCard item={mockItem} />);
    const article = screen.getByRole("article");
    expect(article).toHaveAttribute("aria-label", "Test Skill");
  });
});
