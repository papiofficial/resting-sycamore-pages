(function(){
  var el = document.getElementById('rsa-questions-enroll');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="page-header" style="background:#2563eb;">
  <h1>📋 Enrollment & Eligibility</h1>
  <p class="tagline">When to sign up, what windows to know, and who qualifies for Medicare.</p>
</div>
<div class="rsa-ix-container">
  <div class="intro-card">Getting Medicare enrollment right is the most time-sensitive decision you'll make. Miss a deadline and you could pay a penalty for life. Sign up too early and you might create problems with your employer coverage or HSA. These questions cover every enrollment scenario — from turning 65 to delayed enrollment to Special Enrollment Periods.</div>

  <div class="count-badge">📋 40 questions in this category</div>

  <div class="section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-before-age-65"><span class="num">1</span><span class="text">Can I get Medicare before age 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-non-citizens-qualify-for-medicare"><span class="num">2</span><span class="text">Can non-citizens or green card holders qualify for Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-to-apply-for-medicare-online-phone-in-person"><span class="num">3</span><span class="text">Do I apply for Medicare online, by phone, or in person?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/do-i-automatically-get-medicare-at-65"><span class="num">4</span><span class="text">Do I automatically get Medicare when I turn 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/sep-if-i-move"><span class="num">5</span><span class="text">Do I get a Special Enrollment Period if I move?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/do-i-need-to-reenroll-in-medicare-every-year"><span class="num">6</span><span class="text">Do I need to re-enroll in Medicare every year?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/do-i-qualify-for-medicare-at-65"><span class="num">7</span><span class="text">Do I qualify for Medicare at 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/qualify-for-medicare-with-esrd-or-als"><span class="num">8</span><span class="text">Do I qualify for Medicare if I have ESRD or ALS?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-retiring-trigger-special-enrollment-period"><span class="num">9</span><span class="text">Does retiring count as a Special Enrollment Period?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/confirm-medicare-enrollment-active-which-card-to-use"><span class="num">10</span><span class="text">How do I confirm my Medicare enrollment is active and know which card to use?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-do-i-enroll-in-medicare"><span class="num">11</span><span class="text">How do I enroll in Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-to-help-parent-enroll-in-medicare"><span class="num">12</span><span class="text">How do I help my parent enroll in Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-many-months-before-65-to-apply"><span class="num">13</span><span class="text">How many months before I turn 65 should I apply for Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/only-focus-dental-vision-missing"><span class="num">14</span><span class="text">If I only focus on dental and vision extras, what am I missing?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/order-to-enroll-in-medicare-parts"><span class="num">15</span><span class="text">In what order should I enroll in the different parts of Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-mandatory-at-65"><span class="num">16</span><span class="text">Is Medicare mandatory at 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/should-i-use-agent-to-enroll-in-medicare"><span class="num">17</span><span class="text">Should I use a Medicare agent to help me enroll?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-am-i-missing-medicare"><span class="num">18</span><span class="text">What am I not thinking about with Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-under-65-disabled-options"><span class="num">19</span><span class="text">What are my Medicare options in Utah if I am under 65 and disabled?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-qualifies-as-special-enrollment-period"><span class="num">20</span><span class="text">What counts as a qualifying Special Enrollment Period?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-aep-dates-and-what-you-can-change"><span class="num">21</span><span class="text">What dates are Medicare Annual Enrollment and what can I change?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-people-forget-to-check-before-enrolling-medicare"><span class="num">22</span><span class="text">What do people usually forget to check before enrolling in Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/forget-to-check-before-enrolling"><span class="num">23</span><span class="text">What do people usually forget to check before enrolling in Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/documents-needed-to-enroll-in-medicare"><span class="num">24</span><span class="text">What documents do I need to enroll in Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-happens-if-i-miss-my-initial-enrollment-period"><span class="num">25</span><span class="text">What happens if I miss my initial enrollment period</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/fix-medicare-application-mistake"><span class="num">26</span><span class="text">What if I made a mistake on my Medicare application or enrolled in the wrong plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/missed-medicare-enrollment-bad-advice-confusion"><span class="num">27</span><span class="text">What if I missed Medicare enrollment because of bad advice or confusion?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-enrollment-birthday-first-of-month"><span class="num">28</span><span class="text">What if my birthday is on the first of the month?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/parent-already-missed-medicare-deadlines"><span class="num">29</span><span class="text">What if my parent already missed Medicare deadlines?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-a-special-enrollment-period"><span class="num">30</span><span class="text">What is a Special Enrollment Period for Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-initial-enrollment-period"><span class="num">31</span><span class="text">What is my Medicare Initial Enrollment Period?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-annual-enrollment-period"><span class="num">32</span><span class="text">What is the Annual Enrollment Period for Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-general-enrollment-period"><span class="num">33</span><span class="text">What is the General Enrollment Period for Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/fastest-way-to-fix-medicare-enrollment-mistake"><span class="num">34</span><span class="text">What is the fastest way to fix a Medicare enrollment mistake?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/most-common-medicare-first-enrollment-mistake"><span class="num">35</span><span class="text">What is the most common mistake people make when first getting Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/good-agent-explains-before-enroll"><span class="num">36</span><span class="text">What should a good Medicare agent explain before I enroll?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-start-date-based-on-iep-timing"><span class="num">37</span><span class="text">When does Medicare coverage start depending on when I apply during my IEP?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/when-should-i-apply-for-medicare"><span class="num">38</span><span class="text">When should I apply for Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-dual-eligibility-help"><span class="num">39</span><span class="text">Who helps explain dual eligibility rules in Utah without pushing a plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/move-to-utah-sep"><span class="num">40</span><span class="text">Will moving to Utah trigger a Special Enrollment Period?</span></a></li></ul>

  <div class="section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment" class=active>📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs">💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement">🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security">💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers">👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics">📖 Medicare Basics & Other</a></div>

  <div class="related"><a href="https://www.restingsycamore.com/resources/calculators/initial-enrollment-period">Initial Enrollment Period Calculator</a><a href="https://www.restingsycamore.com/resources/calculators/special-enrollment-period">Special Enrollment Period Calculator</a><a href="https://www.restingsycamore.com/medicare/medicare-101">Medicare 101</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
