(function(){
  var el = document.getElementById('rsa-questions-supp');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="page-header" style="background:#0891b2;">
  <h1>🛡️ Medigap / Supplement</h1>
  <p class="tagline">Plan G, Plan N, guaranteed issue rights, and long-term premium trends.</p>
</div>
<div class="rsa-ix-container">
  <div class="intro-card">Medigap (Medicare Supplement) insurance fills the gaps Original Medicare leaves behind — copays, coinsurance, and deductibles. But the enrollment windows are strict, the premium trends vary, and plans are standardized differently by state. These questions cover everything from which plan to choose to what happens if you miss open enrollment.</div>

  <div class="count-badge">🛡️ 33 questions in this category</div>

  <div class="section-label">All questions — sorted A to Z</div>
  <ul class="q-list"><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medigap-premium-rating-method"><span class="num">1</span><span class="text">Are Utah Medigap premiums community-rated, issue-age-rated, or attained-age-rated?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medigap-premiums-under-65"><span class="num">2</span><span class="text">Are Utah Medigap premiums higher for beneficiaries under 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/are-all-plan-g-medigap-benefits-the-same"><span class="num">3</span><span class="text">Are all Medigap Plan G benefits the same regardless of company?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-buy-medigap-under-65-disabled"><span class="num">4</span><span class="text">Can I buy Medigap if I am under 65 and disabled?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/move-to-utah-keep-medigap"><span class="num">5</span><span class="text">Can I keep my Medigap plan if I move to Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/can-i-keep-medigap-if-i-move-to-another-state"><span class="num">6</span><span class="text">Can I keep my Medigap plan if I move to another state?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medigap-doctors-two-states"><span class="num">7</span><span class="text">Can I see doctors in two states if I have Original Medicare plus Medigap?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/switch-medicare-advantage-to-medigap-anytime"><span class="num">8</span><span class="text">Can I switch from Medicare Advantage to a Medigap plan any time?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-agent-compares-both"><span class="num">9</span><span class="text">Can a Utah Medicare agent compare both Medicare Advantage and Medigap fairly?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-disabled-medigap"><span class="num">10</span><span class="text">Can disabled Medicare beneficiaries buy Medigap in Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medigap-new-enrollment-at-65"><span class="num">11</span><span class="text">Do I get a new Medigap enrollment opportunity in Utah when I turn 65?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medigap-guaranteed-disabled"><span class="num">12</span><span class="text">Does Utah guarantee Medigap for disabled Medicare beneficiaries?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/compare-high-premium-supplement-vs-low-premium-advantage"><span class="num">13</span><span class="text">How do I compare a high-premium supplement to a low-premium Medicare Advantage plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-rural-medigap-safer"><span class="num">14</span><span class="text">Is Medigap safer for people living in rural Utah?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medigap-split-state"><span class="num">15</span><span class="text">Is Medigap the safer choice if I split time between Utah and another state?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/intermountain-medigap-vs-ma"><span class="num">16</span><span class="text">Is Original Medicare plus Medigap the easiest way to keep Intermountain access?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/harder-to-get-medigap-in-utah-after-medicare-advantage"><span class="num">17</span><span class="text">Is it harder to get a Medigap supplement in Utah if I started with Medicare Advantage?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/original-medicare-supplement-vs-medicare-advantage"><span class="num">18</span><span class="text">Should I go with Original Medicare plus a supplement or Medicare Advantage?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/biggest-regrets-medicare-advantage-vs-medigap"><span class="num">19</span><span class="text">What are the biggest regrets people have with Medicare Advantage versus Medigap?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-gaps-does-original-medicare-leave"><span class="num">20</span><span class="text">What gaps does Original Medicare leave me with?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/move-from-utah-ma-plan"><span class="num">21</span><span class="text">What happens if I move out of Utah and my Medicare Advantage plan no longer serves my area?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/wrong-medicare-plan-then-get-very-sick"><span class="num">22</span><span class="text">What if I choose the wrong Medicare plan and then get very sick?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/wrong-plan-get-sick"><span class="num">23</span><span class="text">What if I choose the wrong Medicare plan and then get very sick?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/ma-then-cant-get-medigap"><span class="num">24</span><span class="text">What if I pick Medicare Advantage and later cannot get a supplement?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/pick-medicare-advantage-cannot-get-supplement-later"><span class="num">25</span><span class="text">What if I pick Medicare Advantage and later cannot qualify for a supplement?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-medigap-how-does-it-work"><span class="num">26</span><span class="text">What is Medigap and how does it work with Original Medicare?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-plan-g-medigap"><span class="num">27</span><span class="text">What is Plan G and what does it cover?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/what-is-plan-n-medigap-vs-plan-g"><span class="num">28</span><span class="text">What is Plan N and how does it compare to Plan G?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/difference-medigap-vs-medicare-advantage"><span class="num">29</span><span class="text">What is the difference between Medigap and Medicare Advantage?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/who-is-better-off-with-medigap"><span class="num">30</span><span class="text">What kind of person is usually better off with Medigap?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/when-can-i-enroll-in-medigap"><span class="num">31</span><span class="text">When can I enroll in a Medigap plan?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/medigap-companies-in-utah-most-competitive"><span class="num">32</span><span class="text">Which Medigap companies sell plans in Utah and are most competitive?</span></a></li><li><a href="https://www.restingsycamore.com/medicare/questions/utah-medigap-carriers-stable-rate-increases"><span class="num">33</span><span class="text">Which Utah Medigap carriers are known for stable rate increases?</span></a></li></ul>

  <div class="section-label">Browse other topics</div>
  <div class="topic-nav"><a href="https://www.restingsycamore.com/medicare/questions/enrollment">📋 Enrollment & Eligibility</a><a href="https://www.restingsycamore.com/medicare/questions/costs">💰 Costs & Premiums</a><a href="https://www.restingsycamore.com/medicare/questions/medicare-advantage">🏥 Medicare Advantage</a><a href="https://www.restingsycamore.com/medicare/questions/supplement" class=active>🛡️ Medigap / Supplement</a><a href="https://www.restingsycamore.com/medicare/questions/part-d">💊 Part D & Drug Coverage</a><a href="https://www.restingsycamore.com/medicare/questions/work-and-social-security">💼 Medicare & Work / Social Security</a><a href="https://www.restingsycamore.com/medicare/questions/coverage-and-providers">👨‍⚕️ Coverage & Providers</a><a href="https://www.restingsycamore.com/medicare/questions/choosing-a-plan">🔍 Choosing a Plan</a><a href="https://www.restingsycamore.com/medicare/questions/basics">📖 Medicare Basics & Other</a></div>

  <div class="related"><a href="https://www.restingsycamore.com/resources/calculators/medigap-open-enrollment">Medigap Open Enrollment Calculator</a><a href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-g">Plan G Overview</a><a href="https://www.restingsycamore.com/medicare/plan-types/medicare-supplement-plan-n">Plan N Overview</a><a href="https://www.restingsycamore.com/resources/calculators/medicare-advantage-vs-medigap-cost">MA vs Medigap Calculator</a><a href="https://www.restingsycamore.com/medicare/questions">Medicare Q&A Index</a></div>

  
</div></div>`;
})();
