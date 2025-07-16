

import { Badge, Nav, NavItem, NavLink } from 'reactstrap';

export interface VentureSubscriptionsCategoryTabsProps {
  categories: { category: { id: string; name: string }; total: number }[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string) => void;
}

const VentureSubscriptionsCategoryTabs = ({
  categories,
  activeCategory,
  onCategoryChange,
}: VentureSubscriptionsCategoryTabsProps) => {
  return (
    <div className="mb-4" style={{ overflowX: 'auto' }}>
      <Nav pills className="flex-nowrap gx-1" style={{ whiteSpace: 'nowrap' }}>
        {categories.map((stat) => (
          <NavItem key={stat.category.id} className="flex-shrink-0">
            <NavLink
              className={`cursor-pointer ${activeCategory === stat.category.id ? 'active' : ''}`}
              // Change active color to success
              style={{
                backgroundColor:
                  activeCategory === stat.category.id ? '#198754' : '',
                color: activeCategory === stat.category.id ? 'white' : '',
              }}
              onClick={() => onCategoryChange(stat.category.id)}
            >
              {stat.category.name}
              <Badge color="white" className="ms-2 px-2 text-black fw-bold">
                {stat.total}
              </Badge>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default VentureSubscriptionsCategoryTabs;