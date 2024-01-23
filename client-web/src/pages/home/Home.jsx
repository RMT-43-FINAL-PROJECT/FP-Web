import { useEffect, useState } from "react";
import TopOrder from "../../components/TopOrder/TopOrder";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import TopStore from "../../components/topStore/TopStore";
import "./home.scss";
import axios from "axios";
import { toRupiah } from "../../helpers/rupiahFormarter";

const Home = () => {
  const [storeBoxInput, setStoreBoxInput] = useState({
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Stores",
    number: 0,
    dataKey: "stores",
  });
  const [productBoxInput, setProductBoxInput] = useState({
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: 0,
    dataKey: "products",
  });
  const [orderBoxInput, setOrderBoxInput] = useState({
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Orders",
    number: 0,
    dataKey: "orders",
  });
  const [revenueBoxInput, setRevenueBoxInput] = useState({
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: 0,
    dataKey: "revenue",
  });

  async function storeBox() {
    const { data } = await axios({
      method: "GET",
      url: import.meta.env.VITE_BASE_URL + "/stores",
      headers: {
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    setStoreBoxInput({ ...storeBoxInput, number: data.length });
  }
  async function productBox() {
    const { data } = await axios({
      method: "GET",
      url: import.meta.env.VITE_BASE_URL + "/products",
      headers: {
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    setProductBoxInput({ ...productBoxInput, number: data.length });
  }
  async function orderBox() {
    const { data } = await axios({
      method: "GET",
      url: import.meta.env.VITE_BASE_URL + "/orders/dashboard",
      headers: {
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    setOrderBoxInput({
      ...orderBoxInput,
      number: data.count,
    });
    setRevenueBoxInput({
      ...revenueBoxInput,
      number: toRupiah(data.totalConfirmedValue),
    });
  }
  useEffect(() => {
    storeBox();
    productBox();
    orderBox();
  }, []);

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
        <ChartBox {...storeBoxInput} />
      </div>
      {/* chart product */}
      <div className="box box3">
        <ChartBox {...productBoxInput} />
      </div>
      {/* chart order */}
      <div className="box box5">
        <ChartBox {...orderBoxInput} />
      </div>
      <div className="box box6">
        <ChartBox {...revenueBoxInput} />
      </div>

      <div className="box7"></div>
    </div>
  );
};

export default Home;
