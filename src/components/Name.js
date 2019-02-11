import React from 'react';

const Name = ({ handleClickName }) => (
  <button onClick={handleClickName} className="btn btn-primary name" name="name">Name</button>
);

export default Name;
