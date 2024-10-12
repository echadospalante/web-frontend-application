import React, { useEffect, useMemo, useState } from "react";

import { Container, Row } from "reactstrap";
import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import VentureCard from "../../../../shared/components/card/VentureCard";
import { Venture } from "echadospalante-core";

const AccountVenturesPage = () => {
  //meta title
  document.title = "Tus emprendimientos | Echadospalante";
  const [ventures, setVentures] = useState<Venture[]>([
    {
      id: "123",
      name: "Some test venturename",
      slug: "some-test-name",
      coverPhoto:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      description: "Soem awesome description",
      active: true,
      verified: true,
      ownerDetail: undefined,
      categories: [
        {
          id: "123",
          name: "Some Awesome",
          description: "Some awesome desc of the category",
          slug: "some-category",
          users: [],
          ventures: [],
        },
        {
          id: "456",
          name: "Some cat 2",
          description: "Some awesome desc of the category 2",
          slug: "some-category-2",
          users: [],
          ventures: [],
        },
      ],
      contact: undefined,
      location: undefined,
      createdAt: new Date(),
    },
    {
      id: "456",
      name: "Cremas marielita",
      slug: "cremas marielita",
      coverPhoto:
        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      description:
        "Cremas marielita es un emprendimiento de cremas ubicado en la Ceja, Antoniquia, a la orden las cremas",
      active: true,
      verified: true,
      ownerDetail: undefined,
      categories: [
        {
          id: "123",
          name: "Cremas",
          description: "Some awesome desc of the category",
          slug: "some-category",
          users: [],
          ventures: [],
        },
        {
          id: "456",
          name: "Helados",
          description: "Some awesome desc of the category 2",
          slug: "some-category-2",
          users: [],
          ventures: [],
        },
      ],
      contact: undefined,
      location: undefined,
      createdAt: new Date(),
    },
  ]);

  return (
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumb title="Cuenta" breadcrumbItem="Tus emprendimientos" />

        <Row>
          {/* Import Cards */}
          {ventures.map((venture, index) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
          {/* <Row>
                <Pagination
                  perPageData={size}
                  length={total}
                  currentPage={page + 1}
                  setCurrentPage={() => {}}
                  paginationDiv="col-lg-12"
                  paginationClass="pagination pagination-rounded justify-content-center mt-3 mb-4 pb-1"
                />
              </Row> */}
        </Row>
      </Container>
    </div>
  );
};

export default AccountVenturesPage;
