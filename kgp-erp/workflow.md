# ERP Navigation Workflow

## 1. Dashboard (`home.htm`)
This is the main landing page after login. The user interface provides several persistent navigation options across the top bar:

- **Home**: Returns to dashboard.
- **Complaints / Requests**: Opens a modal to lodge Administrative, Grievance, or ERP-specific complaints (`complaint.htm`, `grievance.htm`, `showext.htm?link=other_complaint`).
- **Retrieve Passphrase**: Leads to `forgotpassphrase.htm`.
- **Pending Jobs**: Leads to `showext.htm?link=pendingJobsView`.
- **Switch Login**: Opens an AJAX-powered modal (`getSwitchableUsers.htm`) to switch between different roles/accounts.
- **Logout**: Leads to `logout.htm`.

**Top-Level Modules & Dashboard Options**
The top navigation bar loads the primary modules dynamically via an AJAX POST request to `getModules.htm`. Based on your access, the dashboard provides the following options and modules:

- **Modules:** Academic, Accounts, Guest House, CDC
- **Search Menu**
- **Notifications:** unread mail(s), Notification(s), pending job(s)
- **ERP e-Office:** Dept. e-File Category List, Dept e-File Store, Pending/Sent e-Files, Departmental Despatch/Receipt(Physical File/Item), Pending Physical File/Item
- **Messages and Alerts**
- **Other Actions:** Set Campus Network Password, View Apna (Internal) IIT KGP Notices, Counselling Centre Services

For example, when a user selects the **Academic** module, it links to `menulist.htm` and passes `module_id=16`.

---

## 2. Academic Module (`menulist.htm?module_id=16`)
When the user clicks on the **Academic** module, they are navigated to `menulist.htm` with `module_id=16` in the URL.

### Dynamic Sub-Menu Loading
The specific options and sub-menus under the Academic module are **not hardcoded** into the page. Instead, the page executes an AJAX request when it loads:

```javascript
var request = $.ajax({
    url: "getMenus.htm?module_id=16",
    type: "POST",
    cache: false,
});
```

This endpoint returns a JSON array of menu objects, which are then used to populate an accordion-style menu on the page. Each item contains properties like `parent_display_name` (the category) and `display_name` (the actual clickable item).

The accordion menu is populated with various categories and their specific options. The **Academic** module includes the following main menus:

- **Award and Prize (UG)**
- **Examination TimeTable**
  - Complete Examination Instructions for Students
  - Very Important Exam Instructions for Students
  - Central Examination TimeTable
  - Departmental Examination Timetable
  - Examination Time Table (for Students)
- **Feedback**
- **Fees**
  - Application For Fee Payment Certificate
  - Family Income Declaration
  - Fee Demand and Payment
- **Final Graduation Processing**
- **Library**
- **Mediclaim**
- **PG**
- **Results Review(UG)**
- **Scholarship**
- **Student Representative Nomination**
- **Students**
  - Application for Creche
  - Application for Financial Assistance for Conferences
  - Application for Interim Grade card and Various Certificate
  - Application for Late Registration / Provisional Registration (Deferred Fee Payment) / Extra Credit Registration (UG) / Promotion Academic year (UG)
  - Application for Uploading the Student Information
  - Application for permission to attend CONFERENCES/WORKSHOPS/SEMINARS without financial assitance from Institute
  - Exercise Extra Academic Activity Choices
  - Medical Leave
  - Micro Credit Registration
  - Upload GATE Score
  - Upload Supporting Documents (New Admission)
  - Your Academic Information
- **Subjects**
  - Minor Curricula (New Curricula - 2020 Curricula)
  - Curriculum Syllabus Details ( New - Curricula )
  - Curriculum Syllabus Details UG (2024 Onwards)
  - Breadth List For current Semester
  - Curriculum Syllabus Details (Old Curricula)
- **Time Table**
  - Central TimeTable 2025-2026 AUTUMN
  - Central TimeTable 2025-2026 SPRING (Please allow pop-ups)
  - My Time Table(Student)
  - Subject List With TimeTable Slots
  - Summer Quarter Time Table
  - TimeTable(DepartmentWise)
- **UG**
  - Application for Double Major
  - Apply For Micro
  - Apply For Minor
  - Branch Change
  - Breadth Choice Status
  - Complete Academic PreRegistration
  - Exercise Choice for Vertical (1st year QEDM Students).
  - Register for Convocation
  - Registration For Current Session
  - Registration for Minor Course
  - SAIP /SAPP Application
  - SAIP Course Completion Plan
  - Subject Registration (2020 batch onwards - Except 2nd Year (M.Sc. 2yr,M.Sc. 3yr)/3rd year (M.Sc. 3yr)
  - Summer Quarter for Current Session
  - Supplementary Registration for Current Session
  - Switch Over (InterDisciplinary)
  - SwitchOver To Petroleum Engineering
  - SwitchOver(Btech to Dual Degree)
  - Update and Print Student Profile
  - Upload SAIP Forms (Step-2)
  - Upload SAPP Forms (Step-2)

When a user clicks on one of these dynamically generated sub-menus, it invokes a JavaScript function `showMenu()` which eventually calls `forwardToShowmenu()`.

---

## 3. Content Display (`showmenu.htm`)
The `forwardToShowmenu()` function generates a hidden HTML `<form>` on the fly and performs a POST submission to `showmenu.htm`. It passes the following parameters:

- `module_id` (e.g., 16 for Academic)
- `menu_id` (The specific ID for the clicked menu)
- `link` (The target endpoint/file to fetch for content)
- `delegated_by`
- `module_name`, `parent_display_name`, `display_name`

The `showmenu.htm` page then acts as a wrapper that loads and displays the content associated with that specific `link`.
