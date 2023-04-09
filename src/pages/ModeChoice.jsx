import React from "react";
import { useLocation } from "react-router-dom";

import { sample_db_0km } from "../data/sample_db_0km";
import { sample_db_5km } from "../data/sample_db_5km";
import { sample_db_10km } from "../data/sample_db_10km";
import { sample_db_15km } from "../data/sample_db_15km";
import { sample_db_20km } from "../data/sample_db_20km";
import { sample_db_25km } from "../data/sample_db_25km";

// console.log(sample_db_0km[0].mode_1)
const ModeChoice = () => {
    const location = useLocation();
    const QuestionResponse = location.state
    // console.log(location);

    let sampleData;
    if (QuestionResponse.distance === "<5km") {
        sampleData = sample_db_0km;
    } else if (QuestionResponse.distance === "5-10km") {
        sampleData = sample_db_5km;
    } else if (QuestionResponse.distance === "10-15km") {
        sampleData = sample_db_10km;
    } else if (QuestionResponse.distance === "15-20km") {
        sampleData = sample_db_15km;
    } else if (QuestionResponse.distance === "20-25km") {
        sampleData = sample_db_20km;
    } else if (QuestionResponse.distance === ">25km") {
        sampleData = sample_db_25km;
    }


    let mode1 = {
        mode_name: "Bus Type 1",
        mode_attr: "mode_1",
        icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
    }

    let mode2 = {
        mode_name: "Bus Type 2",
        mode_attr: "mode_2",
        icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
    }

    let mode3;
    if (QuestionResponse.distance === "<5km") {
        mode3 = {
            mode_name: "Walk / Bicycle",
            mode_attr: "mode_4",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    } else {
        mode3 = {
            mode_name: "Metro",
            mode_attr: "mode_4",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    }

    let mode4;
    if (QuestionResponse.travelMode === 'Own Two-wheeler') {
        mode4 = {
            mode_name: "Own Two-wheeler",
            mode_attr: "mode_9",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    } else if (QuestionResponse.travelMode === 'Own Car') {
        mode4 = {
            mode_name: "Own Car",
            mode_attr: "mode_8",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };

    } else {
        // Randomly pick between 'Own Car' and 'Own Two-wheeler'
        mode4 = Math.random() < 0.5 ? {
            mode_name: "Own Car",
            mode_attr: "mode_8",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        } : {
            mode_name: "Own Two-wheeler",
            mode_attr: "mode_9",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    }

    let mode5;
    if (QuestionResponse.travelMode === 'Auto') {
        mode5 = {
            mode_name: "Auto",
            mode_attr: "mode_7",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    } else if (QuestionResponse.travelMode === 'App based ride hailing cab services including Ola / Uber') {
        mode5 = {
            mode_name: "Ride hailing cab services",
            mode_attr: "mode_5",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    } else {
        // Randomly pick between 'Auto' and 'Ride hailing cab services'
        mode5 = Math.random() < 0.5 ? {
            mode_name: "Auto",
            mode_attr: "mode_7",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        } : {
            mode_name: "Ride hailing cab services",
            mode_attr: "mode_5",
            icon_link:"https://static.vecteezy.com/system/resources/previews/004/433/862/original/bus-icon-with-front-view-public-transportation-station-symbol-for-location-plan-free-vector.jpg"
        };
    }

    function getCrowdStatus(crowdLevel) {
        const crowd_json = {
            1: "Many seats available",
            2: "Some seats available",
            3: "All seats occupied; standing space available",
            4: "Fully crowded or packed"
        };
        return crowd_json[crowdLevel];
    }
    function getServiceType(serviceType) {
        const servtype_json = {
            1: "Ordinary",
            2: "Express Non-AC",
            3: "Express AC",
        };
        return servtype_json[serviceType];
    }


    return (
        <div className="main-container">
            <div className="page-heading">
            <h1>Mode Choice</h1>

            </div>
           

            <table>
                <tbody>
                    <tr>
                        <td>{mode1.mode_name} </td>
                        <td>{mode2.mode_name} </td>
                        <td>{mode3.mode_name}</td>
                        <td>{mode4.mode_name}</td>
                        <td>{mode5.mode_name}</td>
                    </tr>
                </tbody>
            </table>

            <h2> Total travel time spent while inside the vehicle(s)</h2>
            <table>
                <tbody>
                    <tr>
                        <td> <img src={mode1.icon_link}/><br/>{sampleData[0][mode1.mode_attr + '_ivtt']} min</td>
                        <td><img src={mode1.icon_link}/><br/>{sampleData[0][mode2.mode_attr + '_ivtt']} min</td>
                        <td><img src={mode1.icon_link}/><br/>{sampleData[0][mode3.mode_attr + '_ivtt']} min</td>
                        <td><img src={mode1.icon_link}/><br/>{sampleData[0][mode4.mode_attr + '_ivtt']} min</td>
                        <td><img src={mode1.icon_link}/><br/>{sampleData[0][mode5.mode_attr + '_ivtt']} min</td>
                    </tr>
                </tbody>
            </table>

            <h2> Total travel time spent outside vehicle(s)</h2>
            <table>
                <tbody>
                    <tr>
                        <td>{sampleData[0][mode1.mode_attr + '_walktime'] + sampleData[0][mode1.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode2.mode_attr + '_walktime'] + sampleData[0][mode2.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode3.mode_attr + '_walktime'] + sampleData[0][mode3.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode4.mode_attr + '_walktime'] + sampleData[0][mode4.mode_attr + '_waittime']} min</td>
                        <td>{sampleData[0][mode5.mode_attr + '_walktime'] + sampleData[0][mode5.mode_attr + '_waittime']} min</td>
                    </tr>
                </tbody>
            </table>

            <h2> Possible delay due to traffic congestion or other uncertainties</h2>
            <table>
                <tbody>
                    <tr>
                        <td>..up to {sampleData[0][mode1.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode2.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode3.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode4.mode_attr + '_tvariab']} min more</td>
                        <td>..up to {sampleData[0][mode5.mode_attr + '_tvariab']} min more</td>
                    </tr>
                </tbody>
            </table>

            <h2>Total one-way cost of travel</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Rs. {sampleData[0][mode1.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode2.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode3.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode4.mode_attr + '_tcost']}</td>
                        <td>Rs. {sampleData[0][mode5.mode_attr + '_tcost']}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Extent of crowding in the vehicle</h2>
            <table>
                <tbody>
                    <tr>
                        <td>{getCrowdStatus(sampleData[0][mode1.mode_attr + '_crowd'])}</td>
                        <td>{getCrowdStatus(sampleData[0][mode2.mode_attr + '_crowd'])}</td>
                        <td>{getCrowdStatus(sampleData[0][mode3.mode_attr + '_crowd'])}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h2>Service type</h2>
            <table>
                <tbody>
                    <tr>
                        <td>{getServiceType(sampleData[0][mode1.mode_attr + '_serv'])}</td>
                        <td>{getServiceType(sampleData[0][mode2.mode_attr + '_serv'])}</td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default ModeChoice;
