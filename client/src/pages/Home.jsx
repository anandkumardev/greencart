import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import Categories from "../components/Categories";
import MainBanner from "../components/MainBanner";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <Newsletter />
    </div>
  );
}

export default Home;
