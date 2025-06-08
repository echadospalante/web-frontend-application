import React, { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxChars: number;
  textClassName?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxChars,
  textClassName,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isTruncated = text.length > maxChars;

  const toggleExpanded = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setExpanded((prev) => !prev);
  }

  const displayText =
    expanded || !isTruncated ? text : text.slice(0, maxChars) + '...';

  return (
    <p  className={textClassName}>
      {displayText}{' '}
      {isTruncated && (
        <span
          className="text-primary fw-bold"
          role="button"
          onClick={toggleExpanded}
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </span>
      )}
    </p>
  );
};

export default TruncatedText;
