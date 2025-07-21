import { Nav, NavItem, NavLink } from 'reactstrap';

export type DonationsTabProps = {
  activeTab: string;
  toggle: (tab: string) => void;
};

const SponsorshipsTabs = (props: DonationsTabProps) => {
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
          <span className="d-none d-sm-block">Míos hacia otros emprendimientos</span>
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
          <span className="d-none d-sm-block">De otros hacia mis emprendimientos</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SponsorshipsTabs;
