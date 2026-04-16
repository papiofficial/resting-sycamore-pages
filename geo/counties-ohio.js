(function(){
  var el = document.getElementById('rsa-counties-ohio');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare by County in Ohio</h1><p>Medicare plan availability, doctor networks, and coverage options all vary by county. Browse all 88 Ohio counties to find plans and resources near you.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">88</div><div class="lbl">Counties</div></div>
    <div class="stat"><div class="num">1</div><div class="lbl">Cities Covered</div></div>
    <div class="stat"><div class="num">175</div><div class="lbl">Medicare Plans</div></div>
  </div>

  <div class="rsa-ix-intro">
    In Medicare, your county determines which plans are available to you — Medicare
    Advantage plans are approved county by county, not statewide. Knowing your county
    is the first step to comparing your options. Each county page below shows plan
    availability, local doctors, and nearby care facilities.
  </div>

  <div class="section-label">All Ohio counties — A to Z</div>
  <div class="alpha-nav"><a href="#A">A</a><a href="#B">B</a><a href="#C">C</a><a href="#D">D</a><a href="#E">E</a><a href="#F">F</a><a href="#G">G</a><a href="#H">H</a><a href="#J">J</a><a href="#K">K</a><a href="#L">L</a><a href="#M">M</a><a href="#N">N</a><a href="#O">O</a><a href="#P">P</a><a href="#R">R</a><a href="#S">S</a><a href="#T">T</a><a href="#U">U</a><a href="#V">V</a><a href="#W">W</a></div>
  <div class="letter-block" id="A">
  <div class="rsa-ix-letter-heading">A</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/adams-oh">Adams</a><a href="https://www.restingsycamore.com/medicare/counties/allen-oh">Allen</a><a href="https://www.restingsycamore.com/medicare/counties/ashland-oh">Ashland</a><a href="https://www.restingsycamore.com/medicare/counties/ashtabula-oh">Ashtabula</a><a href="https://www.restingsycamore.com/medicare/counties/athens-oh">Athens</a><a href="https://www.restingsycamore.com/medicare/counties/auglaize-oh">Auglaize</a></div>
</div><div class="letter-block" id="B">
  <div class="rsa-ix-letter-heading">B</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/belmont-oh">Belmont</a><a href="https://www.restingsycamore.com/medicare/counties/brown-oh">Brown</a><a href="https://www.restingsycamore.com/medicare/counties/butler-oh">Butler</a></div>
</div><div class="letter-block" id="C">
  <div class="rsa-ix-letter-heading">C</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/carroll-oh">Carroll</a><a href="https://www.restingsycamore.com/medicare/counties/champaign-oh">Champaign</a><a href="https://www.restingsycamore.com/medicare/counties/clark-oh">Clark</a><a href="https://www.restingsycamore.com/medicare/counties/clermont-oh">Clermont</a><a href="https://www.restingsycamore.com/medicare/counties/clinton-oh">Clinton</a><a href="https://www.restingsycamore.com/medicare/counties/columbiana-oh">Columbiana</a><a href="https://www.restingsycamore.com/medicare/counties/coshocton-oh">Coshocton</a><a href="https://www.restingsycamore.com/medicare/counties/crawford-oh">Crawford</a><a href="https://www.restingsycamore.com/medicare/counties/cuyahoga-oh">Cuyahoga</a></div>
</div><div class="letter-block" id="D">
  <div class="rsa-ix-letter-heading">D</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/darke-oh">Darke</a><a href="https://www.restingsycamore.com/medicare/counties/defiance-oh">Defiance</a><a href="https://www.restingsycamore.com/medicare/counties/delaware-oh">Delaware</a></div>
</div><div class="letter-block" id="E">
  <div class="rsa-ix-letter-heading">E</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/erie-oh">Erie</a></div>
</div><div class="letter-block" id="F">
  <div class="rsa-ix-letter-heading">F</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/fairfield-oh">Fairfield</a><a href="https://www.restingsycamore.com/medicare/counties/fayette-oh">Fayette</a><a href="https://www.restingsycamore.com/medicare/counties/franklin-oh">Franklin</a><a href="https://www.restingsycamore.com/medicare/counties/fulton-oh">Fulton</a></div>
</div><div class="letter-block" id="G">
  <div class="rsa-ix-letter-heading">G</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/gallia-oh">Gallia</a><a href="https://www.restingsycamore.com/medicare/counties/geauga-oh">Geauga</a><a href="https://www.restingsycamore.com/medicare/counties/greene-oh">Greene</a><a href="https://www.restingsycamore.com/medicare/counties/guernsey-oh">Guernsey</a></div>
</div><div class="letter-block" id="H">
  <div class="rsa-ix-letter-heading">H</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/hamilton-oh">Hamilton</a><a href="https://www.restingsycamore.com/medicare/counties/hancock-oh">Hancock</a><a href="https://www.restingsycamore.com/medicare/counties/hardin-oh">Hardin</a><a href="https://www.restingsycamore.com/medicare/counties/harrison-oh">Harrison</a><a href="https://www.restingsycamore.com/medicare/counties/henry-oh">Henry</a><a href="https://www.restingsycamore.com/medicare/counties/highland-oh">Highland</a><a href="https://www.restingsycamore.com/medicare/counties/hocking-oh">Hocking</a><a href="https://www.restingsycamore.com/medicare/counties/holmes-oh">Holmes</a><a href="https://www.restingsycamore.com/medicare/counties/huron-oh">Huron</a></div>
</div><div class="letter-block" id="J">
  <div class="rsa-ix-letter-heading">J</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/jackson-oh">Jackson</a><a href="https://www.restingsycamore.com/medicare/counties/jefferson-oh">Jefferson</a></div>
</div><div class="letter-block" id="K">
  <div class="rsa-ix-letter-heading">K</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/knox-oh">Knox</a></div>
</div><div class="letter-block" id="L">
  <div class="rsa-ix-letter-heading">L</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/lake-oh">Lake</a><a href="https://www.restingsycamore.com/medicare/counties/lawrence-oh">Lawrence</a><a href="https://www.restingsycamore.com/medicare/counties/licking-oh">Licking</a><a href="https://www.restingsycamore.com/medicare/counties/logan-oh">Logan</a><a href="https://www.restingsycamore.com/medicare/counties/lorain-oh">Lorain</a><a href="https://www.restingsycamore.com/medicare/counties/lucas-oh">Lucas</a></div>
</div><div class="letter-block" id="M">
  <div class="rsa-ix-letter-heading">M</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/madison-oh">Madison</a><a href="https://www.restingsycamore.com/medicare/counties/mahoning-oh">Mahoning</a><a href="https://www.restingsycamore.com/medicare/counties/marion-oh">Marion</a><a href="https://www.restingsycamore.com/medicare/counties/medina-oh">Medina</a><a href="https://www.restingsycamore.com/medicare/counties/meigs-oh">Meigs</a><a href="https://www.restingsycamore.com/medicare/counties/mercer-oh">Mercer</a><a href="https://www.restingsycamore.com/medicare/counties/miami-oh">Miami</a><a href="https://www.restingsycamore.com/medicare/counties/monroe-oh">Monroe</a><a href="https://www.restingsycamore.com/medicare/counties/montgomery-oh">Montgomery</a><a href="https://www.restingsycamore.com/medicare/counties/morgan-oh">Morgan</a><a href="https://www.restingsycamore.com/medicare/counties/morrow-oh">Morrow</a><a href="https://www.restingsycamore.com/medicare/counties/muskingum-oh">Muskingum</a></div>
</div><div class="letter-block" id="N">
  <div class="rsa-ix-letter-heading">N</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/noble-oh">Noble</a></div>
</div><div class="letter-block" id="O">
  <div class="rsa-ix-letter-heading">O</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/ottawa-oh">Ottawa</a></div>
</div><div class="letter-block" id="P">
  <div class="rsa-ix-letter-heading">P</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/paulding-oh">Paulding</a><a href="https://www.restingsycamore.com/medicare/counties/perry-oh">Perry</a><a href="https://www.restingsycamore.com/medicare/counties/pickaway-oh">Pickaway</a><a href="https://www.restingsycamore.com/medicare/counties/pike-oh">Pike</a><a href="https://www.restingsycamore.com/medicare/counties/portage-oh">Portage</a><a href="https://www.restingsycamore.com/medicare/counties/preble-oh">Preble</a><a href="https://www.restingsycamore.com/medicare/counties/putnam-oh">Putnam</a></div>
</div><div class="letter-block" id="R">
  <div class="rsa-ix-letter-heading">R</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/richland-oh">Richland</a><a href="https://www.restingsycamore.com/medicare/counties/ross-oh">Ross</a></div>
</div><div class="letter-block" id="S">
  <div class="rsa-ix-letter-heading">S</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/sandusky-oh">Sandusky</a><a href="https://www.restingsycamore.com/medicare/counties/scioto-oh">Scioto</a><a href="https://www.restingsycamore.com/medicare/counties/seneca-oh">Seneca</a><a href="https://www.restingsycamore.com/medicare/counties/shelby-oh">Shelby</a><a href="https://www.restingsycamore.com/medicare/counties/stark-oh">Stark</a><a href="https://www.restingsycamore.com/medicare/counties/summit-oh">Summit</a></div>
</div><div class="letter-block" id="T">
  <div class="rsa-ix-letter-heading">T</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/trumbull-oh">Trumbull</a><a href="https://www.restingsycamore.com/medicare/counties/tuscarawas-oh">Tuscarawas</a></div>
</div><div class="letter-block" id="U">
  <div class="rsa-ix-letter-heading">U</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/union-oh">Union</a></div>
</div><div class="letter-block" id="V">
  <div class="rsa-ix-letter-heading">V</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/van-wert-oh">Van Wert</a><a href="https://www.restingsycamore.com/medicare/counties/vinton-oh">Vinton</a></div>
</div><div class="letter-block" id="W">
  <div class="rsa-ix-letter-heading">W</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/counties/warren-oh">Warren</a><a href="https://www.restingsycamore.com/medicare/counties/washington-oh">Washington</a><a href="https://www.restingsycamore.com/medicare/counties/wayne-oh">Wayne</a><a href="https://www.restingsycamore.com/medicare/counties/williams-oh">Williams</a><a href="https://www.restingsycamore.com/medicare/counties/wood-oh">Wood</a><a href="https://www.restingsycamore.com/medicare/counties/wyandot-oh">Wyandot</a></div>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/states/ohio">Medicare in Ohio</a>
    <a href="https://www.restingsycamore.com/medicare/states/ohio/cities">Ohio Cities</a>
    <a href="https://www.restingsycamore.com/medicare/states/ohio/zip-codes">Ohio ZIP Codes</a>
    <a href="https://www.restingsycamore.com/medicare/plans/ohio">Ohio Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/carriers">Insurance Carriers</a>
  </div>

  
  
</div></div>`;
})();
