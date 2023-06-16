import { useDispatch } from "react-redux";
import { onDelete } from "../counterSlice";

const Delete = (props) => {
  const { id } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(onDelete(id))}>Delete</button>
    </div>
  );
};

export default Delete;
