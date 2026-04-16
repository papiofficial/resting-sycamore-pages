(function(){
  var el = document.getElementById('rsa-plan-types-index');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare Plan Types Explained</h1><p>Medicare isn't one-size-fits-all. There are 13 distinct plan types across
     Medicare Advantage, Medigap, and Part D — each with different costs, networks,
     and tradeoffs. Find the right starting point below.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">13</div><div class="lbl">Plan Types</div></div>
    <div class="stat"><div class="num">7</div><div class="lbl">Medicare Advantage</div></div>
    <div class="stat"><div class="num">5</div><div class="lbl">Medigap / Supplement</div></div>
    <div class="stat"><div class="num">1</div><div class="lbl">Part D (Drug)</div></div>
  </div>

  <div class="rsa-ix-intro">
    <strong>Not sure where to start?</strong> The biggest choice in Medicare is between
    <strong>Medicare Advantage</strong> (replaces Original Medicare, bundled benefits, network-based)
    and <strong>Medigap + Part D</strong> (keeps Original Medicare, fills gaps, unlimited provider choice).
    Pick your plan type below to see which carriers offer it and what's available in your area.
  </div>

  <div class="pt-group">
  <div class="pt-group-label">🏥 Medicare Advantage (7 plan types)</div>
  <div class="pt-grid"><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-hmo" style="--color:#7c3aed">
  <div class="icon">🏥</div>
  <div class="display">Medicare Advantage HMO</div>
  <div class="desc">Network-based plans requiring a primary care doctor and referrals. Usually $0 premium. Best for cost-conscious enrollees who stay in-network.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-hmo-pos" style="--color:#0891b2">
  <div class="icon">🔄</div>
  <div class="display">Medicare Advantage HMO-POS</div>
  <div class="desc">HMO with a Point-of-Service option — primarily in-network like an HMO but with limited out-of-network coverage for added flexibility.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-pffs" style="--color:#059669">
  <div class="icon">📋</div>
  <div class="display">Medicare Advantage PFFS</div>
  <div class="desc">Private Fee-for-Service plans set their own payment rates. Any provider who accepts the plan's terms can treat you — no network required.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-ppo" style="--color:#2563eb">
  <div class="icon">🔓</div>
  <div class="display">Medicare Advantage PPO</div>
  <div class="desc">Flexible network plans — see any doctor, in or out of network. Higher premiums than HMOs but more freedom. Good for people who travel or want choice.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-prescription-drug-hmo" style="--color:#9333ea">
  <div class="icon">💊</div>
  <div class="display">Medicare Advantage + Rx HMO (MAPD)</div>
  <div class="desc">HMO plan that bundles Medicare Advantage with Part D drug coverage. One plan, one card, one premium for combined medical and drug benefits.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-prescription-drug-ppo" style="--color:#1d4ed8">
  <div class="icon">💊</div>
  <div class="display">Medicare Advantage + Rx PPO (MAPD)</div>
  <div class="desc">PPO plan with bundled Part D drug coverage. More flexibility than an HMO-based MAPD, with in- and out-of-network options.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-advantage-special-needs-plan" style="--color:#dc2626">
  <div class="icon">⭐</div>
  <div class="display">Special Needs Plan (SNP)</div>
  <div class="desc">Plans for people with specific conditions or dual Medicare-Medicaid eligibility. Tailored benefits and care coordination for complex needs.</div>
</a></div>
</div><div class="pt-group">
  <div class="pt-group-label">🛡️ Medigap (5 plan types)</div>
  <div class="pt-grid"><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-a" style="--color:#4b5563">
  <div class="icon">🛡️</div>
  <div class="display">Medicare Supplement Plan A</div>
  <div class="desc">The most basic Medigap plan — covers only the core Medicare benefits. Lowest premium but least coverage of all Medigap plans.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-b" style="--color:#6b7280">
  <div class="icon">🛡️</div>
  <div class="display">Medicare Supplement Plan B</div>
  <div class="desc">Adds Part A deductible coverage to Plan A's core benefits. A step up from Plan A but still limited compared to Plans G and N.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-d" style="--color:#78716c">
  <div class="icon">🛡️</div>
  <div class="display">Medicare Supplement Plan D</div>
  <div class="desc">Covers hospital and skilled nursing coinsurance plus foreign emergency care. Does not cover the Part B deductible or excess charges.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-g" style="--color:#0f766e">
  <div class="icon">🛡️</div>
  <div class="display">Medicare Supplement Plan G</div>
  <div class="desc">The most popular Medigap plan. Covers everything Plan F covers except the Part B deductible. Pairs with Original Medicare for near-comprehensive coverage.</div>
</a><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-n" style="--color:#0369a1">
  <div class="icon">🛡️</div>
  <div class="display">Medicare Supplement Plan N</div>
  <div class="desc">Lower-premium alternative to Plan G. Covers most gaps but requires small copays for office and ER visits. Great value for healthy enrollees.</div>
</a></div>
</div><div class="pt-group">
  <div class="pt-group-label">💊 Part D (1 plan types)</div>
  <div class="pt-grid"><a class="pt-card" href="https://www.restingsycamore.com/medicare/plan-types/part-d-prescription-drug-plan" style="--color:#ea580c">
  <div class="icon">💊</div>
  <div class="display">Part D Prescription Drug Plan</div>
  <div class="desc">Stand-alone drug coverage that pairs with Original Medicare or Medigap. Required to avoid the Part D late enrollment penalty.</div>
</a></div>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/carriers">All Insurance Carriers</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
    <a href="https://www.restingsycamore.com/resources/calculators/medicare-advantage-vs-medigap-cost">MA vs Medigap Calculator</a>
    <a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">Medicare Advantage Q&amp;A</a>
    <a href="https://www.restingsycamore.com/medicare/questions/supplement">Medigap Q&amp;A</a>
    <a href="https://www.restingsycamore.com/medicare/questions/part-d">Part D Q&amp;A</a>
  </div>

  
  
</div></div>`;
})();
