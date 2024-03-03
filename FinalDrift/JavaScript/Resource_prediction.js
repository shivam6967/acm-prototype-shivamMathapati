
let Hospitals = []
function getdata() {
  fetch('http://localhost:8000/resource')
    .then((res) => res.json())
    .then((response) => {
      const hospitalsData = {};

      // Split the data into an array of lines
      const lines = response.message.split('\r\n');

      let currentHospital = '';
      let currentShortages = [];

      // Iterate through each line of the input data
      for (const line of lines) {
        // Check if the line contains a hospital name
        const hospitalMatch = line.match(/Hospital (\d+):/);
        if (hospitalMatch) {
          // Save the previous hospital data
          if (currentHospital) {
            hospitalsData[currentHospital] = [...currentShortages];
          }
          // Initialize variables for the new hospital
          currentHospital = `Hospital ${hospitalMatch[1]}`;
          currentShortages = [];
        } else if (currentHospital && line.trim() !== '') {
          // If it's not an empty line, add the shortage to the current hospital
          currentShortages.push(line.trim());
        }
      }

      // Save the last hospital data
      if (currentHospital) {
        hospitalsData[currentHospital] = [...currentShortages];
      }

      // Log the organized data
      console.log("Organized Data:");
      console.log(hospitalsData);
      Hospitals = hospitalsData;

     
    })
}

getdata();

 let mailBody = 
 `Dear District Hospital, Ashta Team,
 
 I hope this message finds you well. We are reaching out to inform you about our AI-driven disease outbreak prediction system, which has identified potential shortages in crucial medical supplies at your esteemed institution.
 
 Our advanced algorithms have analyzed historical and current health data, and the following shortages are predicted:
 
 Medical Supplies: Shortage Predicted
 Pharmaceuticals: Shortage Predicted
 Oxygen Supply: Shortage Predicted
 
 Thank you for your attention to this matter, and we look forward to working together to proactively manage and overcome any potential shortages.
 
 Best regards,
 Team Code4health
 8624916245`;

 document.getElementById('first-send').addEventListener('click', () => {
  fetch("http://localhost:8000/sendMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json" // Corrected typo here
    },
    body: JSON.stringify({ mailBody }) // Stringify the object
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message);
    })
    .catch((err) => {
      console.log(err);
    });
});
