(function(){
  var el = document.getElementById('rsa-specialties-index');
  if (!el) return;
  if (!document.getElementById('rsa-ix-styles')) {
    var s = document.createElement('style');
    s.id = 'rsa-ix-styles';
    s.textContent = `.rsa-ix-wrap { font-family: 'Onest', sans-serif; color: #0b1220; background: #f6f7fa; }
.rsa-ix-hero { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%); color: white; padding: 48px 24px 40px; }
.rsa-ix-hero h1 { font-family: 'Onest', sans-serif; font-size: clamp(28px, 4vw, 40px); font-weight: 700; line-height: 1.2; margin: 12px 0 10px; letter-spacing: -0.5px; }
.rsa-ix-hero p { font-size: 17px; opacity: 0.88; max-width: 620px; line-height: 1.6; margin: 0; }
.rsa-ix-breadcrumb { font-size: 13px; opacity: 0.72; margin-bottom: 10px; }
.rsa-ix-breadcrumb a { color: white; text-decoration: none; }
.rsa-ix-breadcrumb a:hover { text-decoration: underline; }
.rsa-ix-breadcrumb span { margin: 0 5px; opacity: 0.6; }
.rsa-ix-bc-current { opacity: 0.9; }
.rsa-ix-content { max-width: 940px; margin: 0 auto; padding: 40px 24px 64px; }
.rsa-ix-stats { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
.rsa-ix-stat { background: white; border: 1px solid #e9eaee; border-radius: 10px; padding: 14px 20px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-stat .num { font-size: 1.75rem; font-weight: 700; line-height: 1; color: #1e3a5f; }
.rsa-ix-stat .lbl { font-size: 11px; color: #5a6578; margin-top: 3px; text-transform: uppercase; letter-spacing: 0.05em; }
.rsa-ix-intro { background: white; border-left: 3px solid #2563eb; border-radius: 0 10px 10px 0; padding: 14px 18px; margin-bottom: 28px; font-size: 14px; line-height: 1.7; color: #2a3446; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #5a6578; margin-bottom: 12px; }
.rsa-ix-carrier-nav { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; background: white; padding: 12px 16px; border-radius: 10px; border: 1px solid #e9eaee; }
.rsa-ix-carrier-nav a { display: inline-block; padding: 4px 10px; border-radius: 6px; background: #f6f7fa; color: #2a3446; font-size: 12px; font-weight: 600; text-decoration: none; border: 1px solid #e9eaee; transition: all 0.12s; }
.rsa-ix-carrier-nav a:hover { background: #1e3a5f; color: white; border-color: #1e3a5f; }
.rsa-ix-card { background: white; border: 1px solid #e9eaee; border-radius: 10px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); margin-bottom: 16px; overflow: hidden; }
.rsa-ix-card-header { padding: 14px 20px; border-bottom: 1px solid #eef0f5; display: flex; align-items: center; gap: 10px; border-left: 3px solid #2563eb; }
.rsa-ix-card-header .name { font-weight: 700; font-size: 15px; color: #0b1220; }
.rsa-ix-card-header .link { font-size: 12px; color: #2563eb; text-decoration: none; margin-left: 6px; }
.rsa-ix-card-header .link:hover { text-decoration: underline; }
.rsa-ix-card-header .count { margin-left: auto; font-size: 11px; background: #f6f7fa; color: #5a6578; padding: 2px 8px; border-radius: 999px; font-weight: 600; border: 1px solid #e9eaee; }
.rsa-ix-list { list-style: none; margin: 0; padding: 0; }
.rsa-ix-list li a { display: flex; align-items: center; gap: 10px; padding: 10px 20px; text-decoration: none; color: #0b1220; font-size: 14px; border-bottom: 1px solid #f6f7fa; transition: background 0.1s; }
.rsa-ix-list li:last-child a { border-bottom: none; }
.rsa-ix-list li a:hover { background: #f6f7fa; }
.rsa-ix-list li a .item-name { flex: 1; color: #2563eb; font-weight: 500; }
.rsa-ix-list li a:hover .item-name { color: #1d4ed8; }
.rsa-ix-list li a .badge { font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 5px; background: #eef0f5; color: #2a3446; flex-shrink: 0; white-space: nowrap; }
.rsa-ix-list li a .badge.snp { background: #f9e9e9; color: #c62828; }
.rsa-ix-list li a .badge.pdp { background: #fef0d4; color: #6f4a03; }
.rsa-ix-list li a .badge.hmo { background: #e7f2ee; color: #1e5a45; }
.rsa-ix-list li a .badge.ppo { background: #eff6ff; color: #1d4ed8; }
.rsa-ix-alpha { margin-bottom: 8px; }
.rsa-ix-alpha-letter { font-size: 13px; font-weight: 700; color: #1e3a5f; background: #eef0f5; padding: 6px 20px; border-left: 3px solid #2563eb; margin: 0; }
.rsa-ix-alpha-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
.rsa-ix-alpha-grid a { display: block; padding: 9px 20px; font-size: 13px; color: #2563eb; text-decoration: none; border-bottom: 1px solid #f6f7fa; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rsa-ix-alpha-grid a:hover { background: #f6f7fa; color: #1d4ed8; }
@media(max-width: 640px) { .rsa-ix-alpha-grid { grid-template-columns: repeat(2,1fr); } }
.rsa-ix-state-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
@media(max-width: 700px) { .rsa-ix-state-grid { grid-template-columns: 1fr; } }
.rsa-ix-state-card { background: white; border: 1px solid #e9eaee; border-radius: 10px; padding: 24px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-state-card h2 { font-size: 20px; font-weight: 700; color: #0b1220; margin: 0 0 4px; }
.rsa-ix-state-card .count { font-size: 13px; color: #5a6578; margin-bottom: 16px; }
.rsa-ix-state-card a.btn { display: inline-block; background: #2563eb; color: white; text-decoration: none; padding: 9px 16px; border-radius: 8px; font-size: 14px; font-weight: 600; }
.rsa-ix-state-card a.btn:hover { background: #1d4ed8; }
.rsa-ix-topic-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 32px; }
@media(max-width: 640px) { .rsa-ix-topic-grid { grid-template-columns: 1fr; } }
.rsa-ix-topic-card { background: white; border: 1px solid #e9eaee; border-radius: 10px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-topic-card h2 { font-size: 16px; font-weight: 700; color: #0b1220; margin: 0 0 4px; }
.rsa-ix-topic-card .count { font-size: 12px; color: #5a6578; margin-bottom: 12px; }
.rsa-ix-topic-card a.btn { font-size: 13px; color: #2563eb; text-decoration: none; font-weight: 600; }
.rsa-ix-topic-card a.btn:hover { text-decoration: underline; }
.rsa-ix-qa-list { list-style: none; margin: 0; padding: 0; }
.rsa-ix-qa-list li { border-bottom: 1px solid #e9eaee; }
.rsa-ix-qa-list li:last-child { border-bottom: none; }
.rsa-ix-qa-list li a { display: block; padding: 13px 0; font-size: 15px; color: #2563eb; text-decoration: none; line-height: 1.5; font-weight: 500; }
.rsa-ix-qa-list li a:hover { color: #1d4ed8; }
.rsa-ix-qa-list li a::before { content: "Q: "; color: #5a6578; font-weight: 400; font-size: 13px; }
.rsa-ix-geo-section { margin-bottom: 24px; }
.rsa-ix-geo-section h2 { font-size: 16px; font-weight: 700; color: #1e3a5f; padding: 8px 16px; background: #eef0f5; border-radius: 8px; margin: 0 0 8px; }
.rsa-ix-geo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; background: white; border: 1px solid #e9eaee; border-radius: 10px; overflow: hidden; }
.rsa-ix-geo-grid a { display: block; padding: 9px 14px; font-size: 13px; color: #2563eb; text-decoration: none; border-bottom: 1px solid #f6f7fa; font-weight: 500; }
.rsa-ix-geo-grid a:hover { background: #f6f7fa; color: #1d4ed8; }
@media(max-width: 640px) { .rsa-ix-geo-grid { grid-template-columns: repeat(2,1fr); } }
.rsa-ix-related { display: flex; gap: 8px; flex-wrap: wrap; padding-top: 24px; border-top: 1px solid #e9eaee; margin-top: 32px; }
.rsa-ix-related a { padding: 7px 14px; border: 1px solid #e9eaee; border-radius: 8px; font-size: 13px; color: #2a3446; text-decoration: none; background: white; font-weight: 500; }
.rsa-ix-related a:hover { border-color: #2563eb; color: #2563eb; }
.rsa-ix-cluster { margin-bottom: 32px; }
.rsa-ix-cluster-header { font-size: 18px; font-weight: 700; color: #0b1220; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #eef0f5; }
.rsa-ix-cluster-hub a { display: block; padding: 10px 16px; background: #eff6ff; border-radius: 8px; color: #1d4ed8; text-decoration: none; font-weight: 600; font-size: 15px; margin-bottom: 6px; border: 1px solid #dbeafe; }
.rsa-ix-cluster-hub a:hover { background: #dbeafe; }
.rsa-ix-cluster-spokes { list-style: none; padding: 0; margin: 0; }
.rsa-ix-cluster-spokes li a { display: block; padding: 8px 16px 8px 28px; font-size: 14px; color: #2563eb; text-decoration: none; border-bottom: 1px solid #f6f7fa; }
.rsa-ix-cluster-spokes li a::before { content: "↳ "; color: #5a6578; }
.rsa-ix-cluster-spokes li a:hover { color: #1d4ed8; background: #f6f7fa; }
.rsa-ix-specialty-table { width: 100%; border-collapse: collapse; background: white; border-radius: 10px; overflow: hidden; border: 1px solid #e9eaee; font-size: 14px; }
.rsa-ix-specialty-table th { background: #1e3a5f; color: white; padding: 10px 16px; text-align: left; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
.rsa-ix-specialty-table td { padding: 10px 16px; border-bottom: 1px solid #f6f7fa; }
.rsa-ix-specialty-table tr:last-child td { border-bottom: none; }
.rsa-ix-specialty-table tr:hover td { background: #f6f7fa; }
.rsa-ix-specialty-table a { color: #2563eb; text-decoration: none; font-weight: 500; }
.rsa-ix-specialty-table a:hover { text-decoration: underline; }
.rsa-ix-carrier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 32px; }
@media(max-width: 640px) { .rsa-ix-carrier-grid { grid-template-columns: 1fr; } }
.rsa-ix-carrier-card { background: white; border: 1px solid #e9eaee; border-radius: 10px; padding: 16px 20px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-carrier-card .carrier-name { font-size: 15px; font-weight: 700; color: #0b1220; margin-bottom: 4px; }
.rsa-ix-carrier-card .carrier-meta { font-size: 12px; color: #5a6578; margin-bottom: 12px; }
.rsa-ix-carrier-card a { font-size: 13px; color: #2563eb; text-decoration: none; font-weight: 600; }
.rsa-ix-carrier-card a:hover { text-decoration: underline; }
.rsa-ix-plantype-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
@media(max-width: 640px) { .rsa-ix-plantype-grid { grid-template-columns: 1fr; } }
.rsa-ix-plantype-card { background: white; border: 1px solid #e9eaee; border-radius: 10px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-plantype-card h2 { font-size: 17px; font-weight: 700; color: #0b1220; margin: 0 0 8px; }
.rsa-ix-plantype-card p { font-size: 14px; color: #5a6578; line-height: 1.6; margin-bottom: 12px; }
.rsa-ix-plantype-card a { font-size: 13px; color: #2563eb; text-decoration: none; font-weight: 600; }`;
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <span class="rsa-ix-bc-current">Specialties</span></div><h1>Medicare Medical Specialties</h1><p>Browse 136 medical specialties covered by Medicare doctors in Utah.</p></div><div class="rsa-ix-content">
  <div class="rsa-ix-stats">
    <div class="rsa-ix-stat"><div class="num">56</div><div class="lbl">Specialties</div></div>
    <div class="rsa-ix-stat"><div class="num">6</div><div class="lbl">Cities</div></div>
    <div class="rsa-ix-stat"><div class="num">136</div><div class="lbl">Specialty Pages</div></div>
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
