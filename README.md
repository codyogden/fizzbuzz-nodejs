# FizzBuzz Solution

This is a web application in NodeJS that takes a collection of values.

1. If the value is a multiple of 3, then output the word "Fizz"
1. If the value is a multiple of 5, then output the word "Buzz"
1. If the value is divisible by both 3 and 5, then output the word "FizzBuzz"
1. At the end of the run, the program should display each division that was performed.

## Requirements
Node v11.0.0 or higher.

## Getting Started
To run this application, clone the repository and run `npm run start`. Next, open [http://localhost:9000].

## API
`/fizzbuzz` (POST)

Make a request with a valid JSON array body containing values to be processed. An array with FizzBuzz results will be returned.

**Example Request Body**
```json
[
    "1",
    "3",
    "5",
    "",
    "15",
    "A",
    "23"
]
```

**Example Response Body**
```json
[
    "Divided 1 by 3",
    "Divided 1 by 5",
    "Fizz",
    "Buzz",
    "FizzBuzz",
    "FizzBuzz",
    "Invalid Item",
    "Divided 23 by 3",
    "Divided 23 by 5"
]
```
