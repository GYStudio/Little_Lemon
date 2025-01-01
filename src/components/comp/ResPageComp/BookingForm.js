import React, { useState, useCallback } from "react";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/BookingForm.css";
import Button from "../OtherComp/button";


const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0] || "";
  
  const [formValues, setFormValues] = useState({
    date: "",
    time: defaultTime,
    people: "",
    occasion: "",
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      dispatchOnDateChange(value);
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, [dispatchOnDateChange]);

  const getClassName = (field) => (
    isFormSubmitted && !formValues[field] ? "error" : ""
  );

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <form onSubmit={(e) => onFormSubmit(e, formValues)}>
      <div className="reservation-container">
        <label htmlFor="date" className="container-item-title">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formValues.date}
          onChange={handleInputChange}
          className={getClassName("date")}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="time" className="container-item-title">
          Time
        </label>
        <select
          id="time"
          name="time"
          value={formValues.time}
          onChange={handleInputChange}
          className={getClassName("time")}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className="reservation-container">
        <label htmlFor="people" className="container-item-title">
          Number of people
        </label>
        <input
          type="number"
          id="people"
          name="people"
          value={formValues.people}
          min={minGuest}
          max={maxGuest}
          onChange={handleInputChange}
          className={getClassName("people")}
        />
      </div>
      <div className="reservation-container">
        <label htmlFor="occasion" className="container-item-title">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formValues.occasion}
          onChange={handleInputChange}
          className={getClassName("occasion")}
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="reservation-button">
        <Button title="Book a table" type="submit" />
      </div>
    </form>
  );
};

export default BookingForm;
