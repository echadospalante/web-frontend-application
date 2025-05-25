import { PublicationType } from "echadospalante-domain";
import { textToRGB } from "../../helpers/colors";

type PublicationTypeIconProps = {
  type: PublicationType;
};

const PublicationTypeIcon = ({ type }: PublicationTypeIconProps) => {
  return (
    <section>
      <span
        className="badge w-100 px-2 py-1"
        style={{ backgroundColor: textToRGB(type) }}
      >
        {type === PublicationType.STANDARD ? (
          <span className="d-flex flex-column align-items-center justify-content-center">
            <i className="mdi mdi-newspaper-variant-outline fs-2"></i>
            Estándar
          </span>
        ) : (
          ""
        )}
        {type === PublicationType.ACHIEVEMENT ? (
          <span className="d-flex flex-column align-items-center justify-content-center">
            <i className="mdi mdi-medal-outline fs-2"></i>
            <span className="p-1">Logro</span>
          </span>
        ) : (
          ""
        )}
        {type === PublicationType.ANNOUNCEMENT ? (
          <span className="d-flex flex-column align-items-center justify-content-center">
            <i className="mdi mdi-bullhorn-outline fs-2"></i>Anuncio
          </span>
        ) : (
          ""
        )}
        {type === PublicationType.BEHIND_THE_SCENES ? (
          <span className="d-flex flex-column align-items-center justify-content-center">
            <i className="mdi mdi-layers-search-outline fs-2"></i>Detrás de
            cámaras
          </span>
        ) : (
          ""
        )}
        {type === PublicationType.PROMOTION ? (
          <span className="d-flex flex-column align-items-center justify-content-center">
            <i className="bx bx-purchase-tag fs-2"></i>
            Promoción
          </span>
        ) : (
          ""
        )}
      </span>
    </section>
  );
};

export default PublicationTypeIcon;
