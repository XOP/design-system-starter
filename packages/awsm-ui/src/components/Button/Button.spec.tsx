import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from './';
import { styles } from './Button.css';

describe('Button', () => {
  it('should render with given children', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply the variant style', () => {
    render(<Button variant="ghost">Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toHaveClass(styles({ variant: 'ghost' }));
  });

  it('should apply the styles according to props', () => {
    render(
      <Button color="secondary" variant="ghost" size="small">
        Click me
      </Button>,
    );
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toHaveClass(
      styles({ color: 'secondary', variant: 'ghost', size: 'small' }),
    );
  });

  it('should render in disabled state', () => {
    render(<Button disabled>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    expect(buttonElement).toBeDisabled();
  });
});
