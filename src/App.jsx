import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const links = [
    {
      text: "Karyera",
      link: "https://www.sarkhanrahimli.dev/career",
    },
    {
      text: "Kurs",
      link: "https://www.sarkhanrahimli.dev/course",
    },
    {
      text: "Portfolio",
      link: "https://www.sarkhanrahimli.dev/portfolio",
    },
    {
      text: "Blog",
      link: "https://www.sarkhanrahimli.dev/blog",
    },
    {
      text: "Haqqımızda",
      link: "https://www.sarkhanrahimli.dev/about-us",
    },
  ];

  const buttons = [
    {
      text: "Müraciət et",
      link: "https://www.sarkhanrahimli.dev/apply",
      className: "btn1",
    },
    {
      text: "Daxil ol",
      link: "https://www.sarkhanrahimli.dev/login",
      className: "btn2",
    },
  ];
  return (
    <>
      <Header buttons={buttons} links={links} />
      <Main  buttons={buttons} /> 
      <Footer />
    </>
  );
}

export default App;
