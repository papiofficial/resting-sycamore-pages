(function(){
  var el = document.getElementById('rsa-questions-coverage');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="page-header" style="background:#059669;">
  <h1>👨‍⚕️ Coverage & Providers</h1>
  <p class="tagline">What Medicare covers, doctor and hospital networks, and care facility rules.</p>
</div>
<div class="rsa-ix-container">
  <div class="intro-card">What does Medicare actually cover — and what doesn't it? The answer depends on which type of Medicare you have, which plan you're in, and where you receive care. These questions cover everything from finding in-network doctors to understanding skilled nursing facility rules, home health coverage, and how to use Medicare when you travel.</div>

  <div class="count-badge">👨‍⚕️ 18 questions in this category</div>

  <div class="section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/do-all-doctors-accept-medicare"><span class="num">1</span><span class="text">Do all doctors accept Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-cover-emergency-care-anywhere"><span class="num">2</span><span class="text">Does Medicare cover emergency care anywhere in the U.S.?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-cover-long-term-nursing-assisted-living"><span class="num">3</span><span class="text">Does Medicare cover long-term nursing home or assisted living care?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-cover-outpatient-surgery-physical-therapy"><span class="num">4</span><span class="text">Does Medicare cover outpatient surgery and physical therapy?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-have-family-coverage"><span class="num">5</span><span class="text">Does Medicare have family coverage or can my spouse be on my plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-part-b-cover-durable-medical-equipment"><span class="num">6</span><span class="text">Does Part B cover durable medical equipment?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-part-a-cover"><span class="num">7</span><span class="text">What does Medicare Part A cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-part-b-cover"><span class="num">8</span><span class="text">What does Medicare Part B cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-home-health-hospice"><span class="num">9</span><span class="text">What does Medicare cover for home health and hospice?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-skilled-nursing"><span class="num">10</span><span class="text">What does Medicare cover for skilled nursing facility care?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-not-cover"><span class="num">11</span><span class="text">What does Medicare not cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/move-to-utah-medicare"><span class="num">12</span><span class="text">What happens to my Medicare if I move to Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-plan-if-i-move-out-of-service-area"><span class="num">13</span><span class="text">What happens to my Medicare plan if I move out of the service area?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/long-term-care-not-covered"><span class="num">14</span><span class="text">What if I need long-term care and Medicare does not cover it?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/doctors-stop-taking-plan"><span class="num">15</span><span class="text">What if my doctors stop taking my plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-best-keep-doctors"><span class="num">16</span><span class="text">What is the best Medicare choice in Utah if my top priority is keeping my doctors?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/observation-vs-inpatient-hospital-stay-medicare"><span class="num">17</span><span class="text">Why was my hospital stay billed as observation instead of inpatient?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-keep-my-doctors-with-medicare"><span class="num">18</span><span class="text">Will I be able to keep my current doctors with Medicare?</span></a></li></ul>

  <div class="section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment">📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs">💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement">🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security">💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers" class=active>👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics">📖 Medicare Basics & Other</a></div>

  <div class="related"><a href="https://www.restingsycamore.com/medicare/doctors/ohio">Find Doctors in Ohio</a><a href="https://www.restingsycamore.com/medicare/doctors/pennsylvania">Find Doctors in Pennsylvania</a><a href="https://www.restingsycamore.com/medicare/doctors/utah">Find Doctors in Utah</a><a href="https://www.restingsycamore.com/medicare/providers">Care Facilities Directory</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
