# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run to install the dependencies:

### `yarn install`

To start the project, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Key Design Considerations

This project contains two pages.
<ul>
    <li>
        One for list all events
    </li>
    <li>
        And the other is for view an event, make booking, view all bookings and cancel one activated booking
    </li>
</ul>

## Compromises / Tech-debts
After creating a new booking, I have not found a way to only append the created booking into the booking list.\
Currently, a refetch of event is used instead. However, it reloads all the event and booking list from server and re-render all of them. 