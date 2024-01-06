// import './index.css'
import { PageWrapperHeader, PageWrapperBody, PageWrapperFooter } from './components';

function BasicPageWrapper({ header, body, footer }: { header: string, body: JSX.Element, footer: JSX.Element }) {

    return (
        <div>
            <PageWrapperHeader title={header} />
            <PageWrapperBody Child={body} />
            <PageWrapperFooter Child={footer} />
        </div>

    );
};
export default BasicPageWrapper