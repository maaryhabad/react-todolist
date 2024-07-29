import { Outlet } from 'react-router-dom';

import { Header, Content, Footer } from '../../components';
import { useAppContext } from '../../hooks';

const DefaultLayout = () => {
    const { creator } = useAppContext();

    return(
        <>
        <Header userName="Mari"/>
        <Content>
            <Outlet />
        </Content>
        <Footer creatorName={creator}/>
        </>
    )
}

export { DefaultLayout };