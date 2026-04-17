(function(){
  var el = document.getElementById('rsa-state-ohio');
  if (!el) return;
  if (!document.getElementById('rsa-ix-styles')) {
    var s = document.createElement('style');
    s.id = 'rsa-ix-styles';
    s.textContent = `.rsa-ix-wrap{font-family:'Onest',sans-serif;color:#0b1220;background:#f6f7fa}.rsa-ix-hero{background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);color:white;padding:48px 24px 40px}.rsa-ix-hero h1{font-family:'Onest',sans-serif;font-size:clamp(28px,4vw,40px);font-weight:700;line-height:1.2;margin:12px 0 10px;letter-spacing:-0.5px}.rsa-ix-hero p{font-size:17px;opacity:.88;max-width:620px;line-height:1.6;margin:0}.rsa-ix-breadcrumb{font-size:13px;opacity:.72;margin-bottom:10px}.rsa-ix-breadcrumb a{color:white;text-decoration:none}.rsa-ix-breadcrumb a:hover{text-decoration:underline}.rsa-ix-breadcrumb span{margin:0 5px;opacity:.6}.rsa-ix-bc-current{opacity:.9}.rsa-ix-content{max-width:940px;margin:0 auto;padding:40px 24px 64px}.rsa-ix-stats{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}.rsa-ix-stat{background:white;border:1px solid #e9eaee;border-radius:10px;padding:14px 20px;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-stat .num{font-size:1.75rem;font-weight:700;line-height:1;color:#1e3a5f}.rsa-ix-stat .lbl{font-size:11px;color:#5a6578;margin-top:3px;text-transform:uppercase;letter-spacing:.05em}.rsa-ix-intro{background:white;border-left:3px solid #2563eb;border-radius:0 10px 10px 0;padding:14px 18px;margin-bottom:28px;font-size:14px;line-height:1.7;color:#2a3446;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-section-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#5a6578;margin-bottom:12px}.rsa-ix-topic-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:32px}@media(max-width:640px){.rsa-ix-topic-grid{grid-template-columns:1fr}}.rsa-ix-topic-card{background:white;border:1px solid #e9eaee;border-radius:10px;padding:20px 24px;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-topic-card h3{font-size:16px;font-weight:700;color:#0b1220;margin:0 0 4px}.rsa-ix-topic-card .count{font-size:12px;color:#5a6578;margin-bottom:12px}.rsa-ix-topic-card a.btn{font-size:13px;color:#2563eb;text-decoration:none;font-weight:600}.rsa-ix-topic-card a.btn:hover{text-decoration:underline}.rsa-ix-carrier-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:32px}@media(max-width:640px){.rsa-ix-carrier-grid{grid-template-columns:1fr}}.rsa-ix-carrier-card{background:white;border:1px solid #e9eaee;border-radius:10px;padding:16px 20px;box-shadow:0 1px 3px rgba(11,18,32,.06)}.rsa-ix-carrier-card .carrier-name{font-size:15px;font-weight:700;color:#0b1220;margin-bottom:4px}.rsa-ix-carrier-card a{font-size:13px;color:#2563eb;text-decoration:none;font-weight:600}.rsa-ix-carrier-card a:hover{text-decoration:underline}.rsa-ix-related{display:flex;gap:8px;flex-wrap:wrap;padding-top:24px;border-top:1px solid #e9eaee;margin-top:32px}.rsa-ix-related a{padding:7px 14px;border:1px solid #e9eaee;border-radius:8px;font-size:13px;color:#2a3446;text-decoration:none;background:white;font-weight:500}.rsa-ix-related a:hover{border-color:#2563eb;color:#2563eb}`;
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap">
  <div class="rsa-ix-hero">
    <div class="rsa-ix-breadcrumb">
      <a href="https://www.restingsycamore.com">Home</a>
      <span>›</span>
      <a href="https://www.restingsycamore.com/medicare">Medicare</a>
      <span>›</span>
      <a href="https://www.restingsycamore.com/medicare/states">States</a>
      <span>›</span>
      <span class="rsa-ix-bc-current">Ohio</span>
    </div>
    <h1>Medicare in Ohio</h1>
    <p>Compare Medicare Advantage plans, find in-network doctors and care facilities, and explore coverage options across all 88 Ohio counties.</p>
  </div>
  <div class="rsa-ix-content">

    <div class="rsa-ix-stats">
      <div class="rsa-ix-stat"><div class="num">170</div><div class="lbl">Plans</div></div>
      <div class="rsa-ix-stat"><div class="num">200</div><div class="lbl">Doctors</div></div>
      <div class="rsa-ix-stat"><div class="num">922</div><div class="lbl">Providers</div></div>
      <div class="rsa-ix-stat"><div class="num">307</div><div class="lbl">Cities</div></div>
      <div class="rsa-ix-stat"><div class="num">88</div><div class="lbl">Counties</div></div>
      <div class="rsa-ix-stat"><div class="num">1,233</div><div class="lbl">ZIP Codes</div></div>
    </div>

    <div class="rsa-ix-intro">
      Ohio has one of the most competitive Medicare markets in the country, with 170 plans across 88 counties. From Columbus and Cleveland to rural Appalachian communities, plan availability and provider networks vary significantly by location. Find what's available in your area below.
    </div>

    <div class="rsa-ix-section-label">Explore Medicare in Ohio</div>
    <div class="rsa-ix-topic-grid">
      <div class="rsa-ix-topic-card">
        <h3>Medicare Plans</h3>
        <div class="count">170 plans available in Ohio</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/plans/ohio">View Plans in Ohio →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Doctors</h3>
        <div class="count">200 Medicare doctors in Ohio</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/doctors/ohio">Find Doctors in Ohio →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Care Facilities</h3>
        <div class="count">922 providers across Ohio</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/providers/ohio">View Providers in Ohio →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Cities</h3>
        <div class="count">307 cities with local data</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/states/ohio/cities">Browse Cities in Ohio →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>Counties</h3>
        <div class="count">88 Ohio counties</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/states/ohio/counties">Browse Counties in Ohio →</a>
      </div>
      <div class="rsa-ix-topic-card">
        <h3>ZIP Codes</h3>
        <div class="count">1,233 ZIP codes with plan data</div>
        <a class="btn" href="https://www.restingsycamore.com/medicare/states/ohio/zip-codes">Browse ZIPs in Ohio →</a>
      </div>
    </div>

    <div class="rsa-ix-section-label">Medicare Carriers in Ohio</div>
    <div class="rsa-ix-carrier-grid">
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">Aetna</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/aetna">View Aetna Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">UnitedHealthcare</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/unitedhealthcare">View UHC Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">Humana</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/humana">View Humana Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">Anthem</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/anthem">View Anthem Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">Wellcare</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/wellcare">View Wellcare Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">Medical Mutual of Ohio</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/medical-mutual-of-ohio">View Medical Mutual Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">SummaCare</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/summacare">View SummaCare Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">CarePlus</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/careplus">View CarePlus Plans →</a>
      </div>
      <div class="rsa-ix-carrier-card">
        <div class="carrier-name">Molina Healthcare</div>
        <a href="https://www.restingsycamore.com/medicare/carriers/molina-healthcare">View Molina Plans →</a>
      </div>
    </div>

    <div class="rsa-ix-related">
      <a href="https://www.restingsycamore.com/medicare/states/utah">Utah</a>
      <a href="https://www.restingsycamore.com/medicare/states/pennsylvania">Pennsylvania</a>
      <a href="https://www.restingsycamore.com/medicare/states">All States</a>
      <a href="https://www.restingsycamore.com/medicare/plans">All Medicare Plans</a>
      <a href="https://www.restingsycamore.com/medicare/carriers">All Carriers</a>
      <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
    </div>

  </div>
</div>`;
})();
