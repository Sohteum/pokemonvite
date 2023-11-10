import React, {useState} from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    LogoutOutlined,
    LoginOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, Switch, theme} from 'antd';
import {useNavigate} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined/>),
    getItem('Option 2', '2', <DesktopOutlined/>),
    getItem('고객센터', 'sub1', <UserOutlined/>, [
        getItem('카테고리관리', '3'),
        getItem('FAQ관리', '4'),
        getItem('1:1문의', '5'),
        getItem('SMS검색', '6'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [
        getItem('Team 1', '7'),
        getItem('Team 2', '8')
    ]),
    getItem('Logout', '9', <LogoutOutlined/>),
    getItem('Login', '10', <LoginOutlined/>),
];
const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const navi = useNavigate();


    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>

            </Sider>
            <Layout>
                <Header
                    style={{
                        padding   : 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding   : 24,
                            minHeight : 360,
                            background: colorBgContainer,
                        }}
                    >
                        Bill is a cat.
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Main;