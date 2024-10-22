import React, { useState } from 'react';

const ExampleComponent = () => {
  const [checkedItems, setCheckedItems] = useState({  // State to manage checked items
    option1: false,
    option2: false,
    option3: false
    // Add more options as needed
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckedItems(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter out only the checked items
    const temp = Object.keys(checkedItems).filter(key => checkedItems[key]);
    
    console.log('Selected options:', temp);
    setSelectedOptions(temp);
    console.log(selectedOptions[0]);
    // You can use 'selectedOptions' array as needed, e.g., send it to API
  };
const str1="selected options are "
  function Car(props) {
    return <li>{str1} :{ props.brand }</li>;
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkedItems.option1}
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option2"
          checked={checkedItems.option2}
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="option3"
          checked={checkedItems.option3}
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    
    <ul>
    {selectedOptions.map((k) => <Car brand={k} />)}
      </ul>
{/* <h2>selected options are {selectedOptions.map((k) => {k.join(",")})}</h2> */}
    </>
  );
};

export default ExampleComponent;
