import React from 'react';
import PropTypes from 'prop-types';
import './Update.css';

function Update(props) {
  const { resetStatus, updateStatus } = props;
  return (
    <div className="title">
      <button className="title-button" onClick={resetStatus} >Discard Changes</button>
      <button className="title-button" onClick={updateStatus} >Update</button>
    </div>
  );
}

Update.propTypes = {
  resetStatus: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

export default Update;
