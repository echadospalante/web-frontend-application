import { useSelector } from 'react-redux';
import { selectEvents } from '../../../config/redux/reducers/principal/events.reducer';
import EventCard from '../card/EventCard';
import SearchablePagination from '../pagination/SearchablePagination';
import useEventsFilters from '../../../modules/principal/ventures/hooks/useEventsFilters';
import { Col, Row } from 'reactstrap';
import useFetchEvents from '../../../modules/principal/ventures/hooks/useFetchEvents';
import AppSpinner from '../loader/Spinner';
import AlertWithReload from '../alert/AlertWithReload';

const VentureEventsList = () => {
  const { filters } = useSelector(selectEvents);
  const { total, isLoading, isError, items, retryFetch } = useFetchEvents();

  const { setSkip } = useEventsFilters();
  const { pagination } = filters;
  const { skip, take } = pagination;

  if(isLoading) {
    return <AppSpinner />
  }

  if(isError) {
    return (
      <Col lg={12} className="text-center mt-5">
        <AlertWithReload
          message="Ocurrió un error al intentar cargar los eventos. Por favor, intenta recargar la página."
          onReload={retryFetch}
        />
      </Col>
    );
  }

  if(items.length === 0) {
    return (
      <Col lg={12} className="text-center mt-5">
        <p>No hay eventos disponibles con los filtros seleccionados, intenta con otros filtros o vuelve más tarde.</p>
      </Col>
    )
  }

  return (
    <Row>
      <Col
        lg={6}
        md={6}
        sm={12}
        className="d-flex  w-100 justify-content-center px-4 d-flex align-items-center"
      >
        <p>
          Página {Math.floor(skip / take) + 1} de {Math.ceil(total / take)} (
          {total} eventos)
        </p>

        <SearchablePagination
          perPageData={take}
          length={total}
          currentPage={Math.floor(skip / take) + 1}
          setCurrentPage={() => setSkip(Math.floor(skip / take) + 1)}
          isShowingPageLength={false}
          paginationDiv="col-lg-12"
          showPageNumbers={false}
          showInputText
          paginationClass="pagination pagination-rounded align-items-center justify-content-center mt-3 mb-4 pb-1 px-3"
        />
      </Col>

      {items.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <Col
        lg={6}
        md={6}
        sm={12}
        className="d-flex  w-100 justify-content-center px-4 d-flex align-items-center"
      >
        <p>
          Página {Math.floor(skip / take) + 1} de {Math.ceil(total / take)} (
          {total} eventos)
        </p>

        <SearchablePagination
          perPageData={take}
          length={total}
          currentPage={Math.floor(skip / take) + 1}
          setCurrentPage={() => setSkip(Math.floor(skip / take) + 1)}
          isShowingPageLength={false}
          paginationDiv="col-lg-12"
          showPageNumbers={false}
          showInputText
          paginationClass="pagination pagination-rounded align-items-center justify-content-center mt-3 mb-4 pb-1 px-3"
        />
      </Col>
    </Row>
  );
};

export default VentureEventsList;
