import React, { useState } from 'react';

export interface TruncatedItemsProps {
  items: React.ReactNode[];
  maxItems: number;
  all: 'todas' | 'todos';
}

const TruncatedItems: React.FC<TruncatedItemsProps> = ({
  items,
  maxItems,
  all,
}) => {
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

  const handleToggleDisplayAll = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ): void => {
    event.stopPropagation();
    event.preventDefault();
    setDisplayAll(!displayAll);
  };

  return (
    <>
      {truncatedItems.map((item, index) => (
        <span key={index}>{item}</span>
      ))}

      {remainingCount > 0 && !displayAll ? (
        <span className="text-muted"> +{remainingCount} más</span>
      ) : (
        <></>
      )}

      {displayAll ? (
        <>
          {items.slice(maxItems).map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          <span
            onClick={handleToggleDisplayAll}
            className="text-muted fw-medium"
          >
            {' '}
            (Ocultar)
          </span>
        </>
      ) : (
        <span onClick={handleToggleDisplayAll} className="text-muted fw-medium">
          {' '}
          (Mostrar {all})
        </span>
      )}
    </>
  );
};


export default TruncatedItems;