import { useState } from "react";
import Datespicker from "react-tailwindcss-datepicker";
const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <Datespicker
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
    />
  );
};
export default DatePicker;
