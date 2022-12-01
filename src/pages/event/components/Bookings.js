import React from 'react';
import { Col, Row } from "reactstrap";
import _ from "lodash";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";
import { calDaysDiffFromNow } from "../../../utils/dateUtils";

const StyledRow = styled(Row)`
  padding-top: 1rem;
`;

const CANCEL_BOOKING = gql`
  mutation UpdateBooking($id: String!) {
    updateBooking(id: $id, active: false) {
      id,
      contact,
      active,
      event_id
    }
  }
`;

const Bookings = ({ bookings, event }) => {

  const [
    cancelBooking,
    {
      data: cancelBookingData,
      loading: cancelBookingLoading,
      error: cancelBookingError,
    }
  ] = useMutation(CANCEL_BOOKING);
  const { date } = event;

  return (
    <>
      <StyledRow>
        <Col md={ 3 }>Contact</Col>
        <Col md={ 3 }>Status</Col>
        <Col md={ 3 }></Col>
        <Col md={ 3 }></Col>
      </StyledRow>

      {
        _.map(bookings, (booking) => {
          const { id: bookingId, contact, active } = booking;
          return (
            <StyledRow key={ bookingId }>
              <Col md={ 3 }>{ contact }</Col>
              <Col md={ 3 }>{ active ? 'active' : 'canceled' }</Col>
              <Col md={ 3 }>
                {
                  active && calDaysDiffFromNow(date) > 2
                    ? <button onClick={ async () => {
                      await cancelBooking({ variables: { id: bookingId } })
                    } }>Cancel</button>
                    : <></>
                }
              </Col>
              <Col md={ 3 }>
                {
                  cancelBookingError ? `Cancel error! ${ cancelBookingError.message }` : <></>
                }
              </Col>
            </StyledRow>
          )
        })
      }
    </>
  );
};

export default Bookings;