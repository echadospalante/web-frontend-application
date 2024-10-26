import { Venture } from "echadospalante-core";
import { Fragment, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import AdminVentureEventsTable from "../table/AdminVentureEventsTable";
import AdminVenturePublicationsTable from "../table/AdminVenturePublicationsTable";
import AdminVentureSponsorsTable from "../table/AdminVentureSponsorsTable";
import AdminVentureDetailTabs from "../tabs/VentureDetailTabs";

type AdminVentureDetailProps = {
  venture: Venture;
};

const AdminVentureDetail = ({ venture }: AdminVentureDetailProps) => {
  const [activeTab, setActiveTab] = useState("1");

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
          <AdminVenturePublicationsTable ventureId={venture.id} />{" "}
        </TabPane>

        <TabPane tabId="2">
          <AdminVentureEventsTable ventureId={venture.id} />{" "}
        </TabPane>

        <TabPane tabId="4">
          <AdminVentureSponsorsTable ventureId={venture.id} />{" "}
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

export default AdminVentureDetail;
