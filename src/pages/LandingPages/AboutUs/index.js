/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
//import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
//import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/project/mainPage/headerBg.jpg";
import { Link } from "@mui/material";
import HowTo from "./sections/HowTo";

function AboutUs() {
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      /> */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
          <Container>
            <Grid container flexDirection="row" alignItems="center">
              <MKTypography
                component={Link}
                href="#"
                variant="button"
                color="white"
                fontWeight="regular"
                py={0.8125}
                mr={2}
              >
                Material Design
              </MKTypography>
              <MKButton
                variant="outlined"
                color="white"
                sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
              >
                <MKBox component="i" color="white" className="fas fa-bars" />
              </MKButton>
              <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                my={0}
                mx="auto"
                sx={{ listStyle: "none" }}
              >
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Home
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    About Us
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    color="white"
                    fontWeight="regular"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    Contact Us
                  </MKTypography>
                </MKBox>
              </MKBox>
              <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                m={0}
                sx={{ listStyle: "none" }}
              >
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-twitter" />
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-facebook" />
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-instagram" />
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
          </Container>
        </MKBox>

        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Discover, Plan, and Attend Unforgettable Events
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Join eventsTN, the ultimate platform for event enthusiasts. Whether you&apos;re an
              attendee looking for exciting events or an organizer wanting to create unforgettable
              experiences, eventsTN is here to make your event journey seamless and unforgettable.
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              Join Us
            </MKButton>
            <div>
              {/* <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox> */}
            </div>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Information />
        <Team /> */}
        <HowTo />
        {/* <Featuring /> hedhi ken t7eb ta3mel statistics */}
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
