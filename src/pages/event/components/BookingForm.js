import React, { useRef } from 'react';
import { gql, useMutation } from "@apollo/client";

const CREATE_BOOKING = gql`
  mutation CreateBooking($contact: String!, $eventId: String!) {
    createBooking(contact: $contact, eventId: $eventId) {
      id,
      contact,
      active,
      event_id
    }
  }
`;

const BookingForm = ({ eventId, eventRefetch }) => {

  const inputRef = useRef();
  const [
    createBooking,
    {
      data: createBookingData,
      loading: createBookingLoading,
      error: createBookingError,
    }
  ] = useMutation(CREATE_BOOKING);

  return (
    <>
      <input type="text" ref={ inputRef } placeholder={ 'contact' }/>
      <button onClick={ async () => {
        await createBooking({ variables: { contact: inputRef.current.value, eventId } });
        inputRef.current.value = '';
        await eventRefetch();
      } }>
        Book
      </button>
      {
        createBookingError ? `Book error! ${ createBookingError.message }` : <></>
      }
    </>
  );
};

export default BookingForm;