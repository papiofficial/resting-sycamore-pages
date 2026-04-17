(function(){
  var el = document.getElementById('rsa-plans-index');
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
.rsa-ix-intro { background: white; border-left: 3px solid #2563eb; border-radius: 0 10px 10px 0; padding: 14px 18px; margin-bottom: 28px; font-size: 14px; line-height: 1.7; color: #2a3446; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-state-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 32px; }
@media(max-width: 700px) { .rsa-ix-state-grid { grid-template-columns: 1fr; } }
.rsa-ix-state-card { background: white; border: 1px solid #e9eaee; border-radius: 10px; padding: 24px; box-shadow: 0 1px 3px rgba(11,18,32,0.06); }
.rsa-ix-state-card h2 { font-size: 20px; font-weight: 700; color: #0b1220; margin: 0 0 4px; }
.rsa-ix-state-card .count { font-size: 13px; color: #5a6578; margin-bottom: 16px; }
.rsa-ix-state-card a.btn { display: inline-block; background: #2563eb; color: white; text-decoration: none; padding: 9px 16px; border-radius: 8px; font-size: 14px; font-weight: 600; }
.rsa-ix-state-card a.btn:hover { background: #1d4ed8; }
.rsa-ix-related { display: flex; gap: 8px; flex-wrap: wrap; padding-top: 24px; border-top: 1px solid #e9eaee; margin-top: 32px; }
.rsa-ix-related a { padding: 7px 14px; border: 1px solid #e9eaee; border-radius: 8px; font-size: 13px; color: #2a3446; text-decoration: none; background: white; font-weight: 500; }
.rsa-ix-related a:hover { border-color: #2563eb; color: #2563eb; }`;
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <span class="rsa-ix-bc-current">Plans</span></div><h1>Medicare Plans by State</h1><p>Compare Medicare Advantage and Part D plans in Utah, Ohio, and Pennsylvania.</p></div>
<div class="rsa-ix-content">
  <div class="rsa-ix-intro">Browse Medicare Advantage, Supplement, and Part D plans available in Utah, Ohio, and Pennsylvania. Select a state to see all plans organized by carrier.</div>
  <div class="rsa-ix-state-grid">
    <div class="rsa-ix-state-card">
      <h2>Utah</h2>
      <div class="count">33 plans &middot; 6 carriers</div>
      <a class="btn" href="https://www.restingsycamore.com/medicare/plans/utah">View Utah Plans &rarr;</a>
    </div>
    <div class="rsa-ix-state-card">
      <h2>Ohio</h2>
      <div class="count">170 plans &middot; 21 carriers</div>
      <a class="btn" href="https://www.restingsycamore.com/medicare/plans/ohio">View Ohio Plans &rarr;</a>
    </div>
    <div class="rsa-ix-state-card">
      <h2>Pennsylvania</h2>
      <div class="count">216 plans &middot; 20 carriers</div>
      <a class="btn" href="https://www.restingsycamore.com/medicare/plans/pennsylvania">View Pennsylvania Plans &rarr;</a>
    </div>
  </div>
  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/carriers">All Carriers</a>
    <a href="https://www.restingsycamore.com/medicare/plan-types">Plan Types Explained</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
    <a href="https://www.restingsycamore.com/medicare">Medicare Home</a>
  </div>
</div></div>`;
})();
