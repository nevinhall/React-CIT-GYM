import React, { Component, useState, useEffect } from 'react';

import ClassCard from '../components/ClassCard'



const CurrentClasses = () => {

    const [filter, setFilter] = useState("")
    const [data, setData] = useState([])


    useEffect(() => {
        var currentClasses = JSON.parse(localStorage.getItem("classes"));
        if (currentClasses == null) currentClasses = [
            {
                clubName: "Rowing Club",
                trainer: "John Doe",
                typeOfActivity: "physical",
                numCalories: "504",
                operatingDate: "01/11/2020",
                img: "",
                maxSize: "5",
                durationOfClass: "60mins",
                location: "Lake Blue",
                members: []
            },
            {
                clubName: "Arobics",
                trainer: "Jake white",
                typeOfActivity: "spiritual",
                numCalories: "200",
                operatingDate: "21/11/2020",
                img: "",
                maxSize: "15",
                durationOfClass: "30mins",
                location: "Hall B",
                members: []
            },
            {
                clubName: "Spinning",
                trainer: "John Doe",
                typeOfActivity: "physical",
                numCalories: "1000",
                operatingDate: "18/11/2020",
                img: "",
                maxSize: "5",
                durationOfClass: "45mins",
                location: "Hall A",
                members: []
            },
            {
                clubName: "Yoga",
                trainer: "Amer Blue",
                typeOfActivity: "spiritual",
                numCalories: "700",
                operatingDate: "06/11/2020",
                img: "",
                maxSize: "20",
                durationOfClass: "45mins",
                location: "yogaPad",
                members: []
            }
        ];
        setData(currentClasses)

        return localStorage.setItem("classes", JSON.stringify(currentClasses));

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
                  <ClassCard item={item}/>
            ))}
        </div>
    );

}






export default CurrentClasses;




