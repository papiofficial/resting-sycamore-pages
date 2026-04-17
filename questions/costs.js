(function(){
  var el = document.getElementById('rsa-questions-costs');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/questions">Questions</a> <span>›</span> <span class="rsa-ix-bc-current">Costs</span></div><h1>Medicare Cost Questions</h1><p>36 answered questions about Medicare premiums, deductibles, and out-of-pocket costs.</p></div>
<div class="rsa-ix-container">
  <div class="intro-card">Medicare costs are more complex than most people expect. There's the standard Part B premium, IRMAA surcharges for higher earners, copays and coinsurance, and a patchwork of savings programs that can reduce what you pay. These questions cover what everything actually costs and how to lower your out-of-pocket spending.</div>

  <div class="count-badge">💰 36 questions in this category</div>

  <div class="section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-appeal-irmaa-if-income-dropped"><span class="num">1</span><span class="text">Can I appeal IRMAA if my income dropped?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-appeal-a-medicare-penalty"><span class="num">2</span><span class="text">Can I appeal a Medicare penalty and what do I need to prove?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/help-paying-medicare-premiums-and-costs"><span class="num">3</span><span class="text">Can I get help paying my Medicare premiums or other costs?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-stay-on-aca-plan-instead-of-medicare"><span class="num">4</span><span class="text">Can I stay on my Affordable Care Act marketplace plan instead of Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medicaid-pay-premium"><span class="num">5</span><span class="text">Can Utah Medicaid pay my Medicare premium?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/social-security-income-deduction-for-medicare-premiums"><span class="num">6</span><span class="text">Do I get a Social Security income deduction for Medicare premiums?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/does-house-sale-roth-conversion-rmds-affect-irmaa"><span class="num">7</span><span class="text">Does selling a house, Roth conversion, or taking RMDs affect IRMAA?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-apply-medicare-savings-program"><span class="num">8</span><span class="text">How do I apply for a Medicare Savings Program in Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/compare-total-annual-medicare-cost-not-just-premium"><span class="num">9</span><span class="text">How do I compare total annual cost instead of just monthly premium?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/compare-worst-case-costs-across-medicare-plans"><span class="num">10</span><span class="text">How do I compare worst-case costs across Medicare plans?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/compare-worst-case-costs"><span class="num">11</span><span class="text">How do I compare worst-case costs across plans?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/work-credits-needed-for-free-part-a"><span class="num">12</span><span class="text">How many work credits do I need for premium-free Part A?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/how-much-does-medicare-cost-per-month"><span class="num">13</span><span class="text">How much does Medicare cost per month?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/only-focusing-on-monthly-premium-what-am-i-missing"><span class="num">14</span><span class="text">If I only focus on monthly premium, what am I missing about Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/only-focus-premium-missing"><span class="num">15</span><span class="text">If I only focus on monthly premium, what am I missing?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-medicare-free-at-65"><span class="num">16</span><span class="text">Is Medicare free at 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/is-lower-monthly-premium-actually-cheaper"><span class="num">17</span><span class="text">Is a lower monthly premium always cheaper overall?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/part-a-coinsurance-after-hospital-days"><span class="num">18</span><span class="text">What Part A coinsurance costs apply after certain hospital days?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-program-part-b-premium"><span class="num">19</span><span class="text">What Utah program can help pay my Part B premium?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-are-medicare-savings-programs"><span class="num">20</span><span class="text">What are Medicare Savings Programs and what costs can they cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/total-yearly-costs-with-medicare"><span class="num">21</span><span class="text">What are my total expected yearly costs with Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/costs-still-responsible-for-with-medicare"><span class="num">22</span><span class="text">What costs am I still responsible for even with Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/not-enough-work-credits-for-part-a"><span class="num">23</span><span class="text">What if I do not have enough work credits for premium-free Part A?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-income-limits-financial-help"><span class="num">24</span><span class="text">What income limits apply in Utah for Medicare financial help?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-irmaa-medicare-income-surcharge"><span class="num">25</span><span class="text">What is IRMAA and how much can it add to my Medicare costs?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/coinsurance-vs-copay-in-medicare"><span class="num">26</span><span class="text">What is coinsurance in Medicare and how is it different from a copay?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-the-part-a-deductible"><span class="num">27</span><span class="text">What is the Part A deductible?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-the-part-b-deductible"><span class="num">28</span><span class="text">What is the Part B deductible?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/part-b-late-enrollment-penalty"><span class="num">29</span><span class="text">What is the Part B late enrollment penalty and how long does it last?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-part-b-premium"><span class="num">30</span><span class="text">What is the Part B premium and what affects it?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-best-lower-cost"><span class="num">31</span><span class="text">What is the best Medicare choice in Utah if my top priority is lower monthly cost?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-what-else-to-compare"><span class="num">32</span><span class="text">What should I compare in Utah besides premium and dental extras?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-costs-for-surgery-or-chemo"><span class="num">33</span><span class="text">What would my costs look like if I needed surgery or chemo on Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medicare-costs-in-a-bad-health-year"><span class="num">34</span><span class="text">What would my costs look like in a bad health year on Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/which-medicare-option-most-freedom-to-choose-doctors"><span class="num">35</span><span class="text">Which Medicare option gives me the most freedom to choose my own doctors?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/which-tax-year-does-medicare-use-for-irmaa"><span class="num">36</span><span class="text">Which tax year does Medicare use to calculate IRMAA?</span></a></li></ul>

  <div class="section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment">📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs" class=active>💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement">🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security">💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers">👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics">📖 Medicare Basics & Other</a></div>

  <div class="related"><a href="https://www.restingsycamore.com/resources/calculators/medicare-advantage-vs-medigap-cost">MA vs Medigap Cost Calculator</a><a href="https://www.restingsycamore.com/resources/calculators/part-b-penalty">Part B Penalty Calculator</a><a href="https://www.restingsycamore.com/resources/calculators/irmaa-calculator">IRMAA Calculator</a><a href="https://www.restingsycamore.com/resources/calculators/medicare-savings-program">Medicare Savings Program</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
