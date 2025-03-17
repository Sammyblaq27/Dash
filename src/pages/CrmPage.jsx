import {useState} from "react";
import { Card, Row, Col, Dropdown, Menu, Table, Progress, Avatar, Input, Checkbox, Button } from "antd";
import { MoreOutlined, CreditCardOutlined, PlusOutlined, ShoppingCartOutlined, BarChartOutlined, DollarOutlined, ClockCircleOutlined,   } from "@ant-design/icons";
import { Bar, Line } from "react-chartjs-2";
import { ResponsiveContainer, BarChart, XAxis, YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell, LineChart} from "recharts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./styles.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const CrmPage = () => {
    
    const [activeTab, setActiveTab] = useState("orders");
    const activeColor = "#5A45FF"; // Highlight color
    const inactiveColor = "#EDEAFF"; // Light bars
    




    const styles = {
        card: {
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
          textAlign: "center",
        },
        title: {
          color: "#333",
          fontSize: "16px",
          marginBottom: "5px",
        },
        subtitle: {
          color: "#888",
          fontSize: "12px",
          marginBottom: "15px",
        },
        value: {
          margin: "15px 0 5px",
          fontWeight: "bold",
          color: "#333",
          fontSize: "20px",
        },
        positive: {
          color: "#4CAF50",
          fontSize: "14px",
          fontWeight: "bold",
          background: "#E6F7E6",
          padding: "4px 8px",
          borderRadius: "6px",
        },
        negative: {
          color: "#FF4D4F",
          fontSize: "14px",
          fontWeight: "bold",
          background: "#FFE6E6",
          padding: "4px 8px",
          borderRadius: "6px",
        },
        iconBoxRed: {
          background: "#FFE6E6",
          borderRadius: "6px",
          padding: "6px",
          display: "inline-block",
        },
        iconRed: {
          fontSize: "20px",
          color: "#FF4D4F",
        },
        iconBoxGreen: {
          background: "#E6F7E6",
          borderRadius: "6px",
          padding: "6px",
          display: "inline-block",
        },
        iconGreen: {
          fontSize: "20px",
          color: "#4CAF50",
        },
      };

    const tabs = [
        { key: "orders", label: "Orders", icon: <ShoppingCartOutlined /> },
        { key: "sales", label: "Sales", icon: <BarChartOutlined /> },
        { key: "profit", label: "Profit", icon: <DollarOutlined /> },
        { key: "income", label: "Income", icon: <ClockCircleOutlined /> },
        { key: "add", label: "", icon: <PlusOutlined />, isAddButton: true },
      ];
    
      const data = [
        { name: "Jan", value: 28000 },
        { name: "Feb", value: 10000 },
        { name: "Mar", value: 45000 },
        { name: "Apr", value: 38000 },
        { name: "May", value: 15000 },
        { name: "Jun", value: 30000 },
        { name: "Jul", value: 35000 },
        { name: "Aug", value: 30000 },
        { name: "Sep", value: 8000 },
      ];

    const radarData = [
        { subject: "Jan", sales: 80, visits: 90 },
        { subject: "Feb", sales: 100, visits: 110 },
        { subject: "Mar", sales: 75, visits: 85 },
        { subject: "Apr", sales: 95, visits: 100 },
        { subject: "May", sales: 60, visits: 70 },
        { subject: "Jun", sales: 85, visits: 95 },
      ];



      const orderData = [
        { name: "Mon", value: 50 },
        { name: "Tue", value: 80 },
        { name: "Wed", value: 40 },
        { name: "Thu", value: 90 },
        { name: "Fri", value: 30 },
        { name: "Sat", value: 60 },
        { name: "Sun", value: 100 },
      ];
      
      const salesData = [
        { name: "Jan", value: 50 },
        { name: "Feb", value: 70 },
        { name: "Mar", value: 40 },
        { name: "Apr", value: 100 },
        { name: "May", value: 30 },
        { name: "Jun", value: 80 },
      ];

  const menu = (
    <Menu>
      <Menu.Item key="1">Action 1</Menu.Item>
      <Menu.Item key="2">Action 2</Menu.Item>
      <Menu.Item key="3">Action 3</Menu.Item>
    </Menu>
  );
  

  const barData = {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [
      {
        label: "Earnings",
        data: [200, 300, 400, 350, 500, 450, 600],
        backgroundColor: "#764ba2",
      },
    ],
  };
  

  return (
        <>
      <div className="dashboard-container">
      {/* First Row - Existing Cards */}



      <Row gutter={[16, 16]}>
      {/* Order Card */}
      <Col xs={24} sm={12} md={6}>
        <Card bordered={false} style={styles.card}>
          <h4 style={styles.title}>Order</h4>
          <p style={styles.subtitle}>Last Week</p>

          {/* Bar Chart */}
          <div style={{ width: "100%", height: 60 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderData}>
                <XAxis dataKey="name" hide />
                <Bar dataKey="value" barSize={8} radius={[4, 4, 0, 0]}>
                  {orderData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={index === orderData.length - 1 ? "#302EE6" : "rgba(48, 46, 230, 0.4)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h2 style={styles.value}>124k</h2>
          <span style={styles.positive}>+12.6%</span>
        </Card>
      </Col>

      {/* Sales Card */}
      <Col xs={24} sm={12} md={6}>
        <Card bordered={false} style={styles.card}>
          <h4 style={styles.title}>Sales</h4>
          <p style={styles.subtitle}>Last Year</p>

          {/* Line Chart */}
          <div style={{ width: "100%", height: 60 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <defs>
                  <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#4CAF50" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#4CAF50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} fill="url(#colorGreen)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h2 style={styles.value}>175k</h2>
          <span style={styles.negative}>-16.2%</span>
        </Card>
      </Col>

      {/* Total Profit Card */}
      <Col xs={24} sm={12} md={6}>
        <Card bordered={false} style={styles.card}>
          <div style={styles.iconBoxRed}>
            <CreditCardOutlined style={styles.iconRed} />
          </div>
          <h4 style={styles.title}>Total Profit</h4>
          <p style={styles.subtitle}>Last Week</p>
          <h2 style={styles.value}>1.28k</h2>
          <span style={styles.negative}>-12.2%</span>
        </Card>
      </Col>

      {/* Total Sales Card */}
      <Col xs={24} sm={12} md={6}>
        <Card bordered={false} style={styles.card}>
          <div style={styles.iconBoxGreen}>
            <CreditCardOutlined style={styles.iconGreen} />
          </div>
          <h4 style={styles.title}>Total Sales</h4>
          <p style={styles.subtitle}>Last Week</p>
          <h2 style={styles.value}>24.67k</h2>
          <span style={styles.positive}>+24.5%</span>
        </Card>
      </Col>
    </Row>





      {/* Second Row - New Boxes Below Existing Cards */}
       <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
      <Col span={24} style={{ padding: 12, borderRadius: 8 }}>
        <Card className="analytics-card" bordered={false} style={{ height: "100%", padding: 20 }}>
          {/* Header */}
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Yearly Earnings Overview</h3>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                type={tab.key === activeTab ? "primary" : "default"}
                icon={tab.icon}
                onClick={() => setActiveTab(tab.key)}
                className={tab.key === activeTab ? "active-tab" : "tab-button"}
                style={{
                  flex: tab.isAddButton ? "0 0 45px" : "1",
                  height: 50,
                  fontSize: 14,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  background: tab.key === activeTab ? "#EDEAFF" : "#F5F5F5",
                  border: tab.key === activeTab ? "2px solid #5A45FF" : "none",
                  color: tab.key === activeTab ? "#5A45FF" : "#666",
                  boxShadow: tab.key === activeTab ? "0 0 6px rgba(90, 69, 255, 0.3)" : "none",
                }}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Bar Chart */}
          <div style={{ width: "100%", height: 280, display: "flex" }}>
            {/* Left Column (OK Chart) */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: 10 }}>
              {[50, 40, 30, 20, 10, 0].map((num) => (
                <div key={num} style={{ fontSize: 14, color: "#888", fontWeight: 600 }}>{num}k</div>
              ))}
            </div>

            {/* Bar Chart */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="transparent" tickFormatter={(tick) => `${tick / 1000}k`} />
                <Tooltip formatter={(value) => `${value / 1000}k`} cursor={{ fill: "transparent" }} />

                {/* Bars */}
                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.value === Math.max(...data.map((d) => d.value)) ? activeColor : inactiveColor}
                    />
                  ))}
                </Bar>

                {/* Labels Above Bars */}
                {data.map((entry, index) => (
                  <text
                    key={index}
                    x={index * 75 + 40}
                    y={250 - (entry.value / 2000) * 20 - 10}
                    textAnchor="middle"
                    fontSize={14}
                    fontWeight={600}
                    fill={entry.value === Math.max(...data.map((d) => d.value)) ? activeColor : "#444"}
                  >
                    {entry.value / 1000}k
                  </text>
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Col>
    </Row>





            {/* Third Row - New Boxes Below Existing Cards */}

            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
  <Col span={12}>
    <Card className="analytics-card" bordered={false} style={{ padding: 20 }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>Sales by Countries</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <MoreOutlined className="more-icon" style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      </div>
      <p style={{ color: "#A0AEC0", marginBottom: 16 }}>Monthly Sales Overview</p>
      <div>
        {[
          { flag: "/USA.jpg", country: "United States", amount: "$8,567k", change: "+25.8%", color: "green" },
          { flag: "/Brazil.jpg", country: "Brazil", amount: "$2,415k", change: "-6.2%", color: "red" },
          { flag: "/India.jpg", country: "India", amount: "$865k", change: "+12.4%", color: "green" },
          { flag: "/Australia.jpg", country: "Australia", amount: "$745k", change: "-11.9%", color: "red" },
          { flag: "/France.jpg", country: "France", amount: "$45", change: "+16.2%", color: "green" },
          { flag: "/China.jpg", country: "China", amount: "$12k", change: "+14.8%", color: "green" },
        ].map(({ flag, country, amount, change, color }, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <img src={flag} alt={country} style={{ width: 30, height: 20, borderRadius: 4 }} />
            <div style={{ flex: 1, marginLeft: 10 }}>
              <h4 style={{ margin: 0 }}>{amount}</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#A0AEC0" }}>{country}</p>
            </div>
            <span style={{ color, display: "flex", alignItems: "center" }}>
              <span style={{ color }}>{color === "green" ? "^" : "^"}</span> {change}
            </span>
          </div>
        ))}
      </div>
    </Card>
  </Col>

  <Col span={12}>
    <Card className="sales-card" bordered={false} style={{ padding: 20 }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>Total Earning</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <MoreOutlined className="more-icon" style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      </div>
      <h2 style={{ fontSize: 32, margin: "10px 0" }}>
        87% <span style={{ color: "green", fontSize: 18 }}>^ 25.8%</span>
      </h2>
      <Bar data={barData} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ background: "#EEF2FF", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 8 }}>
            🏦
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 14, color: "#A0AEC0" }}>Total Revenue</p>
            <h4 style={{ margin: 0, fontSize: 16 }}>Client Payment</h4>
          </div>
        </div>
        <span style={{ color: "green" }}>+$126</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ background: "#F3F4F6", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 8 }}>
            💰
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 14, color: "#A0AEC0" }}>Total Sales</p>
            <h4 style={{ margin: 0, fontSize: 16 }}>Refund</h4>
          </div>
        </div>
        <span style={{ color: "green" }}>+$98</span>
      </div>
    </Card>
  </Col>
