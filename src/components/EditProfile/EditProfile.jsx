import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserProfile } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const EditProfile = ({ firstNameData, lastNameData }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [isEdit, setIsEdit] = useState();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserProfile({ token, firstName, lastName }));
    setIsEdit(!isEdit);
  };

  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);

  return isEdit ? (
    <form onSubmit={handleSubmit}>
      <h1>Welcome back</h1>
      <input
        type="text"
        placeholder={firstNameData}
        value={firstName || ''}
        onChange={onFirstNameChanged}
      />
      <input
        type="text"
        placeholder={lastNameData}
        value={lastName || ''}
        onChange={onLastNameChanged}
      />
      <button type="submit">Save</button>
      <button onClick={() => setIsEdit(!isEdit)}>Cancel</button>
    </form>
  ) : (
    <>
      <h1>
        Welcome back <br />
        {firstNameData}&nbsp;
        {lastNameData}!
      </h1>
      <button className="edit-button" onClick={setIsEdit}>
        Edit Name
      </button>
    </>
  );
};

export default EditProfile;
