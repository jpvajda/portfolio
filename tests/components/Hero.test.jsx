import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../../src/components/Hero";

describe("Hero", () => {
  it("renders hero section with name", () => {
    render(<Hero />);
    expect(screen.getByText("John P. Vajda")).toBeInTheDocument();
  });

  it("renders role/title text", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        /Developer Experience • Product Led Growth • Product Leader/
      )
    ).toBeInTheDocument();
  });

  it("renders bio text", () => {
    render(<Hero />);
    expect(screen.getByText(/Hey there! 👋/)).toBeInTheDocument();
  });

  it("has proper aria-labelledby attribute", () => {
    render(<Hero />);
    const section = screen.getByRole("region", { name: /John P. Vajda/i });
    expect(section).toBeInTheDocument();
  });

  it("renders contact button", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /contact/i })
    ).toBeInTheDocument();
  });
});
