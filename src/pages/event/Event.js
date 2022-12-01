import React from 'react';
import { useParams } from "react-router";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import Bookings from "./components/Bookings";

const StyledDiv = styled.div`
  padding-top: 1rem;
`;

const GET_EVENT = gql`
  query GetEvent($id: String!) {
    event(id: $id) {
      id,
      name,
      capacity,
      date,
      bookings {
        id,
        contact,
        active,
      }
    }
  }
`;

const Event = () => {
  const params = useParams();
  const {
    loading: eventLoading,
    error: eventError,
    data: eventData,
    refetch: eventRefetch,
  } = useQuery(GET_EVENT, {
    variables: { id: params.id }
  });

  if (eventLoading) return <p>Loading...</p>;
  if (eventError) return <p>Error : { eventError.message }</p>;

  const { event } = eventData;
  const { id: eventId, bookings } = event;
  return (
    <>
      <StyledDiv>
        <EventDetails event={ event }/>
      </StyledDiv>

      <StyledDiv>
        <BookingForm eventId={ eventId } eventRefetch={ eventRefetch }/>
      </StyledDiv>

      <StyledDiv>
        <Bookings bookings={ bookings } event={ event }/>
      </StyledDiv>
    </>
  );
};


export default Event;