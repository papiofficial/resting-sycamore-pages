(function(){
  var el = document.getElementById('rsa-providers-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare Care Facilities in Utah</h1><p>Browse 54 Medicare-certified care facilities in Utah, including skilled nursing facilities, rehabilitation centers, and long-term care.</p></div><div class="rsa-ix-container">
  <div class="rsa-ix-stats-bar">
    <div class="stat"><div class="num">54</div><div class="lbl">Facilities</div></div>
  </div>

  <div class="rsa-ix-intro">
    Medicare Part A covers up to 100 days in a skilled nursing facility after a qualifying hospital stay —
    but only at Medicare-certified facilities. These 54 Utah facilities are Medicare-certified.
    Click any facility to view coverage details, accepted plans, and location information.
  </div>

  <div class="rsa-ix-section-title">All Utah Medicare Care Facilities — A to Z</div>
  
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">A</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/alpine-meadow-rehabilitation-and-nursing-provider-ut">Alpine Meadow Rehabilitation And Nursing</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/aspen-ridge-of-utah-valley-provider-ut">Aspen Ridge Of Utah Valley</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/aspen-ridge-transitional-rehab-provider-ut">Aspen Ridge Transitional Rehab</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/aspen-ridge-west-transitional-rehab-provider-ut">Aspen Ridge West Transitional Rehab</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">B</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/bella-terra-st-george-provider-ut">Bella Terra St George</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">C</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/cascades-at-orchard-park-provider-ut">Cascades At Orchard Park</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/city-creek-post-acute-provider-ut">City Creek Post Acute</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/copper-ridge-health-care-provider-ut">Copper Ridge Health Care</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/coral-desert-rehabilitation-and-care-provider-ut">Coral Desert Rehabilitation And Care</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/crestwood-rehabilitation-and-nursing-provider-ut">Crestwood Rehabilitation And Nursing</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">F</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/fairfield-village-rehabilitation-provider-ut">Fairfield Village Rehabilitation</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">G</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/george-e-wahlen-ogden-veterans-home-provider-ut">George E Wahlen Ogden Veterans Home</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">H</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/harrison-pointe-healthcare-and-rehabilitation-provider-ut">Harrison Pointe Healthcare And Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/holladay-healthcare-center-provider-ut">Holladay Healthcare Center</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">L</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/legacy-village-rehabilitation-provider-ut">Legacy Village Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/logan-regional-hospital-transitional-care-unit-provider-ut">Logan Regional Hospital Transitional Care Unit</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/lomond-peak-nursing-and-rehabilitation-llc-provider-ut">Lomond Peak Nursing And Rehabilitation Llc</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">M</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/maple-ridge-rehabilitation-and-nursing-provider-ut">Maple Ridge Rehabilitation And Nursing</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/meadow-brook-rehabilitation-and-nursing-provider-ut">Meadow Brook Rehabilitation And Nursing</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/meadow-peak-rehabilitation-provider-ut">Meadow Peak Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/midtown-manor-provider-ut">Midtown Manor</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/millcreek-rehabilitation-and-nursing-llc-provider-ut">Millcreek Rehabilitation And Nursing Llc</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/mission-at-alpine-rehabilitation-center-provider-ut">Mission At Alpine Rehabilitation Center</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-american-fork-provider-ut">Monument Healthcare American Fork</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-canyon-rim-provider-ut">Monument Healthcare Canyon Rim</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-cottonwood-creek-provider-ut">Monument Healthcare Cottonwood Creek</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-millcreek-provider-ut">Monument Healthcare Millcreek</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-murray-creek-provider-ut">Monument Healthcare Murray Creek</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-south-salt-lake-provider-ut">Monument Healthcare South Salt Lake</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/monument-healthcare-taylorsville-provider-ut">Monument Healthcare Taylorsville</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/mountain-view-health-services-provider-ut">Mountain View Health Services</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/mt-olympus-rehabilitation-center-provider-ut">Mt Olympus Rehabilitation Center</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">O</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/orem-rehabilitation-and-nursing-center-provider-ut">Orem Rehabilitation And Nursing Center</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">P</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/paramount-health-and-rehabilitation-provider-ut">Paramount Health And Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/pine-creek-rehabilitation-and-nursing-provider-ut">Pine Creek Rehabilitation And Nursing</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/pine-view-transitional-rehab-provider-ut">Pine View Transitional Rehab</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/pointe-meadows-health-and-rehabilitation-provider-ut">Pointe Meadows Health And Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/provo-rehabilitation-and-nursing-provider-ut">Provo Rehabilitation And Nursing</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">R</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/rocky-mountain-care-cottage-on-vine-provider-ut">Rocky Mountain Care Cottage On Vine</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/rocky-mountain-care-hunter-hollow-provider-ut">Rocky Mountain Care Hunter Hollow</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/rocky-mountain-care-logan-provider-ut">Rocky Mountain Care Logan</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">S</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/sandy-health-and-rehab-provider-ut">Sandy Health And Rehab</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/seasons-healthcare-and-rehabilitation-provider-ut">Seasons Healthcare And Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/south-ogden-post-acute-provider-ut">South Ogden Post Acute</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/spring-creek-healthcare-center-provider-ut">Spring Creek Healthcare Center</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/st-george-rehabilitation-provider-ut">St George Rehabilitation</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/st-joseph-villa-provider-ut">St Joseph Villa</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/stonehenge-of-american-fork-provider-ut">Stonehenge Of American Fork</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/stonehenge-of-orem-provider-ut">Stonehenge Of Orem</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/stonehenge-of-south-jordan-provider-ut">Stonehenge Of South Jordan</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/stonehenge-of-springville-provider-ut">Stonehenge Of Springville</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/sunshine-terrace-skilled-nursing-provider-ut">Sunshine Terrace Skilled Nursing</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">T</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/the-terrace-transitional-provider-ut">The Terrace Transitional</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">W</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/providers/william-e-christofferson-salt-lake-veterans-home-provider-ut">William E Christofferson Salt Lake Veterans Home</a></div></div>
        </div>

  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/providers">← All States</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/doctors/utah">Utah Doctors</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Plans</a>
  </div>

  
  
</div></div>`;
})();
