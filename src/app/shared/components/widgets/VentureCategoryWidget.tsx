import { Card, CardBody } from 'reactstrap';

type CompanyWidgetProps = {
  name: string;
  count: number;
  percentageGrowth: number;
  icon: string;
  backgroundColor: string;
  checked: boolean;
};

const VentureCategoryWidget = ({
  count,
  icon,
  name,
  checked,
  backgroundColor,
  percentageGrowth,
}: CompanyWidgetProps) => {
  return (
    <Card className="border characterization__card">
      {checked && (
        <i className="bx bx-check-circle declaration__check-icon"></i>
      )}
      <CardBody>
        <div className="d-flex align-items-center">
          <div className="avatar-xs me-2">
            <span
              className="avatar-title rounded-circle font-size-16"
              style={{ backgroundColor }}
            >
              <span className={'badge font-size-20'}>
                <i className={icon}></i>
              </span>
            </span>
          </div>
          <h5 className="font-size-14 mb-0">{name}</h5>
        </div>
        <div className="text-muted mt-2">
          <h5>
            <i className="mdi mdi-plus text-success" />
            {count} Emprendimientos
          </h5>

          <small>
            {percentageGrowth}% Nuevos emprendimientos el último mes
          </small>
        </div>
      </CardBody>
    </Card>
  );
};

export default VentureCategoryWidget;
