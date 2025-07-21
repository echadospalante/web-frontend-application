import { Nav, NavItem, NavLink } from 'reactstrap';

export type EventTabs = 'details' | 'donations';

export type DonationsTabProps = {
  activeTab: EventTabs;
  toggle: (tab: EventTabs) => void;
};

const EventOwnerTabs = (props: DonationsTabProps) => {
  const { activeTab, toggle } = props;
  return (
    <Nav tabs className="nav-tabs-custom nav-justified">
      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => {
            toggle('details');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="fas fa-home"></i>
          </span>
          <span className="d-none d-sm-block">Información del evento</span>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === 'donations' ? 'active' : ''}`}
          onClick={() => {
            toggle('donations');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Donaciones</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default EventOwnerTabs;
