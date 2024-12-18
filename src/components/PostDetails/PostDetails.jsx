import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData(); 
    const {postId} = useParams();
    const {id, title, body} = post;
    console.log(postId)
    const navigate = useNavigate()
    const handleGoBack = () => {
          navigate(-1)
    }
    return (
        <div>
            <h1>Post Details About: {id} </h1>
            <p>Title: {title} </p>
            <p><small> {body} </small></p>
            <button onClick={handleGoBack} >Go back</button>
        </div>
    );
};

export default PostDetails;