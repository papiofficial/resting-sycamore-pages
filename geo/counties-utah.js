(function(){
  var el = document.getElementById('rsa-counties-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare by County in Utah</h1><p>Medicare plan availability, doctor networks, and coverage options all vary by county. Browse all 29 Utah counties to find plans and resources near you.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">29</div><div class="lbl">Counties</div></div>
    <div class="stat"><div class="num">1</div><div class="lbl">Cities Covered</div></div>
    <div class="stat"><div class="num">20</div><div class="lbl">Medicare Plans</div></div>
  </div>

  <div class="rsa-ix-intro">
    In Medicare, your county determines which plans are available to you — Medicare
    Advantage plans are approved county by county, not statewide. Knowing your county
    is the first step to comparing your options. Each county page below shows plan
    availability, local doctors, and nearby care facilities.
  </div>

  <div class="section-label">All Utah counties — A to Z</div>
  <div class="alpha-nav"><a href="#B">B</a><a href="#C">C</a><a href="#D">D</a><a href="#E">E</a><a href="#G">G</a><a href="#I">I</a><a href="#J">J</a><a href="#K">K</a><a href="#M">M</a><a href="#P">P</a><a href="#R">R</a><a href="#S">S</a><a href="#T">T</a><a href="#U">U</a><a href="#W">W</a></div>
  <div class="letter-block" id="B">
  <div class="rsa-ix-letter-heading">B</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/beaver-ut">Beaver</a><a href="https://www.restingsycamore.com/medicare/counties/box-elder-ut">Box Elder</a></div>
</div><div class="letter-block" id="C">
  <div class="rsa-ix-letter-heading">C</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/cache-ut">Cache</a><a href="https://www.restingsycamore.com/medicare/counties/carbon-ut">Carbon</a></div>
</div><div class="letter-block" id="D">
  <div class="rsa-ix-letter-heading">D</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/daggett-ut">Daggett</a><a href="https://www.restingsycamore.com/medicare/counties/davis-ut">Davis</a><a href="https://www.restingsycamore.com/medicare/counties/duchesne-ut">Duchesne</a></div>
</div><div class="letter-block" id="E">
  <div class="rsa-ix-letter-heading">E</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/emery-ut">Emery</a></div>
</div><div class="letter-block" id="G">
  <div class="rsa-ix-letter-heading">G</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/garfield-ut">Garfield</a><a href="https://www.restingsycamore.com/medicare/counties/grand-ut">Grand</a></div>
</div><div class="letter-block" id="I">
  <div class="rsa-ix-letter-heading">I</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/iron-ut">Iron</a></div>
</div><div class="letter-block" id="J">
  <div class="rsa-ix-letter-heading">J</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/juab-ut">Juab</a></div>
</div><div class="letter-block" id="K">
  <div class="rsa-ix-letter-heading">K</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/kane-ut">Kane</a></div>
</div><div class="letter-block" id="M">
  <div class="rsa-ix-letter-heading">M</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/millard-ut">Millard</a><a href="https://www.restingsycamore.com/medicare/counties/morgan-ut">Morgan</a></div>
</div><div class="letter-block" id="P">
  <div class="rsa-ix-letter-heading">P</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/piute-ut">Piute</a></div>
</div><div class="letter-block" id="R">
  <div class="rsa-ix-letter-heading">R</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/rich-ut">Rich</a></div>
</div><div class="letter-block" id="S">
  <div class="rsa-ix-letter-heading">S</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/salt-lake-ut">Salt Lake</a><a href="https://www.restingsycamore.com/medicare/counties/san-juan-ut">San Juan</a><a href="https://www.restingsycamore.com/medicare/counties/sanpete-ut">Sanpete</a><a href="https://www.restingsycamore.com/medicare/counties/sevier-ut">Sevier</a><a href="https://www.restingsycamore.com/medicare/counties/summit-ut">Summit</a></div>
</div><div class="letter-block" id="T">
  <div class="rsa-ix-letter-heading">T</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/tooele-ut">Tooele</a></div>
</div><div class="letter-block" id="U">
  <div class="rsa-ix-letter-heading">U</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/uintah-ut">Uintah</a><a href="https://www.restingsycamore.com/medicare/counties/utah-ut">Utah</a></div>
</div><div class="letter-block" id="W">
  <div class="rsa-ix-letter-heading">W</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/wasatch-ut">Wasatch</a><a href="https://www.restingsycamore.com/medicare/counties/washington-ut">Washington</a><a href="https://www.restingsycamore.com/medicare/counties/wayne-ut">Wayne</a><a href="https://www.restingsycamore.com/medicare/counties/weber-ut">Weber</a></div>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/cities">Utah Cities</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/zip-codes">Utah ZIP Codes</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/carriers">Insurance Carriers</a>
  </div>

  
  
</div></div>`;
})();
