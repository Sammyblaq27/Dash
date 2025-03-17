import React, { useState } from "react";
import { BellOutlined, AppstoreOutlined, SearchOutlined,} from "@ant-design/icons";
import { Layout, Menu, Avatar, Modal, Input, Dropdown, Badge, Checkbox } from "antd";
import { Link, Outlet } from "react-router-dom";
import { IoSettingsOutline, IoLanguage, IoMailOutline, IoCartOutline } from "react-icons/io5";
import { BsBrightnessHigh, BsLayoutSidebar } from "react-icons/bs";
import { RiHome6Line } from "react-icons/ri";
import { FiTruck } from "react-icons/fi";
import { IoMdChatbubbles } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { LuFiles, LuCalendarCheck2 } from "react-icons/lu";
import { TbLayoutKanban } from "react-icons/tb";
import "./styles.css";


const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [pinned, setPinned] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);

  // Handle menu open/close
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sider
        width={240}
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => !pinned && setCollapsed(false)}
        onMouseLeave={() => !pinned && setCollapsed(true)}
        style={{ background: "#fff", transition: "all 0.3s ease" }}
      >
        {/* Sidebar Header */}
        <div className="sidebar-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
          <img src="/download.png" alt="Vuexy Logo" style={{ width: 50, height: "auto", marginRight: 10 }} />
          {/* Checkbox to Toggle Hover Behavior */}
          <Checkbox checked={pinned} onChange={(e) => setPinned(e.target.checked)}></Checkbox>
        </div>

        {/* Sidebar Menu */}
        <Menu mode="inline" selectedKeys={[]} openKeys={openKeys} onOpenChange={handleOpenChange} style={{ height: "100%" }}>
          {/* Dashboards with Notification */}
          <Menu.SubMenu
            key="dashboards"
            icon={<RiHome6Line />
            }
            title={
              <span>
                Dashboards <Badge count={5} style={{ backgroundColor: "#ff4d4f", marginLeft: 50 }} />
              </span>
            }
          >
            <Menu.Item key="analytics">
              <Link to="/">Analytics</Link>
            </Menu.Item>
            <Menu.Item key="crm" >
              <Link to="crm" type="checkbox">CRM</Link>
            </Menu.Item>
            <Menu.Item key="ecommerce">eCommerce</Menu.Item>
            <Menu.Item key="logistics">Logistics</Menu.Item>
            <Menu.Item key="academy">Academy</Menu.Item>
          </Menu.SubMenu>

          {/* Layouts with Dropdown */}
          <Menu.SubMenu key="layouts" icon={<BsLayoutSidebar/>} title="Layouts">
            <Menu.Item key="layout-1">Layout 1</Menu.Item>
            <Menu.Item key="layout-2">Layout 2</Menu.Item>
          </Menu.SubMenu>

          {/* Front Pages with Dropdown */}
          <Menu.SubMenu key="front-pages" icon={<LuFiles/>} title="Front Pages">
            <Menu.Item key="front-1">Page 1</Menu.Item>
            <Menu.Item key="front-2">Page 2</Menu.Item>
          </Menu.SubMenu>

          {/* Apps & Pages */}
          <Menu.Item key="email" icon={<IoMailOutline />}>
            Email
          </Menu.Item>
          <Menu.Item key="chat" icon={<IoMdChatbubbles />}>
            Chat
          </Menu.Item>
          <Menu.Item key="calendar" icon={<LuCalendarCheck2 />}>
            Calendar
          </Menu.Item>
          <Menu.Item key="kanban" icon={<TbLayoutKanban />}>
            Kanban
          </Menu.Item>
          <Menu.SubMenu key="ecommerce" icon={<IoCartOutline />}>
            eCommerce
          </Menu.SubMenu>
          <Menu.SubMenu key="academy" icon={<GoBook />}>
            Academy
          </Menu.SubMenu>
          <Menu.SubMenu key="logistics" icon={<FiTruck />}>
            Logiatics
          </Menu.SubMenu>
        </Menu>
      </Sider>

      {/* MAIN CONTENT */}
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            padding: "0 20px",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Search Trigger */}
          <div onClick={() => setSearchVisible(true)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <SearchOutlined style={{ fontSize: "18px" }} />
            <span>Search [CTRL + K]</span>
          </div>

          {/* Header Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <IoLanguage style={{ fontSize: "20px", cursor: "pointer" }} />
            <BsBrightnessHigh style={{ fontSize: "20px", cursor: "pointer" }} />
            <AppstoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
            <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />

            <Dropdown overlay={<Menu items={[{ key: "1", label: "Settings" }, { key: "2", label: "Logout" }]} />}>
              <Avatar src="/avatar1.jpg" size={40} style={{ cursor: "pointer" }} />
            </Dropdown>
          </div>
        </Header>

        {/* Main Content */}
        <Content style={{ padding: 24, margin: 0, minHeight: 280, background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>

      {/* Search Modal - Now with Two-Column Layout */}
      <Modal open={searchVisible} onCancel={() => setSearchVisible(false)} footer={null} width={600} centered>
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <SearchOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
          <Input placeholder="Search [CTRL + K]" style={{ border: "none", outline: "none", fontSize: "16px" }} />
        </div>

        {/* Two-Column Layout */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
          {/* Left Column */}
          <div style={{ width: "48%" }}>
            <h4>Popular Searches</h4>
            <p>🔍 Analytics</p>
            <p>🔍 CRM</p>
            <p>🔍 eCommerce</p>
            <p style={{ color: "blue" }}>🔍 User List</p>

            <h4>Apps & Pages</h4>
            <p>📅 Calendar</p>
            <p>📜 Invoice List</p>
            <p>⚙ Account Settings</p>
            <p>📋 Dialog Examples</p>
          </div>

          {/* Right Column */}
          <div style={{ width: "48%" }}>
            <h4>User Interface</h4>
            <p>🖋 Typography</p>
            <p>📦 Advanced Cards</p>
            <p>📊 Tabler</p>
            <p>📈 Widget Cards</p>

            <h4>Forms & Charts</h4>
            <p>📑 Form Layouts</p>
            <p>✅ Form Validation</p>
            <p>🧭 Form Wizard</p>
            <p>📊 E-Charts</p>
          </div>
        </div>
      </Modal>
        {/* Floating Buy Now Button */}
        <div className="floating-buy-now">
        <button className="buy-now-button">Buy Now</button>
      </div>

      {/* Floating Settings Icon */}
      <div className="floating-settings">
        <button className="settings-button">
        <IoSettingsOutline />
        </button>
      </div>
    </Layout>
  );
};

export default Dashboard;
