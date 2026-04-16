(function(){
  var el = document.getElementById('rsa-plans-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="page-header" style="background:#dc2626;">
  <h1>Medicare Plans in Utah</h1>
  <p>Browse 33 Medicare Advantage, Supplement, and Part D plans available
     to Utah residents from 6 insurance carriers.</p>
</div>
<div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">33</div><div class="lbl">Total Plans</div></div>
    <div class="stat"><div class="num">6</div><div class="lbl">Carriers</div></div>
    <div class="stat"><div class="num">10</div><div class="lbl">SNP Plans</div></div>
    <div class="stat"><div class="num">0</div><div class="lbl">Part D Plans</div></div>
  </div>

  <div class="rsa-ix-intro">
    Medicare plan availability varies by county — not every plan below is available
    in every part of Utah. Click any plan to see its service area, premiums,
    copays, star rating, and benefits. Use the carrier navigation below to jump
    directly to plans from a specific insurer.
  </div>

  <div class="section-label">Jump to a carrier</div>
  <div class="carrier-nav"><a href="#unitedhealthcare">UnitedHealthcare</a><a href="#selecthealth">SelectHealth</a><a href="#devoted-health">Devoted Health</a><a href="#regence-bluecross-blueshield-of-utah">Regence BlueCross BlueShield of Utah</a><a href="#american-health-advantage-of-utah">American Health Advantage of Utah</a><a href="#other">Other</a></div>

  <div class="section-label">All Utah Medicare plans — by carrier</div>
  <div class="carrier-section" id="unitedhealthcare">
  <div class="carrier-header">
    <span class="carrier-name">UnitedHealthcare</span>
    <a class="carrier-link" href="https://www.restingsycamore.com/medicare/carriers/unitedhealthcare">View carrier →</a>
    <span class="plan-count">9 plans</span>
  </div>
  <ul class="plan-list"><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-essentials-from-uhc-ut-4-hmo-pos-h4604-011"><span class="plan-name">AARP Medicare Advantage Essentials from UHC UT</span><span class="plan-type hmo">HMO-POS</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-extras-valuerx-ut-7-hmo-pos-h4604-018"><span class="plan-name">AARP Medicare Advantage Extras ValueRx UT</span><span class="plan-type hmo">HMO-POS</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-giveback-from-uhc-ut-9-ppo-h2001-131"><span class="plan-name">AARP Medicare Advantage Giveback from UHC UT</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-patriot-no-rx-ut-ma01-hmo-pos-h4604-005"><span class="plan-name">AARP Medicare Advantage Patriot No Rx UT</span><span class="plan-type hmo">HMO-POS</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-from-uhc-ut-0001-ppo-h2001-017"><span class="plan-name">AARP Medicare Advantage from UHC UT</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-from-uhc-ut-0002-ppo-h2001-023"><span class="plan-name">AARP Medicare Advantage from UHC UT</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-from-uhc-ut-0005-hmo-pos-h4604-016"><span class="plan-name">AARP Medicare Advantage from UHC UT</span><span class="plan-type hmo">HMO-POS</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-from-uhc-ut-0003-hmo-pos-h4604-003"><span class="plan-name">AARP Medicare Advantage from UHC UT</span><span class="plan-type hmo">HMO-POS</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/aarp-medicare-advantage-from-uhc-ut-0008-ppo-h2001-128"><span class="plan-name">AARP Medicare Advantage from UHC UT</span><span class="plan-type ppo">PPO</span></a></li></ul>
</div><div class="carrier-section" id="selecthealth">
  <div class="carrier-header">
    <span class="carrier-name">SelectHealth</span>
    <a class="carrier-link" href="https://www.restingsycamore.com/medicare/carriers/select-health">View carrier →</a>
    <span class="plan-count">8 plans</span>
  </div>
  <ul class="plan-list"><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-kroger-hmo-h1994-022"><span class="plan-name">Select Health Medicare + Kroger (HMO) by Select Health</span><span class="plan-type hmo">HMO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-choice-ppo-h2246-018"><span class="plan-name">Select Health Medicare Choice (PPO) by Select Health</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-classic-hmo-h1994-002"><span class="plan-name">Select Health Medicare Classic (HMO) by Select Health</span><span class="plan-type hmo">HMO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-dual-hmo-d-snp-h1994-015"><span class="plan-name">Select Health Medicare Dual (HMO D</span><span class="plan-type snp">Dual SNP (D-SNP)</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-enhanced-hmo-h1994-007"><span class="plan-name">Select Health Medicare Enhanced (HMO) by Select Health</span><span class="plan-type hmo">HMO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-essential-hmo-h1994-017"><span class="plan-name">Select Health Medicare Essential (HMO) by Select Health</span><span class="plan-type hmo">HMO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-essential-hmo-h1994-001"><span class="plan-name">Select Health Medicare Essential (HMO) by Select Health</span><span class="plan-type hmo">HMO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/select-health-medicare-norx-hmo-h1994-016"><span class="plan-name">Select Health Medicare NoRx (HMO) by Select Health</span><span class="plan-type hmo">HMO</span></a></li></ul>
</div><div class="carrier-section" id="devoted-health">
  <div class="carrier-header">
    <span class="carrier-name">Devoted Health</span>
    <a class="carrier-link" href="https://www.restingsycamore.com/medicare/carriers/devoted-health">View carrier →</a>
    <span class="plan-count">5 plans</span>
  </div>
  <ul class="plan-list"><li><a href="https://www.restingsycamore.com/medicare/plans/devoted-choice-001-ut-ppo-h4473-001"><span class="plan-name">DEVOTED CHOICE 001 UT (PPO) by Devoted Health</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/devoted-choice-giveback-002-ut-ppo-h4473-002"><span class="plan-name">DEVOTED CHOICE GIVEBACK 002 UT (PPO) by Devoted Health</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/devoted-dual-choice-full-004-ut-ppo-d-snp-h4473-004"><span class="plan-name">DEVOTED DUAL CHOICE FULL 004 UT (PPO D</span><span class="plan-type snp">Dual SNP (D-SNP)</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/devoted-c-snp-choice-plus-007-ut-ppo-c-snp-h4473007000"><span class="plan-name">Devoted C Snp Choice Plus Ppo C Snp H4473007000</span><span class="plan-type snp">Chronic Condition SNP</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/devoted-c-snp-choice-premium-003-ut-ppo-c-snp-h4473-003"><span class="plan-name">Devoted C Snp Choice Premium Ppo C Snp</span><span class="plan-type snp">Chronic Condition SNP</span></a></li></ul>
</div><div class="carrier-section" id="regence-bluecross-blueshield-of-utah">
  <div class="carrier-header">
    <span class="carrier-name">Regence BlueCross BlueShield of Utah</span>
    <a class="carrier-link" href="https://www.restingsycamore.com/medicare/carriers/regence-bluecross-blueshield-of-utah">View carrier →</a>
    <span class="plan-count">3 plans</span>
  </div>
  <ul class="plan-list"><li><a href="https://www.restingsycamore.com/medicare/plans/regence-medadvantage-rx-classic-ppo-h4605-002"><span class="plan-name">Regence MedAdvantage + Rx Classic (PPO) by Regence BlueCross BlueShield of Utah</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/regence-medadvantage-rx-enhanced-ppo-h4605-004"><span class="plan-name">Regence MedAdvantage + Rx Enhanced (PPO) by Regence BlueCross BlueShield of Utah</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/regence-valiance-ppo-h4605-001"><span class="plan-name">Regence Valiance (PPO) by Regence BlueCross BlueShield of Utah</span><span class="plan-type ppo">PPO</span></a></li></ul>
</div><div class="carrier-section" id="american-health-advantage-of-utah">
  <div class="carrier-header">
    <span class="carrier-name">American Health Advantage of Utah</span>
    <a class="carrier-link" href="https://www.restingsycamore.com/medicare/carriers/american-health-advantage-of-utah">View carrier →</a>
    <span class="plan-count">1 plans</span>
  </div>
  <ul class="plan-list"><li><a href="https://www.restingsycamore.com/medicare/plans/american-health-advantage-of-utah-hmo-i-snp-h4232-001"><span class="plan-name">American Health Advantage of Utah (HMO I</span><span class="plan-type snp">Institutional SNP</span></a></li></ul>
</div><div class="carrier-section" id="other">
  <div class="carrier-header">
    <span class="carrier-name">Other</span>
    
    <span class="plan-count">7 plans</span>
  </div>
  <ul class="plan-list"><li><a href="https://www.restingsycamore.com/medicare/plans/freedom-blue-ppo-valor-ppo-h3916056000"><span class="plan-name">Freedom Blue PPO Valor (PPO) by Highmark</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/freedom-blue-ppo-valor-ppo-h3916067000"><span class="plan-name">Freedom Blue PPO Valor (PPO) by Highmark</span><span class="plan-type ppo">PPO</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/uhc-complete-care-ut-6-hmo-pos-c-snp-h4604-017"><span class="plan-name">UHC Complete Care UT</span><span class="plan-type snp">Chronic Condition SNP</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/uhc-dual-complete-ut-v001-ppo-d-snp-h2001-048"><span class="plan-name">UHC Dual Complete UT</span><span class="plan-type snp">Dual SNP (D-SNP)</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/uhc-dual-complete-ut-s001-ppo-d-snp-h2001-047"><span class="plan-name">UHC Dual Complete UT</span><span class="plan-type snp">Dual SNP (D-SNP)</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/uhc-dual-complete-ut-s2-hmo-pos-d-snp-h4604-026"><span class="plan-name">UHC Dual Complete UT</span><span class="plan-type snp">Dual SNP (D-SNP)</span></a></li><li><a href="https://www.restingsycamore.com/medicare/plans/uhc-nursing-home-plan-ut-f001-ppo-i-snp-h0710-051"><span class="plan-name">UHC Nursing Home Plan UT</span><span class="plan-type snp">Institutional SNP</span></a></li></ul>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/carriers">All Carriers</a>
    <a href="https://www.restingsycamore.com/medicare/plan-types">Plan Types Explained</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/counties">Utah Counties</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
    <a href="https://www.restingsycamore.com/resources/calculators/medicare-advantage-vs-medigap-cost">MA vs Medigap Calculator</a>
  </div>

  
  
</div></div>`;
})();
