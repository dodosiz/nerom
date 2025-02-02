import { Container } from "../container/container";

interface ContentWithListProps {
  title: string;
  content: string[];
  listTitle: string;
  list: string[];
}

export function ContentWithList(props: ContentWithListProps) {
  return (
    <Container>
      <h2>{props.title}</h2>
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
    </Container>
  );
}
