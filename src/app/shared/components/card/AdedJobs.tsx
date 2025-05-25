import React from 'react';

// //Import Scrollbar
import SimpleBar from 'simplebar-react';
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const recentAddedJobsData = [
  {
    logo: '/epl.png',
    jobTitle: 'Test 1',
    company: 'Test emprendimiento',
    postedTime: '53',
    postedText: 'sec ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 2',
    company: 'Test emprendimiento',
    postedTime: '47',
    postedText: 'min ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 3',
    company: 'Test emprendimiento',
    postedTime: '1',
    postedText: 'hrs ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 4',
    company: 'Test emprendimiento',
    postedTime: '2',
    postedText: 'hrs ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 5',
    company: 'Test emprendimiento',
    postedTime: '8',
    postedText: 'hrs ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 1',
    company: 'Test emprendimiento',
    postedTime: '1',
    postedText: 'days ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 6',
    company: 'Test emprendimiento',
    postedTime: '2',
    postedText: 'days ago',
  },
  {
    logo: '/epl.png',
    jobTitle: 'Test 7',
    company: 'Test emprendimiento',
    postedTime: '3',
    postedText: 'days ago',
  },
];

const AddedJobs = () => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Test</h4>
            <SimpleBar style={{ maxHeight: '376px' }}>
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
                          Ver detalle
                        </DropdownItem>
                        <DropdownItem href="#!">Acciones</DropdownItem>
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
