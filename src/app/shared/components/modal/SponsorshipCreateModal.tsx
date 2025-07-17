import { useState } from 'react';

import { Venture } from 'echadospalante-domain';
import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';

import { selectAuthentication } from '../../../config/redux/reducers/auth/auth.reducer';
import useVentureSponsorship from '../../../modules/principal/ventures/hooks/useVentureSponsor';
import InfoAlert from '../alert/InfoAlert';

type SponsorshipCreateModalProps = {
  modal: boolean;
  toggle: () => void;
  venture: Venture;
};

const SponsorshipCreateModal = (props: SponsorshipCreateModalProps) => {
  const { modal, toggle, venture } = props;
  const { firstName, lastName } = useSelector(selectAuthentication);
  const { error, form, isError, isLoading, isSuccess } = useVentureSponsorship(
    venture.id,
  );

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);

  const predefinedAmounts = [10000, 50000, 100000, 500000, 1000000];

  const handleAmountSelect = (monthlyAmount: number) => {
    setSelectedAmount(monthlyAmount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(value ? parseInt(value) : null);
      form.setFieldTouched('monthlyAmount', true);
      form.setFieldValue('monthlyAmount', value ? parseInt(value) : 0);
      setIsCustom(true);
    }
  };

  const formatCurrency = (monthlyAmount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(monthlyAmount);
  };

  const handleDonate = () => {
    if (selectedAmount && selectedAmount > 0) {
      console.log(
        `Donando ${formatCurrency(selectedAmount)} para el evento ${venture.name}`,
      );
    }
  };

  return (
    <Modal size="md" isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle} tag="h4">
        Patrocinio para el emprendimiento <b>{venture.name}</b>
      </ModalHeader>
      <ModalBody className="pt-0">
        <Row>
          <Card className="my-0 py-0">
            <CardBody>
              <CardTitle className="mb-4">Detalles de la tarjeta</CardTitle>
              <InfoAlert
                title="¡Por favor Tenga en Cuenta!"
                message={
                  'Este pago es simplemente una simulación de un pago en línea, y no se procesará ningún pago real.'
                }
                highlightedMessage="Por favor, no ingrese información de tarjeta de crédito real."
              />

              <div className="card bg-primary text-white visa-card mb-0">
                <CardBody>
                  <div>
                    <i className="bx bxl-visa visa-pattern" />

                    <div className="float-end">
                      <i className="bx bxl-visa visa-logo display-3" />
                    </div>

                    <div>
                      <i
                        className="bx bx-chip h1 text-warning"
                        style={{ lineHeight: 1 }}
                      />
                    </div>
                  </div>

                  <Row className="mt-5">
                    <Col xs="3">
                      <small>
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                      </small>
                    </Col>

                    <Col xs="3">
                      <small>
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                      </small>
                    </Col>

                    <Col xs="3">
                      <small>
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                        <i className="fas fa-star-of-life m-1" />
                      </small>
                    </Col>

                    <Col xs="3">
                      <p>
                        <span className="m-1 fw-medium">6</span>
                        <span className="m-1 fw-medium">3</span>
                        <span className="m-1 fw-medium">4</span>
                        <span className="m-1 fw-medium">0</span>
                      </p>
                    </Col>
                  </Row>

                  <div className="mt-5">
                    <h5 className="text-white float-end mb-0">12/30</h5>
                    <h5 className="text-white mb-0">
                      {firstName!.split(' ')[0].toUpperCase()}{' '}
                      {lastName!.split(' ')[0].toUpperCase()}
                    </h5>
                  </div>
                </CardBody>
              </div>
            </CardBody>
          </Card>
        </Row>

        <Row>
          <Col>
            <Card className="py-0 my-0">
              <CardBody>
                <CardTitle className="mb-3">
                  Selecciona el monto a patrocinar mensualmente
                </CardTitle>

                <Row className="mb-3">
                  {predefinedAmounts.map((monthlyAmount) => (
                    <Col key={monthlyAmount} xs="6" md="4" className="mb-2">
                      <Button
                        color={
                          selectedAmount === monthlyAmount && !isCustom
                            ? 'primary'
                            : 'outline-primary'
                        }
                        onClick={() => handleAmountSelect(monthlyAmount)}
                        className="w-100"
                        size="sm"
                      >
                        {formatCurrency(monthlyAmount)}
                      </Button>
                    </Col>
                  ))}
                </Row>

                <Row>
                  <Col>
                    <Label for="customAmount" className="form-label">
                      Cantidad personalizada:
                    </Label>
                    <div className="input-group">
                      <span className="input-group-text">COP</span>
                      <Input
                        id="monthlyAmount"
                        name="monthlyAmount"
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        placeholder="Ingrese el monto"
                        className={isCustom ? 'border-primary' : ''}
                      />
                    </div>

                    {form.touched.monthlyAmount &&
                      form.errors.monthlyAmount && (
                        <div className="text-danger mt-2">
                          <p>{form.errors.monthlyAmount}</p>
                        </div>
                      )}
                  </Col>
                </Row>

                {selectedAmount && (
                  <Row className="mt-3">
                    <Col>
                      <div className="alert alert-info">
                        <strong>Monto seleccionado: </strong>
                        {formatCurrency(selectedAmount)}
                      </div>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="my-0 py-0">
          <Col>
            <div className="text-end">
              <Button
                onClick={handleDonate}
                color="success"
                type="submit"
                className="me-2"
                disabled={!selectedAmount || selectedAmount <= 0 || isLoading}
              >
                <i className="bx bx-heart me-1"></i>
                {isLoading ? 'Procesando...' : 'Patrocinar'}
              </Button>
              <Button onClick={toggle} color="danger" className="save-user">
                <i className="bx bx-x me-1"></i>
                Cerrar
              </Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default SponsorshipCreateModal;
