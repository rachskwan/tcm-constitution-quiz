import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

// Initialize Resend with your API key
// Get your API key at https://resend.com
const resend = new Resend(process.env.RESEND_API_KEY || 'your-api-key-here')

// Store emails (in production, use a database)
const emailSubscribers = []

app.post('/api/send-guide', async (req, res) => {
  const { email, constitutionName, constitutionId, saveResults } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    // Read the PDF file
    const pdfPath = path.join(__dirname, '../public/tcm_seasonal_food_guide.pdf')
    const pdfBuffer = fs.readFileSync(pdfPath)
    const pdfBase64 = pdfBuffer.toString('base64')

    // Send email with PDF attachment
    const { data, error } = await resend.emails.send({
      from: 'TCM Constitution <noreply@yourdomain.com>',
      to: email,
      subject: `Your Personalized ${constitutionName} Seasonal Food Guide`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2C3E50; margin-bottom: 10px;">Your Seasonal Food Guide</h1>
            <p style="color: #8B4513; font-style: italic;">"Food and medicine share the same source"</p>
          </div>

          <p style="color: #2C3E50; line-height: 1.6;">
            Thank you for completing the TCM Body Constitution Assessment!
          </p>

          <p style="color: #2C3E50; line-height: 1.6;">
            Based on your responses, your primary constitution type is <strong style="color: #8B4513;">${constitutionName}</strong>.
          </p>

          <p style="color: #2C3E50; line-height: 1.6;">
            Attached to this email is your personalized Seasonal Food Guide. This comprehensive guide includes:
          </p>

          <ul style="color: #2C3E50; line-height: 1.8;">
            <li>Foods to emphasize and minimize for each season</li>
            <li>Seasonal recipes tailored to your constitution</li>
            <li>TCM food temperature properties explained</li>
            <li>General guidelines for eating according to your body type</li>
          </ul>

          <div style="background-color: #F7F6F4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #87A96B; margin-top: 0;">Seasonal Reminder</h3>
            <p style="color: #2C3E50; margin-bottom: 0;">
              We recommend retaking the assessment when seasons change to get updated recommendations
              as your body's needs shift throughout the year.
            </p>
          </div>

          <p style="color: #2C3E50; line-height: 1.6;">
            Questions? Reply to this email and we'll be happy to help.
          </p>

          <p style="color: #2C3E50; line-height: 1.6;">
            To your health,<br>
            <strong>The TCM Constitution Team</strong>
          </p>

          <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 30px 0;">

          <p style="color: #999; font-size: 12px; text-align: center;">
            You're receiving this email because you completed the TCM Body Constitution Assessment.
            <br>
            <a href="#" style="color: #8B4513;">Unsubscribe</a>
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `TCM_Seasonal_Food_Guide_${constitutionName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBase64,
        },
      ],
    })

    if (error) {
      console.error('Email error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    // Store subscriber info
    emailSubscribers.push({
      email,
      constitutionId,
      constitutionName,
      saveResults,
      subscribedAt: new Date().toISOString()
    })

    console.log('Email sent successfully:', data)
    res.json({ success: true, message: 'Email sent successfully' })

  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ error: 'Server error' })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
