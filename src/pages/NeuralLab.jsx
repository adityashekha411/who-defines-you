
import { useState } from 'react'

function NeuralLab() {
  const [selectedField, setSelectedField] = useState(null)

  return (
    <main className="lab-page">
      <p className="eyebrow">LAB 01 / THE BRAIN</p>

      <h1>
        TWO HALVES.
        <br />
        <span>ONE MIND?</span>
      </h1>

      <p className="lab-intro">
        What happens when the two halves of your brain
        can no longer communicate with each other?
      </p>

      {/* THE DIVIDED BRAIN */}
      <section className="lab-content">
        <h2>The Divided Brain</h2>

        <p>
          Your brain has two hemispheres connected by a
          thick bundle of nerve fibres called the corpus
          callosum.
        </p>

        <p>
          What happens when this connection is severed?
          Scientists have studied this question through
          split-brain research.
        </p>

        <div className="hayavadana-connection">
          <p className="eyebrow">THE HAYAVADANA CONNECTION</p>
          <h3>Does the head define the person?</h3>

          <p>
            In Hayavadana, Devadatta and Kapila exchange heads,
            creating a question about whether identity belongs
            to the mind, the body, or both.
          </p>

          <p>
            Split-brain research explores a different question:
            what happens when communication between the two
            hemispheres is disrupted? Together, they invite us
            to question what makes a person whole.
          </p>
        </div>
      </section>

      {/* PATIENT W.J. */}
      <section className="lab-content">
        <h2>The Case of Patient W.J.</h2>

        <p>
          W.J. was one of the pioneering patients studied
          in split-brain research. His case helped
          scientists understand how the two hemispheres
          process information.
        </p>
      </section>

      {/* REFLECTION */}
      <section className="lab-content">
        <h2>Think About It</h2>

        <p>
          If the two halves of your brain process
          information differently, what does that tell us
          about the idea of a single, unified identity?
        </p>
      </section>

      {/* INTERACTIVE EXPERIMENT */}
      <section className="lab-content">
        <p className="eyebrow">INTERACTIVE EXPERIMENT / 01</p>
        <h2>The Split-Brain Simulator</h2>

        <p>
          Imagine an object appearing briefly in one side
          of a split-brain participant's visual field.
          Explore which hemisphere receives the information.
        </p>

        <div className="simulator-panel">
          <h3>Choose a visual field</h3>
          <p>Select where the stimulus will appear.</p>

          <div className="simulator-buttons">
            <button
              type="button"
              aria-pressed={selectedField === 'left'}
              onClick={() => setSelectedField('left')}
            >
              LEFT VISUAL FIELD
            </button>

            <button
              type="button"
              aria-pressed={selectedField === 'right'}
              onClick={() => setSelectedField('right')}
            >
              RIGHT VISUAL FIELD
            </button>
          </div>

          {/* VISUAL FIELD DISPLAY */}
          <div className="visual-field-display">
            <div
              className={`visual-field left-field ${
                selectedField === 'left' ? 'selected' : ''
              }`}
            >
              <span className="field-label">
                LEFT VISUAL FIELD
              </span>

              {selectedField === 'left' && (
                <span className="field-object">🔑</span>
              )}
            </div>

            <div
              className={`visual-field right-field ${
                selectedField === 'right' ? 'selected' : ''
              }`}
            >
              <span className="field-label">
                RIGHT VISUAL FIELD
              </span>

              {selectedField === 'right' && (
                <span className="field-object">🍎</span>
              )}
            </div>
          </div>

          {/* EYES */}
          <svg
            viewBox="0 0 520 130"
            className="eye-svg"
            role="img"
            aria-label="Illustration of both eyes"
          >
            <g
              fill="#211831"
              stroke="#c69fff"
              strokeWidth="4"
            >
              <path d="M65 65 Q130 5 195 65 Q130 125 65 65Z" />
              <path d="M325 65 Q390 5 455 65 Q390 125 325 65Z" />
            </g>

            <g fill="#a978ff">
              <circle cx="130" cy="65" r="20" />
              <circle cx="390" cy="65" r="20" />
            </g>

            <g fill="white">
              <circle cx="130" cy="65" r="8" />
              <circle cx="390" cy="65" r="8" />
            </g>

            <g
              fill="#c69fff"
              fontSize="12"
              textAnchor="middle"
            >
              <text x="130" y="120">LEFT EYE</text>
              <text x="390" y="120">RIGHT EYE</text>
            </g>
          </svg>

          {/* CROSSING VISUAL PATHWAYS */}
          <svg
            viewBox="0 0 520 115"
            className="pathway-svg"
            role="img"
            aria-label="Simplified crossing visual pathways"
          >
            <path
              d="M130 0 C130 45 270 45 390 115"
              className={`neural-path ${
                selectedField === 'left' ? 'path-active' : ''
              }`}
            />

            <path
              d="M390 0 C390 45 250 45 130 115"
              className={`neural-path ${
                selectedField === 'right' ? 'path-active' : ''
              }`}
            />

            <circle
              cx="260"
              cy="48"
              r="5"
              className="optic-chiasm"
            />
          </svg>

          <p className="pathway-label">
            OPTIC CHIASM · CROSSING OF VISUAL PATHWAYS
          </p>

          {/* BRAIN ILLUSTRATION */}
          <svg
            viewBox="0 0 520 340"
            className="brain-svg"
            role="img"
            aria-label="Illustration of the left and right brain hemispheres"
          >
            <defs>
              <linearGradient
                id="brainFill"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#7043a8" />
                <stop offset="100%" stopColor="#211831" />
              </linearGradient>
            </defs>

            {/* LEFT HEMISPHERE */}
            <g
              className={
                selectedField === 'right'
                  ? 'brain-side active'
                  : 'brain-side'
              }
            >
              <path
                d="M256 70 C230 35 180 30 145 48 C105 35 65 65 68 105 C35 120 35 165 55 185 C35 220 65 255 95 255 C105 295 155 310 190 285 C220 305 255 270 256 235 Z"
                fill="url(#brainFill)"
                stroke="#a978ff"
                strokeWidth="3"
              />

              <path
                d="M230 85 C190 65 180 110 205 125 M140 55 C115 95 155 110 170 95 M70 145 C115 125 130 165 100 180 M90 225 C135 195 155 230 130 260 M180 285 C165 245 210 225 235 250 M145 135 C175 145 180 180 150 195 M190 165 C220 175 215 210 190 220"
                fill="none"
                stroke="#c69fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* RIGHT HEMISPHERE */}
            <g
              className={
                selectedField === 'left'
                  ? 'brain-side active'
                  : 'brain-side'
              }
            >
              <path
                d="M264 70 C290 35 340 30 375 48 C415 35 455 65 452 105 C485 120 485 165 465 185 C485 220 455 255 425 255 C415 295 365 310 330 285 C300 305 265 270 264 235 Z"
                fill="url(#brainFill)"
                stroke="#a978ff"
                strokeWidth="3"
              />

              <path
                d="M290 85 C330 65 340 110 315 125 M380 55 C405 95 365 110 350 95 M450 145 C405 125 390 165 420 180 M430 225 C385 195 365 230 390 260 M340 285 C355 245 310 225 285 250 M375 135 C345 145 340 180 370 195 M330 165 C300 175 305 210 330 220"
                fill="none"
                stroke="#c69fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* MIDLINE */}
            <path
              d="M260 78 C250 125 270 160 260 205 C250 240 270 265 260 280"
              fill="none"
              stroke="#e0c7ff"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          {/* BRAIN LABELS */}
          <div className="brain-labels">
            <span>LEFT HEMISPHERE</span>
            <span>RIGHT HEMISPHERE</span>
          </div>

          {/* EXPERIMENT RESULT */}
          {selectedField !== null && (
            <div className="hayavadana-connection">
              <p className="eyebrow">EXPERIMENT RESULT</p>

              {selectedField === 'left' ? (
                <>
                  <h3>Right Hemisphere Activated</h3>

                  <p>
                    The left visual field sends information
                    primarily to the right hemisphere. In this
                    simplified model, the participant may not
                    be able to verbally name the object, but
                    may identify it using their left hand.
                  </p>
                </>
              ) : (
                <>
                  <h3>Left Hemisphere Activated</h3>

                  <p>
                    The right visual field sends information
                    primarily to the left hemisphere. Assuming
                    typical left-hemisphere language dominance,
                    the participant can usually verbally
                    identify the object.
                  </p>
                </>
              )}
            </div>
          )}

          <p className="simulator-note">
            Educational model: actual split-brain responses
            can vary between individuals and experiments.
            Both eyes are involved in viewing both visual
            fields; this is not a left-eye versus right-eye test.
          </p>
        </div>
      </section>
    </main>
  )
}

export default NeuralLab
