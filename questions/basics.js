(function(){
  var el = document.getElementById('rsa-questions-basics');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="page-header" style="background:#6b7280;">
  <h1>📖 Medicare Basics & Other</h1>
  <p class="tagline">General Medicare questions, forms, coordination of benefits, and state-specific topics.</p>
</div>
<div class="rsa-ix-container">
  <div class="intro-card">Not every Medicare question fits neatly into a single category. This section covers general Medicare mechanics — how claims work, what forms you'll need, coordination of benefits rules, and questions specific to Utah, Ohio, and Pennsylvania. If you didn't find your question in the other sections, start here.</div>

  <div class="count-badge">📖 29 questions in this category</div>

  <div class="section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-government-or-insurance-company"><span class="num">1</span><span class="text">Am I buying Medicare from the government or from an insurance company?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/are-medicare-penalties-permanent"><span class="num">2</span><span class="text">Are Medicare penalties permanent?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-change-my-medicare-plan-during-the-year"><span class="num">3</span><span class="text">Can I change my Medicare plan during the year</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-with-medicaid"><span class="num">4</span><span class="text">Can I get Medicare if I have Medicaid?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-have-both-medicare-and-medicaid"><span class="num">5</span><span class="text">Can I have both Medicare and Medicaid?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/moving-utah-counties-changes-medicare-plan-options"><span class="num">6</span><span class="text">Can moving from one Utah county to another change my Medicare plan options?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-medicare-depend-on-income-or-assets"><span class="num">7</span><span class="text">Does Medicare depend on my income or assets?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-ship-program"><span class="num">8</span><span class="text">Does Utah have a SHIP program?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-to-appeal-medicare-claim-denial"><span class="num">9</span><span class="text">How do I appeal a Medicare claim denial?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-to-avoid-medicare-fraud-misleading-sales"><span class="num">10</span><span class="text">How do I avoid Medicare fraud and misleading sales tactics?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-ship-contact"><span class="num">11</span><span class="text">How do I contact Utah SHIP?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/avoid-terrible-medicare-decision"><span class="num">12</span><span class="text">How do I know I am not making a terrible Medicare decision?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-one-plan-or-build-yourself"><span class="num">13</span><span class="text">Is Medicare just one plan or do I have to build it myself?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-same-as-medicaid"><span class="num">14</span><span class="text">Is Medicare the same as Medicaid?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-same-as-health-insurance"><span class="num">15</span><span class="text">Is Medicare the same thing as health insurance?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-giveback-benefit-real"><span class="num">16</span><span class="text">Is the Medicare giveback benefit real or a sales pitch?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-giveback-real-or-sales"><span class="num">17</span><span class="text">Is there really a Medicare giveback or am I being sold something?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-am-i-not-thinking-about-with-medicare"><span class="num">18</span><span class="text">What am I not thinking about with Medicare that I should be?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/most-important-variables-choosing-plan"><span class="num">19</span><span class="text">What are the most important variables in choosing a Medicare plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-are-the-parts-of-medicare"><span class="num">20</span><span class="text">What are the parts of Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/delay-medicare-lifelong-penalties"><span class="num">21</span><span class="text">What if I delay Medicare and end up with lifelong penalties?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/health-could-change-future"><span class="num">22</span><span class="text">What if my health could change in the next few years?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-form-cms-l564"><span class="num">23</span><span class="text">What is Form CMS-L564 and what is it used for?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-medicare"><span class="num">24</span><span class="text">What is Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-original-medicare"><span class="num">25</span><span class="text">What is Original Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-biggest-medicare-mistake"><span class="num">26</span><span class="text">What is the biggest Utah-specific Medicare mistake people make?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/biggest-decision-mistake-medicare"><span class="num">27</span><span class="text">What is the biggest decision mistake people make with Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/who-do-i-call-for-a-medicare-problem"><span class="num">28</span><span class="text">Who do I call when I have a Medicare problem?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/who-qualifies-for-medicare"><span class="num">29</span><span class="text">Who qualifies for Medicare?</span></a></li></ul>

  <div class="section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment">📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs">💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement">🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security">💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers">👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics" class=active>📖 Medicare Basics & Other</a></div>

  <div class="related"><a href="https://www.restingsycamore.com/medicare/medicare-101">Medicare 101</a><a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a><a href="https://www.restingsycamore.com/medicare/states/ohio">Medicare in Ohio</a><a href="https://www.restingsycamore.com/medicare/states/pennsylvania">Medicare in Pennsylvania</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
