/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import BootstrapTheme from '@fullcalendar/bootstrap';
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import {
  EventDonation,
  User,
  Venture,
  VentureEvent,
} from 'echadospalante-domain';
import { useFormik } from 'formik';
import Select from 'react-select';
import {
  Button,
  ButtonGroup,
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
} from 'reactstrap';
import * as Yup from 'yup';

import Breadcrumb from '../../../../shared/components/breadcrumb/Breadcrumb';
import AppSpinner from '../../../../shared/components/loader/Spinner';
import VentureEventsMap from '../../../../shared/components/map/EventsMap';
import DeleteModal from '../../../../shared/components/modal/DeleteModal';

const mockEvents: VentureEvent[] = [
  {
    id: '1',
    title: 'Conferencia de Tecnología',
    slug: 'conferencia-tecnologia',
    description:
      'Una conferencia sobre las últimas tendencias en tecnología y desarrollo de software.',
    coverPhoto:
      'https://via.placeholder.com/400x200/007bff/ffffff?text=Tech+Conference',
    venture: {
      id: 'v1',
      name: 'Tech Ventures',
    } as Venture,
    location: {
      id: 'l1',
      location: {
        type: 'Point',
        coordinates: [-75.5636, 6.2442],
      },
      description: 'Centro de Convenciones Plaza Mayor',
    },
    contact: {
      id: 'c1',
      email: 'info@techconf.com',
      phoneNumber: '+57 300 123 4567',
    },
    categories: [
      {
        id: 'cat1',
        name: 'Tecnología',
        slug: 'tecnologia',
        description: 'Eventos relacionados con tecnología',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    donations: [
      {
        id: 'd1',
        amount: 50000,
        currency: 'COP',
        createdAt: new Date('2024-06-01'),
        donor: {
          id: 'u1',
          firstName: 'Juan Pérez',
          email: 'juan@email.com',
        } as unknown as User,
        event: {} as VentureEvent,
      },
    ],
    datesAndHours: [
      {
        date: '2025-06-15',
        workingRanges: [
          { start: '09:00', end: '12:00' },
          { start: '14:00', end: '17:00' },
        ],
      },
    ],
    createdAt: new Date('2024-05-01'),
    updatedAt: new Date('2024-05-01'),
  },
  {
    id: '2',
    title: 'Workshop de Diseño UX',
    slug: 'workshop-diseno-ux',
    description:
      'Taller práctico sobre diseño de experiencia de usuario y mejores prácticas.',
    coverPhoto:
      'https://via.placeholder.com/400x200/28a745/ffffff?text=UX+Workshop',
    location: {
      id: 'l2',
      description: 'Coworking Space Downtown',
    },
    contact: {
      id: 'c2',
      email: 'workshop@uxdesign.com',
      phoneNumber: '+57 301 234 5678',
    },
    categories: [
      {
        id: 'cat2',
        name: 'Diseño',
        slug: 'diseno',
        description: 'Eventos de diseño y creatividad',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    donations: [],
    datesAndHours: [
      {
        date: '2025-06-20',
        workingRanges: [{ start: '10:00', end: '16:00' }],
      },
    ],
    createdAt: new Date('2024-05-10'),
    updatedAt: new Date('2024-05-10'),
  },
  {
    id: '3',
    title: 'Hackathon de Innovación',
    slug: 'hackathon-innovacion',
    description:
      'Evento de 48 horas para desarrollar soluciones innovadoras a problemas reales.',
    coverPhoto:
      'https://via.placeholder.com/400x200/dc3545/ffffff?text=Hackathon',
    location: {
      id: 'l3',
      description: 'Universidad Nacional - Campus Medellín',
    },
    contact: {
      id: 'c3',
      email: 'hackathon@innovacion.com',
    },
    categories: [
      {
        id: 'cat1',
        name: 'Tecnología',
        slug: 'tecnologia',
        description: 'Eventos relacionados con tecnología',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: 'cat3',
        name: 'Innovación',
        slug: 'innovacion',
        description: 'Eventos de innovación y emprendimiento',
        events: [],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
    ],
    donations: [
      {
        id: 'd2',
        amount: 100000,
        currency: 'COP',
        createdAt: new Date('2024-06-02'),
        donor: {
          id: 'u2',
          firstName: 'María García',
          email: 'maria@email.com',
        } as unknown as User,
        event: {} as VentureEvent,
      },
    ],
    datesAndHours: [
      {
        date: '2025-06-25',
        workingRanges: [{ start: '18:00', end: '23:59' }],
      },
      {
        date: '2025-06-26',
        workingRanges: [{ start: '00:00', end: '23:59' }],
      },
      {
        date: '2025-06-27',
        workingRanges: [{ start: '00:00', end: '18:00' }],
      },
    ],
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-05-15'),
  },
];

export enum EventsViewMode {
  calendar = 'calendar',
  map = 'map',
}

const GeneralEventsPage = () => {
  const [viewMode, setViewMode] = useState('calendar');
  const [event, setEvent] = useState<VentureEvent | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<VentureEvent | null>(null);

  const categoryValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || '',
      // category: (event && event?.category) || '',
      category: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Please Enter Your Event Name'),
      category: Yup.string().required('Please Enter Your Billing Name'),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateEvent = {
          // id: event.id,
          id: '123',
          title: values.title,
          classNames: values.category + ' text-white',
          start: new Date(),
        };
        console.log({ updateEvent });
        // update event
        // dispatch(onUpdateEvent(updateEvent));
        categoryValidation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values['title'],
          start: selectedDay ? selectedDay.date : new Date(),
          className: values['category']
            ? values['category'] + ' text-white'
            : 'bg-primary text-white',
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

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [modalCategory, setModalCategory] = useState(false);
  const [selectedDay, setSelectedDay] = useState<any>(0);

  useEffect(() => {
    if (!modalCategory && !!event && !!isEdit) {
      setTimeout(() => {
        setEvent(null);
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
    const date = arg['date'];
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
      currentSec,
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
    setEvent(null);
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
    const date = event['date'];
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
      currentSec,
    );

    const draggedEl = event.draggedEl;
    const draggedElclass = draggedEl.className;
    if (
      draggedEl.classList.contains('external-event') &&
      draggedElclass.indexOf('fc-event-draggable') == -1
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

  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week'>('month');

  // Funciones de utilidad
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const getTotalDonations = (donations: EventDonation[]) => {
    return donations.reduce((total, donation) => total + donation.amount, 0);
  };

  const getCategoryColor = (slug: string) => {
    const colors: { [key: string]: string } = {
      tecnologia: '#3b82f6',
      diseno: '#10b981',
      innovacion: '#ef4444',
      default: '#6366f1',
    };
    return colors[slug] || colors.default;
  };

  // Funciones de navegación del calendario
  const changeMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const changeWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Obtener eventos para mostrar
  const getEventsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return mockEvents.filter((event) =>
      event.datesAndHours.some((dh) => dh.date === dateStr),
    );
  };

  // Generar días del mes
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 41); // 6 weeks

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      days.push(new Date(date));
    }
    return days;
  };

  // Generar días de la semana
  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
        title={'Some title'}
        warningMessage={false}
      />
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
            {/* Header del modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedEvent.title}
              </h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              {/* Imagen de portada */}
              <div className="mb-6">
                <img
                  src={selectedEvent.coverPhoto}
                  alt={selectedEvent.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Columna izquierda */}
                <div className="space-y-4">
                  {/* Descripción */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Descripción
                    </h3>
                    <p className="text-gray-700">{selectedEvent.description}</p>
                    {selectedEvent.venture && (
                      <div className="mt-3">
                        <span className="font-medium text-gray-900">
                          Organizado por:
                        </span>{' '}
                        <span className="text-blue-600">
                          {selectedEvent.venture.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Fechas y horarios */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Fechas y Horarios
                    </h3>
                    {selectedEvent.datesAndHours.map((dateHour, index) => (
                      <div key={index} className="mb-3 last:mb-0">
                        <div className="font-medium text-gray-800 mb-1">
                          {new Date(dateHour.date).toLocaleDateString('es-CO', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="space-y-1">
                          {dateHour.workingRanges.map((range, rangeIndex) => (
                            <div
                              key={rangeIndex}
                              className="text-sm text-gray-600 ml-3"
                            >
                              • {range.start} - {range.end}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ubicación */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Ubicación
                    </h3>
                    {selectedEvent.location.description && (
                      <p className="text-gray-700 mb-2">
                        {selectedEvent.location.description}
                      </p>
                    )}
                    {selectedEvent.location.location && (
                      <div className="text-sm text-gray-500">
                        Coordenadas:{' '}
                        {selectedEvent.location.location.coordinates[1]},{' '}
                        {selectedEvent.location.location.coordinates[0]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-4">
                  {/* Contacto */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Contacto
                    </h3>
                    {selectedEvent.contact.email && (
                      <div className="mb-2">
                        <span className="font-medium text-gray-700">
                          Email:
                        </span>
                        <a
                          href={`mailto:${selectedEvent.contact.email}`}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          {selectedEvent.contact.email}
                        </a>
                      </div>
                    )}
                    {selectedEvent.contact.phoneNumber && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Teléfono:
                        </span>
                        <a
                          href={`tel:${selectedEvent.contact.phoneNumber}`}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          {selectedEvent.contact.phoneNumber}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Categorías */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Categorías
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.categories.map((category) => (
                        <span
                          key={category.id}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{
                            backgroundColor: getCategoryColor(category.slug),
                          }}
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Donaciones */}
                  {selectedEvent.donations.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Donaciones
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-gray-700">
                            Total recaudado:
                          </span>
                          <span className="ml-2 text-green-600 font-semibold">
                            {formatCurrency(
                              getTotalDonations(selectedEvent.donations),
                              'COP',
                            )}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">
                            Donadores:
                          </span>
                          <span className="ml-2">
                            {selectedEvent.donations.length}
                          </span>
                        </div>
                        <div className="mt-3">
                          <div className="text-sm font-medium text-gray-700 mb-2">
                            Últimas donaciones:
                          </div>
                          <div className="space-y-1">
                            {selectedEvent.donations
                              .slice(0, 3)
                              .map((donation) => (
                                <div
                                  key={donation.id}
                                  className="text-sm text-gray-600 flex justify-between"
                                >
                                  <span>{donation.donor.firstName}</span>
                                  <span className="font-medium">
                                    {formatCurrency(
                                      donation.amount,
                                      donation.currency,
                                    )}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Información adicional */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Información adicional
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Creado:</span>{' '}
                        {selectedEvent.createdAt.toLocaleDateString('es-CO')}
                      </div>
                      <div>
                        <span className="font-medium">Actualizado:</span>{' '}
                        {selectedEvent.updatedAt.toLocaleDateString('es-CO')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer del modal */}
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Eventos" breadcrumbItem="Calendario" />
          {/* {error && (
            <div className="alert alert-danger text-center" role="alert">
              Error al cargar los eventos, por favor intente de nuevo
            </div>
          )} */}

          {loading ? (
            <AppSpinner />
          ) : (
            <Row>
              {viewMode === 'calendar' ? (
                <Row>
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
                          slotDuration={'00:15:00'}
                          handleWindowResize={true}
                          themeSystem="bootstrap"
                          headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right:
                              'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
                          }}
                          locale={esLocale}
                          events={mockEvents}
                          editable={true}
                          droppable={true}
                          selectable={true}
                          dateClick={handleDateClick}
                          eventClick={handleEventClick}
                          drop={onDrop}
                        />
                      </CardBody>
                    </Card>

                    <Modal isOpen={modalCategory} className={''} centered>
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
                                  value={categoryValidation.values.title || ''}
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
                                    categoryValidation.values.category || ''
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

                  <Col xl={3}>
                    <Card>
                      <CardBody>
                        <div className="d-flex gap-2">
                          <Row className="flex-grow-1">
                            <Col lg={12} className="mb-3">
                              <label className="control-label">
                                Categorías
                              </label>
                              <Select
                                isDisabled={false}
                                value={[
                                  {
                                    label: 'Todas las categorías',
                                    value: '',
                                  },
                                ]}
                                isMulti={false}
                                isClearable={true}
                                isSearchable={false}
                                onChange={(selected) => {
                                  console.log({ selected });
                                }}
                                options={[
                                  {
                                    value:
                                      '132c2ae4-edc8-42ce-a490-404eac3ca5d5',
                                    label: 'Nuevos lanzamientos de productos',
                                  },
                                  {
                                    value:
                                      '54572aac-fc90-4baf-8931-fb690d5d817a',
                                    label: 'Promociones',
                                  },
                                  {
                                    value:
                                      '5553d462-6614-4aee-9650-e9f11092561a',
                                    label: 'Delicias Colombianas',
                                  },
                                  {
                                    value:
                                      '76270d32-4e72-42b4-9dd4-57e256033217',
                                    label: 'Feria de Emprendimientos',
                                  },
                                  {
                                    value:
                                      '6dd7fc2a-0938-452e-b40b-05f45b89723b',
                                    label: 'Taller de Formación',
                                  },
                                  {
                                    value:
                                      '1d61d036-4a77-41ba-b336-5235cbf927ed',
                                    label: 'Networking',
                                  },
                                  {
                                    value:
                                      '0525a26d-d086-4c7c-bccb-b93538bdc929',
                                    label: 'Lanzamiento de Producto',
                                  },
                                  {
                                    value:
                                      '6a0574c5-3cc5-4317-b9aa-cc42dbc9e526',
                                    label: 'Charla Motivacional',
                                  },
                                  {
                                    value:
                                      '22908f17-fb3e-4d55-ba63-b1fd4d2bbee7',
                                    label: 'Capacitación Técnica',
                                  },
                                  {
                                    value:
                                      'bdd1dd94-78d2-43e9-b0a7-7efca03e5943',
                                    label: 'Demostración en Vivo',
                                  },
                                  {
                                    value:
                                      '3619f61c-6cf6-4907-aef3-b8ddfbc3db65',
                                    label: 'Concurso de Emprendimientos',
                                  },
                                  {
                                    value:
                                      '5ccf9ba6-13f3-4083-b53b-5f0f52ffa828',
                                    label: 'Exposición Artesanal',
                                  },
                                  {
                                    value:
                                      '6ea16ad2-c147-41bd-8840-92e646f360f5',
                                    label: 'Festival Gastronómico',
                                  },
                                  {
                                    value:
                                      '19eac084-9e12-4caf-af24-2a5baa72ec57',
                                    label: 'Mercado Local',
                                  },
                                  {
                                    value:
                                      '9a5b0cef-e419-4fa3-8072-a6a56c612438',
                                    label: 'Seminario de Innovación',
                                  },
                                  {
                                    value:
                                      'e2be1ca8-4735-4b9a-8c09-a67d383b5b84',
                                    label: 'Círculo de Emprendedores',
                                  },
                                  {
                                    value:
                                      '630b4a58-f863-4256-aa2a-f94e9a1bdc0a',
                                    label: 'Crowdfunding en Vivo',
                                  },
                                  {
                                    value:
                                      'a734d677-42e2-4de1-8595-0bd683fd0c4d',
                                    label: 'Pitch Day',
                                  },
                                  {
                                    value:
                                      '63e19d84-750c-4e62-b2a5-cce6932364ee',
                                    label: 'Evento Cultural Comunitario',
                                  },
                                  {
                                    value:
                                      '9d98cec1-8c73-4984-b484-b4b191da58d2',
                                    label: 'Rueda de Negocios',
                                  },
                                  {
                                    value:
                                      'b1e30258-040a-47a5-8e0b-b12334d5aec2',
                                    label: 'Hackathon Social',
                                  },
                                  {
                                    value:
                                      '6074601e-d3d1-4be6-8a59-03bac7c3b7b3',
                                    label: 'Demo Day',
                                  },
                                  {
                                    value:
                                      'fe04ac3c-f89b-4d76-9ed9-a995f36243db',
                                    label: 'Formación Financiera',
                                  },
                                ]}
                              ></Select>
                            </Col>

                            <Col lg={12} className="mb-3">
                              <label className="control-label">
                                Departamentos
                              </label>
                              <Select
                                isDisabled={false}
                                value={[{ label: 'Antioquia', value: 5 }]}
                                isMulti={false}
                                isClearable={true}
                                isSearchable={false}
                                onChange={(selected) => {
                                  console.log({ selected });
                                }}
                                options={[
                                  {
                                    value: 23,
                                    label: 'Córdoba',
                                  },
                                  {
                                    value: 27,
                                    label: 'Chocó',
                                  },
                                  {
                                    value: 52,
                                    label: 'Nariño',
                                  },
                                  {
                                    value: 8,
                                    label: 'Atlántico',
                                  },
                                  {
                                    value: 68,
                                    label: 'Santander',
                                  },
                                  {
                                    value: 18,
                                    label: 'Caquetá',
                                  },
                                  {
                                    value: 5,
                                    label: 'Antioquia',
                                  },
                                  {
                                    value: 15,
                                    label: 'Boyacá',
                                  },
                                  {
                                    value: 41,
                                    label: 'Huila',
                                  },
                                  {
                                    value: 25,
                                    label: 'Cundinamarca',
                                  },
                                  {
                                    value: 44,
                                    label: 'La Guajira',
                                  },
                                  {
                                    value: 47,
                                    label: 'Magdalena',
                                  },
                                  {
                                    value: 70,
                                    label: 'Sucre',
                                  },
                                  {
                                    value: 81,
                                    label: 'Arauca',
                                  },
                                  {
                                    value: 63,
                                    label: 'Quindío',
                                  },
                                  {
                                    value: 85,
                                    label: 'Casanare',
                                  },
                                  {
                                    value: 66,
                                    label: 'Risaralda',
                                  },
                                  {
                                    value: 86,
                                    label: 'Putumayo',
                                  },
                                  {
                                    value: 73,
                                    label: 'Tolima',
                                  },
                                  {
                                    value: 94,
                                    label: 'Guainía',
                                  },
                                  {
                                    value: 99,
                                    label: 'Vichada',
                                  },
                                  {
                                    value: 97,
                                    label: 'Vaupés',
                                  },
                                  {
                                    value: 91,
                                    label: 'Amazonas',
                                  },
                                  {
                                    value: 88,
                                    label:
                                      'Archipiélago de San Andrés, Providencia y Santa Catalina',
                                  },
                                  {
                                    value: 95,
                                    label: 'Guaviare',
                                  },
                                  {
                                    value: 11,
                                    label: 'Bogotá D.C.',
                                  },
                                  {
                                    value: 17,
                                    label: 'Caldas',
                                  },
                                  {
                                    value: 13,
                                    label: 'Bolívar',
                                  },
                                  {
                                    value: 19,
                                    label: 'Cauca',
                                  },
                                  {
                                    value: 20,
                                    label: 'Cesar',
                                  },
                                ]}
                              ></Select>
                            </Col>

                            <ButtonGroup className="mb-3">
                              <Button
                                className="w-100"
                                // color={
                                //   viewMode === 'calendar'
                                //     ? 'primary'
                                //     : 'secondary'
                                // }
                                onClick={() =>
                                  setViewMode(EventsViewMode.calendar)
                                }
                                // active={viewMode === 'calendar'}
                              >
                                {viewMode === 'calendar' && (
                                  <i className="mdi mdi-check-circle-outline me-1" />
                                )}
                                Calendario
                              </Button>
                              <Button
                                className="w-100"
                                // color={
                                //   // viewMode === 'map' ? 'primary' : 'secondary'
                                // }
                                onClick={() => setViewMode('map')}
                                // active={viewMode === 'map'}
                              >
                                {/* {viewMode === 'map' && (
                                    <i className="mdi mdi-check-circle-outline me-1" />
                                  )} */}
                                Mapa
                              </Button>
                            </ButtonGroup>

                            <Col>
                              <Button color="success">
                                <i className="mdi mdi-filter me-1" />
                                Filtrar
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col lg={9}>
                    <VentureEventsMap />
                  </Col>

                  <Col lg={3}>
                    <Card>
                      <CardBody>
                        <div className="d-flex gap-2">
                          <Row className="flex-grow-1">
                            <Col lg={12} className="mb-3">
                              <label className="control-label">
                                Categorías
                              </label>
                              <Select
                                isDisabled={false}
                                value={[
                                  {
                                    label: 'Todas las categorías',
                                    value: '',
                                  },
                                ]}
                                isMulti={false}
                                isClearable={true}
                                isSearchable={false}
                                onChange={(selected) => {
                                  console.log({ selected });
                                }}
                                options={[
                                  {
                                    value:
                                      '132c2ae4-edc8-42ce-a490-404eac3ca5d5',
                                    label: 'Nuevos lanzamientos de productos',
                                  },
                                  {
                                    value:
                                      '54572aac-fc90-4baf-8931-fb690d5d817a',
                                    label: 'Promociones',
                                  },
                                  {
                                    value:
                                      '5553d462-6614-4aee-9650-e9f11092561a',
                                    label: 'Delicias Colombianas',
                                  },
                                  {
                                    value:
                                      '76270d32-4e72-42b4-9dd4-57e256033217',
                                    label: 'Feria de Emprendimientos',
                                  },
                                  {
                                    value:
                                      '6dd7fc2a-0938-452e-b40b-05f45b89723b',
                                    label: 'Taller de Formación',
                                  },
                                  {
                                    value:
                                      '1d61d036-4a77-41ba-b336-5235cbf927ed',
                                    label: 'Networking',
                                  },
                                  {
                                    value:
                                      '0525a26d-d086-4c7c-bccb-b93538bdc929',
                                    label: 'Lanzamiento de Producto',
                                  },
                                  {
                                    value:
                                      '6a0574c5-3cc5-4317-b9aa-cc42dbc9e526',
                                    label: 'Charla Motivacional',
                                  },
                                  {
                                    value:
                                      '22908f17-fb3e-4d55-ba63-b1fd4d2bbee7',
                                    label: 'Capacitación Técnica',
                                  },
                                  {
                                    value:
                                      'bdd1dd94-78d2-43e9-b0a7-7efca03e5943',
                                    label: 'Demostración en Vivo',
                                  },
                                  {
                                    value:
                                      '3619f61c-6cf6-4907-aef3-b8ddfbc3db65',
                                    label: 'Concurso de Emprendimientos',
                                  },
                                  {
                                    value:
                                      '5ccf9ba6-13f3-4083-b53b-5f0f52ffa828',
                                    label: 'Exposición Artesanal',
                                  },
                                  {
                                    value:
                                      '6ea16ad2-c147-41bd-8840-92e646f360f5',
                                    label: 'Festival Gastronómico',
                                  },
                                  {
                                    value:
                                      '19eac084-9e12-4caf-af24-2a5baa72ec57',
                                    label: 'Mercado Local',
                                  },
                                  {
                                    value:
                                      '9a5b0cef-e419-4fa3-8072-a6a56c612438',
                                    label: 'Seminario de Innovación',
                                  },
                                  {
                                    value:
                                      'e2be1ca8-4735-4b9a-8c09-a67d383b5b84',
                                    label: 'Círculo de Emprendedores',
                                  },
                                  {
                                    value:
                                      '630b4a58-f863-4256-aa2a-f94e9a1bdc0a',
                                    label: 'Crowdfunding en Vivo',
                                  },
                                  {
                                    value:
                                      'a734d677-42e2-4de1-8595-0bd683fd0c4d',
                                    label: 'Pitch Day',
                                  },
                                  {
                                    value:
                                      '63e19d84-750c-4e62-b2a5-cce6932364ee',
                                    label: 'Evento Cultural Comunitario',
                                  },
                                  {
                                    value:
                                      '9d98cec1-8c73-4984-b484-b4b191da58d2',
                                    label: 'Rueda de Negocios',
                                  },
                                  {
                                    value:
                                      'b1e30258-040a-47a5-8e0b-b12334d5aec2',
                                    label: 'Hackathon Social',
                                  },
                                  {
                                    value:
                                      '6074601e-d3d1-4be6-8a59-03bac7c3b7b3',
                                    label: 'Demo Day',
                                  },
                                  {
                                    value:
                                      'fe04ac3c-f89b-4d76-9ed9-a995f36243db',
                                    label: 'Formación Financiera',
                                  },
                                ]}
                              ></Select>
                            </Col>

                            <Col lg={12} className="mb-3">
                              <label className="control-label">
                                Departamentos
                              </label>
                              <Select
                                isDisabled={false}
                                value={[{ label: 'Antioquia', value: 5 }]}
                                isMulti={false}
                                isClearable={true}
                                isSearchable={false}
                                onChange={(selected) => {
                                  console.log({ selected });
                                }}
                                options={[
                                  {
                                    value: 23,
                                    label: 'Córdoba',
                                  },
                                  {
                                    value: 27,
                                    label: 'Chocó',
                                  },
                                  {
                                    value: 52,
                                    label: 'Nariño',
                                  },
                                  {
                                    value: 8,
                                    label: 'Atlántico',
                                  },
                                  {
                                    value: 68,
                                    label: 'Santander',
                                  },
                                  {
                                    value: 18,
                                    label: 'Caquetá',
                                  },
                                  {
                                    value: 5,
                                    label: 'Antioquia',
                                  },
                                  {
                                    value: 15,
                                    label: 'Boyacá',
                                  },
                                  {
                                    value: 41,
                                    label: 'Huila',
                                  },
                                  {
                                    value: 25,
                                    label: 'Cundinamarca',
                                  },
                                  {
                                    value: 44,
                                    label: 'La Guajira',
                                  },
                                  {
                                    value: 47,
                                    label: 'Magdalena',
                                  },
                                  {
                                    value: 70,
                                    label: 'Sucre',
                                  },
                                  {
                                    value: 81,
                                    label: 'Arauca',
                                  },
                                  {
                                    value: 63,
                                    label: 'Quindío',
                                  },
                                  {
                                    value: 85,
                                    label: 'Casanare',
                                  },
                                  {
                                    value: 66,
                                    label: 'Risaralda',
                                  },
                                  {
                                    value: 86,
                                    label: 'Putumayo',
                                  },
                                  {
                                    value: 73,
                                    label: 'Tolima',
                                  },
                                  {
                                    value: 94,
                                    label: 'Guainía',
                                  },
                                  {
                                    value: 99,
                                    label: 'Vichada',
                                  },
                                  {
                                    value: 97,
                                    label: 'Vaupés',
                                  },
                                  {
                                    value: 91,
                                    label: 'Amazonas',
                                  },
                                  {
                                    value: 88,
                                    label:
                                      'Archipiélago de San Andrés, Providencia y Santa Catalina',
                                  },
                                  {
                                    value: 95,
                                    label: 'Guaviare',
                                  },
                                  {
                                    value: 11,
                                    label: 'Bogotá D.C.',
                                  },
                                  {
                                    value: 17,
                                    label: 'Caldas',
                                  },
                                  {
                                    value: 13,
                                    label: 'Bolívar',
                                  },
                                  {
                                    value: 19,
                                    label: 'Cauca',
                                  },
                                  {
                                    value: 20,
                                    label: 'Cesar',
                                  },
                                ]}
                              ></Select>
                            </Col>

                            <ButtonGroup className="mb-3">
                              <Button
                                className="w-100"
                                // color={
                                //   viewMode === 'calendar'
                                //     ? 'primary'
                                //     : 'secondary'
                                // }
                                onClick={() =>
                                  setViewMode(EventsViewMode.calendar)
                                }
                                // active={viewMode === 'calendar'}
                              >
                                {viewMode === 'calendar' && (
                                  <i className="mdi mdi-check-circle-outline me-1" />
                                )}
                                Calendario
                              </Button>
                              <Button
                                className="w-100"
                                // color={
                                //   // viewMode === 'map' ? 'primary' : 'secondary'
                                // }
                                onClick={() => setViewMode('map')}
                                // active={viewMode === 'map'}
                              >
                                {/* {viewMode === 'map' && (
                                    <i className="mdi mdi-check-circle-outline me-1" />
                                  )} */}
                                Mapa
                              </Button>
                            </ButtonGroup>

                            <Col>
                              <Button color="success">
                                <i className="mdi mdi-filter me-1" />
                                Filtrar
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              )}
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GeneralEventsPage;
