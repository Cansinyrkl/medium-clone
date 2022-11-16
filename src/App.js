import Navbar from "./components/navbar/Navbar.jsx";
import Content from "./components/content/Content.jsx";
import Information from "./components/information/Information.jsx";
import ContentBlogs from "./components/content/contentblogs/ContentBlogs.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Information />
      <Content />
      <ContentBlogs />
    </>
  );
}

export default App;
