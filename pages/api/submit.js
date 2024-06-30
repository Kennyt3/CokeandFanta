export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, telephone } = req.body
    console.log(email)

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycby4mFkq4S0CibuNzNaImwR7cH85g3cVcMEWI35V4rDpsHOcMOu7jmU1FSR81OQ5cDRo/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, telephone }),
      }
    )
    const data = await response.json()
    return res.status(200).send({ firstName, lastName })

    // return res.status(200).json(data)
  } else {
    // res.setHeader('Allow', ['POST'])
    // res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

//  const sheets = SpreadsheetApp.openByUrl(
//    'https://docs.google.com/spreadsheets/d/1si6mnUWRCbeX6_NFRJ3L6pXHJSDe0KAMLurJcuMoL-c/edit?gid=0#gid=0'
//  )
//  //if you have changed your sheet name then replace the below Sheet1 with your sheet name
//  const sheet = sheets.getSheetByName('Page1')
//  function doPost(e) {
//    let data = e.parameter
//    sheet.appendRow([data.Name, data.Last, data.Email, data.Phone])
//    return ContentService.createTextOutput('Not really')
//  }
