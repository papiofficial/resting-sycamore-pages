(function(){
  var el = document.getElementById('rsa-medicare-index');
  if (!el) return;
  if (!document.getElementById('rsa-ix-styles')) {
    var s = document.createElement('style');
    s.id = 'rsa-ix-styles';
    s.textContent = `.rsa-ix-wrap{font-family:'Onest',sans-serif;color:#0b1220;background:#f6f7fa}.rsa-ix-hero{background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);color:white;padding:48px 24px 40px}.rsa-ix-hero h1{font-family:'Onest',sans-serif;font-size:clamp(28px,4vw,40px);font-weight:700;line-height:1.2;margin:12px 0 10px;letter-spacing:-0.5px}.rsa-ix-hero p{font-size:17px;opacity:.88;max-width:620px;line-height:1.6;margin:0}.rsa-ix-breadcrumb{font-size:13px;opacity:.72;margin-bottom:10px}.rsa-ix-breadcrumb a{color:white;text-decoration:none}.rsa-ix-breadcrumb a:hover{text-decoration:underline}.rsa-ix-breadcrumb span{margin:0 5px;opacity:.6}.rsa-ix-bc-current{opacity:.9}.rsa-ix-content{max-width:940px;margin:0 auto;padding:40px 24px 64px}.rsa-ix-stats{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}.rsa-ix-stat{background:white;border:1px solid #e9eaee;border-radius:10px;padding:14px 20px;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-stat .num{font-size:1.75rem;font-weight:700;line-height:1;color:#1e3a5f}.rsa-ix-stat .lbl{font-size:11px;color:#5a6578;margin-top:3px;text-transform:uppercase;letter-spacing:.05em}.rsa-ix-intro{background:white;border-left:3px solid #2563eb;border-radius:0 10px 10px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;line-height:1.7;color:#2a3446;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-section-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#5a6578;margin-bottom:12px}.rsa-ix-topic-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:32px}@media(max-width:640px){.rsa-ix-topic-grid{grid-template-columns:1fr}}.rsa-ix-topic-card{background:white;border:1px solid #e9eaee;border-radius:10px;padding:20px 24px;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-topic-card h3{font-size:16px;font-weight:700;color:#0b1220;margin:0 0 4px}.rsa-ix-topic-card .count{font-size:12px;color:#5a6578;margin-bottom:12px}.rsa-ix-topic-card a.btn{font-size:13px;color:#2563eb;text-decoration:none;font-weight:600}.rsa-ix-topic-card a.btn:hover{text-decoration:underline}.rsa-ix-state-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px}@media(max-width:700px){.rsa-ix-state-grid{grid-template-columns:1fr}}.rsa-ix-state-card{background:white;border:1px solid #e9eaee;border-radius:10px;padding:24px;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-state-card h2{font-size:18px;font-weight:700;color:#0b1220;margin:0 0 4px}.rsa-ix-state-card .count{font-size:12px;color:#5a6578;margin-bottom:12px}.rsa-ix-state-card .links{display:flex;flex-direction:column;gap:5px;margin-bottom:16px}.rsa-ix-state-card .links a{font-size:13px;color:#2563eb;text-decoration:none;font-weight:500}.rsa-ix-state-card .links a:hover{text-decoration:underline}.rsa-ix-state-card a.btn{display:inline-block;background:#2563eb;color:white;text-decoration:none;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600}.rsa-ix-state-card a.btn:hover{background:#1d4ed8}.rsa-ix-related{display:flex;gap:8px;flex-wrap:wrap;padding-top:24px;border-top:1px solid #e9eaee;margin-top:32px}.rsa-ix-related a{padding:7px 14px;border:1px solid #e9eaee;border-radius:8px;font-size:13px;color:#2a3446;text-decoration:none;background:white;font-weight:500}.rsa-ix-related a:hover{border-color:#2563eb;color:#2563eb}.rsa-ix-cta{background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);color:white;border-radius:12px;padding:32px 28px;margin-bottom:32px;text-align:center}.rsa-ix-cta h2{font-size:22px;font-weight:700;margin:0 0 8px}.rsa-ix-cta p{font-size:15px;opacity:.88;margin:0 0 20px}.rsa-ix-cta a{display:inline-block;background:white;color:#1e3a5f;text-decoration:none;padding:11px 24px;border-radius:8px;font-size:14px;font-weight:700}.rsa-ix-cta a:hover{background:#f0f4ff}`;
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap">
  <div class="rsa-ix-hero">
    <div class="rsa-ix-breadcrumb">
      <a href="https://www.restingsycamore.com">Home</a>
      <span>›</span>
      <span class="rsa-ix-bc-current">Medicare</span>
    </div>
    <h1>Medicare Plans, Doctors &amp; Coverage</h1>
    <p>Local Medicare information for Utah, Ohio, and Pennsylvania. Compare plans, find doctors, and explore coverage options in your area.</p>
  </div>

  <div class="rsa-ix-content">

    <div class="rsa-ix-stats">
      <div class="rsa-ix-stat"><div class="num">459</div><div class="lbl">Medicare Plans</div></div>
      <div class="rsa-ix-stat"><div class="num">600</div><div class="lbl">Doctors</div></div>
      <div class="rsa-ix-stat"><div class="num">1,992</div><div class="lbl">Care Facilities</div></div>
      <div class="rsa-ix-stat"><div class="num">822</div><div class="lbl">Cities</div></div>
      <div class="rsa-ix-stat"><div class="num">184</div><div class="lbl">Counties</div></div>
      <div class="rsa-ix-stat"><div class="num">3,351</div><div class="lbl">ZIP Codes</div></div>
    </div>

    <div class="rsa-ix-intro">
      Resting Sycamore is an independent Medicare advisory. We help residents of Utah, Ohio, and Pennsylvania compare Medicare Advantage plans, find in-network doctors, and understand their coverage — at no cost.
    </div>

    <div class="rsa-ix-section-label">Browse by state</div>
    <div class="rsa-ix-state-grid">
      <div class="rsa-ix-state-card">
        <h2>Utah</h2>
        <div class="count">73 plans · 29 counties · 285 ZIPs</div>
        <div class="links">
          <a href="https://www.restingsycamore.com/medicare/plans/utah">Medicare Plans in Utah</a>
          <a href="https://www.restingsycamore.com/medicare/doctors/utah">Doctors in Utah</a>
          <a href="https://www.restingsycamore.com/medicare/providers/utah">Care Facilities in Utah</a>
          <a href="https://www.restingsycamore.com/medicare/states/utah/cities">Cities in Utah</a>
          <a href="https://www.restingsycamore.com/medicare/states/utah/counties">Counties in Utah</a>
        </div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/states/utah">Explore Utah →</a>
      </div>
      <div class="rsa-ix-state-card">
        <h2>Ohio</h2>
        <div class="count">170 plans · 88 counties · 1,233 ZIPs</div>
        <div class="links">
          <a href="https://www.restingsycamore.com/medicare/plans/ohio">Medicare Plans in Ohio</a>
          <a href="https://www.restingsycamore.com/medicare/doctors/ohio">Doctors in Ohio</a>
          <a href="https://www.restingsycamore.com/medicare/providers/ohio">Care Facilities in Ohio</a>
          <a href="https://www.restingsycamore.com/medicare/states/ohio/cities">Cities in Ohio</a>
          <a href="https://www.restingsycamore.com/medicare/states/ohio/counties">Counties in Ohio</a>
        </div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/states/ohio">Explore Ohio →</a>
      </div>
      <div class="rsa-ix-state-card">
        <h2>Pennsylvania</h2>
        <div class="count">216 plans · 67 counties · 1,833 ZIPs</div>
        <div class="links">
          <a href="https://www.restingsycamore.com/medicare/plans/pennsylvania">Medicare Plans in Pennsylvania</a>
          <a href="https://www.restingsycamore.com/medicare/doctors/pennsylvania">Doctors in Pennsylvania</a>
          <a href="https://www.restingsycamore.com/medicare/providers/pennsylvania">Care Facilities in Pennsylvania</a>
          <a href="https://www.restingsycamore.com/medicare/states/pennsylvania/cities">Cities in Pennsylvania</a>
          <a href="https://www.restingsycamore.com/medicare/states/pennsylvania/counties">Counties in Pennsylvania</a>
        </div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/states/pennsylvania">Explore Pennsylvania →</a>
      </div>
    </div>

    <div class="rsa-ix-section-label">Browse by topic</div>
    <div class="rsa-ix-topic-grid">
      <div class="rsa-ix-topic-card">
        <h3>Medicare Plans</h3>
        <div class="count">459 plans across 3 states</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/plans">Browse all plans →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Medicare Carriers</h3>
        <div class="count">35 carriers including Aetna, UHC, Humana</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/carriers">Browse all carriers →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Doctors &amp; Specialists</h3>
        <div class="count">600 Medicare-accepting physicians</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/doctors">Find a doctor →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Care Facilities</h3>
        <div class="count">1,992 hospitals, clinics &amp; nursing homes</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/providers">Find a facility →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Plan Types</h3>
        <div class="count">HMO, PPO, D-SNP, C-SNP &amp; more</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/plan-types">Explore plan types →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Medicare Questions</h3>
        <div class="count">300+ answered questions</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/questions">Get answers →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Compare Plans</h3>
        <div class="count">Side-by-side plan comparison tool</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare now →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Medicare 101</h3>
        <div class="count">Plain-language guides to Medicare basics</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare-101">Start learning →</a>
      </div>
    </div>

    <div class="rsa-ix-cta">
      <h2>Not sure where to start?</h2>
      <p>Talk to a local Medicare advisor — no pressure, no cost.</p>
      <a href="https://www.restingsycamore.com/contact">Get free help →</a>
    </div>

    <div class="rsa-ix-related">
      <a href="https://www.restingsycamore.com/medicare/states">All States</a>
      <a href="https://www.restingsycamore.com/medicare/plans">All Plans</a>
      <a href="https://www.restingsycamore.com/medicare/carriers">All Carriers</a>
      <a href="https://www.restingsycamore.com/medicare/doctors">All Doctors</a>
      <a href="https://www.restingsycamore.com/medicare/questions">Medicare Questions</a>
      <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
      <a href="https://www.restingsycamore.com/medicare-101">Medicare 101</a>
    </div>

  </div>
</div>`;
})();
