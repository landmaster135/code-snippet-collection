// SpreadsheetApp ------------------------------------------------------------

// Add custom menu
const onOpen = () => {
  SpreadsheetApp
    .getActiveSpreadsheet()
    .addMenu('Menu name', [
      {name: 'sub menu name 1', functionName: 'functionName1'},
      {name: 'sub menu name 2', functionName: 'functionName2'},
    ])
}

// onEdit trigger
const onEdit = e => {
  const { range, oldValue, value } = e
}

// onSelectionChange trigger
const onSelectionChange = e => {
  const { range, user } = e
}

// CalendarApp ------------------------------------------------------------

// Create event
CalendarApp.getDefaultCalendar().createEvent(title, start, end)

// Get events
const events = CalendarApp
  .getDefaultCalendar()
  .getEvents(start, end)
  .map(event => ({
    title: event.getTitle(),
    description: event.getDescription(),
    start: event.getStartTime(),
    end: event.getEndTime()
  }))

// Access to not default calendar
const calendar = CalendarApp.getCalendarById('Calendar ID')

// DriveApp ------------------------------------------------------------

const folder = DriveApp.getFolderById('Folder ID')
const files = folder.getFiles()
while (files.hasNext()) {
  let file = files.next()
  console.log('file: ', file.getName())
}
const folders = folder.getFolders()
while (folders.hasNext()) {
  let folder = folders.next()
  console.log('folder: ', folder.getName())
}

// Google Form ------------------------------------------------------------

// Get input values
const onSubmit = event => {
  const answer = event.response
    .getItemResponses()
    .map(itemResponse => ({
      item: itemResponse.getItem().getTitle(),
      response: itemResponse.getResponse()
    }))
}

// Utilities ------------------------------------------------------------

// Format date
const date = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'YYYY-MM-dd HH:mm:ss')

// sleep
Utilities.sleep(1000)

// Generate UUID
const uuid = Utilities.getUuid()


// Trigger ------------------------------------------------------------

// Execute a function after 1 minute
// Google Apps Script has a limitation of script runtime. If you want the script to work more than the limit, you can schedule the next execution in advance.
const date = new Date()
date.setMinutes(date.getMinutes() + 1);// after 1 min
ScriptApp.newTrigger('functionName').timeBased().at(date).create();

// PropertiesService ------------------------------------------------------------

// Get property
const value = PropertiesService.getScriptProperties().getProperty(key)

// Set property
PropertiesService.getScriptProperties().setProperty(key, value)

// LanguageApp ------------------------------------------------------------

// translation
const text = LanguageApp.translate('Hello World', 'en', 'ja')

// Web Apps ------------------------------------------------------------

// Website ( no HTML template )
const doGet = e => {
  const params = JSON.stringify(e.parameter)
  return HtmlService.createHtmlOutput(params)
}

// Website ( with HTML template )
// You need to create index.html file.
const doGet = e => {
  return HtmlService.createHtmlOutputFromFile('index')
}


// GET API
// You can get query string with accessing e.parameter.

const doGet = e => {
  const params = JSON.stringify(e.parameter)
  return ContentService
    .createTextOutput(params)
    .setMimeType(MimeType.JSON)
}

// POST API
// You can get request body with accessing e.postData.contents.

const doPost = e =>  {
  const body = e.postData.contents
  return ContentService
    .createTextOutput(body)
    .setMimeType(ContentService.MimeType.JSON)
}

// UrlFetchApp ------------------------------------------------------------

// GET API request
const content = UrlFetchApp.fetch(url).getContentText()

// POST API request
const res = UrlFetchApp.fetch(url, {
  method: 'POST',
  headers: { "Content-Type": 'application/json' },
  payload: JSON.stringify(data)
})



