(function(){
  var el = document.getElementById('rsa-questions-coverage');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/questions">Questions</a> <span>›</span> <span class="rsa-ix-bc-current">Coverage &amp; Providers</span></div><h1>Medicare Coverage &amp; Providers</h1><p>18 answered questions about what Medicare covers and finding providers.</p></div>
<div class="rsa-ix-content">
  <div class="intro-card">What does Medicare actually cover — and what doesn't it? The answer depends on which type of Medicare you have, which plan you're in, and where you receive care. These questions cover everything from finding in-network doctors to understanding skilled nursing facility rules, home health coverage, and how to use Medicare when you travel.</div>

  <div class="count-badge">👨‍⚕️ 18 questions in this category</div>

  <div class="rsa-ix-section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/do-all-doctors-accept-medicare"><span class="num">1</span><span class="text">Do all doctors accept Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-cover-emergency-care-anywhere"><span class="num">2</span><span class="text">Does Medicare cover emergency care anywhere in the U.S.?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-cover-long-term-nursing-assisted-living"><span class="num">3</span><span class="text">Does Medicare cover long-term nursing home or assisted living care?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-cover-outpatient-surgery-physical-therapy"><span class="num">4</span><span class="text">Does Medicare cover outpatient surgery and physical therapy?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-have-family-coverage"><span class="num">5</span><span class="text">Does Medicare have family coverage or can my spouse be on my plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-part-b-cover-durable-medical-equipment"><span class="num">6</span><span class="text">Does Part B cover durable medical equipment?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-part-a-cover"><span class="num">7</span><span class="text">What does Medicare Part A cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-part-b-cover"><span class="num">8</span><span class="text">What does Medicare Part B cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-home-health-hospice"><span class="num">9</span><span class="text">What does Medicare cover for home health and hospice?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-skilled-nursing"><span class="num">10</span><span class="text">What does Medicare cover for skilled nursing facility care?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-does-medicare-not-cover"><span class="num">11</span><span class="text">What does Medicare not cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/move-to-utah-medicare"><span class="num">12</span><span class="text">What happens to my Medicare if I move to Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-plan-if-i-move-out-of-service-area"><span class="num">13</span><span class="text">What happens to my Medicare plan if I move out of the service area?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/long-term-care-not-covered"><span class="num">14</span><span class="text">What if I need long-term care and Medicare does not cover it?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/doctors-stop-taking-plan"><span class="num">15</span><span class="text">What if my doctors stop taking my plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-best-keep-doctors"><span class="num">16</span><span class="text">What is the best Medicare choice in Utah if my top priority is keeping my doctors?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/observation-vs-inpatient-hospital-stay-medicare"><span class="num">17</span><span class="text">Why was my hospital stay billed as observation instead of inpatient?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-keep-my-doctors-with-medicare"><span class="num">18</span><span class="text">Will I be able to keep my current doctors with Medicare?</span></a></li></ul>

  <div class="rsa-ix-section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment">📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs">💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement">🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security">💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers" class=active>👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics">📖 Medicare Basics & Other</a></div>

  <div class="rsa-ix-related"><a href="https://www.restingsycamore.com/medicare/doctors/ohio">Find Doctors in Ohio</a><a href="https://www.restingsycamore.com/medicare/doctors/pennsylvania">Find Doctors in Pennsylvania</a><a href="https://www.restingsycamore.com/medicare/doctors/utah">Find Doctors in Utah</a><a href="https://www.restingsycamore.com/medicare/providers">Care Facilities Directory</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
