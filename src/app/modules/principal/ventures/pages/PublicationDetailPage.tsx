import { Fragment } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "reactstrap";
import VenturePublicationCard from "../../../../shared/components/card/VenturePublicationCard";
import usePublicationDetail from "../hooks/usePublicationDetail";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../../config/redux/reducers/shared/user-interface.reducer";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import AlertWithReload from "../../../../shared/components/alert/AlertWithReload";

const PublicationDetailPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!params.slug?.trim()) {
    dispatch(
      setGlobalAlert({
        message: "No se ha encontrado la publicación",
        title: "Error",
        timeout: 10000,
        severity: SeverityLevel.ERROR,
      })
    );
    return (
      <Fragment>
        <Navigate to="/principal/feed" />;
      </Fragment>
    );
  }

  const { error, loading, fetchPublicationDetail, publication } =
    usePublicationDetail(params.slug);

  if (loading) {
    return <AppSpinner />;
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Container className="d-flex flex-column">
          <AlertWithReload
            message={
              "Error al cargar el detalle de la publicación, intente nuevamente"
            }
            onReload={fetchPublicationDetail}
          />

          <div className="d-flex flex-row justify-content-center">
            <img width={"50%"} src={"/images/error-img.png"} alt="" />
          </div>

          <div className="d-flex flex-row justify-content-center mt-5">
            <Button color="warning" type="button" onClick={() => navigate(-1)}>
              <i className="bx bxs-left-arrow-square me-2"></i> Ir atrás
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <Fragment>
      <Container>
        {publication && (
          <VenturePublicationCard
            detailButton={false}
            publication={publication}
          />
        )}

        <div className="mt-5">
          <h6 className="font-size-13">
            <i className="bx bx-message-dots text-muted align-middle me-1"></i>{" "}
            Comentarios:
          </h6>

          <div>
            <div className="d-flex py-3">
              <div className="flex-shrink-0 me-3">
                <div className="avatar-xs">
                  <div className="avatar-title rounded-circle bg-light text-primary">
                    <i className="bx bxs-user"></i>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="font-size-14 mb-1">
                  Delores Williams{" "}
                  <small className="text-muted float-end">1 hr Ago</small>
                </h5>
                <p className="text-muted">
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual
                </p>
                <div>
                  <Link to="#" className="text-success">
                    <i className="mdi mdi-reply"></i> Reply
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex py-3 border-top">
              <div className="flex-shrink-0 me-3">
                <div className="avatar-xs">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                    alt=""
                    className="img-fluid d-block rounded-circle"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="font-size-14 mb-1">
                  Clarence Smith{" "}
                  <small className="text-muted float-end">2 hrs Ago</small>
                </h5>
                <p className="text-muted">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet
                </p>
                <div>
                  <Link to="#" className="text-success">
                    <i className="mdi mdi-reply"></i> Reply
                  </Link>
                </div>

                <div className="d-flex pt-3">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar-xs">
                      <div className="avatar-title rounded-circle bg-light text-primary">
                        <i className="bx bxs-user"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="font-size-14 mb-1">
                      Silvia Martinez{" "}
                      <small className="text-muted float-end">2 hrs Ago</small>
                    </h5>
                    <p className="text-muted">
                      To take a trivial example, which of us ever undertakes
                      laborious physical exercise
                    </p>
                    <div>
                      <Link to="#" className="text-success">
                        <i className="mdi mdi-reply"></i> Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex py-3 border-top">
              <div className="flex-shrink-0 me-3">
                <div className="avatar-xs">
                  <div className="avatar-title rounded-circle bg-light text-primary">
                    <i className="bx bxs-user"></i>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="font-size-14 mb-1">
                  Keith McCoy{" "}
                  <small className="text-muted float-end">12 Aug</small>
                </h5>
                <p className="text-muted">
                  Donec posuere vulputate arcu. phasellus accumsan cursus velit
                </p>
                <div>
                  <Link to="#" className="text-success">
                    <i className="mdi mdi-reply"></i> Reply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default PublicationDetailPage;
