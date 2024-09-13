import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Switch } from '.';
import { styles, indicatorStyles } from './Switch.css';

describe('Switch', () => {
  it('should render component with default props', () => {
    const { container } = render(<Switch />);

    const switchComponent = container.firstChild;

    expect(switchComponent).toBeInTheDocument();
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should render component with a custom label', () => {
    const { getByText } = render(<Switch>Label</Switch>);
    const switchComponent = getByText('Label');

    expect(switchComponent).toBeInTheDocument();
  });

  it('should render with default styles', () => {
    const { container } = render(<Switch />);

    const switchComponent = container.firstChild;

    expect(switchComponent).toHaveClass(styles({ size: 'regular' }));

    const switchIndicator = container.getElementsByClassName(
      indicatorStyles({})
    )[0];

    expect(switchIndicator).toBeInTheDocument();
    expect(switchIndicator).toHaveClass(indicatorStyles({ color: 'accent' }));
  });

  it('should apply color from props', () => {
    const { container } = render(<Switch color="neutral">Label</Switch>);

    const switchIndicator = container.getElementsByClassName(
      indicatorStyles({})
    )[0];

    expect(switchIndicator).toBeInTheDocument();
    expect(switchIndicator).toHaveClass(indicatorStyles({ color: 'neutral' }));
  });

  it('should apply the styles according to props', () => {
    const { container } = render(
      <Switch
        color="neutral"
        size="small"
      >
        Label
      </Switch>
    );

    const switchComponent = container.firstChild;

    expect(switchComponent).toHaveClass(styles({ size: 'small' }));

    const switchIndicator = container.getElementsByClassName(
      indicatorStyles({})
    )[0];

    expect(switchIndicator).toBeInTheDocument();
    expect(switchIndicator).toHaveClass(indicatorStyles({ color: 'neutral' }));
  });

  it('should render selected', () => {
    const { container } = render(<Switch isSelected />);

    const switchComponent = container.firstChild;
    const switchInput = container.querySelector('input');

    expect(switchComponent).toHaveAttribute('data-selected', 'true');
    expect(switchInput).toBeChecked();
  });

  it('should render in disabled state', () => {
    const { container } = render(<Switch isDisabled />);

    const switchComponent = container.firstChild;
    const switchInput = container.querySelector('input');

    expect(switchComponent).toHaveAttribute('data-disabled', 'true');
    expect(switchInput).toBeDisabled();
  });
});
