(function(){
  var el = document.getElementById('rsa-carriers-index');
  if (!el) return;
  if (!document.getElementById('rsa-ix-styles')) {
    var s = document.createElement('style');
    s.id = 'rsa-ix-styles';
    s.textContent = `.rsa-ix-wrap{font-family:"Onest",system-ui,sans-serif;color:#1e293b;box-sizing:border-box}
.rsa-ix-wrap *{box-sizing:border-box}
.rsa-ix-header{background:#1e3a5f;color:#fff;padding:32px 40px}
.rsa-ix-header h1{font-size:1.9rem;font-weight:800;margin-bottom:8px;line-height:1.2}
.rsa-ix-header p{color:#94a3b8;font-size:0.95rem;max-width:600px;line-height:1.6}
.rsa-ix-container{max-width:1100px;margin:0 auto;padding:36px 40px}
.rsa-ix-intro{background:#f8fafc;border-left:4px solid #2563eb;padding:16px 20px;border-radius:0 8px 8px 0;margin-bottom:32px;font-size:0.95rem;line-height:1.7;color:#334155}
.rsa-ix-section-title{font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:12px;margin-top:32px;border-bottom:1px solid #e2e8f0;padding-bottom:8px}
.rsa-ix-letter-heading{font-size:1.4rem;font-weight:800;color:#0f172a;margin-bottom:10px}
.rsa-ix-letter-group{margin-bottom:24px}
.rsa-ix-link-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:6px}
.rsa-ix-link-item a{display:block;padding:7px 12px;border-radius:6px;text-decoration:none;color:#1e40af;font-size:0.875rem;transition:background .1s;border:1px solid transparent}
.rsa-ix-link-item a:hover{background:#eff6ff;border-color:#bfdbfe}
.rsa-ix-link-item .sub{font-size:0.75rem;color:#94a3b8;margin-top:1px}
.rsa-ix-state-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px;margin-bottom:36px}
.rsa-ix-state-card{border:1px solid #e2e8f0;border-radius:10px;padding:22px;text-decoration:none;color:inherit;display:block;transition:box-shadow .15s}
.rsa-ix-state-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.1);border-color:#2563eb}
.rsa-ix-state-card .count{font-size:2.3rem;font-weight:800;color:#2563eb;line-height:1}
.rsa-ix-state-card .label{font-size:0.95rem;font-weight:600;margin-top:6px}
.rsa-ix-state-card .sub{font-size:0.8rem;color:#64748b;margin-top:4px}
.rsa-ix-stats-bar{display:flex;gap:24px;margin-bottom:24px;flex-wrap:wrap}
.rsa-ix-stat .num{font-size:1.7rem;font-weight:800;color:#0f172a}
.rsa-ix-stat .lbl{font-size:0.75rem;color:#64748b;text-transform:uppercase;letter-spacing:.04em}
.rsa-ix-table{width:100%;border-collapse:collapse;font-size:0.875rem}
.rsa-ix-table th{text-align:left;padding:10px 14px;background:#f8fafc;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#475569;border-bottom:2px solid #e2e8f0}
.rsa-ix-table td{padding:9px 14px;border-bottom:1px solid #f1f5f9}
.rsa-ix-table tr:hover td{background:#f8fafc}
.rsa-ix-pills{display:flex;flex-wrap:wrap;gap:6px}
.rsa-ix-pill a{display:inline-block;padding:3px 10px;background:#eff6ff;color:#1d4ed8;border-radius:999px;font-size:0.78rem;text-decoration:none;font-weight:500}
.rsa-ix-pill a:hover{background:#dbeafe}
.rsa-ix-related{display:flex;gap:10px;flex-wrap:wrap;margin-top:36px;padding-top:22px;border-top:1px solid #e2e8f0}
.rsa-ix-related a{padding:7px 14px;border:1px solid #e2e8f0;border-radius:6px;text-decoration:none;color:#475569;font-size:0.85rem}
.rsa-ix-related a:hover{border-color:#2563eb;color:#2563eb}
.rsa-ix-card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px;margin-bottom:32px}
.rsa-ix-card{border:1px solid #e2e8f0;border-radius:10px;padding:22px;text-decoration:none;color:inherit;display:block;transition:box-shadow .15s}
.rsa-ix-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.1);border-color:#2563eb}
.rsa-ix-card h3{font-size:1.05rem;font-weight:700;color:#0f172a;margin-bottom:6px}
.rsa-ix-card p{font-size:0.85rem;color:#64748b;line-height:1.5}
.rsa-ix-tag{display:inline-block;padding:2px 8px;background:#f0fdf4;color:#166534;border-radius:4px;font-size:0.75rem;font-weight:600;margin-top:8px}
.rsa-ix-faq-item{border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin-bottom:12px}
.rsa-ix-faq-item h3{font-size:0.95rem;font-weight:700;color:#0f172a;margin-bottom:8px}
.rsa-ix-faq-item p{font-size:0.875rem;color:#334155;line-height:1.65}
.rsa-ix-faq-item a{color:#2563eb;text-decoration:none}
.rsa-ix-faq-item a:hover{text-decoration:underline}
.rsa-ix-toc{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px 24px;margin-bottom:32px}
.rsa-ix-toc h2{font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#64748b;margin-bottom:12px}
.rsa-ix-toc ul{list-style:none;display:flex;flex-wrap:wrap;gap:8px}
.rsa-ix-toc li a{padding:5px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:6px;text-decoration:none;color:#2563eb;font-size:0.85rem}
.rsa-ix-toc li a:hover{border-color:#2563eb}
.rsa-ix-plan-card{border:1px solid #e2e8f0;border-radius:10px;padding:22px;margin-bottom:14px;display:flex;align-items:flex-start;gap:16px;text-decoration:none;color:inherit;transition:box-shadow .15s}
.rsa-ix-plan-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.1);border-color:#2563eb}
.rsa-ix-plan-card .badge{display:inline-block;padding:3px 10px;border-radius:4px;font-size:0.75rem;font-weight:600;background:#dbeafe;color:#1e40af}
.rsa-ix-article-list{list-style:none}
.rsa-ix-article-item{border-bottom:1px solid #e2e8f0;padding:16px 0}
.rsa-ix-article-item:last-child{border-bottom:none}
.rsa-ix-article-item a{font-size:0.95rem;font-weight:600;color:#1e40af;text-decoration:none}
.rsa-ix-article-item a:hover{text-decoration:underline}
.rsa-ix-article-item .meta{font-size:0.8rem;color:#64748b;margin-top:4px}
.rsa-ix-cta{background:#1e3a5f;color:#fff;border-radius:10px;padding:28px 32px;margin-top:36px;text-align:center}
.rsa-ix-cta h2{font-size:1.2rem;font-weight:700;margin-bottom:8px}
.rsa-ix-cta p{font-size:0.9rem;color:#94a3b8;margin-bottom:16px}
.rsa-ix-cta a{display:inline-block;background:#2563eb;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.9rem}
.rsa-ix-cta a:hover{background:#1d4ed8}
@media(max-width:640px){
  .rsa-ix-header{padding:24px 20px}
  .rsa-ix-container{padding:24px 20px}
  .rsa-ix-stats-bar{gap:16px}
  .rsa-ix-state-cards,.rsa-ix-card-grid{grid-template-columns:1fr}
}`;
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare Insurance Carriers</h1><p>Browse all 35 Medicare insurance carriers we cover across Utah, Ohio, and Pennsylvania —
     including Medicare Advantage, Medigap, Part D, and Special Needs Plans.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">35</div><div class="lbl">Carriers</div></div>
    <div class="stat"><div class="num">8</div><div class="lbl">In Utah</div></div>
    <div class="stat"><div class="num">20</div><div class="lbl">In Ohio</div></div>
    <div class="stat"><div class="num">18</div><div class="lbl">In Pennsylvania</div></div>
  </div>

  <div class="rsa-ix-intro">
    Not every carrier operates in every state — and even within a state, plan availability varies
    by county. Each carrier profile below shows which plan types they offer, the states they serve,
    and links to their individual plans so you can compare premiums, benefits, and star ratings
    side by side.
  </div>

  <div class="section-label">All 35 carriers — A to Z</div>
  <div class="carrier-grid"><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/aetna">
  <div class="name">Aetna</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">PDP</span></div>
  <div class="note">National carrier</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/amerihealth">
  <div class="name">AmeriHealth</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">SNP</span></div>
  <div class="note">PA-focused</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/american-health-advantage-of-utah">
  <div class="name">American Health Advantage of Utah</div>
  <div class="meta"><span class="tag state">UT</span><span class="tag type">MA</span></div>
  <div class="note">Utah-only</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/anthem">
  <div class="name">Anthem</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">PPO</span></div>
  <div class="note">Midwest coverage</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/capital-blue-cross">
  <div class="name">Capital Blue Cross</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">PPO</span></div>
  <div class="note">Central/Eastern PA</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/caresource">
  <div class="name">CareSource</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">SNP</span></div>
  <div class="note">Medicaid-focused</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/cigna-healthcare">
  <div class="name">Cigna Healthcare</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">PDP</span></div>
  <div class="note">National carrier</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/clover-health">
  <div class="name">Clover Health</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">PPO</span></div>
  <div class="note">PA markets</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/communicare-advantage">
  <div class="name">CommuniCare Advantage</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">Ohio markets</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/devoted-health">
  <div class="name">Devoted Health</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">Growing regional</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/erickson-advantage">
  <div class="name">Erickson Advantage</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">Senior community focus</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/geisinger">
  <div class="name">Geisinger</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">SNP</span></div>
  <div class="note">PA regional system</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/healthspring">
  <div class="name">Healthspring</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span></div>
  <div class="note">Ohio markets</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/highmark">
  <div class="name">Highmark</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">PPO</span><span class="tag type">PDP</span></div>
  <div class="note">PA regional</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/humana">
  <div class="name">Humana</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag state">UT</span><span class="tag type">MA</span><span class="tag type">PPO</span><span class="tag type">PDP</span></div>
  <div class="note">National carrier</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/independence-blue-cross">
  <div class="name">Independence Blue Cross</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">PPO</span></div>
  <div class="note">SE Pennsylvania</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/jefferson-health-plans">
  <div class="name">Jefferson Health Plans</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">SNP</span></div>
  <div class="note">Philadelphia region</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/medical-mutual">
  <div class="name">Medical Mutual</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">PPO</span></div>
  <div class="note">Ohio-focused</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/molina-healthcare">
  <div class="name">Molina Healthcare</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">SNP</span></div>
  <div class="note">Dual eligible focus</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/mount-carmel-medigold">
  <div class="name">Mount Carmel MediGold</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">Central Ohio</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/paramount">
  <div class="name">Paramount</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">NW Ohio</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/peak-advantage">
  <div class="name">Peak Advantage</div>
  <div class="meta"><span class="tag state">UT</span><span class="tag type">MA</span></div>
  <div class="note">Utah-based</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/perennial-advantage">
  <div class="name">Perennial Advantage</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">Ohio markets</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/primetime-health-plan">
  <div class="name">PrimeTime Health Plan</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">HMO</span></div>
  <div class="note">Summit County OH</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/provider-partners">
  <div class="name">Provider Partners</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">SNP</span></div>
  <div class="note">Facility-based</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/regence-bluecross-blueshield-of-utah">
  <div class="name">Regence BlueCross BlueShield of Utah</div>
  <div class="meta"><span class="tag state">UT</span><span class="tag type">MA</span><span class="tag type">PPO</span><span class="tag type">PDP</span></div>
  <div class="note">Utah regional</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/select-health">
  <div class="name">SelectHealth</div>
  <div class="meta"><span class="tag state">UT</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">PDP</span></div>
  <div class="note">Utah regional</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/silverscript">
  <div class="name">SilverScript</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag state">UT</span><span class="tag type">PDP</span></div>
  <div class="note">CVS PDP only</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/summacare">
  <div class="name">SummaCare</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">PPO</span></div>
  <div class="note">NE Ohio</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/the-health-plan">
  <div class="name">The Health Plan</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">PPO</span></div>
  <div class="note">WV border region</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/unitedhealthcare">
  <div class="name">UnitedHealthcare</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag state">UT</span><span class="tag type">MA</span><span class="tag type">PPO</span><span class="tag type">PDP</span></div>
  <div class="note">National carrier</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/upmc">
  <div class="name">Upmc</div>
  <div class="meta"><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">HMO</span><span class="tag type">PPO</span></div>
  <div class="note">Western PA</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/valor-health-plan">
  <div class="name">Valor Health Plan</div>
  <div class="meta"><span class="tag state">UT</span><span class="tag type">MA</span></div>
  <div class="note">Utah markets</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/wellcare">
  <div class="name">Wellcare</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag state">PA</span><span class="tag type">MA</span><span class="tag type">PDP</span><span class="tag type">SNP</span></div>
  <div class="note">National, value focus</div>
</a><a class="carrier-card" href="https://www.restingsycamore.com/medicare/carriers/zing-health">
  <div class="name">Zing Health</div>
  <div class="meta"><span class="tag state">OH</span><span class="tag type">MA</span><span class="tag type">SNP</span></div>
  <div class="note">Urban dual eligible</div>
</a></div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/plan-types">Plan Types Explained</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/states/ohio">Medicare in Ohio</a>
    <a href="https://www.restingsycamore.com/medicare/states/pennsylvania">Medicare in Pennsylvania</a>
    <a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&amp;A</a>
  </div>

  
  
</div></div>`;
})();
