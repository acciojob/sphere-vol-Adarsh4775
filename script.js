function volume_sphere() {
    //Write your code here
  // Define the volume_sphere function
function volume_sphere() {
    // Get the value of the Radius field
    const radius = parseFloat(document.getElementById("Radius").value);

    // Check if the input is a valid number
    if (isNaN(radius)) {
        // If not a valid number, display an error message
        document.getElementById("volume").value = "Please enter a valid radius.";
    } else {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the volume field
        document.getElementById("volume").value = volume.toFixed(2); // Limit to 2 decimal places
    }
}

} 


