# SoftUni Practice Server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```
Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

## Base URL

The Base URL for the API is: `http://localhost:3030/jsonstore`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

# Endpoints: destinations & tips

- `/destinations` -- get destinations list/ create destination;
- `/destinations/{destinationId}` -- get destination/update destination/ delete destination by provided id;
