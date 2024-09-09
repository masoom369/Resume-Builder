document
  .getElementById("pic")
  ?.addEventListener("change", function (event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File | null = target.files ? target.files[0] : null;
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      const result = e.target?.result as string;
      const imgElement = document.getElementById(
        "imagePreview"
      ) as HTMLImageElement;
      imgElement.src = result;
      imgElement.style.display = "block"; // Show the image preview

      const resumeImgElement = document.getElementById(
        "resumePic"
      ) as HTMLImageElement;
      resumeImgElement.src = result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });

function updatePreview(): void {
  const name = (document.getElementById("nameInput") as HTMLInputElement).value;
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const phone = (document.getElementById("phoneInput") as HTMLInputElement)
    .value;
  const linkedIn = (
    document.getElementById("linkedinInput") as HTMLInputElement
  ).value;
  const address = (document.getElementById("addressInput") as HTMLInputElement)
    .value;
  const summary = (document.getElementById("summaryInput") as HTMLInputElement)
    .value;
  const education = (
    document.getElementById("educationInput") as HTMLInputElement
  ).value;
  const skills = (document.getElementById("skillsInput") as HTMLInputElement)
    .value;
  const experiences = (
    document.getElementById("experiencesInput") as HTMLInputElement
  ).value;

  (document.getElementById("resumeName") as HTMLElement).textContent = name;
  (document.getElementById("resumeEmail") as HTMLElement).textContent = email;
  (document.getElementById("resumePhone") as HTMLElement).textContent = phone;
  (document.getElementById("resumeLinkedIn") as HTMLElement).textContent =
    linkedIn;
  (document.getElementById("resumeAddress") as HTMLElement).textContent =
    address;
  (document.getElementById("resumeSummary") as HTMLElement).textContent =
    summary;
  (document.getElementById("resumeEducation") as HTMLElement).textContent =
    education;
  (document.getElementById("resumeSkills") as HTMLElement).textContent = skills;
  (document.getElementById("resumeExperiences") as HTMLElement).textContent =
    experiences;
}

function generatePDF(): void {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add the profile picture first
  const imgElement = document.getElementById("resumePic") as HTMLImageElement;
  if (imgElement && imgElement.src) {
    const imgData = imgElement.src;
    // Add image at the top of the page
    doc.addImage(imgData, "PNG", 10, 10, 50, 50); // Adjust x, y, width, height as needed
  }

  // Add resume information below the image
  let yOffset = 70; // Initial vertical offset below the image

  doc.text(
    `Name: ${(document.getElementById("nameInput") as HTMLInputElement).value}`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Email: ${
      (document.getElementById("emailInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Phone: ${
      (document.getElementById("phoneInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `LinkedIn: ${
      (document.getElementById("linkedinInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Address: ${
      (document.getElementById("addressInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Summary: ${
      (document.getElementById("summaryInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Education: ${
      (document.getElementById("educationInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Skills: ${
      (document.getElementById("skillsInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );
  yOffset += 10;
  doc.text(
    `Experiences: ${
      (document.getElementById("experiencesInput") as HTMLInputElement).value
    }`,
    10,
    yOffset
  );

  // Save the PDF
  doc.save("resume.pdf");
}

document.getElementById("toggleButton")?.addEventListener("click", function () {
  const skillsElement = document.getElementById("resumeSkills") as HTMLElement;
  if (skillsElement.style.display === "none") {
    skillsElement.style.display = "block";
    (this as HTMLButtonElement).textContent = "Hide Skills";
  } else {
    skillsElement.style.display = "none";
    (this as HTMLButtonElement).textContent = "Show Skills";
  }
});
