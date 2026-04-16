(function(){
  var el = document.getElementById('rsa-plans-index');
  if (!el) return;
  if (!document.getElementById('rsa-ix-styles')) {
    var s = document.createElement('style');
    s.id = 'rsa-ix-styles';
    s.textContent = '.rsa-ix-wrap{font-family:"Onest",system-ui,sans-serif;color:#1e293b;max-width:940px;margin:0 auto;padding:32px 24px}.rsa-ix-wrap h1{font-size:1.75rem;font-weight:700;color:#1e3a5f;margin-bottom:8px}.rsa-ix-wrap .rsa-ix-intro{color:#64748b;font-size:.95rem;line-height:1.6;margin-bottom:32px;max-width:640px}.rsa-ix-state-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:36px}.rsa-ix-state-card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,.06);transition:box-shadow .15s}.rsa-ix-state-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.1)}.rsa-ix-state-card h2{font-size:1.1rem;font-weight:700;color:#1e3a5f;margin-bottom:4px}.rsa-ix-state-card .rsa-ix-count{font-size:.82rem;color:#64748b;margin-bottom:16px}.rsa-ix-state-card a.rsa-ix-btn{display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:8px 16px;border-radius:6px;font-size:.85rem;font-weight:600;transition:background .15s}.rsa-ix-state-card a.rsa-ix-btn:hover{background:#1d4ed8}.rsa-ix-related{display:flex;gap:10px;flex-wrap:wrap;padding-top:22px;border-top:1px solid #e2e8f0}.rsa-ix-related a{padding:7px 14px;border:1px solid #e2e8f0;border-radius:6px;font-size:.82rem;color:#475569;text-decoration:none}.rsa-ix-related a:hover{border-color:#2563eb;color:#2563eb}@media(max-width:640px){.rsa-ix-state-grid{grid-template-columns:1fr}}';
    document.head.appendChild(s);
  }
  el.innerHTML = `<div class="rsa-ix-wrap">
  <h1>Medicare Plans by State</h1>
  <p class="rsa-ix-intro">Browse Medicare Advantage, Supplement, and Part D plans available in Utah, Ohio, and Pennsylvania. Select a state to see all plans organized by carrier.</p>
  <div class="rsa-ix-state-grid">
    <div class="rsa-ix-state-card">
      <h2>Utah</h2>
      <div class="rsa-ix-count">33 plans &middot; 6 carriers</div>
      <a class="rsa-ix-btn" href="https://www.restingsycamore.com/medicare/plans/utah">View Utah Plans &rarr;</a>
    </div>
    <div class="rsa-ix-state-card">
      <h2>Ohio</h2>
      <div class="rsa-ix-count">170 plans &middot; 21 carriers</div>
      <a class="rsa-ix-btn" href="https://www.restingsycamore.com/medicare/plans/ohio">View Ohio Plans &rarr;</a>
    </div>
    <div class="rsa-ix-state-card">
      <h2>Pennsylvania</h2>
      <div class="rsa-ix-count">216 plans &middot; 20 carriers</div>
      <a class="rsa-ix-btn" href="https://www.restingsycamore.com/medicare/plans/pennsylvania">View Pennsylvania Plans &rarr;</a>
    </div>
  </div>
  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/carriers">All Carriers</a>
    <a href="https://www.restingsycamore.com/medicare/plan-types">Plan Types Explained</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
    <a href="https://www.restingsycamore.com/medicare">Medicare Home</a>
  </div>
</div>`;
})();
