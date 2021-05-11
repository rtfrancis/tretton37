import { render, screen, cleanup } from '@testing-library/react';
import Card from '../Card'

const employee = {
    flag: "🇸🇪 ",
    full: {first: "Agron", second: "Kabashi"},
    image: "https://i.1337co.de/profile/agron-kabashi-medium",
    link: "meet/agron-kabashi",
    name: "Agron Kabashi",
    office: "Lund"
}


test('should render card component', () => {
    render(<Card props={employee}/>);
    const cardElement = screen.getByTestId('fullCard')
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent("Get to know me");
})