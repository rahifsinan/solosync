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
  RadialBarChart, 
  RadialBar,
  PieChart,
  Pie,
  Cell,
  ScatterChart, 
  
    ZAxis,
     Scatter, 
  BarChart,
  Bar
} from "recharts";

const data = [{ value: 30 }, { value: 70 }];

const COLORS = ['#0088FE', '#d2d2d2'];

const COLORS2 = ['#0088FE', '#d2d2d2','#CAEAAC','#ACCF71','#00A593','#028745'];

const data2 = [
  { value: 30 }, { value: 40 },{ value: 20 }, { value: 10 },{ value: 30 }, { value: 60 }
];
const data3 = [
  { value: 20 }, { value: 30 },{ value: 40 }, { value: 10 },
];

const COLORS3 = ['#0088FE', '#d2d2d2','#CAEAAC','#ACCF71'];
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
                    Leads Generation Target-This Year&nbsp;
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
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
                      </div>
                      </div>
                      
                      
            

                  <div className="wrt">
                  <div className="bar-chart">
                  <div className="meet0">
                  Revenue Generation Target-This Year&nbsp;
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
                  <ResponsiveContainer width="100%" height={200}>
  <BarChart
    layout="vertical"
    data={barChartData}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" />
    <Tooltip />
    <Legend />
    <Bar dataKey="uv" fill="#82ca9d" />
    {/* Optionally add another Bar component for more data */}
  </BarChart>
</ResponsiveContainer>

                  </div>
                </div>
              </div>
              <div className="flex-container-3">
                
            <div className="analytic-table">
            <div className="meet0">
              
                    Last 3 months performance monitor &nbsp;
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
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <td>December 2024</td>
                      <td>January 2024</td>
                      <td>February 2024</td>
                      {/* Add more headers if needed */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    
                      <td>LEADS CREATED</td>
                      <td>11</td>
                      <td>8</td>
                      <td>15</td>
                      {/* Add more data cells if needed */}
                    </tr>
                    <tr>
                      
                      <td>DEALS CREATED</td>
                      <td>8</td>
                      <td>10</td>
                      <td>7</td>
                      {/* Add more data cells if needed */}
                    </tr>
                    <tr>
                      
                      <td>DEALS WON</td>
                      <td>2</td>
                      <td>0</td>
                      <td>5</td>
                      {/* Add more data cells if needed */}
                    </tr>
                    <tr>
                      
                      <td>REVENUE WON</td>
                      <td>₹2500</td>
                      <td>₹0</td>
                      <td>₹20000</td>
                      {/* Add more data cells if needed */}
                    </tr>
                    <tr>
                      
                      <td>OPEN AMOUNT</td>
                      <td>₹43000</td>
                      <td>₹45700</td>
                      <td>₹65000</td>
                      {/* Add more data cells if needed */}
                    </tr>

                    {/* Add more rows if needed */}
                  </tbody>
                </table>
              </div>

              <div className="analytic-pie">
              <div className="meet0">
                Leads by Source&nbsp;
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
              <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={data2}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        
                        paddingAngle={5}
                        dataKey="value"
                        label={renderCustomizedLabel}
                      >
                        {data2.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
              </div>
              </div>
              </div>
         
           

            <div className="div-pipeline">

            <ResponsiveContainer width="100%" height={200}>
    <PieChart>
      <Pie
        data={data3}
        cx="50%"
        cy="50%"
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={0}
        dataKey="value"
        labelLine={false}
      >
        {data3.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS3[index]} />
        ))}
      </Pie>
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  </ResponsiveContainer>
            </div>
          
                
                
             
            
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
