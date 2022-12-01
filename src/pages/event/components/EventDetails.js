import React from 'react';
import { printDateFromTimestamp } from "../../../utils/dateUtils";

const EventDetails = ({ event }) => {

  const { name, capacity, date } = event;

  return (
    <>
      <h1>Name: { name }</h1>
      <h3>Capacity: { capacity }</h3>
      <h3>Date: { printDateFromTimestamp(date) }</h3>
    </>
  );
};

export default EventDetails;