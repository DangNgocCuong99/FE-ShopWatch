import './index.css'

function PageWrapperBody({ Child }: { Child: JSX.Element }) {

    return (
        <div className="page-wrapper-body">
            {Child}
        </div>
    );
};
export default PageWrapperBody