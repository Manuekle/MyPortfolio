/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Vue(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78zM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43z" />
    </svg>
  );
}

export default Vue;
