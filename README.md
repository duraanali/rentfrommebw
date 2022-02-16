# Rent From Me

### Gabi School Build Week Project


# API Documentation

## User Endpoints

### POST - Register a Owner 
`https://usemytoolsbw.herokuapp.com/api/owners/register`

```
 {
          "first_name": "User",
          "last_name": "McUser",
          "email": "owner@gmail.com",
          "password": "password",
        }
```

### POST - Login 
`https://usemytoolsbw.herokuapp.com/api/owners/login`
```
{
"email": "owner@gmail.com",
"password": "password"
}
```


### POST - Register a Renter 
`https://usemytoolsbw.herokuapp.com/api/renters/register`

```
 {
          "first_name": "User",
          "last_name": "McUser",
          "email": "renter@gmail.com",
          "password": "password",
        }
```

### POST - Login 
`https://usemytoolsbw.herokuapp.com/api/renters/login`
```
{
"email": "renter@gmail.com",
"password": "password"
}
```

### GET ALL OWNERS/RENTERS **requires token in header**
`https://usemytoolsbw.herokuapp.com/api/owners`
`https://usemytoolsbw.herokuapp.com/api/renters`


### GET by Owner/Renter ID **requires token in header**
`https://usemytoolsbw.herokuapp.com/api/owners/:id`
`https://usemytoolsbw.herokuapp.com/api/renters/:id`


### PUT- Edit Owner/Renter Info **requires token in header**
`https://usemytoolsbw.herokuapp.com/api/owners/:id`
`https://usemytoolsbw.herokuapp.com/api/renters/:id`

### DEL- Delete Owner/Renter **requires token in header**
`https://usemytoolsbw.herokuapp.com/api/owners/:id`
`https://usemytoolsbw.herokuapp.com/api/renters/:id`


## Item Endpoints

### GET All Items Listings 
`https://usemytoolsbw.herokuapp.com/api/items`

### GET Item by ID 
`https://usemytoolsbw.herokuapp.com/api/items/:id`

### GET Items by Owner 
`https://usemytoolsbw.herokuapp.com/api/items/owner/:id`

### POST New Item **requires token in header**
`https://usemytoolsbw.herokuapp.com/api/items/create`
```
  {
    "owner_id": 2,
    "title": "Camera",
    "description": "Donizzle mah nizzle dui. Fizzle risizzle boofron, 
    elementum consectetizzle, sollicitudizzle in, consequat imperdizzle,
    turpis.",
    "make": "Canon",
    "model": "R3",
    "img_url": "camerapic.jpg",
    "daily_cost": 900,
    "available": true,
    "condition": "Good"
  }
  ```

### PUT Edit a Item Listing **requires token in header**
`https://usemytoolsbw.herokuapp.com/api/items/:id` 

## Rental Endpoints  **ALL REQUIRE TOKEN**

### GET All Rentals
`https://usemytoolsbw.herokuapp.com/api/rentals`

### GET By Rental ID 
`https://usemytoolsbw.herokuapp.com/api/rentals/:id`

### GET By Renter's UserId 
`https://usemytoolsbw.herokuapp.com/api/rentals/renter/:id`


### DEL Rental
`https://usemytoolsbw.herokuapp.com/api/rentals/:id`

### PUT Edit Rental Bookings
`https://usemytoolsbw.herokuapp.com/api/rentals/:id`

### POST - Rent New Item
`https://usemytoolsbw.herokuapp.com/api/rentals/rentItem` 
Schema looks like:
  ```{
          start_date: "2019-11-20",
          end_date: "2019-11-22",
          total_cost: 600,
          tool_id: 3,
          renter_id: 1
        }```