</Row>



      {/* Fourth Row - New Boxes Below Existing Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
  {/* Active Project Card */}
  <Col span={12}>
    <Card className="analytics-card" bordered={false} style={{ padding: 20, borderRadius: 12 }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Active Project</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <MoreOutlined className="more-icon" style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      </div>
      <p style={{ color: "#888", marginBottom: 16 }}>Average 72% Completed</p>

      {/* Project List */}
      <ul className="project-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {[
          { name: "Laravel", type: "eCommerce", value: 65, color: "#FF5B5B", img: "/Laravel.jpg" },
          { name: "Figma", type: "App UI Kit", value: 86, color: "#7A66FF", img: "/figma.png" },
          { name: "VueJs", type: "Calendar App", value: 90, color: "#27AE60", img: "/vuejs.png" },
          { name: "React", type: "Dashboard", value: 37, color: "#00B4D8", img: "/React.png" },
          { name: "Bootstrap", type: "Website", value: 22, color: "#6A11CB", img: "/Bootstrap.jpg" },
          { name: "Sketch", type: "Website Design", value: 29, color: "#F4A261", img: "/sketch.png" },
        ].map((project) => (
          <li key={project.name} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            <img src={project.img} alt={project.name} style={{ width: 28, height: 28, marginRight: 12 }} />
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{project.name}</span>
              <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{project.type}</p>
            </div>
            <div style={{ flex: 2, height: 8, background: "#E0E0E0", borderRadius: 6, position: "relative", overflow: "hidden" }}>
              <div style={{
                width: `${project.value}%`,
                height: "100%",
                background: project.color,
                borderRadius: 6,
                transition: "width 0.3s ease",
              }} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#666", marginLeft: 12 }}>{project.value}%</span>
          </li>
        ))}
      </ul>
    </Card>
  </Col>

  {/* Last Transactions Card */}
  <Col span={12}>
    <Card className="sales-card" bordered={false} style={{ padding: 20, borderRadius: 12 }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Last Transaction</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <MoreOutlined className="more-icon" style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      </div>

      {/* Transactions Table */}
      <table style={{ width: "100%", marginTop: 10, fontSize: 14, borderSpacing: "0 8px" }}>
        <thead>
          <tr style={{ textAlign: "left", color: "#888", fontSize: 12 }}>
            <th style={{ paddingBottom: 8 }}>CARD</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TREND</th>
          </tr>
        </thead>
        <tbody>
          {[
            { card: "*4230", type: "Credit", date: "17 Mar 2022", status: "Verified", statusColor: "#6BCF97", amount: "+$1,678", img: "/visa.jpg" },
            { card: "*5578", type: "Credit", date: "12 Feb 2022", status: "Rejected", statusColor: "#FF5B5B", amount: "-$839", img: "/visa.jpg" },
            { card: "*4567", type: "ATM", date: "28 Feb 2022", status: "Verified", statusColor: "#6BCF97", amount: "+$435", img: "/visa.jpg" },
            { card: "*5699", type: "Credit", date: "8 Jan 2022", status: "Pending", statusColor: "#BFBFBF", amount: "+$2,345", img: "/visa.jpg" },
            { card: "*5699", type: "Credit", date: "8 Jan 2022", status: "Rejected", statusColor: "#FF5B5B", amount: "-$435", img: "/visa.jpg" },
          ].map((transaction) => (
            <tr key={transaction.card} style={{ background: "#F9F9F9", borderRadius: 8, textAlign: "left" }}>
              <td style={{ padding: "8px 10px", fontWeight: 600, display: "flex", alignItems: "center" }}>
                <img src={transaction.img} alt="Card Logo" style={{ width: 32, height: 20, marginRight: 8 }} />
                <div>
                  {transaction.card} <br />
                  <span style={{ fontSize: 12, color: "#888" }}>{transaction.type}</span>
                </div>
              </td>
              <td style={{ padding: "8px 10px", fontSize: 12, color: "#666" }}>{transaction.date}</td>
              <td style={{ padding: "8px 10px" }}>
                <span style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  background: transaction.statusColor + "20",
                  color: transaction.statusColor,
                  fontSize: 12,
                  fontWeight: 600,
                  borderRadius: 6,
                }}>{transaction.status}</span>
              </td>
              <td style={{ padding: "8px 10px", fontWeight: 600, color: transaction.amount.includes("+") ? "green" : "red" }}>
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </Col>
</Row>







      {/* Fifth Row - New Boxes Below Existing Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
  <Col span={24}>
    <Card className="project-list-card" bordered={false}>
      <div className="project-list-header">
        <h4 style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="icon">⚡</span> Activity Timeline
        </h4>
      </div>
      <ul className="activity-list">
        {[
          {
            key: "1",
            type: "Invoices Paid",
            description: "Invoices have been paid to the company",
            icon: "/purpleR.jpg",
            time: "12 min ago",
            attachment: { text: "invoices.pdf", icon: "/pdflogo.jpg" },
          },
          {
            key: "2",
            type: "Client Meeting",
            description: "Project meeting with John @10:15am",
            icon: "/GreenR.jpg",
            time: "45 min ago",
            avatar: "/avatar1.jpg",
            client: "Lester McCarthy (Client)",
            company: "CEO of Pixinvent",
          },
          {
            key: "3",
            type: "New Project",
            description: "6 team members in a project",
            icon: "/Blue.png",
            time: "2 Day Ago",
            team: ["/avatar2.jpg", "/avatar.jpg", "/avatar1.jpg", "/avatar.jpg"],
          },
        ].map((item) => (
          <li key={item.key} className="activity-item">
            <div className="activity-icon">
              <Avatar src={item.icon} />
            </div>
            <div className="activity-content">
              <h5>{item.type}</h5>
              <p>{item.description}</p>
              {item.attachment && (
                <span className="attachment">
                  <Avatar src={item.attachment.icon} size={16} />
                  {item.attachment.text}
                </span>
              )}
              {item.avatar && (
                <div className="client-info">
                  <Avatar src={item.avatar} />
                  <div>
                    <strong>{item.client}</strong>
                    <span>{item.company}</span>
                  </div>
                </div>
              )}
              {item.team && (
                <div className="team-avatars">
                  {item.team.slice(0, 3).map((member, index) => (
                    <Avatar key={index} src={member} />
                  ))}
                  {item.team.length > 3 && (
                    <span className="team-count">+{item.team.length - 3}</span>
                  )}
                </div>
              )}
            </div>
            <span className="activity-time">{item.time}</span>
          </li>
        ))}
      </ul>
    </Card>
  </Col>
</Row>

 {/* sixth Row - New Boxes Below Existing Cards */}


 <Row gutter={[16, 16]} style={{ marginTop: 16 }}> 
  <Col span={12}>
    <Card bordered={false} style={{ borderRadius: "12px", padding: "20px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
      <h3 style={{ margin: 0 }}>Sales</h3>
      <p style={{ marginTop: "5px", color: "#888" }}>Last 6 Months</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" width={250} height={200} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Sales" dataKey="sales" stroke="blue" fill="blue" fillOpacity={0.6} />
          <Radar name="Visits" dataKey="visits" stroke="cyan" fill="cyan" fillOpacity={0.6} />
        </RadarChart>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <span style={{ color: "blue" }}>⬤ Sales</span>
        <span style={{ color: "cyan" }}>⬤ Visits</span>
      </div>
    </Card>
  </Col>

  <Col span={12}>
    <Card bordered={false} style={{ borderRadius: "12px", padding: "20px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
      <h3 style={{ margin: 0 }}>Revenue Growth</h3>
      <p style={{ marginTop: "5px", color: "#888" }}>Weekly Report</p>
      <h2 style={{ margin: "10px 0", color: "#333" }}>$4,673</h2>
      <span style={{ background: "rgba(0,200,83,0.2)", color: "green", padding: "4px 8px", borderRadius: "6px", fontSize: "14px" }}>
        +15.2%
      </span>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px", alignItems: "flex-end" }}>
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{
              width: "15px",
              height: `${Math.random() * 50 + 20}px`,
              background: index === 4 ? "green" : "rgba(0,200,83,0.2)",
              borderRadius: "4px"
            }} />
            <span style={{ fontSize: "12px", color: "#888" }}>{day}</span>
          </div>
        ))}
      </div>
    </Card>
  </Col>
</Row>



    </div>
        </>
  );
};

export default CrmPage;
