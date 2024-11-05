import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Features from "./Components/Features";
import Services from "./Components/Services";
import ChooseUs from "./Components/ChooseUs";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Features/>
      <Services/>
      <ChooseUs/>
    </div>
  );
}
