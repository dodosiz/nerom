"use client";
import { Divider, Grid2 as Grid } from "@mui/material";
import { Container } from "./_components/container/container";
import { Hero } from "./_components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero
        title="NEROM"
        description="Nerom Engineering & Business Services"
        image="/images/hero.jpg"
      />
      <Container>
        <h2>Who we are</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      <Divider variant="middle" />
      <Container>
        <h2>Our expertise</h2>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <h3>Business</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <h3>Trainings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
