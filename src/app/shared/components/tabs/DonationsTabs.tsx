import { Nav, NavItem, NavLink } from 'reactstrap';

export type DonationsTabProps = {
  activeTab: string;
  toggle: (tab: string) => void;
};

const DonationsTabs = (props: DonationsTabProps) => {
  const { activeTab, toggle } = props;
  return (
    <Nav tabs className="nav-tabs-custom nav-justified">
      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === '1' ? 'active' : ''}`}
          onClick={() => {
            toggle('1');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="fas fa-home"></i>
          </span>
          <span className="d-none d-sm-block">Enviadas</span>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === '2' ? 'active' : ''}`}
          onClick={() => {
            toggle('2');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Recibidas</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default DonationsTabs;
