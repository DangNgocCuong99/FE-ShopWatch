import { Card } from 'antd';

import './index.css'

function PageWrapperHeader({ title }: { title: string }) {

    return (
        <Card className="page-wrapper-header">
            <p> {title} </p>
        </Card>
    );
};
export default PageWrapperHeader