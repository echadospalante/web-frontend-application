import React from "react";
import QuotesCalenderPage from "../../../modules/principal/ventures/pages/QuotesCalendarPage";

type AdminVentureEventsTableProps = {
  ventureId: string;
};
const AdminVentureEventsTable = ({
  ventureId,
}: AdminVentureEventsTableProps) => {
  return (
    <div>
      <QuotesCalenderPage />
    </div>
  );
};

export default AdminVentureEventsTable;
