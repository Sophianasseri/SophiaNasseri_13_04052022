import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserProfile } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Component for rendering edit profile form
 *
 * @component
 * @example
 * const firstNameData = 'John'
 * const lastNameData = 'Doe
 * return (
 *  <EditProfile firstNameData={firstNameData} lastNameData={lastNameData} />
 * )
 */
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

  //Get input values
  const onFirstNameChanged = (e) => setFirstName(e.target.value);
  const onLastNameChanged = (e) => setLastName(e.target.value);

  return isEdit ? (
    <form onSubmit={handleSubmit}>
      <h1>Welcome back</h1>
      <input
        className="input-edit"
        type="text"
        placeholder={firstNameData}
        value={firstName || ''}
        onChange={onFirstNameChanged}
      />
      <input
        className="input-edit"
        type="text"
        placeholder={lastNameData}
        value={lastName || ''}
        onChange={onLastNameChanged}
      />
      <div className="btn-wrapper">
        <button
          className="edit-form"
          type="submit"
          disabled={!firstName || !lastName}
        >
          Save
        </button>
        <button className="edit-form" onClick={() => setIsEdit(!isEdit)}>
          Cancel
        </button>
      </div>
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

EditProfile.propTypes = {
  /**
   * User first name
   */
  firstNameData: PropTypes.string,
  /**
   * User last name
   */
  lastNameData: PropTypes.string,
};
