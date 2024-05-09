import { Outlet } from "react-router-dom"
import NavBar from './Header'
import EndPage from './EndPage'
import {
    Layout,
    ConfigProvider
} from "antd"
const { Header, Content, Footer } = Layout;
export default function BaseLayout() {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: 'white'
                        },
                    },
                }}
            >
                <Layout>
                    <Header className="header"><NavBar /></Header>
                    <Content className="content">
                        <Outlet />
                    </Content>
                    <Footer className="footer"><EndPage /></Footer>
                </Layout>
            </ConfigProvider>
        </>
    )
}