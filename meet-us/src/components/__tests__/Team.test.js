import { render, screen, cleanup } from '@testing-library/react';
import TeamPage from '../Team'

afterEach(cleanup);

test('should render team component', () => {
    render(<TeamPage />);
    const teamElement = screen.getByTestId('teamContainer')
    expect(teamElement).toBeInTheDocument();
    expect(teamElement).toHaveTextContent("Get to know the team");
    const teamCards = screen.getByTestId('teamCards');
    expect(teamCards).toBeInTheDocument();
})

test("toolbar should render", () => {
    render(<TeamPage />);
    const toolbarElement = screen.getByTestId('toolbar-main')
    expect(toolbarElement).toBeInTheDocument();
})

