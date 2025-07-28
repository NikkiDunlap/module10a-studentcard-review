// StudentCard.jsx
// This component displays a student's profile, including their name, major, profile photo, and bio.
// It accepts props from its parent and uses state to toggle the visibility of the bio when a button is clicked.

import { useState } from 'react'; // Import the useState hook from React to manage internal component state

// Define the StudentCard functional component and receive props: name, major, image, and bio
function StudentCard({ name, major, image, bio }) 
{
  // Declare a state variable `showBio` with an initial value of false.
  // `setShowBio` is the function used to update `showBio`.
  const [showBio, setShowBio] = useState(false);

  // This function toggles the value of `showBio` between true and false
  function handleToggle() {
    setShowBio(!showBio); // Toggle state value
  }

  // Return the JSX that represents the UI of the component
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '16px auto',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Display the student's image using the image prop */}
      <img
        src={image}
        alt={`${name}'s profile`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px'
        }}
      />

      {/* Display the student's name and major from props */}
      <h2 style={{ margin: '8px 0' }}>{name}</h2>
      <h4 style={{ margin: '4px 0', color: '#666' }}>{major}</h4>

      {/* Conditionally render the bio paragraph only if `showBio` is true */}
      {showBio && (
        <p style={{ marginTop: '12px', fontSize: '14px', color: '#333' }}>
          {bio}
        </p>
      )}

      {/* Button that toggles the visibility of the bio on click */}
      <button
        onClick={handleToggle}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        {/* Change button label depending on whether the bio is shown */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
    </div>
  );
}

// Export the StudentCard component so it can be used in other files (like App.jsx)
export default StudentCard;
