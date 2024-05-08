import React from "react";
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
  BarChart,
  Bar
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 100 },
  { name: "Group C", value: 500 },
];

const COLORS = [ "#d2d2d2","#00C49F","#ffffff"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const barChartData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },

];
const App = () => {
  return (
    <div>                       
      <header className='header'>
        <div className='menu-icon'>
          <div className='header-left'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
	<path fill="currentColor" d="M3 3h18v18H3zm16 2H5v14h14zM7 12h2v5H7zm10-5h-2v10h2zm-6 3h2v2h-2zm2 4h-2v3h2z" />
</svg> Analytics
          </div>
        </div>
      </header>
      
      <div className="scrollable-container">
        <div className="main-div">
          <Card className="main-card">
            <div>
              <div className="flex-container-3">
                <div className="div-lead">
                  <div className="meet0">
                    Leads this month&nbsp;
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="lead-value">
                    <div className="wrt">
                      <div>
                        15
                        <span>
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
                        </span>
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
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="revenue-value">
                    <div className="wrt">
                      ₹25000
                      <div className="side-part-2">21%</div>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>

                <div className="div-pipeline">
                  <div className="meet0">
                    Deals in pipeline&nbsp;
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="pipe-value">
                    12
                    <br />
                    <br />
                  </div>
                  </div>
                  </div>
                  <div className="flex-container-5">

                <div className="analytic-donut">
                  
                  
                  <div className="meet0">
                    Leads Generation Target - This Year&nbsp;
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"
                        />
                      </svg>
                      </span>
                      
            
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={renderCustomizedLabel}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="wrt">
                  <div className="bar-chart">
                  <ResponsiveContainer width="50%" height={200}>
                    <BarChart
                      
                      data={barChartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="uv" fill="#82ca9d" />
                      {/* Optionally add another Bar component for more data */}
                    </BarChart>
                  </ResponsiveContainer>
                  </div>
                </div>
              </div>
                
                
              </div>
              
            </div>
            
            </div>
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
