import React, { useState } from "react";

function App() {
  // Initialize the contact state object
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  // Function to handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    // Update the state using the previous state and the input field's name
    setContact((prevContact) => {
      return {
        ...prevContact, // Keep the previous values
        [name]: value, // Update the specific field (fName, lName, or email)
      };
    });
  }

  return (
    <div className="container">
      {/* Display the dynamically updated contact information */}
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        {/* Controlled input fields */}
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
