import React, { useEffect, useMemo, useState } from "react";
import { Container, Row } from "reactstrap";

//Import Breadcrumb

//Import Cards

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import Breadcrumb from "../../../../shared/components/breadcrumb/Breadcrumb";
import AppLoading from "../../../../shared/components/loader/AppLoading";
import Pagination from "../../../../shared/components/pagination/Pagination";
import VentureCard from "../../../../shared/components/card/VentureCard";
import { Venture } from "echadospalante-core";

const ProjectsGrid = () => {
  //meta title
  document.title =
    "Projects Grid | Skote - Vite React Admin & Dashboard Template";
  const [ventures, setVentures] = useState<Venture[]>([
    {
      id: "",
      name: "",
      slug: "",
      coverPhoto: "",
      description: "",
      active: false,
      verified: false,
      detail: {
        id: "",
        venture: undefined,
        events: [],
        sponsorships: [],
        subscriptions: [],
        publications: [],
      },
      ownerDetail: {
        id: "",
        gender: "M",
        birthDate: new Date(),
        user: undefined,
        municipality: {
          id: 0,
          name: "",
          department: {
            id: 0,
            name: "",
            municipalities: [],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          userDetails: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        comments: [],
        donations: [],
        notifications: [],
        publicationClaps: [],
        sponsorships: [],
        subscriptions: [],
        ventures: [],
      },
      categories: [],
      contact: undefined,
      location: undefined,
      createdAt: new Date(),
    },
  ]);

  return (
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
        <Breadcrumb title="Projects" breadcrumbItem="Projects Grid" />

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

export default ProjectsGrid;
