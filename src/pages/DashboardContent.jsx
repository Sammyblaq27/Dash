import React, { useState, useEffect } from "react";
import { Card, Row, Col, Dropdown, Menu, Table, Progress, Avatar, Input, Checkbox, Carousel} from "antd";
import { MoreOutlined, MailOutlined, LinkOutlined, ContainerOutlined, UserAddOutlined, WarningOutlined, StopOutlined, GlobalOutlined, ShareAltOutlined, GoogleOutlined, AppstoreOutlined, SearchOutlined } from "@ant-design/icons";
import { Bar, Line } from "react-chartjs-2";
import { AnimatePresence, motion } from "framer-motion";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend,} from "chart.js";
import "./styles.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const slides = [
  {
    image:
      "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-1.png",
    text: "Welcome to our platform!",
    text2: "Total 28.5% conversion rate",
    text3: "Traffic",
    text4: "28k",
    text5: "3.1k",
    text6: "1.2k",
    text7: "12%",
    text8: "Sessions",
    text9: "Page Views",
    text10: "Leads",
    text11: "Conversions",
  },

  {
    image:
      "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-2.png",
    text: "Discover amazing features.",
    text2: "Total 28.5% conversion rate",
    text3: "Spending",
    text4: "12h",
    text5: "18",
    text6: "127",
    text7: "2.3k",
    text8: "Spend",
    text9: "Order Size",
    text10: "Order",
    text11: "Items",
  },

  {
    image:
      "https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-3.png",
    text: "Enhance your productivity.",
    text2: "Total 28.5% conversion rate",
    text3: "Revenue Source",
    text4: "268",
    text5: "890",
    text6: "62",
    text7: "1.2k",
    text8: "Direct",
    text9: "Organic",
    text10: "Referral",
    text11: "Campaign",
  },
];


