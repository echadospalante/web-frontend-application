import { Nav, NavItem, NavLink } from 'reactstrap';

export type VentureDetailTabsProps = {
  activeTab: string;
  toggleCustom: (tab: string) => void;
};

const VentureDetailTabsCopy = (props: VentureDetailTabsProps) => {
  const { activeTab, toggleCustom } = props;

  return (
    <Nav tabs className="nav-tabs-custom nav-justified">
      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === '1' ? 'active' : ''}`}
          onClick={() => {
            toggleCustom('1');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="fas fa-home"></i>
          </span>
          <span className="d-none d-sm-block">Publicaciones</span>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === '2' ? 'active' : ''}`}
          onClick={() => {
            toggleCustom('2');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Eventos</span>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          style={{ cursor: 'pointer' }}
          className={`${activeTab === '3' ? 'active' : ''}`}
          onClick={() => {
            toggleCustom('3');
          }}
        >
          <span className="d-block d-sm-none">
            <i className="far fa-user"></i>
          </span>
          <span className="d-none d-sm-block">Patrocinadores</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default VentureDetailTabsCopy;
