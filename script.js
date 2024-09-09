var _a, _b;
(_a = document.getElementById("pic")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("change", function (event) {
      var target = event.target;
      var file = target.files ? target.files[0] : null;
      var reader = new FileReader();
      reader.onload = function (e) {
        var _a;
        var result =
          (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        var imgElement = document.getElementById("imagePreview");
        imgElement.src = result;
        imgElement.style.display = "block"; // Show the image preview
        var resumeImgElement = document.getElementById("resumePic");
        resumeImgElement.src = result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    });
function updatePreview() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var phone = document.getElementById("phoneInput").value;
  var linkedIn = document.getElementById("linkedinInput").value;
  var address = document.getElementById("addressInput").value;
  var summary = document.getElementById("summaryInput").value;
  var education = document.getElementById("educationInput").value;
  var skills = document.getElementById("skillsInput").value;
  var experiences = document.getElementById("experiencesInput").value;
  document.getElementById("resumeName").textContent = name;
  document.getElementById("resumeEmail").textContent = email;
  document.getElementById("resumePhone").textContent = phone;
  document.getElementById("resumeLinkedIn").textContent = linkedIn;
  document.getElementById("resumeAddress").textContent = address;
  document.getElementById("resumeSummary").textContent = summary;
  document.getElementById("resumeEducation").textContent = education;
  document.getElementById("resumeSkills").textContent = skills;
  document.getElementById("resumeExperiences").textContent = experiences;
}
function generatePDF() {
  var jsPDF = window.jspdf.jsPDF;
  var doc = new jsPDF();
  // Add the profile picture first
  var imgElement = document.getElementById("resumePic");
  if (imgElement && imgElement.src) {
    var imgData = imgElement.src;
    // Add image at the top of the page
    doc.addImage(imgData, "PNG", 10, 10, 50, 50); // Adjust x, y, width, height as needed
  }
  // Add resume information below the image
  var yOffset = 70; // Initial vertical offset below the image
  doc.text(
    "Name: ".concat(document.getElementById("nameInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Email: ".concat(document.getElementById("emailInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Phone: ".concat(document.getElementById("phoneInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "LinkedIn: ".concat(document.getElementById("linkedinInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Address: ".concat(document.getElementById("addressInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Summary: ".concat(document.getElementById("summaryInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Education: ".concat(document.getElementById("educationInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Skills: ".concat(document.getElementById("skillsInput").value),
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    "Experiences: ".concat(document.getElementById("experiencesInput").value),
    10,
    yOffset
  );
  // Save the PDF
  doc.save("resume.pdf");
}
(_b = document.getElementById("toggleButton")) === null || _b === void 0
  ? void 0
  : _b.addEventListener("click", function () {
      var skillsElement = document.getElementById("resumeSkills");
      if (skillsElement.style.display === "none") {
        skillsElement.style.display = "block";
        this.textContent = "Hide Skills";
      } else {
        skillsElement.style.display = "none";
        this.textContent = "Show Skills";
      }
    });
