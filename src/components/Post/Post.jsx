import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: "2px solid rgba(16, 44, 16, 0.555)",
        backgroundColor: "rgba(151, 238, 64, 0.26)",
        padding: "20px",
        margin: "10px",
        borderRadius: "20px",
        boxShadow: "15px 15px 15px rgb(17, 17, 17)"
        }
        const handleShowDetaile = () => {
            navigate(`/post/${id}`)
        }
    return (
        <div style={postStyle} >
            <h4>Post of Id: {id} </h4>
            <p> {title} </p>
            <Link to={`/post/${id}`} ><button style={{backgroundColor: "green", color: "white"}} >Post Detail</button></Link>
            <button onClick={handleShowDetaile} >Click to see detaile</button>
        </div>
    );
};

export default Post;