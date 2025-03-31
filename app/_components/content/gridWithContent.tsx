import { Button, Grid2 as Grid } from "@mui/material";
import { Container } from "../container/container";
import { getLocalization, Lang } from "../../localization";
import Link from "next/link";

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
  return (
    <Container>
      <h2>{props.title}</h2>
      <Grid container spacing={2}>
        {props.items.map((item, index) => (
          <Grid size={props.size} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={`${props.lang}/services#${item.id}`} passHref>
              <Button
                style={{ marginTop: "10px" }}
                color="inherit"
                variant="outlined"
              >
                {learnMoreLabel}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
