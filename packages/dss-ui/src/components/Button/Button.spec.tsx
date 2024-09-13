import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Button } from './';
import { styles } from './Button.css';

describe('Button', () => {
  it('should render with given children', () => {
    const { container } = render(<Button>Click me</Button>);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    const { container } = render(<Button>Click me</Button>);

    expect(container.firstChild).toHaveClass(
      styles({ variant: 'solid', color: 'accent', size: 'regular' })
    );
  });

  it('should apply the variant style', () => {
    const { container } = render(<Button variant="ghost">Click me</Button>);

    expect(container.firstChild).toHaveClass(styles({ variant: 'ghost' }));
  });

  it('should apply the styles according to props', () => {
    const { container } = render(
      <Button
        color="neutral"
        variant="ghost"
        size="small"
      >
        Click me
      </Button>
    );

    expect(container.firstChild).toHaveClass(
      styles({ color: 'neutral', variant: 'ghost', size: 'small' })
    );
  });

  it('should render in disabled state', () => {
    const { container } = render(<Button disabled>Click me</Button>);

    expect(container.firstChild).toBeDisabled();
  });
});
