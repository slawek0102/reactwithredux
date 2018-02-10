import React from 'react';

import './CounterControl.css';


import DatePicker from 'material-ui/DatePicker';

const counterControl = (props) => (
    <div >

        <DatePicker
            hintText="Custom date format"
            firstDayOfWeek={0}
            // formatDate={new DateTimeFormat('en-US', {
            //     day: 'numeric',
            //     month: 'long',
            //     year: 'numeric',
            // }).format}
        />

    </div>
);

export default counterControl;