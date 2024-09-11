import React from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";

const recentAddedJobsData = [
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "Marketing Director",
    company: "Themesbrand, USA",
    postedTime: "53",
    postedText: "sec ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "Frontend Developer",
    company: "Themesbrand, Hong-Kong",
    postedTime: "47",
    postedText: "min ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "React Developer",
    company: "Creative Agency, Danemark",
    postedTime: "1",
    postedText: "hrs ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "NodeJs Developer",
    company: "Echadospa'lante Themes, Louisiana",
    postedTime: "2",
    postedText: "hrs ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "Digital Marketing",
    company: "Web Technology pvt.Ltd, Danemark",
    postedTime: "8",
    postedText: "hrs ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "Marketing Director",
    company: "Echadospa'lante Technology, Dominica",
    postedTime: "1",
    postedText: "days ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "Business Associate",
    company: "Themesbrand, Russia",
    postedTime: "2",
    postedText: "days ago",
  },
  {
    logo: "/images/logos/7s-logo-small.png",
    jobTitle: "Backend Developer",
    company: "Adobe Agency, Malaysia",
    postedTime: "3",
    postedText: "days ago",
  },
];

const AddedJobs = () => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Recent Added Jobs</h4>
            <SimpleBar style={{ maxHeight: "376px" }}>
              <div className="vstack gap-4">
                {(recentAddedJobsData || [])?.map((job, index) => (
                  <div className="d-flex" key={index}>
                    <img
                      src={job.logo}
                      alt=""
                      height="40"
                      className="rounded"
                    />
                    <div className="ms-2 flex-grow-1">
                      <h6 className="mb-1 font-size-15">
                        <Link to="/job-details" className="text-body">
                          {job.jobTitle}
                        </Link>
                      </h6>
                      <p className="text-muted mb-0">
                        {job.company} - <b>{job.postedTime}</b> {job.postedText}
                      </p>
                    </div>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="btn btn-light"
                        type="button"
                        id={`dropdownMenuButton${index}`}
                      >
                        <i className="bx bx-dots-vertical-rounded"></i>
                      </DropdownToggle>
                      <DropdownMenu
                        className="dropdown-menu"
                        aria-labelledby={`dropdownMenuButton${index}`}
                      >
                        <DropdownItem href="/job-details">
                          View Details
                        </DropdownItem>
                        <DropdownItem href="#!">Apply Now</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                ))}
              </div>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default AddedJobs;
