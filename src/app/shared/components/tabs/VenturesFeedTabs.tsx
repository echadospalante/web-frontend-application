import { NavItem, NavLink } from 'reactstrap';

export type AdminVenturesTabsProps = {
  activeTab: string;
  toggleCustom: (tab: string) => void;
};

const AdminVenturesTabs = (props: AdminVenturesTabsProps) => {
  const { activeTab, toggleCustom } = props;

  return (
    <ul className="nav flex align-items-center nav-pills">
      <NavItem>
        <NavLink className="disabled" to="#" tabIndex={-1}>
          Vista:
        </NavLink>
      </NavItem>

      <NavItem>
        <div
          className={`nav-link cursor-pointer ${
            activeTab === '1' ? 'active' : ''
          }`}
          onClick={() => {
            toggleCustom('1');
          }}
        >
          <i className="mdi mdi-grid fs-3"></i>
        </div>
      </NavItem>

      <NavItem>
        <div
          className={`nav-link cursor-pointer ${
            activeTab === '2' ? 'active' : ''
          }`}
          onClick={() => {
            toggleCustom('2');
          }}
        >
          <i className="mdi mdi-map-outline fs-3"></i>
        </div>
      </NavItem>
    </ul>
  );
};

export default AdminVenturesTabs;
