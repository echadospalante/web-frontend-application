import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <body>
      <div className="page error-bg dark:!bg-bodybg" id="particles-js">
        <div className="error-page">
          <div className="container text-defaulttextcolo dark:text-defaulttextcolor/70 text-defaultsize">
            <div className="text-center p-5 my-auto">
              <div className="flex items-center justify-center h-full !text-defaulttextcolor">
                <div className="xl:col-span-3"></div>
                <div className="xl:col-span-6 col-span-12">
                  <img
                    src="/logo-full.jpeg"
                    className="error-page-img mb-8"
                    alt="error"
                  />
                  <p className="text-[1.125rem] font-semibold mb-4">
                    Página no encontrada
                  </p>
                  <div className="flex justify-center items-center mb-[3rem]">
                    <div className="xl:col-span-6 w-[50%]">
                      <p className="mb-0 opacity-[0.7]">
                        La página que buscas no se encuentra. Por favor,
                        verifica la URL e inténtalo de nuevo.
                      </p>
                    </div>
                  </div>
                  <Link
                    to=""
                    className="ti-btn bg-primary text-white font-semibold"
                  >
                    <i className="ri-arrow-left-line align-middle inline-block"></i>
                    Regresar a la página principal
                  </Link>
                </div>
                <div className="xl:col-span-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default NotFoundPage;
