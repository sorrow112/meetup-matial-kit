import { Container, Grid, Typography } from "@mui/material";
import MKBox from "components/MKBox";
import React from "react";
import image from "assets/images/project/mainPage/browse.gif";
import image1 from "assets/images/project/mainPage/buyTickets.gif";
import image2 from "assets/images/project/mainPage/Organize.gif";

import ImageInfoCard from "examples/Cards/InfoCards/ImageInfoCard";

const HowTo = () => {
  return (
    <>
      <MKBox component="section" py={12}>
        <Container>
          <Typography variant="h2" pb={6} textAlign={"center"}>
            what eventsTN offers
          </Typography>
          <Grid container spacing={3} alignItems="center" justifyContent="flex-start">
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <ImageInfoCard
                  direction="center"
                  image={image}
                  title="Browse for events"
                  description="A large selection of events near you to cater to every interest."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <ImageInfoCard
                  direction="center"
                  image={image1}
                  title="Buy tickets"
                  description="You can buy tickets to your favorite events online with ease on our platform."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox mb={5}>
                <ImageInfoCard
                  direction="center"
                  image={image2}
                  title="Plan and Organize with Ease"
                  description="eventsTN provides you with powerful tools to plan, manage, and promote your events effortlessly."
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};

export default HowTo;
