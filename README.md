# 🏥 Specialist Referral Workflow Application (EHR Complement)

**Description:** Custom Google Apps Script (GAS) solution to overcome a critical workflow gap in a cloud-based Electronic Health Record (EHR) system. This internal tool provides instant, bi-directional lookup of specialist patient referral data, eliminating manual spreadsheet processes.

## 🎯 The Client's Challenge (Systems Integration)

The medical practice adopted a new cloud EHR; however, the system was too rigid for the specific, high-volume referral workflow of the specialist surgeon. Specifically, the EHR failed to provide easy, quick access to the referring physician's full contact details for post-visit follow-up correspondence.

Staff were resorting to manually searching complex Google Sheets, leading to significant time loss and data retrieval errors.

## ✨ Solution: Secure GAS Lookup Engine

I engineered a full-stack internal web application using Google Apps Script to securely query existing Google Sheets data, acting as an efficient complement to the rigid EHR system.

### Key Features
* **Bi-Directional Search:** Implemented server-side logic to allow searches using both the **Referring Doctor Name** or the **Patient Name**.
* **Instant Detail Retrieval:** Returns a comprehensive profile in a single view: **Doctor Name, Address, Fax, Phone, and Email.**
* **Zero Infrastructure Cost:** Leveraged the native Google Apps Script environment, providing a cost-effective, secure, and authenticated solution.

### ⚙️ Technical Stack

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Backend/Runtime** | **Google Apps Script (V8 Engine)** | Provides a secure, natively authenticated, serverless execution environment. |
| **Search Logic** | **Server-Side JavaScript** | Custom logic for efficient search across two different data fields within the Sheet. |
| **Data Source** | Google Sheets API (Internal Access) | Utilizes `SpreadsheetApp.openById()` for high-speed, controlled access to existing client data. |
| **Interface** | HTML Service (Templated HTML/CSS) | Developed a clean, user-friendly interface for non-technical administrative staff. |

## 🚀 Deployment

This project requires deployment as a Web App through the Google Apps Script interface.

1.  **Clone the Repository:** Use `clasp clone <Script-ID>` to pull the code.
2.  **Link Data Source:** Ensure the code is linked to the correct Google Sheet containing the referral data.
3.  **Deploy as Web App:** Set execution to **"User accessing the web app"** for proper security context.
