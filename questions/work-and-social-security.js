(function(){
  var el = document.getElementById('rsa-questions-work');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/questions">Questions</a> <span>›</span> <span class="rsa-ix-bc-current">Work &amp; Social Security</span></div><h1>Medicare, Work &amp; Social Security</h1><p>36 answered questions about Medicare and working past 65 or Social Security.</p></div>
<div class="rsa-ix-container">
  <div class="intro-card">If you're still working at 65 — or your spouse is — Medicare's rules get more complicated. When employer coverage is primary, you may be able to delay Part B without penalty. But the rules differ based on employer size. This section also covers HSA compatibility, COBRA, Social Security timing, disability Medicare, and how VA benefits interact with Medicare.</div>

  <div class="count-badge">💼 36 questions in this category</div>

  <div class="section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/delay-social-security-still-get-medicare"><span class="num">1</span><span class="text">Can I delay Social Security and still get Medicare at 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-with-va-benefits"><span class="num">2</span><span class="text">Can I get Medicare if I have VA benefits?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-through-spouse-work-history"><span class="num">3</span><span class="text">Can I get Medicare through my spouse's work history?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-keep-hsa-if-i-enroll-in-medicare"><span class="num">4</span><span class="text">Can I keep an HSA if I enroll in Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/keep-employer-coverage-and-delay-medicare"><span class="num">5</span><span class="text">Can I keep my employer coverage and delay Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/stay-on-spouse-employer-plan-instead-of-medicare"><span class="num">6</span><span class="text">Can I stay on my spouse's employer plan instead of taking Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/part-a-backdating-and-hsa-impact"><span class="num">7</span><span class="text">Can Part A be backdated and what does that mean for my HSA?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/qualify-for-medicare-still-working"><span class="num">8</span><span class="text">Do I qualify for Medicare if I am still working at 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/qualify-for-medicare-on-ssdi"><span class="num">9</span><span class="text">Do I qualify for Medicare if I receive Social Security Disability?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/do-veterans-need-medicare-va-benefits-coordination"><span class="num">10</span><span class="text">Do veterans need Medicare, and how do VA benefits work with Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-original-medicare-work-in-any-state"><span class="num">11</span><span class="text">Does Original Medicare work in any state?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/part-b-covers-lab-work-preventive-mental-health"><span class="num">12</span><span class="text">Does Part B cover lab work, preventive services, and mental health?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/employer-size-affects-part-b-timing"><span class="num">13</span><span class="text">Does employer size affect whether I need to take Part B at 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/enroll-in-part-b-after-leaving-employer-coverage"><span class="num">14</span><span class="text">How do I enroll in Part B after leaving employer coverage?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/line-up-medicare-start-date-with-retirement"><span class="num">15</span><span class="text">How do I line up my Medicare start date with my retirement date?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medicare-medicaid-together"><span class="num">16</span><span class="text">How do Medicare and Medicaid work together in Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-do-medicare-claims-work"><span class="num">17</span><span class="text">How do Medicare claims work and do I file my own claims?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-do-medicare-parts-work-together"><span class="num">18</span><span class="text">How do the different parts of Medicare work together?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-under-65-disabled"><span class="num">19</span><span class="text">How does Medicare work if I am under 65 and disabled?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-does-medicare-work"><span class="num">20</span><span class="text">How does Medicare work?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-does-tricare-for-life-work-with-medicare"><span class="num">21</span><span class="text">How does TRICARE for Life work with Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/sep-length-after-losing-employer-coverage"><span class="num">22</span><span class="text">How long is my Special Enrollment Period after losing employer coverage?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-cobra-active-employer-coverage-for-medicare"><span class="num">23</span><span class="text">Is COBRA considered active employer coverage for Medicare purposes?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-automatic-if-already-receiving-social-security"><span class="num">24</span><span class="text">Is Medicare automatic if I am already receiving Social Security?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-same-as-social-security"><span class="num">25</span><span class="text">Is Medicare the same as Social Security?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/delay-part-a-to-keep-hsa-contributions"><span class="num">26</span><span class="text">Should I delay Part A if I am still contributing to an HSA?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-local-agent-value"><span class="num">27</span><span class="text">Should I work with someone who knows Utah Medicare plans specifically?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/risk-of-relying-only-on-va-and-skipping-part-b"><span class="num">28</span><span class="text">What happens if I rely only on VA coverage and skip Part B?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-happens-if-i-take-cobra-instead-of-medicare"><span class="num">29</span><span class="text">What happens if I take COBRA instead of Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/spouse-younger-on-employer-insurance-when-i-turn-65"><span class="num">30</span><span class="text">What if my spouse is younger and still on employer insurance when I turn 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/best-framework-for-choosing-medicare-plan"><span class="num">31</span><span class="text">What is the best framework for choosing a Medicare plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/questions-to-ask-medicare-agent-before-working-with-them"><span class="num">32</span><span class="text">What questions should I ask a Medicare agent before working with them?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/when-eligible-for-medicare-after-ssdi"><span class="num">33</span><span class="text">When do I become eligible for Medicare after qualifying for SSDI?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/when-do-i-sign-up-for-medicare-if-im-still-working"><span class="num">34</span><span class="text">When do I sign up for Medicare if I’m still working</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-intermountain-best-plans"><span class="num">35</span><span class="text">Which Medicare plans in Utah work best with Intermountain Health?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-uou-best-plans"><span class="num">36</span><span class="text">Which Medicare plans in Utah work best with University of Utah Health?</span></a></li></ul>

  <div class="section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment">📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs">💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement">🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security" class=active>💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers">👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics">📖 Medicare Basics & Other</a></div>

  <div class="related"><a href="https://www.restingsycamore.com/resources/calculators/hsa-compatibility">HSA Compatibility Calculator</a><a href="https://www.restingsycamore.com/resources/calculators/special-enrollment-period">Special Enrollment Period Calculator</a><a href="https://www.restingsycamore.com/resources/calculators/when-should-i-sign-up-for-medicare">When Should I Sign Up</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
