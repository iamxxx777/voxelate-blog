import "./Pagination.css";

const Pagination = ({length, posts, pagination}) => {
    let btnLength = Math.ceil(length / posts);
    let btns = [...Array(btnLength).keys()];

    return (
        <div className="pagination">
            <div className="pagination-container">
                {btns.map(btn => <button key={btn} onClick={() => pagination(btn + 1)} >{btn + 1}</button>)}
            </div>
        </div>
    )
}

export default Pagination;
