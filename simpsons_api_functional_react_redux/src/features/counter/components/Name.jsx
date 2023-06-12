import { onLikeToggle } from "../counterSlice";
import { useDispatch } from "react-redux";

const Name = (props) => {
  const { liked, character, id } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{character}</h1>
      <button onClick={() => dispatch(onLikeToggle(id))}>
        {liked ? "Liked" : "Not liked"}
      </button>
    </div>
  );
};

export default Name;
