import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const App = () => {
    const [postDate, setPostDate] = useState(new Date());
    return (
        <div className="h-screen form-group background" >
            <div className="grid-container-recipeDate">
                <label>Date Posted</label>
                <DatePicker
                    selected={postDate}
                    onChange={(date) => setPostDate(date)}
                    minDate={new Date()}
                    className="background"
                />
            </div>

        </div>
    );
};

export default App;