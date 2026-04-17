(function(){
  var el = document.getElementById('rsa-specialties-index');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <span class="rsa-ix-bc-current">Specialties</span></div><h1>Medicare Medical Specialties</h1><p>Browse 136 medical specialties covered by Medicare doctors in Utah.</p></div><div class="rsa-ix-container">
  <div class="rsa-ix-stats-bar">
    <div class="stat"><div class="num">56</div><div class="lbl">Specialties</div></div>
    <div class="stat"><div class="num">6</div><div class="lbl">Cities</div></div>
    <div class="stat"><div class="num">136</div><div class="lbl">Specialty Pages</div></div>
  </div>

  <div class="rsa-ix-intro">
    Medicare covers a wide range of specialist care — but your coverage depends on which plan you have
    and whether that specialist is in-network. Below you'll find Medicare specialists by specialty and city
    across Utah. Click a city link to see which Medicare plans cover that specialty in your area.
  </div>

  <div class="rsa-ix-section-title">Cities Covered</div>
  <div class="rsa-ix-related" style="margin-top:0;border-top:none;padding-top:0;margin-bottom:28px;">
    <a href="https://www.restingsycamore.com/medicare/cities/cedar-city-ut">Cedar City</a> <a href="https://www.restingsycamore.com/medicare/cities/ivins-ut">Ivins</a> <a href="https://www.restingsycamore.com/medicare/cities/logan-ut">Logan</a> <a href="https://www.restingsycamore.com/medicare/cities/north-logan-ut">North Logan</a> <a href="https://www.restingsycamore.com/medicare/cities/st.-george-ut">St. George</a> <a href="https://www.restingsycamore.com/medicare/cities/washington-ut">Washington</a>
  </div>

  <div class="rsa-ix-section-title">All Specialties — Browse by City</div>
  <table class="rsa-ix-table">
    <thead><tr><th>Specialty</th><th>Available In</th></tr></thead>
    <tbody><tr>
          <td><strong>Advanced Heart Failure And Transplant Cardiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/advanced-heart-failure-and-transplant-cardiology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Allergyimmunology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/allergyimmunology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/allergyimmunology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Anesthesiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/anesthesiology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/anesthesiology-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/anesthesiology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Cardiac Electrophysiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiac-electrophysiology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiac-electrophysiology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiac-electrophysiology-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiac-electrophysiology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Cardiovascular Disease Cardiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiovascular-disease-cardiology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiovascular-disease-cardiology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiovascular-disease-cardiology-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/cardiovascular-disease-cardiology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Certified Nurse Midwife Cnm</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/certified-nurse-midwife-cnm-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/certified-nurse-midwife-cnm-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Certified Registered Nurse Anesthetist Crna</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/certified-registered-nurse-anesthetist-crna-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/certified-registered-nurse-anesthetist-crna-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/certified-registered-nurse-anesthetist-crna-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Critical Care Intensivists</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/critical-care-intensivists-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Dermatology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/dermatology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/dermatology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/dermatology-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/dermatology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Diagnostic Radiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/diagnostic-radiology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/diagnostic-radiology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/diagnostic-radiology-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/diagnostic-radiology-st-george">St. George</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/diagnostic-radiology-washington">Washington</a></span></div></td>
        </tr><tr>
          <td><strong>Emergency Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/emergency-medicine-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/emergency-medicine-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/emergency-medicine-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/emergency-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Endocrinology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/endocrinology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Family Practice</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/family-practice-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/family-practice-ivins">Ivins</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/family-practice-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/family-practice-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Gastroenterology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/gastroenterology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/gastroenterology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/gastroenterology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>General Practice</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/general-practice-logan">Logan</a></span></div></td>
        </tr><tr>
          <td><strong>General Surgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/general-surgery-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/general-surgery-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/general-surgery-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/general-surgery-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Geriatric Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/geriatric-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Gynecological Oncology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/gynecological-oncology-logan">Logan</a></span></div></td>
        </tr><tr>
          <td><strong>Hand Surgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hand-surgery-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Hematologyoncology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hematologyoncology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hematologyoncology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Hospicepalliative Care</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hospicepalliative-care-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Hospitalist</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hospitalist-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hospitalist-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/hospitalist-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Infectious Disease</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/infectious-disease-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Internal Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/internal-medicine-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/internal-medicine-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/internal-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Interventional Cardiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/interventional-cardiology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/interventional-cardiology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/interventional-cardiology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Interventional Pain Management</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/interventional-pain-management-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/interventional-pain-management-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Interventional Radiology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/interventional-radiology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Medical Oncology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/medical-oncology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/medical-oncology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Nephrology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nephrology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nephrology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nephrology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Neurology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/neurology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/neurology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/neurology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Neurosurgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/neurosurgery-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Nuclear Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nuclear-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Nurse Practitioner</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nurse-practitioner-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nurse-practitioner-ivins">Ivins</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nurse-practitioner-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nurse-practitioner-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/nurse-practitioner-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Obstetricsgynecology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/obstetricsgynecology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/obstetricsgynecology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/obstetricsgynecology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Ophthalmology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/ophthalmology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/ophthalmology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/ophthalmology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Orthopedic Surgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/orthopedic-surgery-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/orthopedic-surgery-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/orthopedic-surgery-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/orthopedic-surgery-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Osteopathic Manipulative Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/osteopathic-manipulative-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Otolaryngology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/otolaryngology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/otolaryngology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/otolaryngology-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/otolaryngology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Pain Management</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pain-management-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pain-management-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Pathology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pathology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pathology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Pediatric Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pediatric-medicine-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pediatric-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Physical Medicine And Rehabilitation</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physical-medicine-and-rehabilitation-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physical-medicine-and-rehabilitation-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physical-medicine-and-rehabilitation-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Physician Assistant</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physician-assistant-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physician-assistant-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physician-assistant-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physician-assistant-st-george">St. George</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/physician-assistant-washington">Washington</a></span></div></td>
        </tr><tr>
          <td><strong>Plastic And Reconstructive Surgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/plastic-and-reconstructive-surgery-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/plastic-and-reconstructive-surgery-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Podiatry</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/podiatry-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/podiatry-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/podiatry-north-logan">North Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/podiatry-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Psychiatry</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/psychiatry-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/psychiatry-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Pulmonary Disease</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pulmonary-disease-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/pulmonary-disease-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Qualified Speech Language Pathologist</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/qualified-speech-language-pathologist-cedar-city">Cedar City</a></span></div></td>
        </tr><tr>
          <td><strong>Radiation Oncology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/radiation-oncology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/radiation-oncology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/radiation-oncology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Rheumatology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/rheumatology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/rheumatology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Sleep Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/sleep-medicine-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/sleep-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Sports Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/sports-medicine-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/sports-medicine-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Thoracic Surgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/thoracic-surgery-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Undersea And Hyperbaric Medicine</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/undersea-and-hyperbaric-medicine-logan">Logan</a></span></div></td>
        </tr><tr>
          <td><strong>Urology</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/urology-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/urology-logan">Logan</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/urology-st-george">St. George</a></span></div></td>
        </tr><tr>
          <td><strong>Vascular Surgery</strong></td>
          <td><div class="rsa-ix-pills"><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/vascular-surgery-cedar-city">Cedar City</a></span><span class="rsa-ix-pill"><a href="https://www.restingsycamore.com/medicare/specialties/vascular-surgery-st-george">St. George</a></span></div></td>
        </tr></tbody>
  </table>

  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/doctors">Doctors Directory</a>
    <a href="https://www.restingsycamore.com/medicare/providers/utah">Utah Care Facilities</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Medicare Plans</a>
  </div>

  
  
</div></div>`;
})();
