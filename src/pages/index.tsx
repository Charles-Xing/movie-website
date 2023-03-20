import BottomBar from "./components/nav/BottomBar";
import MainSection from "./components/nav/MainSection";
import Nav from "./components/nav/Nav";


export default function Home() {
  return (
    <body className=" w-full h-screen bg-black ">
      <Nav />
      <MainSection />
      <BottomBar />
    </body>
  )
}
