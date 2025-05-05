import * as XLSX from "xlsx";

export function exportDashboardData({
  stats,
  topCompanies,
  stipendStats,
  domainsData,
  activities,
  genderData,
  offerSplitData,
}) {
  // Prepare data for each sheet
  const statsSheet = stats.map((s) => ({ Label: s.label, Value: s.value }));
  const companiesSheet = topCompanies.map((c) => ({
    Company: c.name,
    Offers: c.offers,
  }));
  const stipendSheet = [
    { Type: "Highest", Value: stipendStats.highest },
    { Type: "Median", Value: stipendStats.median },
    { Type: "Lowest", Value: stipendStats.lowest },
  ];
  const domainsSheet = domainsData.labels.map((label, idx) => ({
    Domain: label,
    Students: domainsData.datasets[0].data[idx],
  }));
  const activitiesSheet = activities.map((a) => ({
    Activity: a.text,
    Time: a.time,
  }));
  const genderSheet = genderData.labels.map((label, idx) => ({
    Gender: label,
    Count: genderData.datasets[0].data[idx],
  }));
  const offerSplitSheet = offerSplitData.labels.map((label, idx) => ({
    Type: label,
    Count: offerSplitData.datasets[0].data[idx],
  }));

  // Create workbook and add sheets
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(statsSheet),
    "Stats"
  );
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(companiesSheet),
    "Top Companies"
  );
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(stipendSheet),
    "Stipend Stats"
  );
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(domainsSheet),
    "Domains"
  );
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(activitiesSheet),
    "Activities"
  );
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(genderSheet),
    "Gender Distribution"
  );
  XLSX.utils.book_append_sheet(
    wb,
    XLSX.utils.json_to_sheet(offerSplitSheet),
    "Offer Split"
  );

  // Export to Excel
  XLSX.writeFile(wb, "faculty_dashboard_data.xlsx");
}
