import { Container } from "../container/container";

interface ContentWithListProps {
  id: string;
  title: string;
  content: string[];
  listTitle: string;
  list: string[];
  secondListTitle?: string;
  secondList?: string[];
}

export function ContentWithList(props: ContentWithListProps) {
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
    </Container>
  );
}
