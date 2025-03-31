"use client";
import { Button, Grid2 as Grid } from "@mui/material";
import { Container } from "../container/container";
import { getLocalization, Lang } from "../../localization";
import { useRouter } from "next/navigation";

interface GridItem {
  id: string;
  title: string;
  description: string;
}

interface GridWithContentProps {
  title: string;
  items: GridItem[];
  lang: Lang;
  size: { xs: number; md: number };
}

export function GridWithContent(props: GridWithContentProps) {
  const learnMoreLabel = getLocalization("expertise.learnMore", props.lang);
  const router = useRouter();
  const goToLink = (item: GridItem) => {
    router.push(`${props.lang}/services#${item.id}`);
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
