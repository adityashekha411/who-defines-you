
import { useState } from 'react'

function KapilaIllustration() {
  return (
    <svg viewBox="0 0 300 330" className="kapila-art" role="img" aria-label="Original theatrical illustration representing Kapila">
      <defs>
        <linearGradient id="kapilaBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38245f" />
          <stop offset="100%" stopColor="#171126" />
        </linearGradient>
      </defs>
      <path d="M150 12 C245 12 290 85 285 175 C280 270 225 318 150 318 C75 318 20 270 15 175 C10 85 55 12 150 12Z" fill="url(#kapilaBg)" stroke="#9b72df" strokeWidth="2"/>
      <path d="M82 270 Q88 205 119 188 L181 188 Q212 205 218 270Z" fill="#b65c32" stroke="#e8a16e" strokeWidth="3"/>
      <path d="M112 192 L150 245 L188 192 L180 177 L120 177Z" fill="#e9a36c"/>
      <path d="M112 112 Q112 57 150 55 Q188 57 188 112 L181 166 Q170 190 150 190 Q130 190 119 166Z" fill="#a85e3e" stroke="#e8a16e" strokeWidth="3"/>
      <path d="M109 105 Q105 48 150 43 Q195 48 191 105 L176 85 Q151 102 122 83Z" fill="#201426" stroke="#d69a52" strokeWidth="4"/>
      <path d="M118 119 Q130 109 141 119 M159 119 Q171 109 182 119" fill="none" stroke="#2a1720" strokeWidth="5" strokeLinecap="round"/>
      <path d="M142 148 Q150 153 158 148" fill="none" stroke="#351a20" strokeWidth="3" strokeLinecap="round"/>
      <path d="M150 124 L145 143 L154 143" fill="none" stroke="#6d342c" strokeWidth="2"/>
      <path d="M119 166 Q150 180 181 166" fill="none" stroke="#e8a16e" strokeWidth="3"/>
      <path d="M88 222 L53 265 M212 222 L247 265" stroke="#e8a16e" strokeWidth="12" strokeLinecap="round"/>
      <path d="M116 203 L150 240 L184 203" fill="none" stroke="#f2c27c" strokeWidth="5"/>
      <circle cx="150" cy="25" r="7" fill="#e8b66b"/>
    </svg>
  )
}

export default function MirrorLab() {
  const [choice, setChoice] = useState('rubber')

  return (
    <main className="lab-page mirror-page">
      <section className="lab-hero">
        <p className="eyebrow">THE IDENTITY LAB · 02</p>
        <h1>The Mirror Lab</h1>
        <p className="lab-subtitle">
          If your body changes, does your identity change with it?
        </p>
      </section>

      <section className="lab-content">
        <div className="mirror-intro">
          <div>
            <h2>Who owns your body?</h2>
            <p>
              We usually experience our body as an unquestionable part of
              ourselves. But the brain constructs our sense of body ownership
              by combining signals from vision, touch and movement.
            </p>
            <p>
              When these signals disagree, our sense of what belongs to us
              can change in surprisingly powerful ways.
            </p>
          </div>
          <div className="mirror-symbol" aria-hidden="true">◈</div>
        </div>

        <div className="mirror-section">
          <span className="section-kicker">01 · THE EXPERIMENT</span>
          <h2>The Rubber Hand Illusion</h2>
          <p>
            In this famous experiment, a participant's real hand is hidden
            while a realistic rubber hand is placed in view. When both hands
            are stroked at the same time, some participants begin to feel
            that the rubber hand belongs to them.
          </p>

          <div className="illusion-panel">
            <div className="illusion-hand">
              <span className="hand-emoji">🖐️</span>
              <span>Visible rubber hand</span>
            </div>
            <div className="illusion-hand hidden-hand">
              <span className="hand-emoji">✋</span>
              <span>Hidden real hand</span>
            </div>
            <div className="illusion-caption">
              Synchronous touch can influence the brain's sense of ownership.
            </div>
          </div>
        </div>

        <div className="mirror-section">
          <span className="section-kicker">02 · INTERACTIVE THOUGHT EXPERIMENT</span>
          <h2>Which hand feels like yours?</h2>
          <p>
            Imagine watching a rubber hand being touched while your own hand
            is hidden. Choose what happens next:
          </p>

          <div className="ownership-demo">
            <div className="ownership-buttons">
              <button
                className={choice === 'rubber' ? 'active' : ''}
                onClick={() => setChoice('rubber')}
              >
                Touches happen together
              </button>
              <button
                className={choice === 'separate' ? 'active' : ''}
                onClick={() => setChoice('separate')}
              >
                Touches happen separately
              </button>
            </div>
            <div className="ownership-result">
              {choice === 'rubber' ? (
                <>
                  <span className="result-symbol">🧠</span>
                  <h3>Your brain may be fooled</h3>
                  <p>
                    Synchronized visual and tactile signals can make the
                    rubber hand feel as though it belongs to you.
                  </p>
                </>
              ) : (
                <>
                  <span className="result-symbol">🖐️</span>
                  <h3>The illusion becomes weaker</h3>
                  <p>
                    When the visual and touch signals do not match in time,
                    the sense of ownership is usually less convincing.
                  </p>
                </>
              )}
            </div>
            <p className="experiment-note">
              This is a simplified thought experiment, not a clinical test.
              Responses vary between people.
            </p>
          </div>
        </div>

        <div className="mirror-section">
          <span className="section-kicker">03 · WHEN THE BODY FEELS DIFFERENT</span>
          <h2>The Phantom Limb</h2>
          <p>
            Some people who have lost a limb continue to feel sensations
            coming from it. This is known as phantom limb sensation.
            The experience shows that our perception of the body is shaped
            by the brain, not simply by the body's physical boundaries.
          </p>
          <div className="phantom-card">
            <div className="phantom-visual" aria-hidden="true">
              <span>◌</span>
              <span className="phantom-line"></span>
              <span>✦</span>
            </div>
            <div>
              <h3>A body map in the brain</h3>
              <p>
                The brain maintains internal representations of the body.
                These representations can continue to produce sensations
                even after a limb has been lost.
              </p>
            </div>
          </div>
        </div>

        <div className="hayavadana-connection mirror-hayavadana">
          <span className="section-kicker">04 · THE HAYAVADANA CONNECTION</span>
          <div className="kapila-layout">
            <div>
              <h2>Kapila: Is the body part of who we are?</h2>
              <p>
                In Girish Karnad's <em>Hayavadana</em>, Devadatta and Kapila
                exchange heads and bodies. The resulting dilemma challenges
                the idea that identity can be determined by appearance or
                physical form alone.
              </p>
              <p>
                Kapila's story invites us to ask: if the body changes, what
                remains of the person we believe ourselves to be?
              </p>
            </div>
            <div className="kapila-portrait">
              <KapilaIllustration />
              <span>THE BODY · KAPILA</span>
            </div>
          </div>
        </div>

        <div className="mirror-question">
          <span className="section-kicker">THINK ABOUT IT</span>
          <h2>If your body is not exactly what you think it is, what makes it yours?</h2>
          <p>
            Is identity rooted in the body, the mind, memory, or the
            relationship between all of them?
          </p>
        </div>
      </section>
    </main>
  )
}
