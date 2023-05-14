import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Recipes from "RemysCookBook/pages/recipe-view/recipes";
import DatePicker from "sassy-datepicker";

function Recipe() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [storedDate, setStoredDate] = useState(null);

    const handleOkButtonClick = () => {
        setStoredDate(selectedDate);
    };

    return (
        <div className="h-screen background">
            <div className="App grid-container-recipeDate">
                <h1>Select Date:</h1>
                <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <button onClick={handleOkButtonClick}>Ok</button>
                {storedDate && (
                    <p>Das ausgewählte Datum ist: {storedDate.toLocaleDateString()}</p>
                )}
            </div>
        </div>
    );
}

export default Recipe;