const DashboardContent = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Action 1</Menu.Item>
      <Menu.Item key="2">Action 2</Menu.Item>
      <Menu.Item key="3">Action 3</Menu.Item>
    </Menu>
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Overview",
        data: [100, 150, 200, 180, 220, 260],
        borderColor: "#667eea",
        backgroundColor: "rgba(102, 126, 234, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
        <>
      <div className="dashboard-container">
      {/* First Row - Existing Cards */}



    <Row gutter={[16, 16]}>
  <Col span={11}>
    
      
      <div className="firstBody">
        <div className="carousel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 1, x: "100%" }}
              animate={{ opacity: 1, x: 1 }}
              exit={{ opacity: 1, x: "-100%" }}
              transition={{ duration: 0.1 }}
              className="slide"
            >
              <img
                src={slides[currentIndex].image}
                alt="Slide"
                className="slide-image"
              />
              <p className="slide-text">{slides[currentIndex].text}</p>
              <p className="slide-text2">{slides[currentIndex].text2}</p>
              <p className="slide-text3">{slides[currentIndex].text3}</p>
              <p className="slide-text4">{slides[currentIndex].text4}</p>
              <p className="slide-text5">{slides[currentIndex].text5}</p>
              <p className="slide-text6">{slides[currentIndex].text6}</p>
              <p className="slide-text7">{slides[currentIndex].text7}</p>
              <p className="slide-text8">{slides[currentIndex].text8}</p>
              <p className="slide-text9">{slides[currentIndex].text9}</p>
              <p className="slide-text10">{slides[currentIndex].text10}</p>
              <p className="slide-text11">{slides[currentIndex].text11}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="controls">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`dot ${currentIndex === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

  </Col>

  <Col span={6}>
  <Card
    bordered={false}
    style={{
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      textAlign: "left" // Align text to the left
    }}
  >
    <h4 style={{ margin: 0, color: "#555" }}>Average Daily Sales</h4>
    <p style={{ margin: "5px 0", color: "#888" }}>Total Sales This Month</p>
    
    {/* Shifted Price Higher */}
    <h2 style={{ 
      margin: "0 0 10px 0", 
      color: "#333", 
      fontSize: "26px" 
    }}>
      $28,450
    </h2>

    {/* Image Instead of Chart */}
    <div style={{ 
      marginTop: "0px", 
      width: "100%", 
      display: "flex", 
      justifyContent: "center" 
    }}>
      <img 
        src="/chart1.svg"  // Ensure this is the correct green chart image path
        alt="Sales Chart" 
        style={{ 
          width: "100%", 
          height: "75px", 
          objectFit: "contain" 
        }} 
      />
    </div>
  </Card>
</Col>


  <Col span={6}>
    <Card bordered={false} style={{ borderRadius: "12px", padding: "20px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
      <h4 style={{ margin: 0, color: "#555" }}>Sales Overview</h4>
      <h2 style={{ margin: "5px 0", color: "#333" }}>
        $42.5k <span style={{ color: "green", fontSize: "16px" }}>+18.2%</span>
      </h2>
      <p style={{ color: "#888", margin: "5px 0" }}>Order</p> 
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }} >
        <div style={{ textAlign: "center" }} visit>
          <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>62.2%</p>
          <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>6,440</p>
        </div>
        <div style={{ width: "1px", height: "30px", backgroundColor: "#ddd" }}>v</div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>25.5%</p>
          <p style={{ fontSize: "12px", color: "#888", margin: 0 }}>12,749</p>
        </div>
      </div>
      <div style={{ height: "5px", width: "100%", background: "linear-gradient(90deg, #00c6ff 60%, #9000ff 40%)", marginTop: "10px", borderRadius: "8px" }} />
    </Card>
  </Col>
</Row>





      {/* Second Row - New Boxes Below Existing Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card className="analytics-card" bordered={false}>
            <div className="card-header">
              <h3>Earning Reports</h3>
              <Dropdown overlay={menu} trigger={["click"]}>
                <MoreOutlined className="more-icon" />
              </Dropdown>
            </div>
            <h2>$468</h2>
            <p className="positive">+4.2% from last week</p>
            <Bar data={barData} />
          </Card>
        </Col>
        <Col span={12}>
          <Card className="sales-card" bordered={false}>
            <h4>Sales Overview</h4>
            <p>Total Sales This Month</p>
            <h2>$28,450</h2>
            <Line data={lineData} />
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
  <Col span={12}>
    <Card className="analytics-card" bordered={false} style={{ padding: 20 }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>Monthly Campaign State</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <MoreOutlined className="more-icon" style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      </div>
      <p style={{ marginBottom: 16 }}>8.52k Social Visitors</p>
      <ul className="campaign-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MailOutlined style={{ color: "#6bcf97", fontSize: 18 }} /> Emails
          </span>
          <span>12,346</span>
          <span style={{ color: "green" }}>0.3%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LinkOutlined style={{ color: "#69c0ff", fontSize: 18 }} /> Opened
          </span>
          <span>8,734</span>
          <span style={{ color: "green" }}>2.1%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ContainerOutlined style={{ color: "#ff9c6e", fontSize: 18 }} /> Clicked
          </span>
          <span>967</span>
          <span style={{ color: "red" }}>1.4%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <UserAddOutlined style={{ color: "#b37feb", fontSize: 18 }} /> Subscribe
          </span>
          <span>345</span>
          <span style={{ color: "green" }}>8.5%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <WarningOutlined style={{ color: "#bfbfbf", fontSize: 18 }} /> Complaints
          </span>
          <span>10</span>
          <span style={{ color: "red" }}>1.5%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <StopOutlined style={{ color: "#ff7875", fontSize: 18 }} /> Unsubscribe
          </span>
          <span>86</span>
          <span style={{ color: "green" }}>0.8%</span>
        </li>
      </ul>
    </Card>
  </Col>

  <Col span={12}>
    <Card className="sales-card" bordered={false} style={{ padding: 20 }}>
      <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ margin: 0 }}>Source Visits</h3>
        <Dropdown overlay={menu} trigger={["click"]}>
          <MoreOutlined className="more-icon" style={{ fontSize: 18, cursor: "pointer" }} />
        </Dropdown>
      </div>
      <p style={{ marginBottom: 16 }}>38.4k Visitors</p>
      <ul className="visit-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <GlobalOutlined style={{ fontSize: 18 }} /> Direct Source
          </span>
          <span>1.2k</span>
          <span style={{ color: "green" }}>+4.2%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ShareAltOutlined style={{ fontSize: 18 }} /> Social Network
          </span>
          <span>31.5k</span>
          <span style={{ color: "green" }}>+8.2%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MailOutlined style={{ fontSize: 18 }} /> Email Newsletter
          </span>
          <span>893</span>
          <span style={{ color: "green" }}>+2.4%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LinkOutlined style={{ fontSize: 18 }} /> Referrals
          </span>
          <span>342</span>
          <span style={{ color: "red" }}>-0.4%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <GoogleOutlined style={{ fontSize: 18 }} /> ADVT
          </span>
          <span>2.15k</span>
          <span style={{ color: "green" }}>+9.1%</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <AppstoreOutlined style={{ fontSize: 18 }} /> Other
          </span>
          <span>12.5k</span>
          <span style={{ color: "green" }}>+6.2%</span>
        </li>
      </ul>
    </Card>
  </Col>
</Row>




      {/* Fifth Row - New Boxes Below Existing Cards */}
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
  <Col span={24}>
    <Card className="project-list-card" bordered={false}>
      <div className="project-list-header">
        <h4>Project List</h4>
        <Input placeholder="Search Project" className="search-input" />
      </div>
      <Table
        className="project-table"
        columns={[
          {
            title: "PROJECT",
            dataIndex: "project",
            key: "project",
            render: (text, record) => (
              <div className="project-info">
                <Checkbox className="custom-checkbox" />
                <Avatar src={record.icon} className="project-avatar" />
                <div className="project-text">
                  <span className="project-name">{record.name}</span>
                  <span className="project-date">{record.date}</span>
                </div>
              </div>
            ),
          },
          { title: "LEADER", dataIndex: "leader", key: "leader" },
          {
            title: "TEAM",
            dataIndex: "team",
            key: "team",
            render: (team) => (
              <div className="team-avatars">
                {team.map((member, index) => (
                  <Avatar key={index} src={member} className="team-avatar" />
                ))}
                {team.length > 2 && <span className="team-count">+{team.length - 2}</span>}
              </div>
            ),
          },
          {
            title: "PROGRESS",
            dataIndex: "progress",
            key: "progress",
            render: (progress) => (
              <div className="progress-wrapper">
                <Progress percent={progress} showInfo={false} className="progress-bar" />
                <span className="progress-text">{progress}%</span>
              </div>
            ),
          },
          { title: "ACTION", key: "action", render: () => <MoreOutlined className="action-icon" /> },
        ]}
        dataSource={[
          {
            key: "1",
            icon: "Wslogo.png",
            name: "Website SEO",
            date: "10 May 2021",
            leader: "Eileen",
            team: ["/avatar1.jpg", "/avatar2.jpg", "/avatar.jpg", "/avatar1.jpg"],
            progress: 38,
          },
          {
            key: "2",
            icon: "global.png",
            name: "Social Banners",
            date: "03 Jan 2021",
            leader: "Owen",
            team: ["/avatar1.jpg", "/avatar2.jpg", "/avatar.jpg"],
            progress: 45,
          },
          {
            key: "3",
            icon: "sketch.png",
            name: "Logo Designs",
            date: "12 Aug 2021",
            leader: "Keith",
            team: ["/avatar.jpg", "/avatar2.jpg", "/avatar3.jpg"],
            progress: 92,
          },
          {
            key: "4",
            icon: "sketch.png",
            name: "IOS App Design",
            date: "19 Apr 2021",
            leader: "Merline",
            team: ["/avatar1.jpg", "/avatar2.jpg"],
            progress: 56,
          },
          {
            key: "5",
            icon: "/figma.png",
            name: "Figma Dashboards",
            date: "08 Apr 2021",
            leader: "Harmonia",
            team: ["/avatar.jpg", "/avatar1.jpg", "/avatar2.jpg"],
            progress: 25,
          },
        ]}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  </Col>
</Row>

     


    </div>
        </>
  );
};

export default DashboardContent;
