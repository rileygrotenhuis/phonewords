# Phonewords

"Phonewords" are phone numbers that are represented using the letters on a telephone keypad instead of the digits. For example, the phone number 1-800-555-1234 could be represented as 1-800-555-BEER. This can be useful for businesses or organizations that want to create a memorable phone number that is easy for customers to remember.

## Setup

1. Clone this repository and cd into the project directory:

    ```bash
    git clone https://github.com/rileygrotenhuis/phonewords.git

    cd phonewords
    ```

2. Install the Jest testing library and all of the node dependencies:

    ```bash
    npm install
    ```

## Challenge

Write a method called `phonewords` that takes in two parameters: the first being a phone number represented as a string (`phoneNumber`), and the second being a list of words represented as an array of strings (`words`). This algorithm should determine which of the words in the words array are contained in this phone number given by the `phoneNumber` string.

## Examples

1. Input: `3662277`, `['foo', 'bar', 'baz', 'foobar', 'emo', 'cap', 'car', 'cat']`
    
   Ouput: `['bar', 'cap', 'car', 'emo', 'foo', 'foobar']`

2. Input: `8274451`, `['tap', 'tar', 'brig', 'pig', 'fig', 'lap', 'vape']`

   Ouput: `['tap', 'tar', 'brig', 'pig']`

## Instructions

The skeleton for your function is in the `phonewords.js` file, please complete your solution in the `phonewords` function of this file.

When you are ready, use the Jest testing library to check your solution by running `npm test`. If your solution is correct, all of the tests should return as passing!