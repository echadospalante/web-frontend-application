import React, { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from 'reactstrap';

import departments from '../../data/geo/departments';

interface FormData {
  fullName: string;
  email: string;
  department: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  department?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  // Reemplaza "xeokzgnj" con tu ID de Formspree
  const [state, handleSubmit] = useForm('xeokzgnj');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    department: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo válido';
    }

    if (!formData.department) {
      newErrors.department = 'Por favor selecciona tu departamento';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Por favor ingresa un número de teléfono válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejo del cambio en los inputs
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error específico cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Manejo del envío del formulario
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Crear FormData para Formspree
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);

    await handleSubmit(formDataToSend);
  };

  if (state.succeeded) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="border-0">
              <CardBody className="text-center p-5">
                <div className="mb-4">
                  <div className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center">
                    <span className="text-white" style={{ fontSize: '2rem' }}>
                      ✓
                    </span>
                  </div>
                </div>
                <h2 className="text-success mb-3">¡Mensaje Enviado!</h2>
                <p className="text-muted mb-4">
                  Gracias por contactarnos. Hemos recibido tu mensaje y te
                  responderemos pronto.
                </p>
                <Button
                  color="success"
                  onClick={() => {
                    setFormData({
                      fullName: '',
                      email: '',
                      department: '',
                      phone: '',
                      message: '',
                    });
                    setErrors({});
                    window.location.reload();
                  }}
                >
                  Enviar otro mensaje
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={10}>
          <Card className="border-0">
            <CardHeader className="bg-success text-white text-center py-4">
              <h2 className="mb-0">Formulario de Contacto</h2>
              <p className="mb-0 mt-2 opacity-75">Nos encantaría saber de ti</p>
            </CardHeader>
            <CardBody className="p-4">
              {state.errors && (
                <Alert color="danger" className="mb-4">
                  <h6>Error al enviar el formulario:</h6>
                  <ValidationError
                    prefix="Form"
                    field=""
                    errors={state.errors}
                  />
                </Alert>
              )}

              <form onSubmit={onSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fullName" className="fw-bold">
                        Nombre Completo <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Ingresa tu nombre completo"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        invalid={!!errors.fullName}
                        className="form-control-lg"
                      />
                      {errors.fullName && (
                        <div className="text-danger small mt-1">
                          {errors.fullName}
                        </div>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="email" className="fw-bold">
                        Correo Electrónico{' '}
                        <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        invalid={!!errors.email}
                        className="form-control-lg"
                      />
                      {errors.email && (
                        <div className="text-danger small mt-1">
                          {errors.email}
                        </div>
                      )}
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-danger small mt-1"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="department" className="fw-bold">
                        Departamento <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="select"
                        name="department"
                        id="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        invalid={!!errors.department}
                        className="form-control-lg"
                      >
                        <option value="">Selecciona tu departamento</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </Input>
                      {errors.department && (
                        <div className="text-danger small mt-1">
                          {errors.department}
                        </div>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone" className="fw-bold">
                        Teléfono <span className="text-danger">*</span>
                      </Label>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Ej: +57 300 123 4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        invalid={!!errors.phone}
                        className="form-control-lg"
                      />
                      {errors.phone && (
                        <div className="text-danger small mt-1">
                          {errors.phone}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label for="message" className="fw-bold">
                    Mensaje <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleInputChange}
                    invalid={!!errors.message}
                    style={{ resize: 'vertical' }}
                  />
                  {errors.message && (
                    <div className="text-danger small mt-1">
                      {errors.message}
                    </div>
                  )}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-danger small mt-1"
                  />
                </FormGroup>

                <div className="text-center mt-4">
                  <Button
                    type="submit"
                    color="success"
                    size="lg"
                    disabled={state.submitting}
                    className="px-5 py-2"
                  >
                    {state.submitting ? (
                      <>
                        <Spinner color="success" size="sm" className="me-2" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensaje'
                    )}
                  </Button>
                </div>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Los campos marcados con{' '}
                    <span className="text-danger">*</span> son obligatorios
                  </small>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
