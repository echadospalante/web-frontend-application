import useVentureCategoriesStats from "../../../modules/admin/general/hooks/useVentureCategoriesStats";

const VentureCategoriesList = () => {
  const { isError, isLoading, refetch, ventureCategoriesStats } = useVentureCategoriesStats();

  return (
    <ul className="list-unstyled fw-medium">
      {ventureCategoriesStats.sort(
        (a, b) => b.venturesCount - a.venturesCount
      ).slice(0, 5).map((item, index) => (
        <li key={index}>
          <span className="text-muted py-2 d-block">
            {/* <i className={`${item.icon} me-1`}></i>  */}
            <i className={`mdi mdi-chevron-right me-1`}></i>
            {item.name} ({item.venturesCount})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default VentureCategoriesList;