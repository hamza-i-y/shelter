// Card.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./card";

const cardData = {
  header: "Test Header",
  image: {
    url: "https://example.com/image.jpg",
  },
  text: {
    text: "Sample text for testing",
  },
};

describe("Card component", () => {
  it("renders the correct data", () => {
    render(
      <Card
        header={cardData.header}
        image={cardData.image}
        text={cardData.text}
      />
    );

    expect(screen.getByText(cardData.header)).not.toBeInTheDocument();
    expect(screen.getByText(cardData.text.text)).toBeInTheDocument();
    expect(screen.getByAltText("illustrations")).toBeInTheDocument();
  });

  it("displays the correct image source", () => {
    render(
      <Card
        header={cardData.header}
        image={cardData.image}
        text={cardData.text}
      />
    );

    const image = screen.getByAltText("illustrations") as HTMLImageElement;
    expect(image.src).toBe(cardData.image.url);
  });

  it("applies correct CSS classes", () => {
    const { container } = render(
      <Card
        header={cardData.header}
        image={cardData.image}
        text={cardData.text}
      />
    );

    const element = container.querySelector("div");
    expect(element).toHaveClass(
      "flex items-center gap-x-[10px] w-[80%] bg-[#ECE3D9] p-5 rounded-md drop-shadow-2xl"
    );
  });
});
