import LeftMenu from '../../../shared/components/manu/LeftMenu';
import Navbar from '../../../shared/components/navbar/Navbar';

const UserTable = () => {
  return (
    <main>
      <Navbar />
      <LeftMenu />
      <div className="page">
        <div className="content">
          <div className="main-content">
            <div className="box">
              <div className="box-header border-none">
                <div className="flex justify-between">
                  <div>
                    <div className="box-title pb-0">USERS TABLE</div>
                    <p className="text-xs text-gray-500 font-normal">
                      Example of Valex Simple Table.{' '}
                      <a href="" className="text-black dark:text-white">
                        Learn more
                      </a>
                    </p>
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <a
                      className="!py-2"
                      href="javascript:void(0);"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots align-middle ms-1 inline-block"></i>
                    </a>
                    <ul
                      className="hs-dropdown-menu ti-dropdown-menu hidden"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <a
                          className="ti-dropdown-item"
                          href="javascript:void(0);"
                        >
                          Action
                        </a>
                      </li>
                      <li className="whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <a
                          className="ti-dropdown-item"
                          href="javascript:void(0);"
                        >
                          Another action
                        </a>
                      </li>
                      <li className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <a
                          className="ti-dropdown-item"
                          href="javascript:void(0);"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="box-body">
                <div className="table-responsive">
                  <table className="table table-bordered whitespace-nowrap min-w-full">
                    <thead>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <th
                          scope="col"
                          className="border-b  dark:border-defaultborder/10 text-start"
                        >
                          User photo
                        </th>
                        <th
                          scope="col"
                          className="border border-defaultborder dark:border-defaultborder/10 text-start"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border border-defaultborder dark:border-defaultborder/10 text-start"
                        >
                          Created
                        </th>
                        <th
                          scope="col"
                          className="border border-defaultborder dark:border-defaultborder/10 text-start"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="border border-defaultborder dark:border-defaultborder/10 text-start"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border border-defaultborder dark:border-defaultborder/10 text-start"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/1.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Megan Peters
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          08/06/2021
                        </td>
                        <td className="whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-primary/10 !text-primary">
                            Active
                          </span>
                        </td>
                        <td className="whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">mila@kunis.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>

                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/2.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          George Clooney
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          12/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-primary/10 !text-primary">
                            Active
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">marlon@brando.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/13.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Ryan Gossling
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          14/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-danger/10 !text-danger">
                            Banned
                          </span>
                        </td>
                        <td className="whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">jack@nicholson</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/1.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {' '}
                          Emma Watson
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          16/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-warning/10 !text-warning !text-warning">
                            Pending
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">jack@nicholsonm</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/12.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Mila Kunis
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          18/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-secondary/10 !text-primary">
                            In Active
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">mila@kunis.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/4.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Phil Watson
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          23/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-primary/10 !text-primary">
                            Active
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">phil@watson.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/5.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Sonia Robertson
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          25/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-primary/10 !text-primary">
                            Active
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">robertson@sonia.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/7.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Adam Hamilton
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          31/06/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-warning/10 !text-warning !text-warning">
                            Pending
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">mila@kunis.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/9.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Leah Morgan
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          02/07/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-warning/10 !text-warning !text-warning">
                            Pending
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">morganleah@.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/11.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Amelia McDonald
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          08/07/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-primary/10 !text-primary">
                            Active
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">amelia23@kunis.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="!border-defaultborder dark:!border-defaultborder/10">
                        <td className="	whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          <img
                            alt="avatar"
                            className="!rounded-full avatar-md avatar"
                            src="../assets/images/faces/17.jpg"
                          />
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          Paul Molive
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          12/07/2021
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <span className="badge bg-danger/10 !text-danger">
                            Banned
                          </span>
                        </td>
                        <td className="	whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <a href="javascript:void(0);">paul45@kunis.com</a>
                        </td>
                        <td className="	whitespace-nowrap text-sm font-medium">
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle flex items-center justify-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-search"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Search
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-info text-white hover:bg-info disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-pen"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Edit
                              </span>
                            </a>
                          </div>
                          <div className="hs-tooltip ti-main-tooltip">
                            <a
                              href="javascript:void(0);"
                              className="ti-btn ti-btn-sm hs-tooltip-toggle inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border/10 bg-danger text-white hover:bg-danger disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              <i className="las la-trash"></i>
                              <span
                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                role="tooltip"
                              >
                                Delete
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <nav aria-label="Page  navigation">
                <ul className="ti-pagination !mb-4 justify-end">
                  <li className="page-item disabled">
                    <a className="page-link px-3 py-[0.375rem]">Previous</a>
                  </li>
                  <li className="page-item active">
                    <a
                      className="page-link px-3 py-[0.375rem]"
                      href="javascript:void(0);"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link px-3 py-[0.375rem]"
                      href="javascript:void(0);"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link px-3 py-[0.375rem]"
                      href="javascript:void(0);"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link px-3 py-[0.375rem]"
                      href="javascript:void(0);"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserTable;
