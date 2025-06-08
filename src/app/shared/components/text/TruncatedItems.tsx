import React, { useState } from 'react';

export interface TruncatedItemsProps {
  items: React.ReactNode[];
  maxItems: number;
}

const TruncatedItems: React.FC<TruncatedItemsProps> = ({ items, maxItems }) => {
  const [displayAll, setDisplayAll] = useState(false);

  if (items.length <= maxItems) {
    return (
      <>
        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </>
    );
  }

  const truncatedItems = items.slice(0, maxItems);
  const remainingCount = items.length - maxItems;

  return (
    <>
      {truncatedItems.map((item, index) => (
        <span key={index}>{item}</span>
      ))}

      {remainingCount > 0 && !displayAll ? (
        <span className="text-muted">
          {' '}
          +{remainingCount} más
        </span>
      ) : (
        <></>
      )}

      {displayAll ? (
        <>
          {items.slice(maxItems).map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          <span onClick={() => setDisplayAll(!displayAll)} className="text-muted">
            {' '}
            (Ocultar)
          </span>
        </>
      ) : (
        <span onClick={() => setDisplayAll(!displayAll)} className="text-muted">
          {' '}
          (Mostrar todos)
        </span>
      )}
    </>
  );
};


export default TruncatedItems;