import classnames from 'classnames';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';
import {
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';

type CreateDeclarationModal = {
  modal: boolean;
  toggleModal: () => void;
};

const DeclarationCreateModal = ({
  modal,
  toggleModal,
}: CreateDeclarationModal) => {
  const [activeTab, setActiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleAcceptedFiles = (files: File[]) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      }),
    );
    setSelectedFiles(files);
  };

  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const toggleTab = (tab: number) => {
    if (activeTab !== tab) {
      const modifiedSteps = [...passedSteps];
      modifiedSteps.push(tab);
      setActiveTab(tab);
      setPassedSteps(modifiedSteps);
    }
  };

  return (
    <Modal
      isOpen={modal}
      role="dialog"
      autoFocus={true}
      fullscreen
      centered
      id="verificationModal"
      toggle={toggleModal}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggleModal}>
          Crear Delaración de Interés
        </ModalHeader>
        <ModalBody>
          <div id="kyc-verify-wizard" className="wizard clearfix">
            <div className="steps clearfix">
              <ul>
                <NavItem
                  className={classnames({
                    current: activeTab === 1,
                    'mx-1': true,
                  })}
                >
                  <NavLink
                    className={classnames({
                      active: activeTab === 1,
                      'position-relative': true,
                    })}
                    onClick={() => {
                      toggleTab(1);
                    }}
                    disabled={!passedSteps.includes(1)}
                  >
                    <span className="number">1.</span>
                    Asesor
                    <i className="bx bx-check-circle declaration__check-icon"></i>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames({
                    current: activeTab === 2,
                    'mx-1': true,
                  })}
                >
                  <NavLink
                    className={classnames({
                      active: activeTab === 2,
                      'position-relative': true,
                    })}
                    onClick={() => {
                      toggleTab(2);
                    }}
                    disabled={!passedSteps.includes(2)}
                  >
                    <span className="number">2.</span>
                    Cliente/Empresa
                    <i className="bx bx-check-circle declaration__check-icon"></i>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames({
                    current: activeTab === 3,
                    'mx-1': true,
                  })}
                >
                  <NavLink
                    className={classnames({
                      active: activeTab === 3,
                      'position-relative': true,
                    })}
                    onClick={() => {
                      toggleTab(3);
                    }}
                    disabled={!passedSteps.includes(3)}
                  >
                    <span className="number">3.</span>
                    Información de la Venta
                    <i className="bx bx-check-circle declaration__check-icon"></i>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames({
                    current: activeTab === 3,
                    'mx-1': true,
                  })}
                >
                  <NavLink
                    className={classnames({
                      active: activeTab === 3,
                      'position-relative': true,
                    })}
                    onClick={() => {
                      toggleTab(3);
                    }}
                    disabled={!passedSteps.includes(3)}
                  >
                    <span className="number">4.</span>
                    Encuentro
                    <i className="bx bx-check-circle declaration__check-icon"></i>
                  </NavLink>
                </NavItem>

                <NavItem
                  className={classnames({
                    current: activeTab === 3,
                    'mx-1': true,
                  })}
                >
                  <NavLink
                    className={classnames({
                      active: activeTab === 3,
                      'position-relative': true,
                    })}
                    onClick={() => {
                      toggleTab(3);
                    }}
                    disabled={!passedSteps.includes(3)}
                  >
                    <span className="number">5.</span>
                    Confirma
                  </NavLink>
                </NavItem>
              </ul>
            </div>

            <div className="content clearfix">
              <TabContent
                activeTab={activeTab}
                className="twitter-bs-wizard-tab-content"
              >
                <TabPane tabId={1} id="personal-info">
                  <Form>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <Label
                            htmlFor="kycfirstname-input"
                            className="form-label"
                          >
                            First name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="kycfirstname-input"
                            placeholder="Enter First name"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <Label
                            htmlFor="kyclastname-input"
                            className="form-label"
                          >
                            Last name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="kyclastname-input"
                            placeholder="Enter Last name"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <Label
                            htmlFor="kycphoneno-input"
                            className="form-label"
                          >
                            Phone
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="kycphoneno-input"
                            placeholder="Enter Phone number"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="mb-3">
                          <Label
                            htmlFor="kycbirthdate-input"
                            className="form-label"
                          >
                            Date of birth
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="kycbirthdate-input"
                            placeholder="Enter Date of birth"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup className="mb-3">
                          <Label
                            htmlFor="kycselectcity-input"
                            className="form-label"
                          >
                            City
                          </Label>
                          <select
                            className="form-select"
                            id="kycselectcity-input"
                          >
                            <option>San Francisco</option>
                            <option>Los Angeles</option>
                            <option>San Diego</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </TabPane>
                <TabPane tabId={2} id="confirm-email">
                  <div>
                    <Form>
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="basicpill-pancard-input">
                              PAN Card
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-pancard-input"
                              placeholder="PAN Card No."
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="basicpill-vatno-input">
                              VAT/TIN No.
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-vatno-input"
                              placeholder="VAT/TIN No"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="basicpill-cstno-input">
                              CST No.
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-cstno-input"
                              placeholder="CST No."
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="basicpill-servicetax-input">
                              Service Tax No.
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-servicetax-input"
                              placeholder="Service Tax No."
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="basicpill-companyuin-input">
                              Company UIN
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-companyuin-input"
                              placeholder="Company UIN"
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label htmlFor="basicpill-declaration-input">
                              Declaration
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="basicpill-Declaration-input"
                              placeholder="Declaration"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </TabPane>
                <TabPane tabId={3} id="doc-verification">
                  <h5 className="font-size-14 mb-3">
                    Upload document file for a verification
                  </h5>
                  <div className="kyc-doc-verification mb-3">
                    <Dropzone
                      onDrop={(acceptedFiles) =>
                        handleAcceptedFiles(acceptedFiles)
                      }
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-3">
                              <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                            </div>
                            <h4>Drop files here or click to upload.</h4>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + '-file'}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src="/epl.png"
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>Some value</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
            <div className="actions clearfix">
              <ul role="menu" aria-label="Pagination">
                <li
                  className={activeTab === 1 ? 'previous disabled' : 'previous'}
                >
                  <Link
                    to="#"
                    onClick={() => {
                      toggleTab(activeTab - 1);
                    }}
                  >
                    Previous
                  </Link>
                </li>
                <li className={activeTab === 3 ? 'next disabled' : 'next'}>
                  <Link
                    to="#"
                    onClick={() => {
                      toggleTab(activeTab + 1);
                    }}
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default DeclarationCreateModal;
