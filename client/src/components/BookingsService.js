const baseUrl = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return fetch(baseUrl)
    .then(res => res.json())
}

export const deleteBooking = (id) => {
    return fetch(baseUrl + id, {
        method: 'DELETE'
    })
}

export const postBooking = (payload)=> {
    return fetch (baseUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}


