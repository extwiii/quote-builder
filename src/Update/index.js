import React from 'react';
import PropTypes from 'prop-types';
import './Update.css';

function Update(props) {
  const { header, amendStatus, amend } = props;
  return (
    <div className="title">
      <h2 className="title-header">{header}</h2>
      {amend ?
        <button className="title-button" onClick={amendStatus} >Cancel Quote</button> :
        <button className="title-button" onClick={amendStatus} >Amend Quote</button>
      }
    </div>
  );
}

Update.propTypes = {
  header: PropTypes.string.isRequired,
  amend: PropTypes.bool.isRequired,
  amendStatus: PropTypes.func.isRequired,
};

export default Update;
