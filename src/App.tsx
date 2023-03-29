import { BackgroundImage } from "./components/backgroundImage/BackgroundImage";
import { Container } from "./components/container/Container";
import { List } from "./components/list/List";

export function App() {
  return (
    <div className="App">
      <Container>
        <BackgroundImage />
        <List />
      </Container>
    </div>
  );
}
