import React from 'react'

export default function Timer({mode, time}) {
  return (
    <div className="Timer">
      <h1 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h1>
      <h1 id="time-left">{time}</h1>
    </div>
  )
}
