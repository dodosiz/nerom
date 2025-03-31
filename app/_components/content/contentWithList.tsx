import { Button } from "@mui/material";
import { Container } from "../container/container";
import { Lang } from "../../localization";
import Link from "next/link";

interface ContentWithListProps {
  id: string;
  title: string;
  content: string[];
  listTitle: string;
  list: string[];
  secondListTitle?: string;
  secondList?: string[];
  actionButtonLabel?: string;
  actionButtonLink?: string;
  lang: Lang;
}

export function ContentWithList(props: ContentWithListProps) {
  const link = props.actionButtonLink;
  return (
    <Container>
      <h2 id={props.id}>{props.title}</h2>
      {props.content.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
      <h3>{props.listTitle}</h3>
      <ul>
        {props.list.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      </ul>
      {props.secondList && (
        <>
          <h3 style={{ marginTop: "30px" }}>{props.secondListTitle}</h3>
          <ul>
            {props.secondList.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
      {link && (
        <Link href={`/${props.lang}/${link}`} passHref>
          <Button
            style={{ marginTop: "10px" }}
            color="inherit"
            variant="outlined"
          >
            {props.actionButtonLabel}
          </Button>
        </Link>
      )}
    </Container>
  );
}
