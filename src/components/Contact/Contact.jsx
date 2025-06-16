import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {name} : {number}
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
export default Contact;
