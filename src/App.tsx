import './App.css';

function App() {
  return (
    <>
      <div className="content">
        <div className="main-content text-defaulttextcolor text-defaultsize">
          {/* Page Header */}
          {/* Page Header */}
          <div className="md:flex block items-center justify-between mb-6 mt-[2rem]  page-header-breadcrumb">
            <div className="my-auto">
              <h5 className="page-title text-[1.3125rem] font-medium text-defaulttextcolor mb-0">
                Cards
              </h5>
              <nav>
                <ol className="flex items-center whitespace-nowrap min-w-0">
                  <li className="text-[12px]">
                    {' '}
                    <a
                      className="flex items-center text-primary hover:text-primary"
                      href="javascript:void(0);"
                    >
                      {' '}
                      Apps{' '}
                      <i className="ti ti-chevrons-right flex-shrink-0 mx-3 overflow-visible text-textmuted rtl:rotate-180" />
                    </a>{' '}
                  </li>
                  <li className="text-[12px]">
                    {' '}
                    <a
                      className="flex items-center text-textmuted"
                      href="javascript:void(0);"
                    >
                      Cards
                    </a>{' '}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex xl:my-auto right-content align-items-center">
              <div className="pe-1 xl:mb-0">
                <button
                  type="button"
                  className="ti-btn ti-btn-info-full text-white ti-btn-icon me-2 btn-b !mb-0"
                >
                  <i className="mdi mdi-filter-variant" />
                </button>
              </div>
              <div className="pe-1 xl:mb-0">
                <button
                  type="button"
                  className="ti-btn ti-btn-danger-full text-white ti-btn-icon me-2 !mb-0"
                >
                  <i className="mdi mdi-star" />
                </button>
              </div>
              <div className="pe-1 xl:mb-0">
                <button
                  type="button"
                  className="ti-btn ti-btn-warning-full text-white  ti-btn-icon me-2 !mb-0"
                >
                  <i className="mdi mdi-refresh" />
                </button>
              </div>
              <div className="xl:mb-0">
                <div className="hs-dropdown ti-dropdown">
                  <button
                    className="ti-btn ti-btn-primary-full text-white dropdown-toggle !mb-0"
                    type="button"
                    id="dropdownMenuDate"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    14 Aug 2019{' '}
                    <i className="bi bi-chevron-down text-[.6rem] font-semibold" />
                  </button>
                  <ul
                    className="hs-dropdown-menu ti-dropdown-menu hidden !z-[100]"
                    aria-labelledby="dropdownMenuDate"
                  >
                    <li>
                      <a
                        className="ti-dropdown-item"
                        href="javascript:void(0);"
                      >
                        2015
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item"
                        href="javascript:void(0);"
                      >
                        2016
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item"
                        href="javascript:void(0);"
                      >
                        2017
                      </a>
                    </li>
                    <li>
                      <a
                        className="ti-dropdown-item"
                        href="javascript:void(0);"
                      >
                        2018
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Close */}
          {/* Page Header Close */}
          {/* Start::row-1 */}
          <div className="grid grid-cols-12 md:gap-x-6">
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
              <div className="box">
                <img
                  src="../assets/images/media/media-22.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem]">
                    Card title
                  </h6>
                  <p className="card-text text-textmuted mb-4">
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-primary-full"
                  >
                    Read More
                  </a>
                </div>
                <div className="box-footer">
                  <span className="card-text">Last updated 3 mins ago</span>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">Featured</div>
                </div>
                <div className="box-body">
                  <h6 className="box-title font-semibold">
                    Special title treatment
                  </h6>
                  <p className="card-text mb-4">
                    Richard McClintock, a Latin professor at Hampden-Sydney
                    College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from a Lorem Ipsum passage
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-primary-full"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="box">
                <div className="box-body">
                  <h6 className="box-title font-semibold !mb-1 !text-[1rem]">
                    Card title
                  </h6>
                  <p className="card-subtitle mb-4 text-textmuted">
                    Card subtitle
                  </p>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration many
                    variations of passages of Lorem Ipsum available there are so
                    many ways to solve but the majority have suffered.
                  </p>
                </div>
                <div className="box-footer">
                  <a
                    href="javascript:void(0);"
                    className="card-link text-danger m-1"
                  >
                    Buy Now
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="card-link text-success m-1"
                  >
                    <u>Review</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
              <div className="box">
                <img
                  src="../assets/images/media/media-24.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem]">
                    Card title
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item py-3 px-4 !border-t !border-b !border-defaultborder dark:!border-defaultborder/10 !border-s-0 !border-e-0">
                    An item
                  </li>
                  <li className="list-group-item py-3 px-4 !border-b !border-defaultborder dark:!border-defaultborder/10  !border-s-0 !border-e-0">
                    A second item
                  </li>
                </ul>
                <div className="box-body">
                  <a
                    href="javascript:void(0);"
                    className="card-link text-primary me-1"
                  >
                    Card link
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="card-link text-secondary inline-block"
                  >
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
              <div className="box">
                <img
                  src="../assets/images/media/media-23.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <h6 className="mb-4 !text-[1rem] font-medium">Only Card Body:</h6>
              <div className="box">
                <div className="box-body">
                  <div className="card-text">
                    <p className="mb-0">
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-1 */}
          {/* Start::row-2 */}
          <div className="grid grid-cols-12 md:gap-6">
            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 col-span-12">
              <h6 className="mb-4 !text-[1rem] !font-medium">
                Using Grid Markups:
              </h6>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="sm:col-span-4 col-span-12">
                  <div className="box">
                    <div className="box-body">
                      <img
                        src="../assets/images/media/media-25.jpg"
                        className="card-img mb-4 !rounded-md"
                        alt="..."
                      />
                      <h6 className="box-title font-semibold">Product A</h6>
                      <p className="card-text mb-4">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full"
                      >
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 col-span-12">
                  <div className="box">
                    <div className="box-body">
                      <img
                        src="../assets/images/media/media-26.jpg"
                        className="card-img mb-4 !rounded-md"
                        alt="..."
                      />
                      <h6 className="box-title font-semibold">Product B</h6>
                      <p className="card-text mb-4">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-secondary-full"
                      >
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4 col-span-12">
                  <div className="box">
                    <div className="box-body">
                      <img
                        src="../assets/images/media/media-27.jpg"
                        className="card-img mb-4 !rounded-md"
                        alt="..."
                      />
                      <h6 className="box-title font-semibold">Product-C</h6>
                      <p className="card-text mb-4">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-light"
                      >
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <h6 className="!text-[1rem] !font-medium mb-4">Quote:</h6>
                <div className="xl:col-span-12 col-span-12">
                  <div className="box">
                    <div className="box-body">
                      <blockquote className="blockquote mb-0 text-center">
                        <h6 className="text-[1rem] font-medium">
                          The greatest glory in living lies not in never
                          falling, but in rising every time we fall.
                        </h6>
                        <footer className="text-[#6c757d] mt-2 text-[.875rem]">
                          Someone famous in{' '}
                          <cite title="Source Title">Source Title</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                  <h6 className="mb-4 !text-[1rem] !font-medium">
                    List Group:
                  </h6>
                  <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                      <div className="box">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item py-3 px-4 !border-b !border-defaultborder dark:!border-defaultborder/10  !border-t-0 !border-s-0 !border-e-0">
                            An item
                          </li>
                          <li className="list-group-item py-3 px-4 !border-b !border-defaultborder dark:!border-defaultborder/10 !border-s-0 !border-e-0">
                            A second item
                          </li>
                          <li className="list-group-item py-3 px-4 !border-s-0 !border-e-0">
                            A third item
                          </li>
                          <li className="list-group-item  py-3 px-4 !border-s-0 !border-e-0 !border-b-0 !border-t !border-defaultborder dark:!border-defaultborder/10">
                            A fourth item
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                      <div className="box">
                        <div className="list-group-item py-3 px-4 !border-s-0 !border-e-0 !border-t-0 !border-b !border-defaultborder dark:!border-defaultborder/10">
                          Featured
                        </div>
                        <ul className="list-group list-group-flush ">
                          <li className="list-group-item py-3 px-4 !border-0 !border-b !border-defaultborder dark:!border-defaultborder/10">
                            An item
                          </li>
                          <li className="list-group-item py-3 px-4 !border-s-0 !border-e-0">
                            A second item
                          </li>
                          <li className="list-group-item py-3 px-4 !border-s-0 !border-e-0 !border-b-0 !border-t !border-defaultborder dark:!border-defaultborder/10">
                            A third item
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                      <div className="box">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item py-3 px-4 !border-b !border-defaultborder dark:!border-defaultborder/10 !border-s-0 !border-e-0">
                            An item
                          </li>
                          <li className="list-group-item py-3 px-4 !border-defaultborder dark:!border-defaultborder/10 !border-b !border-s-0 !border-e-0">
                            A second item
                          </li>
                          <li className="list-group-item py-3 px-4 !border-0">
                            A third item
                          </li>
                        </ul>
                        <div className="box-footer !py-[0.65rem] !px-[1.25rem]">
                          Card footer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-2 */}
          {/* Start::row-3*/}
          <div className="grid grid-cols-12 xl:gap-6">
            <div className="xl:col-span-9 col-span-12">
              <h6 className="mb-4 !text-[1rem] !font-medium">
                Text Alignment:
              </h6>
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                  <div className="box">
                    <div className="box-body">
                      <div className="mb-2">
                        <span className="avatar avatar-md">
                          <img
                            src="../assets/images/faces/15.jpg"
                            alt="img"
                            className="!rounded-md"
                          />
                        </span>
                      </div>
                      <h6 className="box-title font-semibold">
                        Where it come from
                      </h6>
                      <p className="card-text mb-4">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                  <div className="box text-center">
                    <div className="box-body">
                      <div className="mb-2">
                        <span className="avatar avatar-md">
                          <img
                            src="../assets/images/faces/3.jpg"
                            alt="img"
                            className="!rounded-md"
                          />
                        </span>
                      </div>
                      <h6 className="box-title font-semibold">
                        Why do we use it?
                      </h6>
                      <p className="card-text mb-4">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                  <div className="box text-end">
                    <div className="box-body">
                      <div className="mb-2">
                        <span className="avatar avatar-md">
                          <img
                            src="../assets/images/faces/11.jpg"
                            alt="img"
                            className="!rounded-md"
                          />
                        </span>
                      </div>
                      <h6 className="box-title font-semibold">
                        What is special?
                      </h6>
                      <p className="card-text mb-4">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <h4 className="mb-4 !text-[1rem] !font-medium">
                Mixins utilities:
              </h4>
              <div className="box border !border-success mb-4">
                <div className="!py-3 !px-3 bg/10 border-b !text-start !border-success">
                  Header
                </div>
                <div className="box-body text-success">
                  <h6 className="box-title font-semibold !mb-2">
                    Looking For Success?
                  </h6>
                  <p className="card-text !text-success">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </div>
                <div className="!py-3 !px-3 bg/10 border-t border-success">
                  Footer
                </div>
              </div>
            </div>
          </div>
          {/* End::row-3*/}
          {/* Start::row-4 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">
            Card Header &amp; Footer:
          </h6>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-3 col-span-12">
              <div className="box">
                <div className="box-header !mb-3">
                  <div className="flex align-center w-full">
                    <img
                      src="../assets/images/faces/11.jpg"
                      alt="img"
                      className="avatar avatar-rounded me-2 !mb-0"
                    />
                    <div className="my-auto">
                      <div className="text-[.9375rem] font-semibold">
                        Adam Smith
                      </div>
                      <p className="mb-0 text-textmuted text-[.6875rem]">
                        28 Years, Male
                      </p>
                    </div>
                    <div className="hs-dropdown ti-dropdown ms-auto my-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light !mb-0"
                      >
                        <i className="fe fe-more-vertical" />
                      </a>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                        <li>
                          <a
                            className="ti-dropdown-item"
                            href="javascript:void(0);"
                          >
                            Week
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item"
                            href="javascript:void(0);"
                          >
                            Month
                          </a>
                        </li>
                        <li>
                          <a
                            className="ti-dropdown-item"
                            href="javascript:void(0);"
                          >
                            Year
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  If you are going to use, you need to be sure there isn't
                  anything embarrassing hidden in the middle of text. All the
                  Lorem Ipsum generators.Lorem Ipsum is therefore always free. .
                </div>
                <div className="box-footer">
                  <div className="flex justify-between">
                    <div className="font-semibold text-[.875rem]">
                      28,Nov 2022
                    </div>
                    <div className="font-semibold text-success ">
                      Assistant Professor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box">
                <div className="box-header !border-b-0 !pb-0 !justify-start">
                  <div>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill" />
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill" />
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill" />
                    </span>
                    <span className="text-warning me-1">
                      <i className="bi bi-star-fill" />
                    </span>
                    <span className="text-black/10">
                      <i className="bi bi-star-fill" />
                    </span>
                    <p className="block text-textmuted mb-0 text-[.75rem] font-semibold">
                      1 year ago
                    </p>
                  </div>
                </div>
                <div className="box-body pt-4">
                  <div className="font-semibold text-[.9375rem] mb-2">
                    Very Great!
                  </div>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </div>
                <div className="box-footer !p-3">
                  <div className="flex items-center">
                    <span className="avatar avatar-sm avatar-rounded me-2">
                      <img src="../assets/images/faces/12.jpg" alt="img" />
                    </span>
                    <div className="font-semibold text-[.875rem]">
                      Corey Anderson
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box text-center">
                <div className="box-header !border-b-0 pb-0">
                  <span className="ms-auto !shadow-none float-end text-[1.0625rem]">
                    <i className="ri-heart-fill text-danger" />
                  </span>
                </div>
                <div className="box-body !pt-1">
                  <span className="avatar avatar-xl avatar-rounded me-2 mb-3">
                    <img src="../assets/images/faces/5.jpg" alt="img" />
                  </span>
                  <div className="font-semibold text-[1rem]">Sasha Max</div>
                  <p className="mb-5 text-textmuted text-[.75rem]">
                    Web Developer
                  </p>
                  <div className="ti-btn-list">
                    <button
                      type="button"
                      aria-label="button"
                      className="!me-2 ti-btn ti-btn-icon ti-btn-facebook btn-wave"
                    >
                      <i className="ri-facebook-line" />
                    </button>
                    <button
                      type="button"
                      aria-label="button"
                      className="!me-2 ti-btn ti-btn-icon ti-btn-twitter btn-wave"
                    >
                      <i className="ri-twitter-x-line" />
                    </button>
                    <button
                      type="button"
                      aria-label="button"
                      className="ti-btn ti-btn-icon ti-btn-instagram btn-wave"
                    >
                      <i className="ri-instagram-line" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border !border-primary">
                <div className="box-body">
                  <svg
                    className="w-[60px] h-[60px] my-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C6CDD1"
                      d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z"
                    />
                    <path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z" />
                    <path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z" />
                    <path fill="#878A8F" d="M1 11v8a2 2 0 0 0 2 2h8V11H1z" />
                    <path fill="#797D82" d="M11 11v10h8a2 2 0 0 0 2-2v-8H11z" />
                    <path fill="#FFF" d="M14 6h5v1h-5z" />
                    <path
                      d="M19 20.75H3a2 2 0 0 1-2-2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-.25a2 2 0 0 1-2 2z"
                      opacity=".1"
                    />
                    <circle cx={16} cy={16} r={7} fill="#136ad0" />
                    <path
                      d="M16 22.75c-3.08 0-5.704-1.97-6.696-4.713C10.18 20.907 12.85 23 16 23s5.82-2.094 6.696-4.963C21.704 20.781 19.08 22.75 16 22.75z"
                      opacity=".1"
                    />
                    <path
                      fill="#FFF"
                      d="M16 9.25c3.08 0 5.704 1.97 6.696 4.713C21.82 11.093 19.15 9 16 9s-5.82 2.094-6.696 4.963C10.296 11.219 12.92 9.25 16 9.25z"
                      opacity=".2"
                    />
                    <path fill="#FFF" d="M4 6h5v1H4z" />
                    <path
                      fill="#FFF"
                      d="M6 4h1v5H6zM13 14h6v1h-6zM13 17h6v1h-6zM4.379 15.086l.707-.707 3.535 3.535-.707.707z"
                    />
                    <path
                      fill="#FFF"
                      d="m4.379 17.914 3.535-3.535.707.707-3.535 3.535z"
                    />
                    <path
                      fill="#FFF"
                      d="M19 1H3a2 2 0 0 0-2 2v.25a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V3a2 2 0 0 0-2-2z"
                      opacity=".2"
                    />
                    <linearGradient
                      id="a"
                      x1="14.367"
                      x2="19.862"
                      y1="14.367"
                      y2="19.862"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#3E2723" stopOpacity=".2" />
                      <stop offset={1} stopColor="#3E2723" stopOpacity=".02" />
                    </linearGradient>
                    <path
                      fill="url(#a)"
                      d="M19 14v1h-6l2 2h4v1h-6l4.766 4.766a7.014 7.014 0 0 0 5-5L19 14z"
                    />
                    <linearGradient
                      id="b"
                      x1="-.448"
                      x2="23.366"
                      y1="5.662"
                      y2="16.766"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#FFF" stopOpacity=".2" />
                      <stop offset={1} stopColor="#FFF" stopOpacity={0} />
                    </linearGradient>
                    <path
                      fill="url(#b)"
                      d="M21 11.11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.11A6.974 6.974 0 0 0 16 23c3.86 0 7-3.14 7-7a6.974 6.974 0 0 0-2-4.89z"
                    />
                  </svg>
                  <p className="mb-0 mt-8 text-[1.25rem] font-semibold leading-none">
                    Calculations
                  </p>
                </div>
                <div className="box-footer">
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour.
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box text-center">
                <div className="box-header !mb-0">
                  <div className="box-title">Featured</div>
                </div>
                <div className="box-body">
                  <h6 className="box-title font-semibold !mb-2">
                    Breaking News !
                  </h6>
                  <p className="card-text mb-4">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-primary-full mt-2"
                  >
                    Read More
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="ti-btn ti-btn-outline-secondary mt-2"
                  >
                    Close
                  </a>
                </div>
                <div className="box-footer !text-textmuted">11.32pm</div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="flex w-full">
                    <div className="me-4">
                      <span className="avatar avatar-lg avatar-rounded">
                        <img src="../assets/images/faces/12.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="flex align-center justify-between w-full flex-wrap">
                      <div className="me-4">
                        <p className="text-textmuted mb-0">Posts</p>
                        <p className="font-semibold text-[1rem] mb-0">25</p>
                      </div>
                      <div className="me-4">
                        <p className="text-textmuted mb-0">Followers</p>
                        <p className="font-semibold text-[1rem] mb-0">1253</p>
                      </div>
                      <div className="me-4">
                        <p className="text-textmuted mb-0">Following</p>
                        <p className="font-semibold text-[1rem] mb-0">367</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <div className="font-semibold text-[1rem]">
                    Angelina Caprio
                  </div>
                  <div className="text-textmuted text-[.6875rem] mb-6">
                    Angular Developer
                  </div>
                  <p className="text-[.875rem] font-semibold mb-1">About:</p>
                  <p className="mb-0 card-text">
                    Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 sm:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <img
                    src="../assets/images/media/media-4.jpg"
                    className="card-img mb-4 !rounded-md"
                    alt="..."
                  />
                  <h6 className="box-title font-semibold mb-4">
                    Mountains
                    <span className="badge bg-primary text-white ltr:float-right rtl:float-left text-[.625rem]">
                      New
                    </span>
                  </h6>
                  <p className="card-text">
                    With supporting text below as a natural lead-in.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 sm:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <img
                    src="../assets/images/media/media-5.jpg"
                    className="card-img mb-4 !rounded-md"
                    alt="..."
                  />
                  <h6 className="box-title font-semibold mb-4">
                    Hills
                    <span className="badge bg-secondary text-white ltr:float-right rtl:float-left text-[.625rem]">
                      Hot
                    </span>
                  </h6>
                  <p className="card-text">
                    With supporting text below as a natural lead-in.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 sm:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <img
                    src="../assets/images/media/media-15.jpg"
                    className="card-img mb-4 !rounded-md"
                    alt="..."
                  />
                  <h6 className="box-title font-semibold mb-4">
                    Nature
                    <span className="badge bg-light text-dark ltr:float-right rtl:float-left text-[.625rem]">
                      Offer
                    </span>
                  </h6>
                  <p className="card-text">
                    With supporting text below as a natural lead-in.
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-header !pb-3 flex justify-between">
                  <div className="box-title"> Card With Collapse Button </div>
                  <button
                    type="button"
                    className="hs-collapse-toggle text-defaulttextcolor dark:text-defaulttextcolor/70 inline-flex items-center gap-x-2 text-sm font-semibold  disabled:opacity-50 disabled:pointer-events-none open"
                    id="hs-basic-collapse"
                    data-hs-collapse="#hs-basic-collapse-heading"
                  >
                    <svg
                      className="hs-collapse-open:rotate-180 flex-shrink-0 size-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <div
                  id="hs-basic-collapse-heading"
                  className="hs-collapse open w-full  overflow-hidden  transition-[height] duration-100"
                  aria-labelledby="hs-basic-collapse"
                >
                  <div className="box-body !pt-0">
                    <h6 className="card-text font-semibold">
                      Collapsible Card
                    </h6>
                    <p className="card-text mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words
                    </p>
                  </div>
                  <div className="box-footer">
                    {' '}
                    <button
                      type="button"
                      className="ti-btn ti-btn-primary-full"
                    >
                      Read More
                    </button>{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box" id="dismiss-alert">
                <div className="box-header flex justify-between">
                  <div className="box-title">Card With Close Button</div>
                  <button
                    type="button"
                    className="inline-flex rounded-sm text-defaulttextcolor dark:text-defaulttextcolor/70 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                    data-hs-remove-element="#dismiss-alert"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg
                      className="h-2 w-2"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div className="box-body">
                  <h6 className="card-text font-semibold">Closed Card</h6>
                  <p className="card-text mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                </div>
                <div className="box-footer">
                  <button type="button" className="ti-btn ti-btn-primary-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box terms-box">
                <div className="box-header flex justify-between">
                  <div className="box-title">Card With Fullscreen Button</div>
                  <a
                    aria-label="anchor"
                    href="javascript:void(0);"
                    className="terms-fullscreen"
                  >
                    <i className="ri-fullscreen-line" />
                  </a>
                </div>
                <div className="box-body flex-grow">
                  <h6 className="card-text font-semibold">FullScreen Card</h6>
                  <p className="card-text mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                </div>
                <div className="box-footer">
                  <button type="button" className="ti-btn ti-btn-primary-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-4 */}
          {/* Start::row-5 */}
          <div className="grid grid-cols-12 md:gap-x-6">
            <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
              <h6 className="mb-4 !text-[1rem] !font-medium">
                Using Utilities:
              </h6>
              <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                  <div className="box !w-[75%]">
                    <div className="box-header">
                      <div className="box-title">Using Width 75%</div>
                    </div>
                    <div className="box-body">
                      <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id nostrum omnis excepturi consequatur molestiae
                      </div>
                    </div>
                    <div className="box-footer">
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full !grid"
                      >
                        Button
                      </a>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                  <div className="box !w-[50%]">
                    <div className="box-header">
                      <div className="box-title">Using Width 50%</div>
                    </div>
                    <div className="box-body">
                      <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </div>
                    </div>
                    <div className="box-footer">
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full !grid"
                      >
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
              <h6 className="mb-4 !text-[1rem] !font-medium">Navigation:</h6>
              <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                  <div className="box text-center">
                    <div className="box-header !justify-start">
                      <ul className="nav nav-tabs box-header-tabs ms-1 flex   gap-2 items-center">
                        <li className="nav-item">
                          <a
                            className="nav-link active !py-2 !px-4"
                            aria-current="true"
                            href="javascript:void(0);"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0);">
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled">Disabled</a>
                        </li>
                      </ul>
                    </div>
                    <div className="box-body">
                      <h6 className="box-title font-semibold">
                        Special title treatment
                      </h6>
                      <p className="card-text mb-4">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                  <div className="box text-center">
                    <div className="box-header !justify-start">
                      <ul className="nav nav-pills box-header-pills ms-1 flex gap-2">
                        <li className="nav-item">
                          <a
                            className="nav-link active !py-2 !px-4 !bg-primary !text-white"
                            href="javascript:void(0);"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="javascript:void(0);">
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled">Disabled</a>
                        </li>
                      </ul>
                    </div>
                    <div className="box-body">
                      <h6 className="box-title font-semibold">
                        Special title treatment
                      </h6>
                      <p className="card-text mb-4">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a
                        href="javascript:void(0);"
                        className="ti-btn ti-btn-primary-full"
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-5 */}
          {/* Start::row-6 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">Image Caps:</h6>
          <div className="grid grid-cols-12 md:gap-6">
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <img
                  src="../assets/images/media/media-29.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem]">
                    Image caps are widely used in Blog's
                  </h6>
                  <p className="card-text mb-4 text-textmuted">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings.
                  </p>
                  <p className="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem]">
                    Image caps are widely used in Blog's
                  </h6>
                  <p className="card-text mb-4 text-textmuted">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound.
                  </p>
                  <p className="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
                <img
                  src="../assets/images/media/media-28.jpg"
                  className="!rounded-b-md"
                  alt="..."
                />
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <h6 className="box-title font-semibold mb-1 !text-[1rem]">
                    Image caps are widely used in Blog's
                  </h6>
                  <p className="card-text mb-1 text-textmuted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <img
                  src="../assets/images/media/media-30.jpg"
                  className="card-img rounded-0"
                  alt="..."
                />
                <div className="box-body">
                  <p className="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    Image caps are widely used in Blog's
                  </div>
                </div>
                <div className="box-body">
                  <p className="card-text mb-1 text-textmuted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <img
                  src="../assets/images/media/media-31.jpg"
                  className="card-img rounded-0"
                  alt="..."
                />
                <div className="box-footer">
                  <p className="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <img
                  src="../assets/images/media/media-32.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-header">
                  <div className="box-title">
                    Image caps are widely used in Blog's
                  </div>
                </div>
                <div className="box-body">
                  <p className="card-text mb-1 text-textmuted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="box-footer">
                  <p className="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    Image caps are widely used in Blog's
                  </div>
                </div>
                <div className="box-body">
                  <p className="card-text mb-1 text-textmuted">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="box-footer">
                  <p className="card-text mb-0">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
                <img
                  src="../assets/images/media/media-33.jpg"
                  className="!rounded-b-md"
                  alt="..."
                />
              </div>
            </div>
          </div>
          {/* End::row-6 */}
          {/* Start::row-7 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">Image Overlays:</h6>
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-4 col-span-12">
              <div className="box  overlay-card">
                <img
                  src="../assets/images/media/media-35.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay flex flex-col p-0">
                  <div className="box-header !pb-3 !border-b !border-defaultborder/10">
                    <div className="box-title !text-white">
                      Image Overlays Are Awesome!
                    </div>
                  </div>
                  <div className="box-body overflow-y-scroll text-white">
                    <div className="card-text mb-2 !text-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even.
                    </div>
                    <div className="card-text !text-white">
                      Last updated 3 mins ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box overlay-card">
                <img
                  src="../assets/images/media/media-36.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay flex flex-col p-0 over-content-bottom">
                  <div className="box-body  overflow-y-scroll text-white">
                    <div className="card-text text-white">
                      Image Overlays Are Awesome!
                    </div>
                    <div className="card-text mb-2 !text-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even.
                    </div>
                    <div className="card-text !text-white">
                      Last updated 3 mins ago
                    </div>
                  </div>
                  <div className="box-footer !text-white !border-t !border-defaultborder/10">
                    Last updated 3 mins ago
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box  overlay-card">
                <img
                  src="../assets/images/media/media-34.jpg"
                  className="card-img"
                  alt="..."
                />
                <div className="card-img-overlay flex flex-col p-0">
                  <div className="box-header">
                    <div className="box-title !text-white">
                      Image Overlays Are Awesome!
                    </div>
                  </div>
                  <div className="box-body overflow-y-scroll flex-grow text-white">
                    <div className="card-text !text-white">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even.
                    </div>
                  </div>
                  <div className="box-footer !text-white !border-t !border-white/10">
                    Last updated 3 mins ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-7 */}
          {/* Start::row-8 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">Horizontal Cards:</h6>
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="grid grid-cols-12 gap-0">
                  <div className="md:col-span-4 col-span-12">
                    <img
                      src="../assets/images/media/media-37.jpg"
                      className="img-fluid rounded-s-md h-full w-full"
                      alt="..."
                    />
                  </div>
                  <div className="md:col-span-8 col-span-12">
                    <div className="box-header">
                      <div className="box-title">Horizontal Cards</div>
                    </div>
                    <div className="box-body">
                      <h6 className="box-title font-semibold">
                        Horizontal cards are awesome!
                      </h6>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural .
                      </p>
                    </div>
                    <div className="box-footer">
                      <p className="card-text">
                        <small className="text-textmuted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="grid grid-cols-12 gap-0">
                  <div className="md:col-span-8 col-span-12">
                    <div className="box-header">
                      <div className="box-title">Horizontal Cards</div>
                    </div>
                    <div className="box-body">
                      <h6 className="box-title font-semibold">
                        Horizontal cards are awesome!
                      </h6>
                      <p className="card-text mb-4">
                        This is a wider card with suppo rting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-textmuted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4 col-span-12">
                    <img
                      src="../assets/images/media/media-38.jpg"
                      className="img-fluid !rounded-e-md h-full w-full"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="grid grid-cols-12 gap-0">
                  <div className="md:col-span-8 col-span-12">
                    <div className="box-body">
                      <h6 className="box-title font-semibold mb-2">
                        Horizontal Cards
                      </h6>
                      <div className="mb-4">Horizontal cards are awesome!</div>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                    <div className="box-footer">
                      <p className="card-text">
                        <small className="text-textmuted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4 col-span-12">
                    <img
                      src="../assets/images/media/media-39.jpg"
                      className="img-fluid !rounded-e-md h-full w-full"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-8 */}
          {/* Start::row-9 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">
            Background Colored Cards:
          </h6>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-primary">
                <div className="box-body">
                  <div className="flex items-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/11.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold !text-white">
                        Adam Smith
                      </div>
                      <p className="mb-0 text-white opacity-[0.7] text-[.75rem]">
                        Finished by today
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-secondary">
                <div className="box-body">
                  <div className="flex items-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/12.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold !text-white">
                        Elisha Corner
                      </div>
                      <p className="mb-0 text-white opacity-[0.7] text-[.75rem]">
                        Completed 24 days back
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-warning">
                <div className="box-body">
                  <div className="flex items-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/1.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold !text-white">
                        Sarah Alina
                      </div>
                      <p className="mb-0 text-white opacity-[0.7] text-[.75rem]">
                        Completed today
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-info">
                <div className="box-body">
                  <div className="flex align-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/8.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold !text-white">
                        Monica Karen
                      </div>
                      <p className="mb-0 text-white opacity-[0.7] text-[.75rem]">
                        Pending from 4 days
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-success">
                <div className="box-body">
                  <div className="flex align-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/5.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold !text-white">
                        Samantha sid
                      </div>
                      <p className="mb-0 text-white opacity-[0.7] text-[.75rem]">
                        In leave for 1 month
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-danger">
                <div className="box-body">
                  <div className="flex align-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/14.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold !text-white">
                        Sebastien steyn
                      </div>
                      <p className="mb-0 text-white opacity-[0.7] text-[.75rem]">
                        Completed by Tomorrow
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-light">
                <div className="box-body">
                  <div className="flex align-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/13.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold">
                        Jacob Smith
                      </div>
                      <p className="mb-0 text-textmuted opacity-[0.7] text-[.75rem]">
                        Finished by 24,Nov
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-default"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box !bg-black">
                <div className="box-body">
                  <div className="flex align-center w-full">
                    <div className="me-2">
                      <span className="avatar avatar-rounded">
                        <img src="../assets/images/faces/16.jpg" alt="img" />
                      </span>
                    </div>
                    <div className="">
                      <div className="text-[.9375rem] font-semibold text-white">
                        Pope Adam
                      </div>
                      <p className="mb-0 opacity-[0.7] text-[.75rem] text-white">
                        Completed on 24,may
                      </p>
                    </div>
                    <div className="ms-auto">
                      <a
                        aria-label="anchor"
                        href="javascript:void(0);"
                        className="text-white"
                      >
                        <i className="bi bi-three-dots-vertical" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-9 */}
          {/* Start::row-10 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">
            Colored Border Cards:
          </h6>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body ">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    Home Page Design
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-primary text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary/10 text-primary">
                      Framework
                    </span>
                    <span className="badge bg-secondary/10 text-secondary">
                      Angular
                    </span>
                    <span className="badge bg-info/10 text-info">Php</span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/2.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/8.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/2.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    Landing Page Design
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-secondary text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-danger/10 text-danger">
                      Laravel
                    </span>
                    <span className="badge bg-teal/10 text-teal">
                      Codeignitor
                    </span>
                    <span className="badge bg-success/10 text-success">
                      Php
                    </span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/4.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/6.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    Update New Project
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-warning text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-warning/10 text-warning">
                      Html
                    </span>
                    <span className="badge bg-secondary/10 text-secondary">
                      Tailwind
                    </span>
                    <span className="badge bg-info/10 text-info">React</span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/1.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/12.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/10.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/16.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    New Project Discussion
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-info text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-info/10 text-info">React</span>
                    <span className="badge bg-primary/10 text-primary">
                      Typescript
                    </span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/3.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/14.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/11.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    Recent Projects Testing
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-danger text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary/10 text-primary">Ui</span>
                    <span className="badge bg-secondary/10 text-secondary">
                      Angular
                    </span>
                    <span className="badge bg-info/10 text-info">Java</span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/15.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    About Us Page redesign
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-success text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-danger/10 text-danger">Html</span>
                    <span className="badge bg-warning/10 text-warning">
                      Symphony
                    </span>
                    <span className="badge bg-success/10 text-success">
                      Php
                    </span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/6.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/9.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    New Employees
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-default text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-warning/10 text-warning">
                      Html
                    </span>
                    <span className="badge bg-info/10 text-info">Cake Php</span>
                    <span className="badge bg-success/10 text-success">
                      React
                    </span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/5.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/6.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/7.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box border border-primary !rounded-md">
                <div className="box-body">
                  <p className="text-[.875rem] font-semibold mb-2 leading-none">
                    Terminated Employees
                    <a aria-label="anchor" href="javascript:void(0);">
                      <i className="bi bi-plus-square ltr:float-right rtl:float-left text-dark text-[1.125rem]" />
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-primary/10 text-primary">
                      Angular
                    </span>
                  </div>
                  <div className="avatar-list-stacked flex -space-x-2">
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/9.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/11.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/12.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-sm avatar-rounded">
                      <img src="../assets/images/faces/15.jpg" alt="img" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-10 */}
          {/* Start::row-11 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">Cards With Link:</h6>
          <div className="grid grid-cols-12 gap-6">
            <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
              <div className="box">
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  className="card-anchor"
                />
                <img
                  src="../assets/images/media/media-23.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold mb-0">
                    Forests are Awesome.
                  </h6>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                  <div className="box !bg-primary">
                    <a
                      aria-label="anchor"
                      href="javascript:void(0);"
                      className="card-anchor"
                    />
                    <div className="box-body">
                      <blockquote className="blockquote mb-0 text-center">
                        <h6 className="text-[1rem] text-white font-medium">
                          The best and most beautiful things in the world cannot
                          be seen or even touched — they must be felt with the
                          heart..
                        </h6>
                        <footer className="blockquote-footer mt-3 text-[.875rem] text-white opacity-[0.7]">
                          Someone famous as{' '}
                          <cite title="Source Title">-Helen Keller</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                  <div className="box">
                    <a
                      aria-label="anchor"
                      href="javascript:void(0);"
                      className="card-anchor"
                    />
                    <div className="box-body">
                      <div className="flex align-center">
                        <div className="me-4">
                          <span className="avatar avatar-md">
                            <img
                              src="../assets/images/faces/15.jpg"
                              alt="img"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="card-text mb-0 text-[.875rem] font-semibold">
                            Atharva Simon.
                          </p>
                          <div className="box-title !text-textmuted !text-[.75rem] mb-0">
                            Correspondent Professor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box border border-info">
                    <a
                      aria-label="anchor"
                      href="javascript:void(0);"
                      className="card-anchor"
                    />
                    <div className="box-body">
                      <div className="flex align-center">
                        <div className="me-3">
                          <span className="avatar avatar-xl">
                            <img src="../assets/images/faces/8.jpg" alt="img" />
                          </span>
                        </div>
                        <div>
                          <p className="card-text text-info mb-1 text-[.875rem] font-semibold">
                            Alicia Keys.
                          </p>
                          <div className=" text-[.75rem] mb-1">
                            Department Of Commerce
                          </div>
                          <div className=" text-textmuted text-[.6875rem] mb-0">
                            24 Years, Female
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-7 xl:col-span-12 col-span-12">
                  <div className="box">
                    <a
                      aria-label="anchor"
                      href="javascript:void(0);"
                      className="card-anchor"
                    />
                    <div className="!grid grid-cols-12 gap-0">
                      <div className="md:col-span-8 col-span-12">
                        <div className="box-body">
                          <h6 className="box-title mb-2 font-semibold !text-[1rem]">
                            Fox is Beautiful ?
                          </h6>
                          <p className="card-text mb-0">
                            This is a wild animal with supporting tactics and
                            are very efficient at kill,they are very Dangerous.
                          </p>
                          <p className="mb-0 card-text">
                            Fox lives mainly in forests and are well known for
                            their hunting skills.
                          </p>
                        </div>
                        <div className="box-footer">
                          <p className="card-text">
                            <small className="text-textmuted">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4 col-span-12">
                        <img
                          src="../assets/images/media/media-39.jpg"
                          className="img-fluid !rounded-e-md h-full"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box">
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  className="card-anchor"
                />
                <img
                  src="../assets/images/media/media-47.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold mb-3">
                    Most tropical areas are suitable
                  </h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-11*/}
          {/* Start::row-12 */}
          <h6 className="mb-4 !text-[1rem] !font-medium">Grid Cards:</h6>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col">
              <div className="box">
                <img
                  src="../assets/images/media/media-44.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem] mb-3">
                    Morphology of a typical fruit.
                  </h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img
                  src="../assets/images/media/media-43.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem] mb-3">
                    Research improves ability &amp; agility !
                  </h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img
                  src="../assets/images/media/media-45.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem] mb-3">
                    Most tropical areas are suitable
                  </h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <img
                  src="../assets/images/media/media-46.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="box-body">
                  <h6 className="box-title font-semibold !text-[1rem] mb-3">
                    Are They seasonal fruits ?
                  </h6>
                  <p className="card-text">
                    {' '}
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there isn't anything embarrassing hidden in the
                    middle of text.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End::row-12 */}
          <h6 className="text-base font-medium mb-4">Panel actions:</h6>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-4 col-span-12">
              <div className="box terms-box" id="dismiss-alert1">
                <div className="box-header flex justify-between items-center">
                  <div className="box-title"> Card action</div>
                  <div className="flex items-center gap-x-1">
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                          <path d="M21 3v5h-5" />
                        </svg>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 rounded-sm transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-bodybg"
                          role="tooltip"
                        >
                          Refresh
                        </span>
                      </button>
                    </div>
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="terms-fullscreen hs-tooltip-toggle size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                          <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                          <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                          <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
                        </svg>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 rounded-sm transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-bodybg"
                          role="tooltip"
                        >
                          Fullscreen
                        </span>
                      </button>
                    </div>
                    <div className="hs-tooltip inline-block">
                      <button
                        type="button"
                        className="hs-tooltip-toggle size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white/70 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-remove-element="#dismiss-alert1"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 rounded-sm transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-bodybg"
                          role="tooltip"
                        >
                          Close
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="box-body flex-grow">
                  <p className="mt-2 text-gray-500 dark:text-white/70">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary hover:text-primary/80 disabled:opacity-50 disabled:pointer-events-none dark:text-primary dark:hover:text-primary/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="javascript:void(0);"
                  >
                    Card link
                    <svg
                      className="flex-shrink-0 size-4 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <div className="flex flex-auto flex-col justify-center items-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      Card title
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-white/70">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a
                      className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="javascript:void(0);"
                    >
                      Card link
                      <svg
                        className="flex-shrink-0 size-4 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 col-span-12">
              <div className="box">
                <div className="box-body">
                  <div className="flex flex-auto flex-col justify-center items-center">
                    <svg
                      className="size-10 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={22} x2={2} y1={12} y2={12} />
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                      <line x1={6} x2="6.01" y1={16} y2={16} />
                      <line x1={10} x2="10.01" y1={16} y2={16} />
                    </svg>
                    <p className="mt-5 text-sm text-gray-800 dark:text-gray-300">
                      No data to show
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div className="box">
                <div className="box-header !pb-3">
                  <div className="box-title"> Card action</div>
                </div>
                <div className="bg-light border-t border-b border-gray-200 text-sm text-gray-800 p-4 dark:bg-gray-900/[.1] dark:border-white/10 dark:text-white">
                  <span className="font-bold">Attention needed!</span> This is
                  an alert box.
                </div>
                <div className="box-body">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Card title
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-white/70">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a
                    className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary hover:text-primary/80 disabled:opacity-50 disabled:pointer-events-none dark:text-primary dark:hover:text-primary/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="javascript:void(0);"
                  >
                    Card link
                    <svg
                      className="flex-shrink-0 size-4 rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div className="box overflow-hidden">
                <div className="box-body h-60 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    Card title
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-white/70">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer. This is a longer card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer. This is a
                    longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-white/70">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer. This is a longer card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer. This is a
                    longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-white/70">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer. This is a longer card with
                    supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer. This is a
                    longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer. This is a longer card with supporting
                    text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
