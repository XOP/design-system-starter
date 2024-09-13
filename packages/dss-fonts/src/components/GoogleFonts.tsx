interface FontsProps {
  weights: number[] | string[];
  display?: 'swap' | 'auto' | 'block' | 'fallback' | 'optional';
  preconnect?: boolean;
}

const Fonts = ({
  weights,
  display = 'swap',
  preconnect = true,
}: FontsProps) => {
  const weightsParam = weights.join(';');
  const fontsHref = `https://fonts.googleapis.com/css2?family=Play:wght@${weightsParam}&display=${display}`;

  return (
    <>
      {preconnect && (
        <>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </>
      )}

      <link
        href={fontsHref}
        rel="stylesheet"
      />
    </>
  );
};

export default Fonts;
