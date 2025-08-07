import Header from "./Header";
import "../public/styles.css";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Footer />
        <Note />
      </div>
    </>
  );
}

export default App;
