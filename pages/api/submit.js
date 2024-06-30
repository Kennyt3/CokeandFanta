export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { Name, Last, Email, Phone } = req.body

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzOi3Jgb0x18bsge8n69UEGuPVfttSLWMwYvUwLe6lv0Mu-stWfw4ASXmbkmCXjGgiq/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ Name, Last, Email, Phone }),
        }
      )

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const data = await response.json()
      return res.status(200).json(data)
    } catch (error) {
      console.error('Error:', error)
      res.status(500).json({ error: error.message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
