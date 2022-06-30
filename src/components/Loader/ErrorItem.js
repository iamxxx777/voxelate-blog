import "./Loading.css"

const ErrorItem = ({ error }) => {
    return (
        <div className="error_item">
            <p>{error}</p>
        </div>
    );
};

export default ErrorItem;
