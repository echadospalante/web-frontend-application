import { Fragment, useState } from 'react';

import { Venture } from 'echadospalante-domain';
import { TabContent, TabPane } from 'reactstrap';

import AdminVentureEventsCalendar from '../calendar/AdminVentureEventsCalendar';
import AdminVenturePublicationsTable from '../table/AdminVenturePublicationsTable';
import AdminVentureSponsorsTable from '../table/AdminVentureSponsorsTable';
import AdminVentureDetailTabs from '../tabs/AdminVentureDetailTabs';

type AdminVentureDetailProps = {
  venture: Venture;
};

const AdminVentureDetail = ({ venture }: AdminVentureDetailProps) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggleActiveTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Fragment>
      <AdminVentureDetailTabs
        activeTab={activeTab}
        toggleCustom={toggleActiveTab}
      />

      <TabContent activeTab={activeTab} className="p-3 text-muted">
        <TabPane tabId="1">
          <AdminVenturePublicationsTable ventureId={venture.id} />{' '}
        </TabPane>

        <TabPane tabId="2">
          <AdminVentureEventsCalendar ventureId={venture.id} />{' '}
        </TabPane>

        <TabPane tabId="3">
          <AdminVentureSponsorsTable ventureId={venture.id} />{' '}
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

export default AdminVentureDetail;
