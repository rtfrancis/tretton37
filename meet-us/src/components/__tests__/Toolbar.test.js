import { render, screen, cleanup } from '@testing-library/react';
import Toolbar from '../Toolbar'

test('toolbar icons should render', () => {
    render(<Toolbar />);
    const nameSortButton = screen.getByTestId('name-sort')
    expect(nameSortButton).toBeInTheDocument();
    const officeSortButton = screen.getByTestId('office-sort');
    expect(officeSortButton).toBeInTheDocument();
    const nameFilterButton = screen.getByTestId('name-filter');
    expect(nameFilterButton).toBeInTheDocument();
    const officeFilterButton = screen.getByTestId('office-filter');
    expect(officeFilterButton).toBeInTheDocument();
})