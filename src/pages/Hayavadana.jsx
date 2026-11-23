
function StoryIllustration({ scene }) {
  const person = (x, y, color, hair = "#24172f") => (
    <g>
      <path
        d={`M${x - 24} ${y + 70} Q${x - 22} ${y + 35} ${x} ${y + 32} Q${x + 22} ${y + 35} ${x + 24} ${y + 70}Z`}
        fill={color}
        stroke="#e9b7e4"
        strokeWidth="2"
      />
      <ellipse
        cx={x}
        cy={y}
        rx="19"
        ry="24"
        fill="#b87558"
        stroke="#f0c987"
        strokeWidth="2"
      />
      <path
        d={`M${x - 19} ${y - 5} Q${x - 20} ${y - 32} ${x} ${y - 27} Q${x + 22} ${y - 31} ${x + 19} ${y - 4} Q${x + 5} ${y - 19} ${x - 19} ${y - 5}`}
        fill={hair}
      />
      <path
        d={`M${x - 8} ${y + 5} Q${x} ${y + 1} ${x + 8} ${y + 5}`}
        fill="none"
        stroke="#482b32"
        strokeWidth="2"
      />
    </g>
  )

  if (scene === "friends") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="Devadatta and Kapila standing together">
        <circle cx="150" cy="82" r="70" fill="#38245f" />
        {person(105, 65, "#5b347f")}
        {person(195, 65, "#b65c32", "#201426")}
        <path d="M145 90 L155 90" stroke="#f0c987" strokeWidth="3" />
        <path d="M150 82 L150 98" stroke="#f0c987" strokeWidth="2" />
      </svg>
    )
  }

  if (scene === "padmini") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="Padmini standing between two paths">
        <circle cx="150" cy="82" r="70" fill="#51264f" />
        {person(150, 60, "#a34470", "#211421")}
        <path
          d="M150 133 L85 158 M150 133 L215 158"
          fill="none"
          stroke="#c49af4"
          strokeWidth="3"
          strokeDasharray="5 6"
        />
        <circle cx="85" cy="158" r="5" fill="#c49af4" />
        <circle cx="215" cy="158" r="5" fill="#c49af4" />
      </svg>
    )
  }

  if (scene === "temple") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="A temple representing the tragic turning point">
        <circle cx="150" cy="85" r="72" fill="#38245f" />
        <path d="M65 95 L150 30 L235 95Z" fill="#a85e3e" stroke="#f0c987" strokeWidth="3" />
        <path d="M80 95 H220 V148 H80Z" fill="#5b347f" stroke="#f0c987" strokeWidth="3" />
        <path d="M115 148 V108 Q150 75 185 108 V148" fill="#21172f" stroke="#f0c987" strokeWidth="3" />
        <path d="M150 30 V15 M139 20 H161" stroke="#f0c987" strokeWidth="3" />
        <circle cx="150" cy="82" r="7" fill="#e8b66b" />
      </svg>
    )
  }

  if (scene === "exchange") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="Two figures with exchanged heads">
        <circle cx="150" cy="85" r="72" fill="#38245f" />
        {person(105, 65, "#b65c32", "#211426")}
        {person(195, 65, "#5b347f", "#211426")}
        <path
          d="M133 65 H167 M158 57 L168 65 L158 73"
          fill="none"
          stroke="#f0c987"
          strokeWidth="3"
        />
        <path
          d="M150 25 V10 M142 18 L150 10 L158 18"
          fill="none"
          stroke="#c49af4"
          strokeWidth="3"
        />
      </svg>
    )
  }

  if (scene === "aftermath") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="Two figures facing an uncertain future">
        <circle cx="150" cy="85" r="72" fill="#38245f" />
        {person(105, 65, "#5b347f")}
        {person(195, 65, "#b65c32")}
        <path
          d="M150 25 L150 145"
          stroke="#c49af4"
          strokeWidth="2"
          strokeDasharray="5 6"
        />
        <text x="150" y="165" fill="#f0c987" textAnchor="middle" fontSize="11">
          WHO AM I?
        </text>
      </svg>
    )
  }

  if (scene === "horseman") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="Hayavadana with a horse's head and a human body">
        <circle cx="150" cy="85" r="72" fill="#38245f" />
        <path
          d="M110 142 Q110 95 150 94 Q190 95 190 142Z"
          fill="#5b347f"
          stroke="#e9b7e4"
          strokeWidth="3"
        />
        <path
          d="M124 72 Q115 40 124 22 L145 43 L164 21 Q181 43 174 74 Q166 92 150 94 Q132 91 124 72Z"
          fill="#9a6845"
          stroke="#f0c987"
          strokeWidth="3"
        />
        <path
          d="M125 42 L110 13 L141 35 M165 35 L191 13 L175 49"
          fill="#9a6845"
          stroke="#f0c987"
          strokeWidth="3"
        />
        <circle cx="137" cy="61" r="3" fill="#211426" />
        <circle cx="162" cy="61" r="3" fill="#211426" />
        <path
          d="M139 78 Q150 84 161 78"
          fill="none"
          stroke="#482b32"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (scene === "journey") {
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label="Hayavadana travelling in search of completeness">
        <circle cx="150" cy="85" r="72" fill="#38245f" />
        <path
          d="M55 135 Q110 105 150 135 Q205 105 245 135"
          fill="none"
          stroke="#c49af4"
          strokeWidth="3"
        />
        <path
          d="M65 65 L95 38 L125 65 M175 65 L205 38 L235 65"
          fill="none"
          stroke="#e8b66b"
          strokeWidth="3"
        />
        <path
          d="M130 115 Q130 85 155 85 Q180 85 180 115"
          fill="none"
          stroke="#f0c987"
          strokeWidth="3"
        />
        <path
          d="M145 84 L137 63 L157 73 L169 54 L171 85"
          fill="#9a6845"
          stroke="#f0c987"
          strokeWidth="3"
        />
        <path
          d="M105 150 Q150 130 195 150"
          fill="none"
          stroke="#e8b66b"
          strokeWidth="3"
          strokeDasharray="5 5"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 300 180" role="img" aria-label="A complete horse">
      <circle cx="150" cy="85" r="72" fill="#38245f" />
      <path
        d="M80 115 Q90 85 135 88 L175 95 Q198 100 205 120 L192 132 L105 132Z"
        fill="#9a6845"
        stroke="#f0c987"
        strokeWidth="3"
      />
      <path
        d="M168 96 Q177 62 195 52 L216 59 L205 89 L190 111"
        fill="#9a6845"
        stroke="#f0c987"
        strokeWidth="3"
      />
      <path
        d="M195 55 L190 35 L210 48 M210 58 L230 42 L222 68"
        fill="#9a6845"
        stroke="#f0c987"
        strokeWidth="3"
      />
      <path
        d="M108 128 L105 157 M135 130 L137 157 M183 127 L184 157"
        stroke="#f0c987"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M80 111 Q60 95 65 75"
        fill="none"
        stroke="#f0c987"
        strokeWidth="4"
      />
      <circle cx="204" cy="77" r="3" fill="#211426" />
    </svg>
  )
}

