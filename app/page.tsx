import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  CircleDollarSign,
  Clock3,
  Code2,
  Container,
  FileCheck2,
  GitPullRequest,
  KeyRound,
  ListChecks,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
  X,
} from "lucide-react";
import { PilotForm } from "./PilotForm";

const workflow = [
  { number: "01", icon: ListChecks, title: "Scope the outcome", body: "We turn one contained issue into a Fix Contract with acceptance checks, exclusions, budget, and a delivery target." },
  { number: "02", icon: UserRoundCheck, title: "Assign one solver", body: "One vetted engineer receives an exclusive assignment. AI can accelerate the work, but a named human remains accountable." },
  { number: "03", icon: SearchCheck, title: "Pass the Proof Gate", body: "The candidate change is tested, checked against the contract, reviewed, and packaged with evidence your team can inspect." },
  { number: "04", icon: GitPullRequest, title: "Accept the pull request", body: "Your team keeps merge control. Payment is released only after the agreed outcome is accepted." },
];

const acceptedTasks = [
  "Contained frontend and responsive bugs",
  "Small API and integration issues",
  "Test failures and missing regression tests",
  "Accessibility corrections",
  "Small dashboard or CRUD improvements",
  "Isolated backend defects with a reproducible case",
];

const excludedTasks = [
  "Production incidents or emergency response",
  "Security vulnerabilities and penetration testing",
  "Authentication, billing, or infrastructure rewrites",
  "Changes that require production credentials or data",
  "Large migrations or architectural refactors",
  "Work expected to exceed two engineering days",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rampod home">
          <span className="brand-mark" aria-hidden="true" />
          <span>rampod</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#workflow">How it works</a>
          <a href="#security">Security</a>
          <a href="#tasks">Task fit</a>
        </nav>
        <a className="header-cta" href="#pilot">
          Submit a task <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Engineering overflow, resolved</p>
          <h1>Small engineering work, resolved.</h1>
          <p className="hero-lede">Turn contained React and Node.js backlog issues into scoped, tested, and reviewed pull requests without another hiring cycle.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pilot">Submit a backlog issue <ArrowRight aria-hidden="true" size={17} /></a>
            <a className="text-link" href="#workflow">See the resolution flow <ArrowDown aria-hidden="true" size={15} /></a>
          </div>
          <p className="pilot-note">Founding pilot for React, Next.js, Node.js, and TypeScript teams.</p>
        </div>

        <div className="resolution-scene" aria-label="Issue to verified pull request workflow">
          <div className="scene-label scene-label-one">01 / SCOPE</div>
          <article className="issue-brief">
            <div className="issue-topline"><span className="issue-number">ISSUE #184</span><span className="status status-amber">Needs scope</span></div>
            <h2>Invoice total breaks after a partial refund</h2>
            <div className="issue-meta"><span>payments</span><span>TypeScript</span><span>target: 72h</span></div>
          </article>
          <div className="flow-line flow-line-one" />
          <div className="contract-node">
            <span className="node-index">02</span>
            <div><strong>Fix Contract approved</strong><span>4 acceptance checks · scope locked</span></div>
          </div>
          <div className="flow-line flow-line-two" />
          <article className="proof-panel">
            <div className="proof-header">
              <div><span className="scene-label">03 / PROOF GATE</span><h2>Pull request ready</h2></div>
              <span className="status status-green">Verified</span>
            </div>
            <div className="check-row"><Check aria-hidden="true" className="check-icon" size={14} /><span>Acceptance tests</span><strong>4 / 4</strong></div>
            <div className="check-row"><Check aria-hidden="true" className="check-icon" size={14} /><span>CI and regression suite</span><strong>Passed</strong></div>
            <div className="check-row"><Check aria-hidden="true" className="check-icon" size={14} /><span>Platform review</span><strong>Approved</strong></div>
            <div className="diff-summary"><span>3 files changed</span><span className="additions">+47</span><span className="deletions">−18</span></div>
          </article>
        </div>
      </section>

      <section className="signal-strip" aria-label="Rampod process summary">
        <p>One task. One accountable solver. One verified outcome.</p>
        <div><span>Scoped before work</span><span>Private by default</span><span>Payment tied to proof</span></div>
      </section>

      <section className="problem-band section-pad">
        <div className="section-heading">
          <p className="kicker">The overlooked middle</p>
          <h2>The backlog has work that nobody wants to interrupt the roadmap for.</h2>
        </div>
        <div className="problem-copy">
          <p>It is too small for another hire, too important to ignore, and too awkward to hand to a marketplace full of competing proposals.</p>
          <p>Rampod turns that middle into a controlled delivery lane. Your team defines the outcome once, reviews one evidence-backed pull request, and keeps final merge authority.</p>
        </div>
        <div className="friction-row" aria-label="Common backlog friction">
          <div><span>01</span><strong>Postponed every sprint</strong></div>
          <div><span>02</span><strong>Expensive context switching</strong></div>
          <div><span>03</span><strong>Unclear external accountability</strong></div>
        </div>
      </section>

      <section className="workflow-band section-pad" id="workflow">
        <div className="section-heading section-heading-light">
          <p className="kicker">The resolution flow</p>
          <h2>From vague issue to acceptance-ready pull request.</h2>
          <p className="section-intro">The Fix Contract removes ambiguity before anyone writes code. The Proof Gate makes completion visible before payment moves.</p>
        </div>
        <div className="workflow-list">
          {workflow.map((step) => {
            const Icon = step.icon;
            return (
              <article className="workflow-step" key={step.number}>
                <div className="step-topline"><span>{step.number}</span><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="proof-band section-pad">
        <div className="proof-copy">
          <p className="kicker">Proof before payout</p>
          <h2>Payment follows evidence, not confidence.</h2>
          <p>Every delivery carries the original contract, test results, review status, and a plain-language explanation of what changed. Your team can make a merge decision without reconstructing the work.</p>
          <a className="text-link" href="#pilot">Bring us one postponed issue <ArrowRight aria-hidden="true" size={15} /></a>
        </div>
        <div className="proof-ledger" aria-label="Example Proof Gate report">
          <div className="ledger-header"><div><span className="scene-label">PROOF GATE / FG-0184</span><h3>Acceptance record</h3></div><BadgeCheck aria-hidden="true" size={30} /></div>
          <div className="ledger-row"><FileCheck2 aria-hidden="true" size={18} /><span>Expected refund amount remains stable</span><strong>PASS</strong></div>
          <div className="ledger-row"><Code2 aria-hidden="true" size={18} /><span>Regression test added to payment suite</span><strong>PASS</strong></div>
          <div className="ledger-row"><ShieldCheck aria-hidden="true" size={18} /><span>No credentials or new dependencies introduced</span><strong>PASS</strong></div>
          <div className="ledger-footer"><span>Ready for customer review</span><span>Evidence attached</span></div>
        </div>
      </section>

      <section className="security-band section-pad" id="security">
        <div className="security-intro">
          <p className="kicker">Repository safety</p>
          <h2>Run the repository. Keep company secrets out.</h2>
          <p>A developer-controlled runtime cannot safely hide a real secret. Rampod therefore separates the workspace used to build the fix from the customer-controlled environment used for sensitive verification.</p>
        </div>
        <div className="security-architecture" aria-label="Rampod secure execution model">
          <div className="architecture-node"><Container aria-hidden="true" size={22} /><div><strong>Disposable Fix Room</strong><span>Synthetic data, local services, no production credentials</span></div></div>
          <ArrowRight className="architecture-arrow" aria-hidden="true" size={20} />
          <div className="architecture-node"><KeyRound aria-hidden="true" size={22} /><div><strong>Scoped test access</strong><span>Short-lived, revocable capability for approved services</span></div></div>
          <ArrowRight className="architecture-arrow" aria-hidden="true" size={20} />
          <div className="architecture-node"><LockKeyhole aria-hidden="true" size={22} /><div><strong>Customer verification</strong><span>Sensitive checks stay inside company-controlled CI</span></div></div>
        </div>
        <div className="readiness-grid">
          <article className="readiness-item readiness-green"><span>GREEN</span><h3>Contractor-ready</h3><p>Runs with local services, synthetic data, and test accounts. Eligible for the normal delivery target.</p></article>
          <article className="readiness-item readiness-amber"><span>AMBER</span><h3>Controlled integration</h3><p>Needs a dedicated test tenant or customer-run verification. Reviewed before scheduling.</p></article>
          <article className="readiness-item readiness-red"><span>RED</span><h3>Production-dependent</h3><p>Requires production secrets, customer data, or unrestricted infrastructure access. Not accepted.</p></article>
        </div>
      </section>

      <section className="task-band section-pad" id="tasks">
        <div className="section-heading">
          <p className="kicker">Designed for contained work</p>
          <h2>A narrow pilot by design.</h2>
          <p className="section-intro">The first Rampod service focuses on work that can be scoped, reproduced, and verified without touching production systems.</p>
        </div>
        <div className="task-columns">
          <div className="task-column">
            <div className="task-column-title"><Check aria-hidden="true" size={18} /><h3>Good pilot tasks</h3></div>
            <ul>{acceptedTasks.map((task) => <li key={task}>{task}</li>)}</ul>
          </div>
          <div className="task-column task-column-muted">
            <div className="task-column-title"><X aria-hidden="true" size={18} /><h3>Not accepted initially</h3></div>
            <ul>{excludedTasks.map((task) => <li key={task}>{task}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="pilot-band section-pad" id="pilot">
        <div className="pilot-offer">
          <p className="kicker">Founding design partner pilot</p>
          <h2>Start with one issue your team keeps postponing.</h2>
          <p>We will assess its fit, create the Fix Contract, coordinate one solver, and return the evidence with the pull request. This is a founder-led pilot, not a self-serve marketplace.</p>
          <div className="offer-grid">
            <div><Clock3 aria-hidden="true" size={19} /><span><strong>72-hour target</strong> for eligible Green tasks</span></div>
            <div><CircleDollarSign aria-hidden="true" size={19} /><span><strong>₹0 platform fee</strong> for the first pilot</span></div>
            <div><FileCheck2 aria-hidden="true" size={19} /><span><strong>Scope approved first</strong> before work begins</span></div>
            <div><Boxes aria-hidden="true" size={19} /><span><strong>Seven-day rework</strong> for contract defects</span></div>
          </div>
          <p className="offer-note">The developer bounty is quoted and funded before assignment. The 72-hour clock starts after scope, access, and payment are ready.</p>
        </div>
        <PilotForm />
      </section>

      <section className="faq-band section-pad">
        <div className="section-heading compact-heading"><p className="kicker">Questions before access</p><h2>What your engineering team will want to know.</h2></div>
        <div className="faq-list">
          <details><summary>Do you need production credentials?</summary><p>No. Tasks requiring production secrets or production data are not accepted. Sensitive final checks remain inside customer-controlled verification.</p></details>
          <details><summary>Who decides whether the work is complete?</summary><p>The Fix Contract defines acceptance before assignment. Rampod prepares the evidence, but your team retains final acceptance and merge authority.</p></details>
          <details><summary>Will multiple developers compete on the same issue?</summary><p>No. One vetted solver receives an exclusive assignment window. This avoids duplicate work and gives the company one accountable owner.</p></details>
          <details><summary>What if our repository cannot run without a real .env?</summary><p>We classify the task as Amber or Red. We can first define a contractor-ready setup using synthetic services and test tenants, or keep verification entirely in your CI.</p></details>
          <details><summary>Is Rampod already a public marketplace?</summary><p>No. The founding pilot is intentionally managed by the founder while we validate task fit, trust, delivery quality, and repeat demand.</p></details>
        </div>
      </section>

      <footer className="site-footer">
        <div><a className="brand brand-footer" href="#top" aria-label="Rampod home"><span className="brand-mark" aria-hidden="true" /><span>rampod</span></a><p>Verified engineering fixes, delivered as pull requests.</p></div>
        <div className="footer-links"><a href="#workflow">How it works</a><a href="#security">Repository safety</a><a href="mailto:hello@rampod.co">hello@rampod.co</a></div>
        <p className="copyright">© 2026 Rampod. Founding pilot.</p>
      </footer>
    </main>
  );
}
