import React, { useState } from "react";
import "./searchDates.css";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from "react-router-dom";

const SearchDates = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="searchDates">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Link to="/search" className="link">
        <Button variant="outlined">Search airbnb</Button>
      </Link>
    </div>
  );
};

export default SearchDates;
