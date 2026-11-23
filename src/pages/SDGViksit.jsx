
function SDGIcon({ number, symbol, title }) {
  return (
    <div className="sdg-card">
      <span className="sdg-number">{number}</span>
      <div className="sdg-symbol">{symbol}</div>
      <h3>{title}</h3>
    </div>
  )
}

export default function SDGViksit() {
  return (
    <main className="lab-page sdg-page">
      <section className="lab-hero">
        <p className="eyebrow">THE IDENTITY LAB · 04</p>
        <h1>Identity & Society</h1>
        <p className="lab-subtitle">
          Can we build a future where everyone has the freedom to define themselves?
        </p>
      </section>

      <section className="lab-content">
        <div className="sdg-intro">
          <div>
            <span className="section-kicker">BEYOND THE INDIVIDUAL</span>
            <h2>Identity is also shaped by society.</h2>
            <p>
              Our opportunities, rights and experiences are influenced by
              the society we live in. Equality, dignity and inclusion help
              create a world where people can participate and reach their
              potential, regardless of gender or background.
            </p>
          </div>
          <div className="sdg-intro-art" aria-hidden="true">
            <div className="people-symbol">♧</div>
            <span>ONE SOCIETY · MANY IDENTITIES</span>
          </div>
        </div>

        <section className="sdg-section">
          <span className="section-kicker">01 · THE GLOBAL GOALS</span>
          <h2>Three goals. One inclusive future.</h2>
          <p>
            The United Nations Sustainable Development Goals include
            commitments to equality, reduced inequalities and peaceful,
            inclusive societies.
          </p>

          <div className="sdg-grid">
            <SDGIcon
              number="05"
              symbol="♀"
              title="Gender Equality"
            />
            <SDGIcon
              number="10"
              symbol="⇄"
              title="Reduced Inequalities"
            />
            <SDGIcon
              number="16"
              symbol="⚖"
              title="Peace, Justice & Strong Institutions"
            />
          </div>
        </section>

        <section className="sdg-section">
          <span className="section-kicker">02 · EQUALITY & DIGNITY</span>
          <h2>Everyone deserves the freedom to be themselves.</h2>
          <p>
            An inclusive society recognises that people have different
            experiences and needs. Equal opportunity means removing
            barriers that prevent people from accessing education,
            employment, justice and participation in public life.
          </p>

          <div className="equality-panel">
            <div className="equality-item">
              <span>01</span>
              <div>
                <h3>Equal opportunity</h3>
                <p>Access to education, work and meaningful participation.</p>
              </div>
            </div>
            <div className="equality-item">
              <span>02</span>
              <div>
                <h3>Gender dignity</h3>
                <p>Respect for individual agency, choices and freedom.</p>
              </div>
            </div>
            <div className="equality-item">
              <span>03</span>
              <div>
                <h3>Justice and inclusion</h3>
                <p>Fair institutions and equal protection of rights.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sdg-section">
          <span className="section-kicker">03 · INDIA'S VISION</span>
          <h2>Viksit Bharat 2047</h2>
          <p>
            Viksit Bharat 2047 is India's vision of becoming a developed
            nation by the centenary of independence. This ambition involves
            economic growth as well as improvements in education, health,
            infrastructure, opportunity and quality of life.
          </p>

          <div className="bharat-panel">
            <div className="bharat-emblem" aria-hidden="true">
              <span>2047</span>
              <div className="bharat-orbit"></div>
              <small>VIKSIT BHARAT</small>
            </div>
            <div>
              <h3>A developed India must include everyone.</h3>
              <p>
                Progress is meaningful when its benefits reach people
                across regions and communities. Equal opportunity,
                accessible education, dignity and participation are
                essential parts of an inclusive future.
              </p>
            </div>
          </div>
        </section>

        <section className="sdg-hayavadana">
          <span className="section-kicker">04 · THE HAYAVADANA CONNECTION</span>
          <h2>Padmini: A question of agency</h2>
          <p>
            In <em>Hayavadana</em>, Padmini's desires and decisions challenge
            the expectations placed upon women. Her story gives us a way
            to discuss agency, gender roles and the freedom to make
            personal choices.
          </p>
          <p>
            The play belongs to a different literary and social context,
            but its questions remain relevant: who gets to make choices,
            whose desires are respected, and who gets to define another
            person's identity?
          </p>

          <div className="padmini-society">
            <div className="padmini-society-art" aria-hidden="true">
              <span>♀</span>
              <small>VOICE · CHOICE · AGENCY</small>
            </div>
            <div>
              <h3>From story to society</h3>
              <p>
                Padmini's story invites us to question restrictive
                expectations. A more equal society allows women to
                participate in decisions about their own lives and
                recognises their individuality and dignity.
              </p>
            </div>
          </div>
        </section>

        <section className="sdg-question">
          <span className="section-kicker">THINK ABOUT IT</span>
          <h2>Can a nation truly progress if some of its people are left behind?</h2>
          <p>
            A developed future is not measured by growth alone, but also
            by the dignity, equality and opportunities it offers everyone.
          </p>
        </section>
      </section>
    </main>
  )
}
