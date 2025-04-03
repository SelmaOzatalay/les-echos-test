import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "chai";
import NewsletterListItem from "../components/NewsletterListItem/NewsletterListItem";
import { Newsletter } from "../types";

describe("NewsletterListItem Component", () => {
    const mockNewsletter: any = {
        id: "1",
        title: "Tech News",
        description: "Latest updates in technology.",
        image: "/tech-news.jpg",
    };

    it("should render the newsletter title", () => {
        render(<NewsletterListItem item={mockNewsletter} userCanSubscribe={true} />);
        const titleElement = screen.getByText("Tech News");
        expect(titleElement).to.exist;
    });

    it("should render the newsletter description", () => {
        render(<NewsletterListItem item={mockNewsletter} userCanSubscribe={true} />);
        const descriptionElement = screen.getByText("Latest updates in technology.");
        expect(descriptionElement).to.exist;
    });

    it("should render the correct button text when userCanSubscribe is true", () => {
        render(<NewsletterListItem item={mockNewsletter} userCanSubscribe={true} />);
        const buttonElement = screen.getByText("S'inscrire");
        expect(buttonElement).to.exist;
    });

    it("should render the correct button text when userCanSubscribe is false", () => {
        render(<NewsletterListItem item={mockNewsletter} userCanSubscribe={false} />);
        const buttonElement = screen.getByText("S'abonner");
        expect(buttonElement).to.exist;
    });

    it("should render the image with the correct src and alt attributes", () => {
        render(<NewsletterListItem item={mockNewsletter} userCanSubscribe={true} />);
        const imageElement = screen.getByAltText("Tech News") as HTMLImageElement;
        expect(imageElement).to.exist;
        expect(imageElement.src).to.include("/tech-news.jpg");
    });
});