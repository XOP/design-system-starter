import { useState } from 'react';

import Button from '../Button/Button';

interface CopyCodeProps {
  data: string;
  className?: string;
  onClick?: (data: string) => void;
}

const CopyCode = (props: CopyCodeProps) => {
  const { className, data, onClick } = props;

  const [busy, setBusy] = useState<boolean>(false);

  const handleCopy = async () => {
    setBusy(true);

    try {
      await navigator.clipboard.writeText(data);

      setTimeout(() => {
        setBusy(false);
      }, 800);
    } catch (e) {
      console.error('Clipboard Error', e);
    }

    onClick?.(data);
  };

  return (
    <span className={className}>
      <Button
        onClick={handleCopy}
        title="Copy to clipboard"
        disabled={busy}
      >
        {busy ? 'Copied!' : 'Copy'}
      </Button>
    </span>
  );
};

export default CopyCode;
