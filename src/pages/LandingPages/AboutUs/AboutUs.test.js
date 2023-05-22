import { render } from "@testing-library/react";
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import AboutUs from "./AboutUs";

//Test that the AboutUs component renders without crashing
test("renders AboutUs component without crashing", () => {
  render(<AboutUs />);
});

//Test that the Information, Team, Featuring, and Newsletter components are rendered within the Card component:
test("renders AboutUs sections within Card component", () => {
  const { getByText } = render(<AboutUs />);
  expect(getByText(<Information />)).toBeInTheDocument();
  expect(getByText(<Team />)).toBeInTheDocument();
  expect(getByText(<Featuring />)).toBeInTheDocument();
  expect(getByText(<Newsletter />)).toBeInTheDocument();
});

//Test that the MKBox, MKTypography, and MKButton components are rendered with the correct props:

test("renders MKBox, MKTypography, and MKButton components with correct props", () => {
  const { getByText } = render(<AboutUs />);
  expect(getByText("Material Design")).toHaveAttribute("href", "#");
  expect(getByText("Material Design")).toHaveAttribute("color", "white");
  expect(getByText("Work with an amazing design")).toHaveStyle("color: white");
  expect(getByText("create account")).toHaveStyle("color: #212121");
});

//Test that the social media icons are rendered with the correct links:
test("renders social media icons with correct links", () => {
  const { getByTestId } = render(<AboutUs />);
  expect(getByTestId("facebook-link")).toHaveAttribute("href", "#");
  expect(getByTestId("instagram-link")).toHaveAttribute("href", "#");
  expect(getByTestId("twitter-link")).toHaveAttribute("href", "#");
  expect(getByTestId("google-link")).toHaveAttribute("href", "#");
});
