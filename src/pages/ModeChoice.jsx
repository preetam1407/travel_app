import React from "react";
import { useLocation } from "react-router-dom";

// import the json files data.
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

    // This will choose the required dataset as per question 2.
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

    // function to take differnet modes from json dataset as per response from question 1.
    let mode1 = {
        mode_name: "Bus Type 1",
        mode_attr: "mode_1",
        // icon_link: "https://cdn-icons-png.flaticon.com/512/3066/3066259.png",
    }

    let mode2 = {
        mode_name: "Bus Type 2",
        mode_attr: "mode_2",
        // icon_link: "https://cdn-icons-png.flaticon.com/512/3066/3066259.png"
    }

    let mode3;
    if (QuestionResponse.distance === "<5km") {
        mode3 = {
            mode_name: "Walk / Bicycle",
            mode_attr: "mode_4",
            icon_link: "https://tcc-gsr.com/wp-content/uploads/2021/06/3.3-Walking-and-Cycling.svg"
        };
    } else {
        mode3 = {
            mode_name: "Metro",
            mode_attr: "mode_4",
            icon_link: "https://cdn-icons-png.flaticon.com/512/1034/1034795.png"
        };
    }

    let mode4;
    if (QuestionResponse.travelMode === 'Own Two-wheeler') {
        mode4 = {
            mode_name: "Own Two-wheeler",
            mode_attr: "mode_9",
            icon_link: "https://cdn0.iconfinder.com/data/icons/vehicles-in-green-and-brown-shades/1536/motorcycle-512.png"
        };
    } else if (QuestionResponse.travelMode === 'Own Car') {
        mode4 = {
            mode_name: "Own Car",
            mode_attr: "mode_8",
            icon_link: "https://cdn-icons-png.flaticon.com/512/744/744465.png"
        };

    } else {
        // Randomly pick between 'Own Car' and 'Own Two-wheeler'
        mode4 = Math.random() < 0.5 ? {
            mode_name: "Own Car",
            mode_attr: "mode_8",
            icon_link: "https://cdn-icons-png.flaticon.com/512/744/744465.png"
        } : {
            mode_name: "Own Two-wheeler",
            mode_attr: "mode_9",
            icon_link: "https://cdn0.iconfinder.com/data/icons/vehicles-in-green-and-brown-shades/1536/motorcycle-512.png"
        };
    }

    let mode5;
    if (QuestionResponse.travelMode === 'Auto') {
        mode5 = {
            mode_name: "Auto",
            mode_attr: "mode_7",
            icon_link: "https://cdn-icons-png.flaticon.com/512/4786/4786827.png"
        };
    } else if (QuestionResponse.travelMode === 'App based ride hailing cab services including Ola / Uber') {
        mode5 = {
            mode_name: "Ride hailing cab services",
            mode_attr: "mode_5",
            icon_link: "https://cdn-icons-png.flaticon.com/512/744/744465.png"
        };
    } else {
        // Randomly pick between 'Auto' and 'Ride hailing cab services'
        mode5 = Math.random() < 0.5 ? {
            mode_name: "Auto",
            mode_attr: "mode_7",
            icon_link: "https://cdn-icons-png.flaticon.com/512/4786/4786827.png"
        } : {
            mode_name: "Ride hailing cab services",
            mode_attr: "mode_5",
            icon_link: "https://cdn-icons-png.flaticon.com/512/744/744465.png"
        };
    }

    // crowd level row
    function getCrowdStatus(crowdLevel) {
        const crowd_json = {
            1: "Many seats available",
            2: "Some seats available",
            3: "All seats occupied; standing space available",
            4: "Fully crowded or packed"
        };
        return crowd_json[crowdLevel];
    }

    // servicetype row
    function getServiceType(serviceType) {
        const servtype_json = {
            1: "Ordinary",
            2: "Express Non-AC",
            3: "Express AC",
        };
        return servtype_json[serviceType];
    }
    
    /* Function to pick 0 transfer or 1 transfer and thne update the UI of the page accordingly for the particular transfer fot the mode_1 and mode_2 in row 2.*/
    function modetransfer(trans) {
        const transtype_json = {
            0: "",
            1: "1 Transfer",
        };
        return transtype_json[trans];
    }

    /* Function to pick image based on one or zero transfer and then update the UI of the page accordingly for the particular transfer fot the mode_1 and mode_2 in row 2.*/
    function modetransferimg(transimg) {
        const transtype_img = {
            0: "https://cdn-icons-png.flaticon.com/512/3066/3066259.png",
            1: "https://www.prestocard.ca/-/jssmedia/presto-ui/data/media/img/etickets-transfer-window-icon.ashx?h=500&iar=0&w=500&hash=7576423300A2C9158236FC123A629049",
        };
        return transtype_img[transimg];
    }
    // To add image in the crowd level row
    function level_of_crowd(transimg) {
        const transtype_img = {
            1: "https://cdn-icons-png.flaticon.com/512/83/83510.png",
            2: "https://cdn-icons-png.flaticon.com/512/761/761633.png",
            3: "https://www.shutterstock.com/shutterstock/photos/198977963/display_1500/stock-vector-seating-and-standing-man-waiting-room-symbol-isolated-on-white-background-198977963.jpg",
            4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavB-65747y6mjwqQOzPG9vwd2wku6DnBATAw8ILY6S6DknqDRqCywlzyixxuthdeioCA&usqp=CAU",
      
        };
        return transtype_img[transimg];
    }

    function service_seats(transimg) {
        const transtype_img = {
            1: "https://icon-library.com/images/seat-icon/seat-icon-11.jpg",
            2: "https://cdn-icons-png.flaticon.com/512/1061/1061254.png",
            3: "https://static.thenounproject.com/png/2541459-200.png",
            
        };
        return transtype_img[transimg];
    }



    return (
        <div>
            <header id="head">
                <div className="banner-content">
                    <div className="page-heading">
                        <h1>Mode Choice</h1>

                    </div>


                    {/* <table>
                        <tbody>
                            <tr>
                                <td>{mode1.mode_name} </td>
                                <td>{mode2.mode_name} </td>
                                <td>{mode3.mode_name}</td>
                                <td>{mode4.mode_name}</td>
                                <td>{mode5.mode_name}</td>
                            </tr>
                        </tbody>
                    </table> */}

                    <table>
                        <tbody>
                            <tr>
                                <td><input type="radio" name="mode" value="{mode1.mode_name}" /> {mode1.mode_name}</td>
                                <td><input type="radio" name="mode" value="{mode2.mode_name}" /> {mode2.mode_name}</td>
                                <td><input type="radio" name="mode" value="{mode3.mode_name}" /> {mode3.mode_name}</td>
                                <td><input type="radio" name="mode" value="{mode4.mode_name}" /> {mode4.mode_name}</td>
                                <td><input type="radio" name="mode" value="{mode5.mode_name}" /> {mode5.mode_name}</td>
                            </tr>
                        </tbody>
                    </table>


                    <h2> Total travel time spent while inside the vehicle(s)</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>{modetransfer(sampleData[0][mode1.mode_attr + '_trans'])}<br /> <img src={modetransferimg(sampleData[0][mode1.mode_attr + '_trans'])} alt=""/><br />
                                    {sampleData[0][mode1.mode_attr + '_ivtt']} min</td>
                                <td>{modetransfer(sampleData[0][mode2.mode_attr + '_trans'])}<br /> <img src={modetransferimg(sampleData[0][mode2.mode_attr + '_trans'])} alt=""/><br />{sampleData[0][mode2.mode_attr + '_ivtt']} min</td>
                                <td><img src={mode3.icon_link} alt=""/><br />{sampleData[0][mode3.mode_attr + '_ivtt']} min</td>
                                <td><img src={mode4.icon_link} alt=""/><br />{sampleData[0][mode4.mode_attr + '_ivtt']} min</td>
                                <td><img src={mode5.icon_link} alt=""/><br />{sampleData[0][mode5.mode_attr + '_ivtt']} min</td>
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
                                {/* <td>{getCrowdStatus(sampleData[0][mode1.mode_attr + '_crowd'])}</td> */}
                                
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
            </header>



        </div>
    );
};

export default ModeChoice;
