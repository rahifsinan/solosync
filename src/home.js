import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "@mui/material/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import StackedDoughnutChart from "./StackedDoughnutChart";

const App = () => {
  const [greeting, setGreeting] = useState("");

  const getGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setGreeting("Good morning!");
    } else if (currentTime < 18) {
      setGreeting("Good afternoon!");
    } else {
      setGreeting("Good evening!");
    }
  };

  useEffect(() => {
    getGreeting(); // Call getGreeting to set the initial greeting
  }, []);

  const data = [
    { name: "Mon", revenue: 10000, expenses: 6000},
    { name: "Tue", revenue: 12000, expenses: 6500 },
    { name: "Wed", revenue: 11000, expenses: 7000 },
    { name: "Thu", revenue: 13000, expenses: 7000 },
    { name: "Fri", revenue: 14000, expenses: 7500 },
    { name: "Sat", revenue: 15000, expenses: 6000 },
    // Add more data as needed
  ];

  const pieChartData = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#7E64F1", "#7E64F1", "#7E64F1", "#7E64F1"];
  const SECOND_COLORS = ["#ff7f0e", "#2ca02c", "#d62728", "#9467bd"];

  return (
    <div className="scrollable-container">
      <div className="main-div">
        <Card className="main-card">
          <div className="div-greeting">{greeting}, Novo-X</div>

          <div className="flex-container">
            <div className="div-task">
              <div className="task0">Upcoming tasks</div>

              <br />
              <br />

              <div className="task1">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                  className="img"
                />
                Task 1
              </div>
              <div className="task2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                  className="img"
                />
                Task 2
              </div>
              <div className="task3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                  className="img"
                />
                Task 3
              </div>
              <div className="task4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                  className="img"
                />
                Task 4
              </div>
              <div className="task4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                  className="img"
                />
                Task 5
              </div>
              <div className="task4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0a937d7abc3ba5c278a460cfa7e5a53b3779775d856f967ef7499e5309ea42?"
                  className="img"
                />
                Task 6
              </div>
            </div>

            {/* linechaer card */}
            <div className="div-linechart">
              <div className="wrt">
                Weekly Revenue
                <div className="side-part">
                  $ 230
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="currentColor"
                      d="M4.659 28.167h30.682L20 7.833z"
                    />
                  </svg>
                </div>
              </div>
              <div className="linechart-container">
                <div className="linechart-cell">
                  <ResponsiveContainer width="70%" height={200}>
                    <LineChart data={data}>
                      {/* Customizing grid lines */}
                      <CartesianGrid stroke="#ccc" />

                      {/* Customizing X-axis */}
                      <XAxis dataKey="name" stroke="#8884d8" />

                      {/* Customizing Y-axis */}
                      <YAxis stroke="#8884d8" />

                      {/* Customizing Tooltip */}
                      <Tooltip
                        wrapperStyle={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          color: "#fff",
                        }}
                      />

                      {/* Customizing Legend */}
                      <Legend
                        wrapperStyle={{ color: "#333", fontSize: "7px" }}
                      />

                      {/* First line */}
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#7E64F1"
                        strokeWidth={4}
                        dot={{ fill: "#7E64F1" }}
                      />

                      {/* Second line */}
                      <Line
                        type="monotone"
                        dataKey="expenses"
                        stroke="#13dfee"
                        strokeWidth={4}
                        dot={{ fill: "#13dfee" }}
                      />

                      {/* Add more lines as needed */}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-container-2">
            {/* piechart card */}
            <div className="div-piechart">
              <div className="pie-main ">
                Deal Generated

              </div>
              

              <div className="piechart-container">
                <div className="piechart-cell">
                
                

                    <ResponsiveContainer>
                      <StackedDoughnutChart />
                    </ResponsiveContainer>
                  
               
              </div>
              <div className="pie-line">
                <div className="label-1">&nbsp;</div>
                <br />
                <div className="label-2">&nbsp;</div>
                <br />
                <div className="label-3">&nbsp;</div>
                <br/><br/><br/><br/><br/>

                <div className="pie-cir">
                <div className="cir-1">&nbsp;</div>
                &nbsp;&nbsp;
                <div className="cir-2">&nbsp;</div>
                &nbsp;&nbsp;
                <div className="cir-3">&nbsp;</div>
                
                </div>

                </div>
                
                </div>
                
           
            </div>

            {/* meetingd card */}
            <div className="div-meeting">
              <div className="meet0">Upcoming meetings</div>
              <br />
              <br />

              <div className="div-meet1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
                  />
                </svg>{" "}
                Meeting 1
              </div>
              <div className="div-meet1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
                  />
                </svg>{" "}
                Meeting 2
              </div>
              <div className="div-meet1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
                  />
                </svg>{" "}
                Meeting 3
              </div>
              <div className="div-meet1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
                  />
                </svg>{" "}
                Meeting 4
              </div>
              <div className="div-meet2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
                  />
                </svg>{" "}
                Meeting 5
              </div>
              <div className="div-meet3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"
                  />
                </svg>{" "}
                Meeting 6
              </div>


            </div>
          </div>
          <div className="flex-container-3">
            <div className="div-lead">
              <div className="meet0">
                Leads this month&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                  />
                </svg>
              </div>
              <div className="lead-value">
                <div className="wrt">
                  <div>
                    15
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                    >
                      <path
                        fill="currentColor"
                        d="M4.659 28.167h30.682L20 7.833z"
                      />
                    </svg>
                  </div>
                  86%
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="div-revenue">
              <div className="meet0">
                Revenue this month&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                  />
                </svg>
              </div>

              <div className="revenue-value">
                <div className="wrt">
                  ₹25000
                  <div classname="side-part-2">21%</div>
                </div>
                <br />
                <br />
              </div>
            </div>

            <div className="div-pipeline">
              <div className="meet0">
                Deals in pipeline&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                  />
                </svg>
              </div>
              <div className="pipe-value">
                12
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="flex-container-4">
            <div className="div-table">
              <h4>
                Today's leads
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                  />
                </svg>
              </h4>
              <div className="table">
                <table className="lead-table">
                  <thead>
                    <tr>
                      <th>Lead Name</th>
                      <th>Company</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Lead Source</th>
                      {/* Add more headers if needed */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Joc & Co</td>
                      <td>jk.john@joc.in</td>
                      <td>9876543210</td>
                      <td>Advertisement</td>
                      {/* Add more data cells if needed */}
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>Joc & Co</td>
                      <td>jk.john@joc.in</td>
                      <td>9876543210</td>
                      <td>Advertisement</td>
                      {/* Add more data cells if needed */}
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>Joc & Co</td>
                      <td>jk.john@joc.in</td>
                      <td>9876543210</td>
                      <td>Advertisement</td>
                      {/* Add more data cells if needed */}
                    </tr>

                    {/* Add more rows if needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
