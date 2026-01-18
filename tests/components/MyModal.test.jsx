import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyModal from "../../src/components/MyModal";

describe("MyModal", () => {
  it("renders contact button", () => {
    render(<MyModal />);
    expect(
      screen.getByRole("button", { name: /Open contact dialog/i })
    ).toBeInTheDocument();
  });

  it("opens modal when contact button is clicked", async () => {
    const user = userEvent.setup();
    render(<MyModal />);
    const button = screen.getByRole("button", { name: /Open contact dialog/i });

    await user.click(button);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<MyModal />);
    const openButton = screen.getByRole("button", {
      name: /Open contact dialog/i,
    });

    await user.click(openButton);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /Close dialog/i });
    await user.click(closeButton);

    // Wait for transition to complete (Headless UI uses 200ms leave transition)
    await waitFor(
      () => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it("renders LinkedIn link in modal", async () => {
    const user = userEvent.setup();
    render(<MyModal />);
    const button = screen.getByRole("button", { name: /Open contact dialog/i });

    await user.click(button);

    const linkedinLink = screen.getByRole("link", {
      name: /Visit John P. Vajda's LinkedIn profile/i,
    });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/johnpvajda/"
    );
  });
});
