import React, { useEffect } from 'react';
import { Button, Label } from 'reactstrap';
import useUploadImage from '../../../modules/principal/account/hooks/useUploadImage';

export interface UploadImageButtonProps {
  type: 'VENTURE' | 'PUBLICATION' | 'EVENT';
  onUpload: (fileUrl: string) => void;
  btnText?: string;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({
  onUpload,
  type,
  btnText = 'Subir imágen',
}) => {
  const {
    uploadVentureImage,
    uploadPublicationImage,
    uploadEventImage,
    isError,
    isLoading,
    isSuccess,
    uploadResultUrl,
  } = useUploadImage();

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (file) {
      switch (type) {
        case 'VENTURE':
          uploadVentureImage(file);
          break;
        case 'PUBLICATION':
          uploadPublicationImage(file);
          break;
        case 'EVENT':
          uploadEventImage(file);
          break;
        default:
          console.error('Tipo de imagen no soportado');
      }
    }
  }

  useEffect(() => {
    if (uploadResultUrl) {
      onUpload(uploadResultUrl);
    }
  }, [uploadResultUrl, onUpload]);

  return (
    // <Button className="btn btn-primary" color="primary" onClick={() => {}}>
    //   <i className="bx bx-upload me-1" />
    //   {btnText}
    //   <input
    //     type="file"
    //     accept="image/*"
    //     onChange={handleImageChange}
    //     style={{ display: 'none' }}
    //     id={`upload-image-${type}`}
    //   />
    // </Button>

    <>
      <Label
        htmlFor="project-image-input"
        className="mb-0"
        disabled={isLoading}
        id="projectImageInput"
      >
        <div className="m-1">
          <div className="d-flex bg-primary py-2 justify-content-center cursor-pointer shadow font-size-16" style={{ borderRadius: '3px' }}>
            <i className="bx bxs-image-alt me-1"></i>
            <small>
              {isLoading
                ? 'Subiendo imagen...'
                : isError
                ? 'Error al subir la imagen. Inténtalo de nuevo.'
                : isSuccess
                ? 'Imagen subida correctamente (Haz click para cambiarla)'
                : btnText}
            </small>
          </div>
        </div>
      </Label>

      <input
        className="form-control d-none"
        id="project-image-input"
        disabled={isLoading}
        type="file"
        multiple={false}
        accept="image/png, image/gif, image/jpeg"
        onChange={handleImageChange}
      />
    </>
  );
};

export default UploadImageButton;
