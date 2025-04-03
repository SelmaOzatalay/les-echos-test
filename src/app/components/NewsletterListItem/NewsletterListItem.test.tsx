import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import NewsletterListItem from './NewsletterListItem';

const nlItem = {
    id: "000000000000000000000000",
    image: "https://placehold.co/200",
    description: "Dive into the unknown with this week's spotlight!",
    title: "Weekly Wonders",
    site: "DEN",
    subscriptions: ["RIGHT_1"],
}

describe('NewsletterListItem Component', () => {
    it('should render the component with the correct content', () => {
        const { getByText } = render(<NewsletterListItem item={nlItem} />);
        const titleElement = getByText(nlItem.title);
        expect(titleElement).to.exist;
    });

    // it('should render a default message if no title is provided', () => {
    //     const { getByText } = render(<NewsletterListItem item={nlItem}/>);
    //     const defaultElement = getByText('No Title Available');
    //     expect(defaultElement).to.exist;
    // });
});