function StoryPanel({ number, title, caption, scene }) {
  return (
    <article className="hay-comic-panel">
      <span className="hay-panel-number">{number}</span>

      <div className="hay-panel-art">
        <StoryIllustration scene={scene} />
      </div>

      <h3>{title}</h3>
      <span className="hay-panel-caption">{caption}</span>
    </article>
  )
}

function CharacterPortrait({ type, name, description }) {
  const colors = {
    devadatta: ["#38245f", "#b87558", "#252039", "#c49af4"],
    kapila: ["#38245f", "#a85e3e", "#b65c32", "#e8b66b"],
    padmini: ["#51264f", "#b87558", "#a34470", "#e4b4e5"]
  }

  const [background, skin, clothing, accent] = colors[type]

  return (
    <div className="hay-character">
      <svg viewBox="0 0 240 270" role="img" aria-label={`Illustration representing ${name}`}>
        <path
          d="M120 8 C190 8 228 65 228 140 C228 220 185 260 120 260 C55 260 12 220 12 140 C12 65 50 8 120 8Z"
          fill={background}
          stroke={accent}
          strokeWidth="2"
        />
        <path
          d="M65 240 Q70 170 95 163 L145 163 Q170 170 175 240Z"
          fill={clothing}
          stroke={accent}
          strokeWidth="3"
        />
        <path
          d="M86 105 Q86 58 120 58 Q154 58 154 105 L148 157 Q137 177 120 177 Q103 177 92 157Z"
          fill={skin}
          stroke={accent}
          strokeWidth="2"
        />
        <path
          d="M76 94 Q65 15 120 25 Q175 15 164 94 L151 66 Q120 85 89 66Z"
          fill="#211426"
          stroke={accent}
          strokeWidth="4"
        />
        <path
          d="M92 112 Q104 103 114 112 M126 112 Q136 103 148 112"
          fill="none"
          stroke="#301b27"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M117 120 L113 140 L123 140"
          fill="none"
          stroke="#77453a"
          strokeWidth="2"
        />
        <path
          d="M108 153 Q120 161 132 153"
          fill="none"
          stroke="#642e3a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M91 170 L120 205 L149 170"
          fill="none"
          stroke={accent}
          strokeWidth="4"
        />

        {type === "padmini" && (
          <circle cx="120" cy="25" r="7" fill={accent} />
        )}

        {type === "kapila" && (
          <path
            d="M70 190 L42 230 M170 190 L198 230"
            stroke="#e8a16e"
            strokeWidth="9"
            strokeLinecap="round"
          />
        )}

        {type === "devadatta" && (
          <path
            d="M98 195 L120 240 L142 195"
            fill="none"
            stroke="#e5d0a0"
            strokeWidth="3"
          />
        )}
      </svg>

      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function Hayavadana() {
  return (
    <main className="lab-page hayavadana-page">

      {/* PAGE INTRO */}
      <section className="lab-hero">
        <p className="eyebrow">THE IDENTITY LAB · 01</p>

        <h1>Hayavadana</h1>

        <p className="lab-subtitle">
          Two journeys. One extraordinary question about identity and completeness.
        </p>

        <p className="hay-author">
          INSPIRED BY THE PLAY BY GIRISH KARNAD
        </p>
      </section>

      <section className="lab-content hay-new-content">

        {/* OPENING */}
        <div className="hay-opening">
          <span className="section-kicker">
            THE STORY BEHIND THE QUESTION
          </span>

          <h2>What makes a person whole?</h2>

          <p>
            In Girish Karnad's play, two stories unfold alongside each other:
            Hayavadana's search for completeness, and the tangled lives of
            Devadatta, Kapila and Padmini. Both stories challenge the idea
            that identity is simple or fixed.
          </p>
        </div>

        {/* HAYAVADANA INTRODUCTION */}
        <section className="hay-section hay-hero-character">
          <div className="hay-horse-intro">

            <div>
              <span className="section-kicker">MEET HAYAVADANA</span>

              <h2>A man with a horse's head.</h2>

              <p>
                Hayavadana is neither fully human nor fully horse. He longs
                to become complete, setting out on a journey that gives the
                play its name and its second great identity question.
              </p>
            </div>

            <div className="hay-horse-art">
              <StoryIllustration scene="horseman" />
              <span>HAYAVADANA</span>
            </div>

          </div>
        </section>

        {/* STORY ONE: DEVADATTA, KAPILA AND PADMINI */}
        <section className="hay-section">

          <span className="section-kicker">
            01 · THE HUMAN STORY
          </span>

          <h2>Friendship, desire and exchanged heads.</h2>

          <p className="hay-section-intro">
            Devadatta and Kapila are close friends, but their lives change
            when Padmini enters the picture. Their story leads to an
            extraordinary question about the relationship between mind
            and body.
          </p>

          <div className="hay-comic-story">

            <StoryPanel
              number="01"
              title="Two friends"
              caption="MIND AND BODY"
              scene="friends"
            />

            <div className="hay-comic-connector">
              <span />
            </div>

            <StoryPanel
              number="02"
              title="Padmini enters"
              caption="DESIRE AND CHOICE"
              scene="padmini"
            />

            <div className="hay-comic-connector">
              <span />
            </div>

            <StoryPanel
              number="03"
              title="The temple"
              caption="A TRAGIC TURN"
              scene="temple"
            />

            <div className="hay-comic-connector">
              <span />
            </div>

            <StoryPanel
              number="04"
              title="The exchange"
              caption="HEADS REARRANGED"
              scene="exchange"
            />

            <div className="hay-comic-connector">
              <span />
            </div>

            <StoryPanel
              number="05"
              title="The question"
              caption="WHO IS WHO?"
              scene="aftermath"
            />

          </div>

          <div className="hay-story-note">
            <strong>The central dilemma</strong>

            <p>
              At the temple of Goddess Kali, Devadatta and Kapila die.
              Padmini prays to the goddess, who restores their lives.
              But Padmini places each man's head on the other's body.
              The resulting identity question has no easy answer.
            </p>
          </div>

        </section>

        {/* STORY TWO: HAYAVADANA'S JOURNEY */}
        <section className="hay-section hay-parallel-story">

          <span className="section-kicker">
            02 · HAYAVADANA'S JOURNEY
          </span>

          <h2>The search for completeness.</h2>

          <p className="hay-section-intro">
            Hayavadana has a different struggle. Born with a horse's head
            and a human body, he sets out to seek the goddess Kali's
            blessing, hoping to become fully human.
          </p>

          <div className="hay-comic-story hay-three-panels">

            <StoryPanel
              number="01"
              title="Born between worlds"
              caption="HORSE AND HUMAN"
              scene="horseman"
            />

            <div className="hay-comic-connector">
              <span />
            </div>

            <StoryPanel
              number="02"
              title="A desperate wish"
              caption="SEEKING WHOLENESS"
              scene="journey"
            />

            <div className="hay-comic-connector">
              <span />
            </div>

            <StoryPanel
              number="03"
              title="A surprising end"
              caption="BECOMING WHOLE"
              scene="horse"
            />

          </div>

          <div className="hay-story-note">
            <strong>An unexpected transformation</strong>

            <p>
              Instead of becoming fully human, Hayavadana becomes a
              complete horse. His human voice gradually gives way
              to a horse's neigh. His search for completeness ends
              in a form he never expected.
            </p>
          </div>

        </section>

        {/* CHARACTER PORTRAITS */}
        <section className="hay-section">

          <span className="section-kicker">
            03 · MEET THE CHARACTERS
          </span>

          <h2>Three lives. One identity crisis.</h2>

          <div className="hay-character-grid">

            <CharacterPortrait
              type="devadatta"
              name="Devadatta"
              description="The scholar, associated with intellect, poetry and the mind."
            />

            <CharacterPortrait
              type="kapila"
              name="Kapila"
              description="The strong and athletic friend, associated with the physical body."
            />

            <CharacterPortrait
              type="padmini"
              name="Padmini"
              description="A central figure whose desires and choices challenge expectations."
            />

          </div>

        </section>

        {/* PHILOSOPHICAL DEBATE */}
        <section className="hay-section">

          <span className="section-kicker">
            04 · THE PHILOSOPHICAL DEBATE
          </span>

          <h2>What defines the self?</h2>

          <div className="identity-debate">

            <div>
              <span className="debate-symbol">🧠</span>
              <h3>The mind</h3>
              <p>
                If memory, thought and personality move with the head,
                do they define who we are?
              </p>
            </div>

            <div>
              <span className="debate-symbol">🫀</span>
              <h3>The body</h3>
              <p>
                Our physical experiences and actions shape us too.
                Can they be separated from identity?
              </p>
            </div>

            <div>
              <span className="debate-symbol">◈</span>
              <h3>The whole person</h3>
              <p>
                Perhaps identity emerges through the relationship
                between mind, body and lived experience.
              </p>
            </div>

          </div>

        </section>

        {/* CONNECTIONS TO OTHER PAGES */}
        <section className="hay-section">

          <span className="section-kicker">
            05 · THE CONNECTIONS
          </span>

          <h2>One story. Five dimensions of identity.</h2>

          <div className="hay-connections">

            <div>
              <strong>Neural Lab</strong>
              <p>The relationship between the brain and identity.</p>
            </div>

            <div>
              <strong>Mirror Lab</strong>
              <p>Body ownership and the meaning of physical identity.</p>
            </div>

            <div>
              <strong>Mind & Perception</strong>
              <p>Memory, decisions, desire and personal identity.</p>
            </div>

            <div>
              <strong>SDGs & Viksit Bharat</strong>
              <p>Agency, dignity, equality and social expectations.</p>
            </div>

          </div>

        </section>

        {/* ENDING */}
        <section className="hay-ending">

          <span className="section-kicker">
            THE FINAL QUESTION
          </span>

          <h2>
            If your head and body could belong to different people,
            who would you be?
          </h2>

          <p>
            Hayavadana's journey asks what it means to be complete.
            The human story asks what makes us who we are. Together,
            they leave us with a question that science, philosophy
            and literature continue to explore.
          </p>

          <p className="hay-final-line">
            WHO DEFINES YOU?
          </p>

        </section>

      </section>
    </main>
  )
}
