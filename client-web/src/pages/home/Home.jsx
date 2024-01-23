import TopOrder from "../../components/TopOrder/TopOrder";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import TopStore from "../../components/topStore/TopStore";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxOrders,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxStores,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box1">
        <TopOrder />
      </div>
      <div className="box box1">
        <TopStore />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      {/* chart store */}
      <div className="box box2">
        <ChartBox {...chartBoxStores} />
      </div>
      {/* chart product */}
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      {/* chart order */}
      <div className="box box5">
        <ChartBox {...chartBoxOrders} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>

      <div className="box7"></div>
    </div>
  );
};

export default Home;
