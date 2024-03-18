import "./index.css";
import {
  leftIcon1,
  leftIcon2,
  leftIcon3,
  leftIcon4,
  leftIcon5,
  ring,
  man,
  searchEl,
  right1,
  right2,
  right3,
  right4,
  vector5,
  vector6,
} from "../../assets/index.js";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    count: 809680,
    feild: "Basic Tees",
  },
  {
    count: 4555697,
    feild: "Custom Short Pants",
  },
  {
    count: 12345657,
    feild: "Super Hoodies",
  },
];

const Linedata = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = (props) => {
  const { logOut } = props;
  return (
    <div className="dash-cont">
      <div className="left">
        <div>
          <p className="main-h">Board.</p>
          <div className="df">
            <img className="left-icon" src={leftIcon1} alt="icon" />
            <p className="left-p dash-p ">Dashboard</p>
          </div>
          <div className="df">
            <img className="left-icon" src={leftIcon2} alt="icon" />
            <p className="left-p">Transactions</p>
          </div>
          <div className="df">
            <img className="left-icon" src={leftIcon3} alt="icon" />
            <p className="left-p">Schedules</p>
          </div>
          <div className="df">
            <img className="left-icon" src={leftIcon4} alt="icon" />
            <p className="left-p">Users</p>
          </div>
          <div className="df">
            <img className="left-icon" src={leftIcon5} alt="icon" />
            <p className="left-p">Settings</p>
          </div>
        </div>
        <div>
          <button className="log-out" onClick={logOut}>
            Log Out
          </button>
          <p className="left-down-p">Help</p>
          <p className="left-down-p left-down-last">Contact Us</p>
        </div>
      </div>
      <div className="empty"></div>
      <div className="right">
        <div className="right-top-cont">
          <div>
            <h1>Dashboard</h1>
          </div>
          <div className="right-top-right-cont">
            <div className="df2">
              <input placeholder="Search.." className="search-input" />
              <img className="search-icon" src={searchEl} alt="search icon" />
            </div>
            <div className="top-righ-icon">
              <img src={ring} alt="ring icon" />
            </div>
            <div className="top-righ-icon">
              <img src={man} alt="profile" />
            </div>
          </div>
        </div>
        <div className="icons-div">
          <div className="right-small-card">
            <img src={right1} className="right-icon" alt="icon" />
            <p className="right-small-card-text">Total Revenues</p>
            <p className="right-small-card-money">$2,129,430</p>
          </div>
          <div className="right-small-card div2">
            <img src={right2} className="right-icon" alt="icon" />
            <p className="right-small-card-text ">Total Transactions</p>
            <p className="right-small-card-money">1,520</p>
          </div>

          <div className="right-small-card  div3">
            <img src={right3} className="right-icon" alt="icon" />
            <p className="right-small-card-text">Total Likes</p>
            <p className="right-small-card-money">9,721</p>
          </div>
          <div className="right-small-card div4">
            <img src={right4} className="right-icon" alt="icon" />
            <p className="right-small-card-text">Total Users</p>
            <p className="right-small-card-money">892</p>
          </div>
        </div>
        <div className="line-chart-cont">
          <div>
            <p className="act">Activities</p>
            <p className="act-down">
              May - June 2021 <img src={vector5} alt="" />
            </p>
          </div>
          <div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart
                width={730}
                height={250}
                data={Linedata}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bottom-2-cont">
          <div className="pieChart-cont">
            <div className="dfl">
              <p className="to-sc">Top Products</p>
              <p className="see-all-may">
                May - June 2021
                <img className="vector" src={vector5} alt="" />
              </p>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    cx="40%"
                    cy="35%"
                    data={data}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="0%"
                    outerRadius="70%"
                    dataKey="count"
                  >
                    <Cell name="Basic Tees" fill="#EE8484" />
                    <Cell name="Custom Short Pants" fill="#F6DC7D" />
                    <Cell name="Super Hoodies" fill="#98D89E" />
                  </Pie>
                  <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bottom-right-cont">
            <div className="dfl">
              <p className="to-sc">Today’s schedule</p>
              <p className="see-all">
                See All <img src={vector6} alt="" />
              </p>
            </div>
            <div class="paras-cont1">
              <p className="para1">Meeting with suppliers from Kuta Bali</p>
              <p className="para2">14.00-15.00</p>
              <p className="para3">at Sunset Road, Kuta, Bali </p>
            </div>
            <div class="paras-cont2">
              <p className="para1">Check operation at Giga Factory 1</p>
              <p className="para2">18.00-20.00</p>
              <p className="para3">at Central Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
