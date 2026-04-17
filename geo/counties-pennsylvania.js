(function(){
  var el = document.getElementById('rsa-counties-pa');
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
}
.rsa-ix-hero{background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);color:white;padding:48px 24px 40px;margin:-8px -8px 0}
.rsa-ix-hero h1{font-family:"Onest",system-ui,sans-serif;font-size:clamp(24px,4vw,36px);font-weight:700;margin:12px 0 8px;letter-spacing:-0.3px}
.rsa-ix-hero p{font-size:16px;opacity:0.85;max-width:600px;line-height:1.6;margin:0}
.rsa-ix-breadcrumb{font-size:13px;opacity:0.75;margin-bottom:8px}
.rsa-ix-breadcrumb a{color:white;text-decoration:none}
.rsa-ix-breadcrumb a:hover{text-decoration:underline}
.rsa-ix-breadcrumb span{margin:0 4px}
.rsa-ix-bc-current{opacity:0.9}`;
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/states/pennsylvania">Pennsylvania</a> <span>›</span> <span class="rsa-ix-bc-current">Counties</span></div><h1>Medicare Resources by County in Pennsylvania</h1><p>Pennsylvania counties with local Medicare plan and provider information.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">67</div><div class="lbl">Counties</div></div>
    <div class="stat"><div class="num">1</div><div class="lbl">Cities Covered</div></div>
    <div class="stat"><div class="num">216</div><div class="lbl">Medicare Plans</div></div>
  </div>

  <div class="rsa-ix-intro">
    In Medicare, your county determines which plans are available to you — Medicare
    Advantage plans are approved county by county, not statewide. Knowing your county
    is the first step to comparing your options. Each county page below shows plan
    availability, local doctors, and nearby care facilities.
  </div>

  <div class="section-label">All Pennsylvania counties — A to Z</div>
  <div class="alpha-nav"><a href="#A">A</a><a href="#B">B</a><a href="#C">C</a><a href="#D">D</a><a href="#E">E</a><a href="#F">F</a><a href="#G">G</a><a href="#H">H</a><a href="#I">I</a><a href="#J">J</a><a href="#L">L</a><a href="#M">M</a><a href="#N">N</a><a href="#P">P</a><a href="#S">S</a><a href="#T">T</a><a href="#U">U</a><a href="#V">V</a><a href="#W">W</a><a href="#Y">Y</a></div>
  <div class="letter-block" id="A">
  <div class="rsa-ix-letter-heading">A</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/adams-pa">Adams</a><a href="https://www.restingsycamore.com/medicare/counties/allegheny-pa">Allegheny</a><a href="https://www.restingsycamore.com/medicare/counties/armstrong-pa">Armstrong</a></div>
</div><div class="letter-block" id="B">
  <div class="rsa-ix-letter-heading">B</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/beaver-pa">Beaver</a><a href="https://www.restingsycamore.com/medicare/counties/bedford-pa">Bedford</a><a href="https://www.restingsycamore.com/medicare/counties/berks-pa">Berks</a><a href="https://www.restingsycamore.com/medicare/counties/blair-pa">Blair</a><a href="https://www.restingsycamore.com/medicare/counties/bradford-pa">Bradford</a><a href="https://www.restingsycamore.com/medicare/counties/bucks-pa">Bucks</a><a href="https://www.restingsycamore.com/medicare/counties/butler-pa">Butler</a></div>
</div><div class="letter-block" id="C">
  <div class="rsa-ix-letter-heading">C</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/cambria-pa">Cambria</a><a href="https://www.restingsycamore.com/medicare/counties/cameron-pa">Cameron</a><a href="https://www.restingsycamore.com/medicare/counties/carbon-pa">Carbon</a><a href="https://www.restingsycamore.com/medicare/counties/centre-pa">Centre</a><a href="https://www.restingsycamore.com/medicare/counties/chester-pa">Chester</a><a href="https://www.restingsycamore.com/medicare/counties/clarion-pa">Clarion</a><a href="https://www.restingsycamore.com/medicare/counties/clearfield-pa">Clearfield</a><a href="https://www.restingsycamore.com/medicare/counties/clinton-pa">Clinton</a><a href="https://www.restingsycamore.com/medicare/counties/columbia-pa">Columbia</a><a href="https://www.restingsycamore.com/medicare/counties/crawford-pa">Crawford</a><a href="https://www.restingsycamore.com/medicare/counties/cumberland-pa">Cumberland</a></div>
</div><div class="letter-block" id="D">
  <div class="rsa-ix-letter-heading">D</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/dauphin-pa">Dauphin</a><a href="https://www.restingsycamore.com/medicare/counties/delaware-pa">Delaware</a></div>
</div><div class="letter-block" id="E">
  <div class="rsa-ix-letter-heading">E</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/elk-pa">Elk</a><a href="https://www.restingsycamore.com/medicare/counties/erie-pa">Erie</a></div>
</div><div class="letter-block" id="F">
  <div class="rsa-ix-letter-heading">F</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/fayette-pa">Fayette</a><a href="https://www.restingsycamore.com/medicare/counties/forest-pa">Forest</a><a href="https://www.restingsycamore.com/medicare/counties/franklin-pa">Franklin</a><a href="https://www.restingsycamore.com/medicare/counties/fulton-pa">Fulton</a></div>
</div><div class="letter-block" id="G">
  <div class="rsa-ix-letter-heading">G</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/greene-pa">Greene</a></div>
</div><div class="letter-block" id="H">
  <div class="rsa-ix-letter-heading">H</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/huntingdon-pa">Huntingdon</a></div>
</div><div class="letter-block" id="I">
  <div class="rsa-ix-letter-heading">I</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/indiana-pa">Indiana</a></div>
</div><div class="letter-block" id="J">
  <div class="rsa-ix-letter-heading">J</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/jefferson-pa">Jefferson</a><a href="https://www.restingsycamore.com/medicare/counties/juniata-pa">Juniata</a></div>
</div><div class="letter-block" id="L">
  <div class="rsa-ix-letter-heading">L</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/lackawanna-pa">Lackawanna</a><a href="https://www.restingsycamore.com/medicare/counties/lancaster-pa">Lancaster</a><a href="https://www.restingsycamore.com/medicare/counties/lawrence-pa">Lawrence</a><a href="https://www.restingsycamore.com/medicare/counties/lebanon-pa">Lebanon</a><a href="https://www.restingsycamore.com/medicare/counties/lehigh-pa">Lehigh</a><a href="https://www.restingsycamore.com/medicare/counties/luzerne-pa">Luzerne</a><a href="https://www.restingsycamore.com/medicare/counties/lycoming-pa">Lycoming</a></div>
</div><div class="letter-block" id="M">
  <div class="rsa-ix-letter-heading">M</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/mckean-pa">Mckean</a><a href="https://www.restingsycamore.com/medicare/counties/mercer-pa">Mercer</a><a href="https://www.restingsycamore.com/medicare/counties/mifflin-pa">Mifflin</a><a href="https://www.restingsycamore.com/medicare/counties/monroe-pa">Monroe</a><a href="https://www.restingsycamore.com/medicare/counties/montgomery-pa">Montgomery</a><a href="https://www.restingsycamore.com/medicare/counties/montour-pa">Montour</a></div>
</div><div class="letter-block" id="N">
  <div class="rsa-ix-letter-heading">N</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/northampton-pa">Northampton</a><a href="https://www.restingsycamore.com/medicare/counties/northumberland-pa">Northumberland</a></div>
</div><div class="letter-block" id="P">
  <div class="rsa-ix-letter-heading">P</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/perry-pa">Perry</a><a href="https://www.restingsycamore.com/medicare/counties/philadelphia-pa">Philadelphia</a><a href="https://www.restingsycamore.com/medicare/counties/pike-pa">Pike</a><a href="https://www.restingsycamore.com/medicare/counties/potter-pa">Potter</a></div>
</div><div class="letter-block" id="S">
  <div class="rsa-ix-letter-heading">S</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/schuylkill-pa">Schuylkill</a><a href="https://www.restingsycamore.com/medicare/counties/snyder-pa">Snyder</a><a href="https://www.restingsycamore.com/medicare/counties/somerset-pa">Somerset</a><a href="https://www.restingsycamore.com/medicare/counties/sullivan-pa">Sullivan</a><a href="https://www.restingsycamore.com/medicare/counties/susquehanna-pa">Susquehanna</a></div>
</div><div class="letter-block" id="T">
  <div class="rsa-ix-letter-heading">T</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/tioga-pa">Tioga</a></div>
</div><div class="letter-block" id="U">
  <div class="rsa-ix-letter-heading">U</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/union-pa">Union</a></div>
</div><div class="letter-block" id="V">
  <div class="rsa-ix-letter-heading">V</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/venango-pa">Venango</a></div>
</div><div class="letter-block" id="W">
  <div class="rsa-ix-letter-heading">W</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/warren-pa">Warren</a><a href="https://www.restingsycamore.com/medicare/counties/washington-pa">Washington</a><a href="https://www.restingsycamore.com/medicare/counties/wayne-pa">Wayne</a><a href="https://www.restingsycamore.com/medicare/counties/westmoreland-pa">Westmoreland</a><a href="https://www.restingsycamore.com/medicare/counties/wyoming-pa">Wyoming</a></div>
</div><div class="letter-block" id="Y">
  <div class="rsa-ix-letter-heading">Y</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/york-pa">York</a></div>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/states/pennsylvania">Medicare in Pennsylvania</a>
    <a href="https://www.restingsycamore.com/medicare/states/pennsylvania/cities">Pennsylvania Cities</a>
    <a href="https://www.restingsycamore.com/medicare/states/pennsylvania/zip-codes">Pennsylvania ZIP Codes</a>
    <a href="https://www.restingsycamore.com/medicare/plans/pennsylvania">Pennsylvania Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/carriers">Insurance Carriers</a>
  </div>

  
  
</div></div>`;
})();
