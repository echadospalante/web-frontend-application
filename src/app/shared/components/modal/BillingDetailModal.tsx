/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";

type EcommerceOrdersModalProps = {
  onCloseClick: () => void;
  show: boolean;
  warningMessage: boolean;
  title: string;
};

const EcommerceOrdersModal = ({
  show,
  onCloseClick,
}: EcommerceOrdersModalProps) => {
  const [transaction] = useState({
    orderId: "#SK2540",
    billingName: "Neal Matthews",
    total: 255,
  });
  return (
    <Modal
      isOpen={show}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex={-1}
      toggle={onCloseClick}
    >
      <div className="modal-content">
        <ModalHeader toggle={onCloseClick}>Detalle de la factura</ModalHeader>
        <ModalBody>
          <p className="mb-2">
            Product id:{" "}
            <span className="text-primary">
              {transaction.orderId || "#SK2540"}
            </span>
          </p>
          <p className="mb-4">
            Billing Name:{" "}
            <span className="text-primary">
              {transaction.billingName || "Neal Matthews"}
            </span>
          </p>

          <div className="table-responsive">
            <Table className="table align-middle table-nowrap">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <img src="/epl.png" alt="" className="avatar-sm" />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">
                        Wireless Headphone (Black)
                      </h5>
                      <p className="text-muted mb-0">$ 225 x 1</p>
                    </div>
                  </td>
                  <td>$ 255</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div>
                      <img src="/epl.png" alt="" className="avatar-sm" />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">
                        Hoodie (Blue)
                      </h5>
                      <p className="text-muted mb-0">$ 145 x 1</p>
                    </div>
                  </td>
                  <td>$ 145</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h6 className="m-0 text-right">Sub Total:</h6>
                  </td>
                  <td>$ {transaction.total || 400}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h6 className="m-0 text-right">Shipping:</h6>
                  </td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h6 className="m-0 text-right">Total:</h6>
                  </td>
                  <td>$ {transaction.total || 400}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={onCloseClick}>
            <i className="bx bx-printer"></i> Imprimir
          </Button>
          <Button type="button" color="primary" onClick={onCloseClick}>
            Cerrar
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  );
};

EcommerceOrdersModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default EcommerceOrdersModal;
