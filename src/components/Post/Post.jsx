import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: "2px solid rgba(16, 44, 16, 0.555)",
        backgroundColor: "rgba(151, 238, 64, 0.26)",
        padding: "20px",
        margin: "10px",
        borderRadius: "20px",
        boxShadow: "15px 15px 15px rgb(17, 17, 17)"
        }
    return (
        <div style={postStyle} >
            <h4>Post of Id: {id} </h4>
            <p> {title} </p>
            <Link to={`/post/${id}`} ><button style={{backgroundColor: "green", color: "white"}} >Post Detail</button></Link>
        </div>
    );
};

export default Post;