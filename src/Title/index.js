import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function Title(props) {
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

Title.propTypes = {
  header: PropTypes.string.isRequired,
  amend: PropTypes.bool.isRequired,
  amendStatus: PropTypes.func.isRequired,
};

export default Title;
