import { useState } from 'react'
import './index.css'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import Results from './components/Results'

function App() {
  const [screen, setScreen] = useState('intro') // intro, quiz, results
  const [results, setResults] = useState(null)

  const handleStartQuiz = () => {
    setScreen('quiz')
  }

  const handleQuizComplete = (quizResults) => {
    setResults(quizResults)
    setScreen('results')
  }

  return (
    <>
      {screen === 'intro' && (
        <Intro onStart={handleStartQuiz} />
      )}
      {screen === 'quiz' && (
        <Quiz onComplete={handleQuizComplete} />
      )}
      {screen === 'results' && results && (
        <Results results={results} />
      )}
    </>
  )
}

export default App
