import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function ComponentNavBottom() {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
           
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Company name
                </h6>
                <p>
                 Cat momma's Website
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a
                    href="https://pet-sitting-site-react.vercel.app/homepage"
                    className="text-reset"
                  >
                    Pet Sitter's Site
                  </a>
                </p>
                <p>
                  <a
                    href="https://weather-app-jade-tau.vercel.app/"
                    className="text-reset"
                  >
                    Weather App
                  </a>
                </p>
                <p>
                  <a
                    href="https://cooking-site-blond.vercel.app/"
                    className="text-reset"
                  >
                    Cooking Site
                  </a>
                </p>
                <p>
                  <a
                    href="https://dictionary-app-six-pi.vercel.app/"
                    className="text-reset"
                  >
                    Dictionary Site
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    About me
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Brasov, Romania
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  catmommy@yahoo.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 0368 456 ***
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 0733 235 ***
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default ComponentNavBottom;
