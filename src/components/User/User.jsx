import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
    border: "2px solid rgba(16, 44, 16, 0.555)",
    backgroundColor: "rgba(151, 238, 64, 0.26)",
    padding: "20px",
    margin: "10px",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px rgb(17, 17, 17)"
    }
    return (
        <div style={userStyle} >
            <h2> {name} </h2>
            <p>Email: {email} </p>
            <p>phone: {phone} </p>
            <Link to={`/user/${id}`} >Show Details</Link>
            <Link to={`/user/${id}`} ><button>Click me</button></Link>
        </div>
    );
};

export default User;