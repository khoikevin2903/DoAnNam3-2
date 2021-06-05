import React, { useState, forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import moment from 'moment';

const FormDatePicker = (props) => {

    const { HandleChange } = props;

    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(
        ({ value, onClick }, ref) => (
            <div className="rounded cursor-pointer mx-3">
                <div className="py-2 px-2 rounded border border-gray-400" onClick={onClick} ref={ref}>
                    {value}
                </div>
            </div>
        ),
    );
    return (
        <DatePicker
            selected={startDate}
            onChange={date => HandleChange(moment(date).format().substring(0,10))}
            customInput={<ExampleCustomInput />}
        />
    );
};


export default FormDatePicker;