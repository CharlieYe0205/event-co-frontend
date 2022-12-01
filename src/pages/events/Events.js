import React from 'react';
import { gql, useQuery } from '@apollo/client';
import _ from 'lodash';
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import { printDateFromTimestamp } from "../../utils/dateUtils";

const StyledRow = styled(Row)`
  padding-top: 1rem;
`;

const INDEX_EVENTS = gql`
  query IndexEvents {
    events {
      id,
      name,
      capacity,
      date,
    }
  }
`;

const Events = () => {
  const { loading, error, data } = useQuery(INDEX_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : { error.message }</p>;

  const { events } = data;
  return (
    <>
      <StyledRow>
        <Col md={ 3 }>Name</Col>
        <Col md={ 3 }>Capacity</Col>
        <Col md={ 3 }>Date</Col>
        <Col md={ 3 }></Col>
      </StyledRow>

      {
        _.map(events, (event) => {
          const { id, name, capacity, date } = event;
          return (
            <StyledRow key={ id }>
              <Col md={ 3 }>{ name }</Col>
              <Col md={ 3 }>{ capacity }</Col>
              <Col md={ 3 }>{ printDateFromTimestamp(date) }</Col>
              <Col md={ 3 }>
                <a href={ `event/${ id }` }>View</a>
              </Col>
            </StyledRow>
          )
        })
      }
    </>
  );
};

export default Events;