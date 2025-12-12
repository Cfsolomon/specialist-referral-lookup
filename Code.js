function doGet() {
  const props = PropertiesService.getScriptProperties();
  const lastUpdated = props.getProperty('lastUpdated') || "Not yet set";

  const template = HtmlService.createTemplateFromFile('Index');
  template.lastUpdated = lastUpdated;

  return template.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Automatically stamp the deployment time
function onDeploy() {
  const now = new Date();
  const options = {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    timeZone: 'America/New_York', timeZoneName: 'short'
  };
  const lastUpdated = now.toLocaleString('en-US', options);
  PropertiesService.getScriptProperties().setProperty('lastUpdated', lastUpdated);
}

// Patient search
function searchByPatient(patientName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Doctors');
  const data = sheet.getRange(2, 1, sheet.getLastRow()-1, 12).getValues(); // A..L

  const query = (patientName || '').toLowerCase().trim();
  const results = [];

  data.forEach(row => {
    const patients = (row[8] || '').toLowerCase().split(',').map(p => p.trim());
    if (query && patients.some(p => p.includes(query))) {
      results.push({
        NumberID: row[0],
        Last: row[1],
        First: row[2],
        Specialty: row[3],
        Address: row[4],
        Phone: row[5],
        Fax: row[6],
        Email: row[7],
        Patients: row[8],
        From: row[9],
        NPI: row[10]
      });
    }
  });

  return results;
}

// Doctor search
function searchByDoctor(last, first) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Doctors');
  const data = sheet.getRange(2, 1, sheet.getLastRow()-1, 12).getValues(); // A..L

  const l = (last || '').toLowerCase().trim();
  const f = (first || '').toLowerCase().trim();
  const results = [];

  data.forEach(row => {
    const rowLast  = (row[1] || '').toLowerCase().trim(); // B
    const rowFirst = (row[2] || '').toLowerCase().trim(); // C

    const matchLast  = l ? rowLast.includes(l)  : true;
    const matchFirst = f ? rowFirst.includes(f) : true;

    if (matchLast && matchFirst) {
      results.push({
        NumberID: row[0],
        Last: row[1],
        First: row[2],
        Specialty: row[3],
        Address: row[4],
        Phone: row[5],
        Fax: row[6],
        Email: row[7],
        Patients: row[8],
        From: row[9],
        NPI: row[10]
      });
    }
  });

  return results;
}