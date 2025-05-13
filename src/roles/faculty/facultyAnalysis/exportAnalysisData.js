import * as XLSX from "xlsx";

export function exportAnalysisData(data) {
  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Add a filters sheet showing what filters were applied
  if (data.filters) {
    const filtersArray = [];

    // Format filters for the excel sheet
    Object.entries(data.filters).forEach(([key, value]) => {
      // Skip empty arrays or default values
      if (key === "skills" && (!value || value.length === 0)) return;
      if (value === "All" || value === null || value === undefined) return;

      // Format the key name to be more readable
      const formattedKey = key
        .replace(/([A-Z])/g, " $1") // Add space before capital letters
        .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

      // Format the value appropriately
      let formattedValue = value;
      if (Array.isArray(value)) {
        formattedValue = value.join(", ");
      }

      filtersArray.push({
        Filter: formattedKey,
        Value: formattedValue.toString(),
      });
    });

    if (filtersArray.length > 0) {
      XLSX.utils.book_append_sheet(
        wb,
        XLSX.utils.json_to_sheet(filtersArray),
        "Applied Filters"
      );
    }
  }

  // Add detailed company information sheet
  if (data.companyDetails) {
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(data.companyDetails),
      "Company Details"
    );
  }

  // Add offer details by company sheet
  if (data.offerDetails) {
    // Flatten the nested PackageBreakup object for Excel
    const flattenedOfferDetails = data.offerDetails.map((offer) => {
      const flatOffer = { ...offer };

      // Replace the nested PackageBreakup object with flattened properties
      if (offer.PackageBreakup) {
        delete flatOffer.PackageBreakup;
        flatOffer.Base = offer.PackageBreakup.Base || "";
        flatOffer.Stocks = offer.PackageBreakup.Stocks || "";
        flatOffer.Bonus = offer.PackageBreakup.Bonus || "";
        flatOffer.Variable = offer.PackageBreakup.Variable || "";
        flatOffer.TotalPackage = offer.PackageBreakup.Total || "";
      }

      return flatOffer;
    });

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(flattenedOfferDetails),
      "Offer Details"
    );
  }

  // Add role and department distribution sheet
  if (data.roleDistribution) {
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(data.roleDistribution),
      "Role Distribution"
    );
  }

  // Add student information sheet
  if (data.studentInfo) {
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(data.studentInfo),
      "Student Information"
    );
  }

  // Add placement information sheet
  if (data.placementInfo) {
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(data.placementInfo),
      "Placement Information"
    );
  }

  // Add company-wise placement count
  if (data.companyWisePlacement) {
    const companySheet = data.companyWisePlacement.labels.map((label, idx) => ({
      Company: label,
      "Placement Count": data.companyWisePlacement.datasets[0].data[idx],
    }));

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(companySheet),
      "Company-wise Placement"
    );
  }

  // Add department-wise placement ratio
  if (data.departmentWisePlacement) {
    const departmentSheet = data.departmentWisePlacement.labels.map(
      (label, idx) => ({
        Department: label,
        "Placement Percentage":
          data.departmentWisePlacement.datasets[0].data[idx],
      })
    );

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(departmentSheet),
      "Department-wise Placement"
    );
  }

  // Add package distribution
  if (data.packageDistribution) {
    const packageSheet = data.packageDistribution.labels.map((label, idx) => ({
      "Package Range": label,
      "Student Count": data.packageDistribution.datasets[0].data[idx],
    }));

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(packageSheet),
      "Package Distribution"
    );
  }

  // Add CGPA trends data if available
  if (data.cgpaTrends) {
    // For CGPA trends, we need to handle multiple datasets differently
    const cgpaRows = [];
    const semesters = data.cgpaTrends.labels;

    // Add header row
    const headerRow = { Department: "" };
    semesters.forEach((sem) => {
      headerRow[sem] = "";
    });

    // Add data rows for each department
    data.cgpaTrends.datasets.forEach((dept) => {
      const row = { Department: dept.label };
      dept.data.forEach((cgpa, i) => {
        row[semesters[i]] = cgpa;
      });
      cgpaRows.push(row);
    });

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(cgpaRows),
      "CGPA Trends"
    );
  }

  // Add CGPA vs Placement Rate
  if (data.cgpaPlacement) {
    const cgpaSheet = data.cgpaPlacement.labels.map((label, idx) => ({
      "CGPA Range": label,
      "Placement Rate (%)": data.cgpaPlacement.datasets[0].data[idx],
    }));

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(cgpaSheet),
      "CGPA vs Placement"
    );
  }

  // Add Internship vs Full-Time
  if (data.employmentTypes) {
    // Convert employment type data to array format
    const employmentSheet = Object.entries(data.employmentTypes).map(
      ([type, count]) => ({
        "Employment Type": type,
        Count: count,
      })
    );

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(employmentSheet),
      "Employment Types"
    );
  }

  // Add On-campus vs Off-campus
  if (data.offerTypes) {
    // Convert offer type data to array format
    const offerSheet = Object.entries(data.offerTypes).map(([type, count]) => ({
      "Offer Type": type,
      Count: count,
    }));

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(offerSheet),
      "Offer Types"
    );
  }

  // Add Gender-based distribution
  if (data.genderDistribution) {
    const genderSheet = Object.entries(data.genderDistribution).map(
      ([gender, count]) => ({
        Gender: gender,
        Count: count,
      })
    );

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(genderSheet),
      "Gender Distribution"
    );
  }

  // Add Skills in Demand
  if (data.skillsInDemand) {
    const skillsSheet = data.skillsInDemand.labels.map((label, idx) => ({
      Skill: label,
      Frequency: data.skillsInDemand.datasets[0].data[idx],
    }));

    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.json_to_sheet(skillsSheet),
      "Skills in Demand"
    );
  }

  // Generate a dynamic file name with timestamp
  const date = new Date();
  const timestamp = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}_${date
    .getHours()
    .toString()
    .padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}`;
  const filename = `faculty_analysis_${timestamp}.xlsx`;

  // Export the workbook to an Excel file
  XLSX.writeFile(wb, filename);

  return filename; // Return the filename for confirmation
}
