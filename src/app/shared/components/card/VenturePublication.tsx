import { Fragment } from "react";
import { Link } from "react-router-dom";

const VenturePublication = () => {
  return (
    <Fragment>
      <hr className="mb-4" />

      <div>
        <h5>
          <Link to="#" className="text-dark">
            Beautiful Day with Friends
          </Link>
        </h5>
        <p className="text-muted">10 Ago, 2024</p>

        <div className="position-relative mb-3">
          <img src="/epl.png" alt="" className="img-thumbnail" />
        </div>

        <ul className="list-inline">
          <li className="list-inline-item mr-3">
            <Link to="#" className="text-muted">
              <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{" "}
              Nombre Categoría
            </Link>
          </li>
          <li className="list-inline-item mr-3">
            <Link to="#" className="text-muted">
              <i className="bx bx-comment-dots align-middle text-muted me-1"></i>{" "}
              12 Comentarios
            </Link>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero
          sint recusandae ullam molestiae eveniet perferendis alias, omnis
          laboriosam dolorem dignissimos iure quas soluta mollitia error quaerat
          repudiandae at aliquam!
        </p>

        <div>
          <Link to="#" className="text-primary">
            Ver detalle <i className="mdi mdi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default VenturePublication;
