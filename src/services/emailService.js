// Email service for sending the seasonal food guide
// This connects to your backend API

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function sendFoodGuide({ email, constitutionName, constitutionId, saveResults }) {
  try {
    const response = await fetch(`${API_URL}/api/send-guide`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        constitutionName,
        constitutionId,
        saveResults,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to send email')
    }

    return await response.json()
  } catch (error) {
    console.error('Email service error:', error)
    throw error
  }
}

// For development/demo: simulate email sending
export async function sendFoodGuideDemo({ email, constitutionName, constitutionId, saveResults }) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Log what would be sent
  console.log('📧 Email would be sent to:', email)
  console.log('📋 Constitution:', constitutionName)
  console.log('💾 Save results:', saveResults)
  console.log('📎 Attachment: tcm_seasonal_food_guide.pdf')

  // In demo mode, open the PDF in a new tab so user can download it
  window.open('/tcm_seasonal_food_guide.pdf', '_blank')

  return { success: true, demo: true }
}
