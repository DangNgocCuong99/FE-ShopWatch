import './index.css'
// truyen xuong phai co space
function PageWrapperFooter({ Child }: { Child: JSX.Element }) {
    return (
        <div className="page-wrapper-footer">
            {Child}
        </div>
    );
};
export default PageWrapperFooter