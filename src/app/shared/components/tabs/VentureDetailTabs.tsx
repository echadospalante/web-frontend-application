import React from 'react';

import { NavLink, Nav, NavItem, Badge } from 'reactstrap';
import { VentureDetailTab } from '../../../modules/principal/ventures/pages/VentureDetailPage';

export interface VentureDetailTabsProps {
  activeTab: string;
  setActiveTab: (tab: VentureDetailTab) => void;
  publicationsCount: number;
  eventsCount: number;
}

const VentureDetailTabs: React.FC<VentureDetailTabsProps> = ({
  activeTab,
  setActiveTab,
  eventsCount,
  publicationsCount,
}) => {
  return (
    <Nav tabs className="border-bottom">
      <NavItem>
        <NavLink
          className={`cursor-pointer ${activeTab === 'publications' ? 'active' : ''}`}
          onClick={() => setActiveTab('publications')}
        >
          {/*<MessageCircle size={16} className="me-2" />*/}
          <i className="mdi mdi-bullhorn-outline me-2"></i>
          Publicaciones
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={`cursor-pointer ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          <i className="mdi mdi-calendar-outline me-2"></i>
          Eventos
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={`cursor-pointer ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          <i className="mdi mdi-information-outline me-2"></i>
          Acerca de
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default VentureDetailTabs;
