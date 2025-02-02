import { Grid2 as Grid } from "@mui/material";
import { Container } from "../container/container";

interface GridItem {
  title: string;
  description: string;
}

interface GridWithContentProps {
  title: string;
  items: GridItem[];
  size: { xs: number; md: number };
}

export function GridWithContent(props: GridWithContentProps) {
  return (
    <Container>
      <h2>{props.title}</h2>
      <Grid container spacing={2}>
        {props.items.map((item, index) => (
          <Grid size={props.size} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
