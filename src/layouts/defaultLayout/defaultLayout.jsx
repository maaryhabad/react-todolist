import { Outlet } from 'react-router-dom';

import { Header, Content, Footer } from '../../components';

const DefaultLayout = () => {
    return(
        <>
        <Header userName="Mari"/>
        <Content>
            <Outlet />
        </Content>
        <Footer creatorName="Mariana Abad"/>
        </>
    )
}

export { DefaultLayout };