/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useState } from "react";

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Spinner,
  UncontrolledDropdown,
} from "reactstrap";

import { QuoteArea } from "../../modules/principal/commercial/domain/area";
import { QuotesBoard } from "../../modules/principal/commercial/domain/board";
import { QuoteState } from "../../modules/principal/commercial/domain/state";
import QuotesFilter from "../filters/QuoteFilters";

const AgileQuotesBoard = () => {
  document.title = "Tablero de Cotizaciones | echadospalante Admin";

  const dispatch = useDispatch();
  const [images, setImages] = useState<any[]>([]);

  const [modal, setModal] = useState(false);
  const toggle = () => {
    if (modal) {
      setModal(false);
      setImages([]);
      setCard(null);
    } else {
      setModal(true);
    }
  };

  const [kanbanTasks, setkanbanTasks] = useState<QuotesBoard[]>([
    {
      id: "1",
      name: QuoteState.ACTIVE,
      cards: [
        {
          id: 1,
          name: "Nombre de la cotización",
          code: "DS20240527104034",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.ACTIVE,
        },
        {
          id: 2,
          name: "Another project",
          code: "DS20240527104035",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.ACTIVE,
        },
        {
          id: 3,
          name: "Nombre de la cotización",
          code: "DS20240527104036",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.ACTIVE,
        },
      ],
    },
    {
      id: "2",
      name: QuoteState.COMPLETED,
      cards: [
        {
          id: 4,
          name: "Nombre de la cotización",
          code: "DS20240527104034",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.COMPLETED,
        },
        {
          id: 5,
          name: "Another project",
          code: "DS20240527104035",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.COMPLETED,
        },
        {
          id: 6,
          name: "Nombre de la cotización",
          code: "DS20240527104036",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.COMPLETED,
        },
      ],
    },
    {
      id: "3",
      name: QuoteState.NOT_COMPLETED,
      cards: [
        {
          id: 7,
          name: "Nombre de la cotización",
          code: "DS20240527104034",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.NOT_COMPLETED,
        },
        {
          id: 8,
          name: "Another project",
          code: "DS20240527104035",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.NOT_COMPLETED,
        },
        {
          id: 9,
          name: "Nombre de la cotización",
          code: "DS20240527104036",
          date: new Date(),
          area: {
            id: 1,
            name: "Desarrollo de Software",
            createdAt: new Date(),
          },
          state: QuoteState.NOT_COMPLETED,
        },
      ],
    },
  ]);

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    // dispatch(onGetTasks());
  }, [dispatch]);

  const [cards, setCards] = useState<QuotesBoard[]>([]);
  const [kanbanTasksCards, setKanbanTasksCards] = useState();

  useEffect(() => {
    setCards(kanbanTasks);
  }, [kanbanTasks]);

  const onClickDelete = (card: any) => {
    if (card && card.id) {
      // dispatch(OnDeleteKanban(card.id));
    }
  };

  const [isEdit, setIsEdit] = useState(false);
  const [card, setCard] = useState<any>(null);
  // validation
  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     id: (card && card.cardId) || "",
  //     cardTitle: (card && card.cardTitle) || "",
  //     taskdesc: (card && card.taskdesc) || "",
  //     budget: (card && card.budget) || "",
  //     userImages: (card && card.userImages) || [],
  //     badgeText: (card && card.badgeText) || "",
  //     brandLogo: (card && card.brandLogo) || "",
  //     taskdesc1: (card && card.taskdesc1) || "",
  //   },
  //   validationSchema: Yup.object({
  //     cardTitle: Yup.string().required("Please Enter Your Job Title"),
  //     taskdesc: Yup.string().required("Please Enter Your Task Description"),
  //     budget: Yup.string().required("Please Enter Your budget"),
  //     badgeText: Yup.string().required("Please Enter Your Status"),
  //     userImages: Yup.array().required("Select at least one team member"),
  //   }),
  //   onSubmit: (values) => {
  //     if (isEdit) {
  //       const updatedCards = {
  //         id: card ? card.id : 0,
  //         kanId: kanbanTasksCards,
  //         cardId: values.id,
  //         title: values.cardTitle,
  //         taskdesc: values.taskdesc,
  //         budget: values.budget,
  //         date: new Date().toLocaleDateString(),
  //         badgeText: values.badgeText,
  //         badgeColor: "red",
  //         userImages: values.userImages,
  //         brandLogo: card.brandLogo,
  //         taskdesc1: card.taskdesc1,
  //       };
  //       // update Job
  //       // dispatch(onUpdateCardData(updatedCards));
  //       validation.resetForm();
  //     } else {
  //       const newCardData = {
  //         id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
  //         kanId: kanbanTasksCards,
  //         cardId: values["id"],
  //         title: values["cardTitle"],
  //         taskdesc: values["taskdesc"],
  //         budget: values["budget"],
  //         date: new Date().toLocaleDateString(),
  //         userImages: values["userImages"],
  //         badgeText: values["badgeText"],
  //         badgeColor: "red",
  //       };
  //       // dispatch(onAddCardData(newCardData));
  //       validation.resetForm();
  //     }
  //     toggle();
  //   },
  // });

  const handleCardEdit = (arg: any, line: any) => {
    setModal(true);
    setCard(arg);

    const card = arg;
    setCard({
      id: card.id,
      cardTitle: card.title,
      taskdesc: card.taskdesc,
      date: card.date,
      budget: card.budget,
      userImages: card.userImages,
      badgeText: card.badgeText,
      badgeColor: card.badgeColor,
      brandLogo: card.brandLogo,
      taskdesc1: card.taskdesc1,
    });

    setKanbanTasksCards(line.id);
    setIsEdit(true);

    toggle();
  };

  const handleAddNewCard = (line: any) => {
    setCard("");
    setIsEdit(false);
    toggle();
    setKanbanTasksCards(line.id);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return; // If dropped outside a valid drop area, do nothing

    const { source, destination } = result;
    // Reorder cards within the same card line
    if (source.droppableId === destination.droppableId) {
      const line = cards.find((line) => line.id === source.droppableId);
      const reorderedCards = Array.from(line?.cards || []);
      const [movedCard] = reorderedCards.splice(source.index, 1);
      reorderedCards.splice(destination.index, 0, movedCard);

      const updatedLines = cards.map((line) => {
        if (line.id === source.droppableId) {
          return { ...line, cards: reorderedCards };
        }
        return line;
      });

      setCards(updatedLines);
    } else {
      // Move card between different card lines
      const sourceLine = cards.find((line) => line.id === source.droppableId);
      const destinationLine = cards.find(
        (line) => line.id === destination.droppableId
      );
      const sourceCards = Array.from(sourceLine?.cards || []);
      const destinationCards = Array.from(destinationLine?.cards || []);
      const [movedCard] = sourceCards.splice(source.index, 1);
      destinationCards.splice(destination.index, 0, movedCard);

      const updatedLines = cards.map((line) => {
        if (line.id === source.droppableId) {
          return { ...line, cards: sourceCards };
        } else if (line.id === destination.droppableId) {
          return { ...line, cards: destinationCards };
        }
        return line;
      });

      setCards(updatedLines);
    }
  };

  const getBadgeColor = (text: any) => {
    switch (text) {
      case "Waiting":
        return "secondary";
      case "Approved":
        return "primary";
      case "Pending":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <Card>
      <CardBody className="border-bottom">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 card-title flex-grow-1">
            Seguimiento de Cotizaciones
          </h5>
          <div className="flex-shrink-0">
            <Button
              type="button"
              // onClick={fetchQuotes}
              className="btn btn-light me-1"
            >
              <i className="mdi mdi-refresh"></i>
            </Button>
          </div>
        </div>
      </CardBody>

      <CardBody>
        <Fragment>
          {isLoading ? (
            <Spinner setLoading={setLoading} />
          ) : (
            <Row>
              <QuotesFilter />

              <DragDropContext onDragEnd={handleDragEnd}>
                {cards.map((line) => (
                  <Col lg={4} key={line.id}>
                    <Card>
                      <CardBody>
                        <UncontrolledDropdown className="float-end">
                          <DropdownToggle
                            className="arrow-none"
                            tag="a"
                            color="white"
                          >
                            <i className="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <h4 className="card-title mb-4">
                          {`${line.name.replace("_", " ")}S`}
                        </h4>
                        <Droppable droppableId={line.id}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {line.cards.map((card, index) => {
                                const badgeColor = getBadgeColor(card.state);
                                return (
                                  <Draggable
                                    key={card.id}
                                    draggableId={card.id + ""}
                                    index={index}
                                  >
                                    {(provided) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        // className="card task-list"
                                        className="pb-1 task-list"
                                        id={line.name + "-task"}
                                      >
                                        <div
                                          className="card task-box"
                                          id="uptask-1"
                                        >
                                          <CardBody>
                                            <UncontrolledDropdown className="float-end">
                                              <DropdownToggle
                                                className="arrow-none"
                                                tag="a"
                                                color="white"
                                              >
                                                <i className="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                                              </DropdownToggle>

                                              <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem
                                                  className="edittask-details"
                                                  onClick={() =>
                                                    handleCardEdit(card, line)
                                                  }
                                                >
                                                  Edit
                                                </DropdownItem>
                                                <DropdownItem
                                                  className="deletetask"
                                                  onClick={() =>
                                                    onClickDelete(card)
                                                  }
                                                >
                                                  Delete
                                                </DropdownItem>
                                              </DropdownMenu>
                                            </UncontrolledDropdown>
                                            <div className="float-end ms-2">
                                              <span
                                                className={`badge rounded-pill badge-soft-${badgeColor} font-size-12`}
                                                id="task-status"
                                              >
                                                {card.area.name}
                                              </span>
                                            </div>
                                            <div>
                                              <h5 className="font-size-15">
                                                <Link
                                                  to="#"
                                                  className="text-dark"
                                                  id="task-name"
                                                >
                                                  {card.name}
                                                </Link>
                                              </h5>
                                              <p className="text-muted">
                                                {card.date.toISOString()}
                                              </p>
                                            </div>
                                            <ul
                                              className="ps-3 mb-4 text-muted"
                                              id="task-desc"
                                            >
                                              <li className="py-1">
                                                SOme item
                                              </li>
                                              <li className="py-1">
                                                SOme item
                                              </li>
                                            </ul>

                                            <div className="avatar-group float-start task-assigne"></div>

                                            <div className="text-end">
                                              <h5
                                                className="font-size-15 mb-1"
                                                id="task-budget"
                                              >
                                                $ Some value
                                              </h5>
                                              <p className="mb-0 text-muted">
                                                Budget
                                              </p>
                                            </div>
                                          </CardBody>
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </DragDropContext>
            </Row>
          )}
        </Fragment>
      </CardBody>
    </Card>
  );
};

export default AgileQuotesBoard;
