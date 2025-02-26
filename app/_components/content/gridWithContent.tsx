"use client";
import { Button, Grid2 as Grid } from "@mui/material";
import { Container } from "../container/container";
import { useLang, useLocalized } from "../../localization";

interface GridItem {
  id: string;
  title: string;
  description: string;
}

interface GridWithContentProps {
  title: string;
  items: GridItem[];
  size: { xs: number; md: number };
}

export function GridWithContent(props: GridWithContentProps) {
  const lang = useLang();
  const learnMoreLabel = useLocalized("expertise.learnMore", lang);
  const goToLink = (item: GridItem) => {
    window.location.href = `/services#${item.id}`;
  };
  return (
    <Container>
      <h2>{props.title}</h2>
      <Grid container spacing={2}>
        {props.items.map((item, index) => (
          <Grid size={props.size} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => goToLink(item)}
            >
              {learnMoreLabel}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
