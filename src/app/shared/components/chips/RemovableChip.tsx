import { textToRGB } from '../../helpers/colors';

export interface RemovableChipProps {
  text: string;
  onRemove: () => void;
}

const RemovableChip: React.FC<RemovableChipProps> = ({ onRemove, text }) => {
  return (
    <div
      className="d-inline-flex align-items-center bg-light rounded-2 px-1 py-1 me-2 mb-2"
      style={{
        backgroundColor: textToRGB(text),
        color: 'white',
        fontSize: '12px',
        borderRadius: '5px',
        userSelect: 'none',
        cursor: 'pointer',
      }}
    >
      <small className="text-muted">{text}</small>
      <button
        type="button"
        className="btn-close ms-1"
        aria-label="Close"
        onClick={onRemove}
      ></button>
    </div>
  );
};

export default RemovableChip;
