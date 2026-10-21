// variables
const form = document.getElementById("noteForm");

const deviceType = document.getElementById("deviceType");
const issue = document.getElementById("issue");
const resolution = document.getElementById("resolution");
const technician = document.getElementById("technician");

const deviceTypeError = document.getElementById("deviceTypeError");
const issueError = document.getElementById("issueError");
const resolutionError = document.getElementById("resolutionError");
const technicianError = document.getElementById("technicianError");

const noteOutput = document.getElementById("noteOutput");
const generatedNote = document.getElementById("generatedNote");

const copyNoteButton = document.getElementById("copyNoteButton");
const copyMessage = document.getElementById("copyMessage");

const clearFormButton = document.getElementById("clearFormButton");

const message = document.getElementById("message");

// event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  deviceTypeError.textContent = "";
  issueError.textContent = "";
  resolutionError.textContent = "";
  technicianError.textContent = "";
  message.textContent = "";

  if (isEmpty(deviceType.value)) {
    deviceTypeError.textContent = "Please enter a device type.";
  }

  if (isEmpty(issue.value)) {
    issueError.textContent = "Please describe the issue.";
  }

  if (isEmpty(resolution.value)) {
    resolutionError.textContent = "Please enter the resolution.";
  }

  if (isEmpty(technician.value)) {
    technicianError.textContent = "Please enter the technician's name.";
  }

  if (
    isEmpty(deviceType.value) ||
    isEmpty(issue.value) ||
    isEmpty(resolution.value) ||
    isEmpty(technician.value)
  ) {
    return;
  }
  
  message.textContent = "Validation successful!";


  generatedNote.textContent = `Device Type: ${deviceType.value.trim()}
                                Issue: ${issue.value.trim()}
                                Resolution: ${resolution.value.trim()}
                                Technician: ${technician.value.trim()}`;

  noteOutput.hidden = false;

  message.textContent = "Note generated successfully!";
});

// copy button
copyNoteButton.addEventListener("click", async function() {
  try {
    await navigator.clipboard.writeText(generatedNote.textContent);
    copyMessage.textContent = "Note copied successfully!";
  } catch (error) {
      copyMessage.textContent = "Unable to copy. Please copy the note manually.";
      console.error("Clipboard copy failed:", error);
  }
});

// function to check if a value is empty
function isEmpty(value) {
  return value.trim() === "";
}

// reusable function to clear error while typing
function clearErrorWhileFilled(input, errorElement) {
  input.addEventListener("input", function() {
    if (!isEmpty(input.value)) {
      errorElement.textContent = "";
    }
  });
}

// Clear error while typing (function call)
clearErrorWhileFilled(deviceType, deviceTypeError);
clearErrorWhileFilled(issue, issueError);
clearErrorWhileFilled(resolution, resolutionError);
clearErrorWhileFilled(technician, technicianError);

// reset 
clearFormButton.addEventListener("click", function() {
  form.reset();

  deviceTypeError.textContent = "";
  issueError.textContent = "";
  resolutionError.textContent = "";
  technicianError.textContent = "";

  message.textContent = "";
  generatedNote.textContent = "";
  noteOutput.hidden = true;
  copyMessage.textContent = "";
});
