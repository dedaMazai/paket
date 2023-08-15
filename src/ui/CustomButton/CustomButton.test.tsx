import { render, screen } from '@testing-library/react';
import { CustomButton } from './CustomButton';

describe('CustomButton', () => {
    test('CustomButton render', () => {
        render(<CustomButton>TEST</CustomButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();// выведет в консоль разметку
    });
});
