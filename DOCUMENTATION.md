## Documentation

You can see below the API reference of this module.

### `airportCluj(a, b)`
Live information about the departures and arrivals at the International Airpot Avram Iancu Cluj.

#### Params

- **Number** `a`: Param descrpition.
- **Number** `b`: Param descrpition.

#### Return
- **Number** Return description.

### `arrivals()`
Get the list of arrivals.

#### Return
- **Promise** The list of arrivals containing:
   - `flight` (String): The flight number.
   - `destination` (String): The destination of the flight.
   - `time` (String): The time of the arrival.
   - `status` (String): The status of the flight.
   - `gate` (String): The gate of the flight.

### `arrivals()`
Get the list of arrivals.

#### Return
- **Promise** The list of arrivals containing:
  - `flight` (String): The flight number.
  - `origin` (String): The origin of the flight.
  - `time` (String): The time of the arrival.
  - `status` (String): The status of the flight.

