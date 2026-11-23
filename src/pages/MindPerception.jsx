
import { useState } from 'react'

function PadminiIllustration() {
  return (
    <svg viewBox="0 0 300 340" className="padmini-art" role="img" aria-label="Original theatrical illustration representing Padmini">
      <defs>
        <linearGradient id="padminiBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#51264f" />
          <stop offset="100%" stopColor="#1c142c" />
        </linearGradient>
      </defs>
      <path d="M150 12 C240 12 285 82 285 175 C285 274 228 325 150 325 C72 325 15 274 15 175 C15 82 60 12 150 12Z" fill="url(#padminiBg)" stroke="#d18ac7" strokeWidth="2"/>
      <path d="M65 295 Q70 215 112 195 L188 195 Q230 215 235 295Z" fill="#a34470" stroke="#e7a1c7" strokeWidth="3"/>
      <path d="M110 190 L150 246 L190 190 L180 173 L120 173Z" fill="#e5a17d"/>
      <path d="M102 112 Q102 49 150 48 Q198 49 198 112 L190 173 Q175 197 150 197 Q125 197 110 173Z" fill="#b87558" stroke="#edb18c" strokeWidth="3"/>
      <path d="M100 116 Q91 49 150 35 Q209 49 200 116 L188 83 Q166 102 150 96 Q126 101 112 83Z" fill="#211421" stroke="#e2b16e" strokeWidth="4"/>
      <path d="M108 119 Q122 108 137 119 M163 119 Q178 108 192 119" fill="none" stroke="#321923" strokeWidth="4" strokeLinecap="round"/>
      <path d="M145 128 L140 148 L151 148" fill="none" stroke="#81453d" strokeWidth="2"/>
      <path d="M138 163 Q150 171 162 163" fill="none" stroke="#6c293f" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="150" cy="22" r="8" fill="#e8bd78"/>
      <path d="M104 178 Q150 205 196 178" fill="none" stroke="#e7b17c" strokeWidth="4"/>
      <path d="M110 206 L150 265 L190 206" fill="none" stroke="#f0c28a" strokeWidth="5"/>
      <circle cx="112" cy="137" r="4" fill="#eac17e"/>
      <circle cx="188" cy="137" r="4" fill="#eac17e"/>
      <path d="M78 235 L49 275 M222 235 L251 275" stroke="#e7b17c" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  )
}

