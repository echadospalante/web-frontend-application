/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";

import BootstrapTheme from "@fullcalendar/bootstrap";
import esLocale from "@fullcalendar/core/locales/es";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import { useFormik } from "formik";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import * as Yup from "yup";

//Import Breadcrumb

//import Images

// import {
//   addNewEvent as onAddNewEvent,
//   deleteEvent as onDeleteEvent,
//   getCategories as onGetCategories,
//   getEvents as onGetEvents,
//   updateEvent as onUpdateEvent,
// } from "../../store/actions";

// import DeleteModal from "./DeleteModal";

//redux
import { useDispatch } from "react-redux";
import Select from "react-select";
import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import AppSpinner from "../../../../shared/components/loader/Spinner";
import DeleteModal from "../../../../shared/components/modal/DeleteModal";

const QuotesCalenderPage = () => {
  const dispatch = useDispatch();

  const [event, setEvent] = useState<any>({});
  const [isEdit, setIsEdit] = useState(false);

  const categoryValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || "",
      category: (event && event.category) || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Enter Your Billing Name"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateEvent = {
          id: event.id,
          title: values.title,
          classNames: values.category + " text-white",
          start: event.start,
        };
        console.log({ updateEvent });
        // update event
        // dispatch(onUpdateEvent(updateEvent));
        categoryValidation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedDay ? selectedDay.date : new Date(),
          className: values["category"]
            ? values["category"] + " text-white"
            : "bg-primary text-white",
        };
        console.log({ newEvent });
        // save new event
        // dispatch(onAddNewEvent(newEvent));
        categoryValidation.resetForm();
      }
      toggle();
    },
  });

  const [events] = useState([]);
  const [categories] = useState([]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [modalCategory, setModalCategory] = useState(false);
  const [selectedDay, setSelectedDay] = useState<any>(0);

  useEffect(() => {
    // dispatch(onGetCategories());
    // dispatch(onGetEvents());
    new Draggable(document.getElementById("external-events")!, {
      itemSelector: ".external-event",
    });
  }, [dispatch]);

  useEffect(() => {
    if (!modalCategory && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({});
        setIsEdit(false);
      }, 500);
    }
  }, [modalCategory, event, isEdit]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    if (modalCategory) {
      setModalCategory(false);
      setEvent(null);
      setIsEdit(false);
    } else {
      setModalCategory(true);
    }
  };

  /**
   * Handling date click on calendar
   */
  const handleDateClick = (arg: any) => {
    const date = arg["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );
    const modifiedData = { ...arg, date: modifiedDate };

    setSelectedDay(modifiedData);
    toggle();
  };

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = (arg: any) => {
    const event = arg.event;
    setEvent({
      id: event.id,
      title: event.title,
      // title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    });
    setDeleteId(event.id);
    setIsEdit(true);
    setModalCategory(true);
    toggle();
  };

  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    if (deleteId) {
      // dispatch(onDeleteEvent(deleteId));
    }
    setDeleteModal(false);
  };

  /**
   * On category darg event
   */
  const onDrag = (event: any) => {
    event.preventDefault();
  };

  /**
   * On calendar drop event
   */
  const onDrop = (event: any) => {
    const date = event["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );

    const draggedEl = event.draggedEl;
    const draggedElclass = draggedEl.className;
    if (
      draggedEl.classList.contains("external-event") &&
      draggedElclass.indexOf("fc-event-draggable") == -1
    ) {
      const modifiedData = {
        id: Math.floor(Math.random() * 100),
        title: draggedEl.innerText,
        start: modifiedDate,
        className: draggedEl.className,
      };
      console.log({ modifiedData });
      // dispatch(onAddNewEvent(modifiedData));
    }
  };

  //set the local language

  const [error] = useState(true);
  const [loading] = useState(false);

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
        title={"Some title"}
        warningMessage={false}
      />
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Cotizaciones" breadcrumbItem="Calendario" />
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              Error al cargar los eventos, por favor intente de nuevo
            </div>
          )}

          {loading ? (
            <AppSpinner />
          ) : (
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xl={3}>
                    <Card>
                      <CardBody>
                        <div className="d-flex gap-2">
                          <Row className="flex-grow-1">
                            <Col lg={12} className="mb-3">
                              <label className="control-label">Área</label>
                              <Select
                                isDisabled={false}
                                value={[{ label: "Área 1", value: 0 }]}
                                isMulti={false}
                                isClearable={true}
                                isSearchable={false}
                                onChange={(selected) => {
                                  console.log({ selected });
                                }}
                                options={[
                                  { label: "Área 1", value: 0 },
                                  { label: "Área 2", value: 1 },
                                  { label: "Área 3", value: 2 },
                                  { label: "Área 4", value: 3 },
                                  { label: "Área 5", value: 4 },
                                ]}
                              ></Select>
                            </Col>

                            <Col lg={12} className="mb-3">
                              <label className="control-label">
                                Cotización
                              </label>
                              <Select
                                isDisabled={false}
                                value={[{ label: "Cotización 1", value: 0 }]}
                                isMulti={false}
                                isClearable={true}
                                isSearchable={false}
                                onChange={(selected) => {
                                  console.log({ selected });
                                }}
                                options={[
                                  { label: "Cotización 1", value: 0 },
                                  { label: "Cotización 2", value: 1 },
                                  { label: "Cotización 3", value: 2 },
                                  { label: "Cotización 4", value: 3 },
                                  { label: "Cotización 5", value: 4 },
                                ]}
                              ></Select>
                            </Col>
                          </Row>
                        </div>

                        <Button
                          color="info"
                          className="font-16"
                          onClick={toggle}
                        >
                          <i className="bx bx-user-plus me-1" />
                          Agregar participantes
                        </Button>

                        <hr />

                        <Button
                          color="success"
                          className="font-16"
                          onClick={toggle}
                        >
                          <i className="bx bx-rocket me-1" />
                          Crear nuevo evento
                        </Button>

                        <div id="external-events" className="mt-2">
                          <br />

                          {categories &&
                            (categories || [])?.map((category: any) => (
                              <div
                                className={`${category.type} external-event fc-event text-white`}
                                key={"cat-" + category.id}
                                draggable
                                onDrag={(event) => onDrag(event)}
                              >
                                <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                                {category.title}
                              </div>
                            ))}
                        </div>

                        <Row className="justify-content-center mt-5">
                          <img
                            src="/images/calendar.svg"
                            alt=""
                            className="img-fluid d-block"
                          />
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xl={9}>
                    <Card>
                      <CardBody>
                        {/* fullcalendar control */}
                        <FullCalendar
                          plugins={[
                            BootstrapTheme,
                            dayGridPlugin,
                            listPlugin,
                            interactionPlugin,
                          ]}
                          slotDuration={"00:15:00"}
                          handleWindowResize={true}
                          themeSystem="bootstrap"
                          headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right:
                              "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                          }}
                          locale={esLocale}
                          events={events}
                          editable={true}
                          droppable={true}
                          selectable={true}
                          dateClick={handleDateClick}
                          eventClick={handleEventClick}
                          drop={onDrop}
                        />
                      </CardBody>
                    </Card>

                    <Modal isOpen={modalCategory} className={""} centered>
                      <ModalHeader toggle={toggle} tag="h5">
                        Edit Event
                      </ModalHeader>
                      <ModalBody className="p-4">
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            categoryValidation.handleSubmit();
                            return false;
                          }}
                        >
                          <Row>
                            <Col xs={12}>
                              <div className="mb-3">
                                <Label>Event Name</Label>
                                <Input
                                  name="title"
                                  type="text"
                                  placeholder="Insert Event Name"
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={categoryValidation.values.title || ""}
                                  invalid={
                                    categoryValidation.touched.title &&
                                    categoryValidation.errors.title
                                      ? true
                                      : false
                                  }
                                />
                                {categoryValidation.touched.title &&
                                categoryValidation.errors.title ? (
                                  <FormFeedback type="invalid">
                                    Some error
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col xs={12}>
                              <div className="mb-3">
                                <Label>Category</Label>
                                <Input
                                  type="select"
                                  name="category"
                                  placeholder="All Day Event"
                                  onChange={categoryValidation.handleChange}
                                  onBlur={categoryValidation.handleBlur}
                                  value={
                                    categoryValidation.values.category || ""
                                  }
                                  invalid={
                                    categoryValidation.touched.category &&
                                    categoryValidation.errors.category
                                      ? true
                                      : false
                                  }
                                >
                                  <option value="bg-danger">Danger</option>
                                  <option value="bg-success">Success</option>
                                  <option value="bg-primary">Primary</option>
                                  <option value="bg-info">Info</option>
                                  <option value="bg-dark">Dark</option>
                                  <option value="bg-warning">Warning</option>
                                </Input>
                                {categoryValidation.touched.category &&
                                categoryValidation.errors.category ? (
                                  <FormFeedback type="invalid">
                                    Some error
                                  </FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                          </Row>

                          <Row className="mt-2">
                            <Col xs={6}>
                              {isEdit && (
                                <Button
                                  type="button"
                                  color="btn btn-danger"
                                  id="btn-delete-event"
                                  onClick={() => {
                                    toggle();
                                    setDeleteModal(true);
                                  }}
                                >
                                  Delete
                                </Button>
                              )}
                            </Col>

                            <Col xs={6} className="text-end">
                              <Button
                                color="light"
                                type="button"
                                className="me-1"
                                onClick={toggle}
                              >
                                Close
                              </Button>
                              <Button
                                type="submit"
                                color="success"
                                id="btn-save-event"
                              >
                                Save
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </ModalBody>
                    </Modal>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default QuotesCalenderPage;
