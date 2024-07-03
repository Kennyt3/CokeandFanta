const sheets = SpreadsheetApp.openByUrl(
  'https://docs.google.com/spreadsheets/d/1EKPGntYgAm-k0XdsFzutt3QRvTxg3kodMMtmYnjYH1U/edit?gid=0#gid=0'
)
//if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName('Page1')
function doPost(e) {
  let data = e
  sheet.appendRow([data.Name, data.Last, data.Email, data.Phone])
  if (!e) {
    ContentService.createTextOutput(
      JSON.stringify({ status: 'No data received' })
    )
  }
  try {
    let data = JSON.parse(e.postData.contents)
    sheet.appendRow([data.Name, data.Last, data.Email, data.Phone])
    return ContentService.createTextOutput(
      JSON.stringify({ status: JSON.parse(e.postData.contents) })
    )
  } catch (error) {
    Logger.log(error)
    return ContentService.createTextOutput(JSON.stringify({ status: 'error' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'POST')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type')
  }
}

// 9067760016
