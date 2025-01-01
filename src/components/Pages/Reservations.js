import React, { useState, useReducer, useCallback } from "react";
import { fetchAPI } from "../comp/OtherComp/API";
import { useNavigate } from "react-router-dom";
import "../Styling/Reservations.css";
import BookingForm from "../comp/ResPageComp/BookingForm";
import Popup from "../comp/ResPageComp/Popup";
import Navigation from "../Navigation/Navigation"

const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = useCallback((e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(Boolean);

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  }, []);

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div data-testid="reservations-component" className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table Reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            navigate(Navigation.get("home").path);
          }}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been made. You will receive a confirmation email with the details of your reservation shortly. We are looking forwward to seeing you soon!"
        />
      )}
    </div>
  );
};

export default Reservations;
