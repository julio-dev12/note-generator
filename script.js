// variables
const form = document.getElementById("noteForm");

const deviceType = document.getElementById("deviceType");
const issue = document.getElementById("issue");
const resolution = document.getElementById("resolution");
const technician = document.getElementById("technician");

const previewDeviceType = document.getElementById("previewDeviceType");
const previewIssue = document.getElementById("previewIssue");
const previewResolution = document.getElementById("previewResolution");
const previewTechnician = document.getElementById("previewTechnician");

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

// function to check if a value is empty
function isEmpty(value) {
    if (typeof value !== "string") {
      throw new TypeError("isEmpty() requires a string.");
    }

    return value.trim() === "";
}

// test js
window.isEmpty = isEmpty;

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

  previewDeviceType.textContent = deviceType.value.trim();
  previewIssue.textContent = issue.value.trim();
  previewResolution.textContent = resolution.value.trim();
  previewTechnician.textContent = technician.value.trim();

  noteOutput.hidden = false;
  message.textContent = "Note generated successfully!";
});

// copy button
copyNoteButton.addEventListener("click", async function() {
  try {
    const noteText =
    `Device Type: ${previewDeviceType.textContent}
Issue: ${previewIssue.textContent}
Resolution: ${previewResolution.textContent}
Technician: ${previewTechnician.textContent}`;
    await navigator.clipboard.writeText(noteText);
    copyMessage.textContent = "Note copied successfully!";
  } catch (error) {
      copyMessage.textContent = "Unable to copy. Please copy the note manually.";
      console.error("Clipboard copy failed:", error);
  }
});

// reusable function to clear error while typing
function clearErrorWhileFilled(input, errorElement) {
  input.addEventListener("input", function() {
    noteOutput.hidden = true;
    previewDeviceType.textContent = "";
    previewIssue.textContent = "";
    previewResolution.textContent = "";
    previewTechnician.textContent = "";
    message.textContent = "";
    copyMessage.textContent = "";

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
  previewDeviceType.textContent = "";
  previewIssue.textContent = "";
  previewResolution.textContent = "";
  previewTechnician.textContent = "";
  noteOutput.hidden = true;
  copyMessage.textContent = "";
});
