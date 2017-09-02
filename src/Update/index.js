import React from 'react';
import PropTypes from 'prop-types';
import './Update.css';

function Update(props) {
  const { resetStatus, updateStatus } = props;
  return (
    <div>
      <h4 className="update-note">
        Plentific service fee is 10% of total quote (excl. VAT). <br />
        A 20% deposit will be requested from the customer.
      </h4>
      <div className="update">
        <button className="update-discard" onClick={resetStatus} >Discard Changes</button>
        <button className="update-update" onClick={updateStatus} >Update</button>
      </div>
    </div>
  );
}

Update.propTypes = {
  resetStatus: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
};

export default Update;
