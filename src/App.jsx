import "./App.css";
import Banner from "./components/Banner/Banner";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <>
      <Container>
        {/* <Navbar /> */}
        <Banner />
        <Quote
          message={"海は広い。いつか必ず優しい人達に会えるから！"}
          cols={3}
        />
      </Container>
    </>
  );
}

export default App;