export default function MindPerception() {
  const [decision, setDecision] = useState('')

  return (
    <main className="lab-page mind-page">
      <section className="lab-hero">
        <p className="eyebrow">THE IDENTITY LAB · 03</p>
        <h1>Mind & Perception</h1>
        <p className="lab-subtitle">
          Are you the person you remember, or the person you choose to be?
        </p>
      </section>

      <section className="lab-content">
        <div className="mind-intro">
          <div>
            <h2>The mind behind the mirror</h2>
            <p>
              Our identity is shaped by memories, beliefs, emotions and
              decisions. Yet our minds do not simply record the world.
              They interpret it, sometimes filling gaps and changing how
              we understand our experiences.
            </p>
          </div>
          <div className="mind-symbol" aria-hidden="true">◉</div>
        </div>

        <div className="mind-section">
          <span className="section-kicker">01 · MEMORY & IDENTITY</span>
          <h2>Are you the same person you were yesterday?</h2>
          <p>
            Memory helps us connect our past experiences to our present
            sense of self. But memories are not perfect recordings.
            They can be incomplete, reconstructed and influenced by
            our emotions and later experiences.
          </p>
          <div className="memory-panel">
            <div className="memory-node">
              <span>01</span>
              <strong>Experience</strong>
              <p>Something happens to us.</p>
            </div>
            <div className="memory-arrow">→</div>
            <div className="memory-node">
              <span>02</span>
              <strong>Memory</strong>
              <p>The experience is remembered.</p>
            </div>
            <div className="memory-arrow">→</div>
            <div className="memory-node">
              <span>03</span>
              <strong>Identity</strong>
              <p>It becomes part of our life story.</p>
            </div>
          </div>
        </div>

        <div className="mind-section">
          <span className="section-kicker">02 · THE SCIENCE OF PERCEPTION</span>
          <h2>Can you trust what you see?</h2>
          <p>
            Perception is the process through which the brain interprets
            sensory information. Context, expectations and attention can
            influence what we think we see.
          </p>
          <div className="perception-panel">
            <div className="illusion-art" aria-label="Optical illusion made of concentric circles">
              <div className="illusion-ring ring-one">
                <div className="illusion-ring ring-two">
                  <div className="illusion-ring ring-three">
                    <div className="illusion-center"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Look closely</h3>
              <p>
                The circles are stationary, even if the pattern appears
                to move. Repeating shapes and visual contrast can trick
                our perception of motion.
              </p>
              <p className="experiment-note">
                This is a visual demonstration of how perception can
                differ from physical reality.
              </p>
            </div>
          </div>
        </div>

        <div className="mind-section">
          <span className="section-kicker">03 · FREE WILL & DECISIONS</span>
          <h2>How much control do we have?</h2>
          <p>
            We experience ourselves as making choices, but decisions
            are influenced by memories, emotions, surroundings and
            unconscious processes. Understanding these influences
            raises questions about the nature of free will.
          </p>
          <div className="decision-panel">
            <h3>A small thought experiment</h3>
            <p>
              Imagine you have an important decision to make. What
              would influence you the most?
            </p>
            <div className="decision-options">
              {[
                ['reason', 'Logic and reasoning'],
                ['emotion', 'Feelings and emotions'],
                ['experience', 'Past experiences'],
                ['society', 'Expectations of others']
              ].map(([value, label]) => (
                <button
                  key={value}
                  className={decision === value ? 'selected' : ''}
                  onClick={() => setDecision(value)}
                  aria-pressed={decision === value}
                >
                  {label}
                </button>
              ))}
            </div>
            {decision && (
              <div className="decision-result">
                <h3>Your choice: {
                  {
                    reason: 'Logic and reasoning',
                    emotion: 'Feelings and emotions',
                    experience: 'Past experiences',
                    society: 'Expectations of others'
                  }[decision]
                }</h3>
                <p>
                  This is one influence on decision-making. In real life,
                  our choices often emerge from several influences
                  working together.
                </p>
              </div>
            )}
            <p className="experiment-note">
              There is no right or wrong answer. This activity is a
              reflection, not a psychological assessment.
            </p>
          </div>
        </div>

        <div className="mind-hayavadana">
          <span className="section-kicker">04 · THE HAYAVADANA CONNECTION</span>
          <div className="padmini-layout">
            <div>
              <h2>Padmini: Desire, choice and identity</h2>
              <p>
                In Girish Karnad's <em>Hayavadana</em>, Padmini's
                relationship with Devadatta and Kapila challenges
                conventional ideas about love, desire and identity.
              </p>
              <p>
                Her choices are central to the conflict. Rather than
                treating her as merely a prize in the men's rivalry,
                we can examine her desires, agency and the social
                expectations surrounding her.
              </p>
              <p>
                Her story raises a difficult question: how much of
                our identity is shaped by our own choices, and how
                much by the expectations of others?
              </p>
            </div>
            <div className="padmini-portrait">
              <PadminiIllustration />
              <span>DESIRE · AGENCY · PADMINI</span>
            </div>
          </div>
        </div>

        <div className="mind-question">
          <span className="section-kicker">THINK ABOUT IT</span>
          <h2>If your memories, perceptions and choices shape who you are, which one defines you most?</h2>
          <p>
            Perhaps identity is not a fixed answer, but an ongoing process
            of becoming.
          </p>
        </div>
      </section>
    </main>
  )
}
