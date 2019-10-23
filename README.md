# Use My Tools

### Lambda School Build Week Project

### 10/18-10/25/2019

## Team

- Zac Smith ~ PL ~ GH: [zrsmith75](https://github.com/zrsmith75)
- Julie Antonio - Backend Developer

## Stack

- HTML
- CSS
- Javascript
- React
- Node.js

## PITCH

Tired of loaning out your tools to a neighbor and losing them? Use My Tools help you keep track of who has your tools as well as creating a resource for the community.

## MVP

- Users can log in and create a profile.
- They can then set up items they have available - anything from a shovel to power washers and tile saws.
- Users will be able to Create, Read, Update and Delete data.
- A 2nd user can log in and see items that users have available and request to borrow.
- When a tool has been borrowed, the owner needs to see on their profile what tools are lent out and who has them.

## STRETCH

- Add a map for loaners to set limits on how far they are willing to lend their tools out, and how far borrowers are willing to drive to borrow something.
- Add a review system into the app so that the social aspect is there to ensure that neighbors are good borrowers before you approve a request.
- Add a way to charge a fee for tools to be borrowed.


# API Documentation

## Rental Endpoints _ **ALL REQUIRE TOKEN**

### GET All Rental Listings
`https://usemytoolsbw.herokuapp.com/api/rentals`

### GET By Rental ID 
`https://usemytoolsbw.herokuapp.com/api/rentals/:id`

### GET By Renter's UserId 
`https://usemytoolsbw.herokuapp.com/api/rentals/renter/:id`

### GET By Owner's UserId 
`https://usemytoolsbw.herokuapp.com/api/rentals/owner/:id`
### DEL Rental Listing
`https://usemytoolsbw.herokuapp.com/api/rentals/:id`

### PUT Edit Rental Listing
`https://usemytoolsbw.herokuapp.com/api/rentals/:id`

### POST 
`https://usemytoolsbw.herokuapp.com/api/rentals` 
Schema looks like:
  ```{
          start_date: "2019-11-20",
          end_date: "2019-11-22",
          total_cost: 24,
          tool_id: 3,
          renter_id: 1
        }```
