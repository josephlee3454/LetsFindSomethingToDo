import React, {useEffect, useState} from 'react'

function Event(props) {
 const [event, setEvent] = useState([]);
    const id = props.id;
    useEffect( () => {
        var url = '/eventDetail?id=' + id;
        var options = {
            method: "GET",
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        };
            
        fetch(url, options)
            .then((response) => response.text().then((eventObj) => {
                var obj = JSON.parse(eventObj);       
                console.log(obj);
                setEvent(obj);
            }))
            .catch(err => console.log(err))

    }, [id]);

   console.log(event);
    return (
            <div className="event">
                <div id="name">{event.name}</div>
                <div id="id">{event.id}</div>
                <div id="url">{event.event_site_url}</div>
                <div id="ticketurl">{event.tickets_url}</div>
                <div id="date">{event.time_start}</div>
                <div id="dateend">{event.time_end}</div>
                <div id="img"><img alt={event.name} src={event.image_url} /></div>
                <div id="description">{event.description}</div>
                <div id="cost">{event.cost}</div>
                <div id="location lat">{event.latitude}</div>
                <div id="location long">{event.longitude}</div>
                <div id="location name">{event.location.city}</div>
            </div>
    )
}

export default Event
