import React, { Component, useState, useEffect } from 'react';

import FacilityCard from '../components/FacilityCard'



const Trainer = () => {

   
    const [filter, setFilter] = useState("")
    const [data, setData] = useState([])


    useEffect(() => {
        var currentFacilites = JSON.parse(localStorage.getItem("faclities"));
        if (currentFacilites == null) currentFacilites = [
            {
                "roomName": "Lake Blue",
                "trainer": "John Doe",
                "booked": "0"
        
            },
            {
                "roomName": "Hall B",
                "trainer": "Jake white",
                "booked": "0"
        
            },
        
            {
                "roomName": "Hall A",
                "trainer": "John Doe",
                "booked": "0"
        
            },
        
            {
                "roomName": "yogaPad",
                "trainer": "Amer Blue",
                "booked": "0"
        
        
            },
        
            {
                "roomName": "Hall c",
                "booked": "0"
        
            }
        
        
        ]
        setData(currentFacilites)

        return localStorage.setItem("faclities", JSON.stringify(currentFacilites));

    }, [])

    const handleChange = (event) => {
        setFilter(event.target.value)
    };


    console.log(data);

    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
        );
    });

    return (
        <div>
        
            <input value={filter} onChange={handleChange} />

            {filteredData.map(item => (
                  <FacilityCard item={item}/>
            ))}
        </div>
    );

}



export default Trainer;




