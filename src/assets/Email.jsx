/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function Email(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <path d="M11 11L3 6v10h10v2H3q-.825 0-1.412-.587Q1 16.825 1 16V4q0-.825.588-1.413Q2.175 2 3 2h16q.825 0 1.413.587Q21 3.175 21 4v5h-2V6zm0-2l8-5H3zm8 13q-1.65 0-2.825-1.175Q15 19.65 15 18v-4.5q0-1.05.725-1.775Q16.45 11 17.5 11q1.05 0 1.775.725Q20 12.45 20 13.5V18h-2v-4.5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35V18q0 .825.587 1.413Q18.175 20 19 20q.825 0 1.413-.587Q21 18.825 21 18v-4h2v4q0 1.65-1.175 2.825Q20.65 22 19 22zM3 6V4v12-6z" />
    </svg>
  );
}

export default Email;
