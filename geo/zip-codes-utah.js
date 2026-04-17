(function(){
  var el = document.getElementById('rsa-zip-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/states/utah">Utah</a> <span>›</span> <span class="rsa-ix-bc-current">ZIP Codes</span></div><h1>Medicare by ZIP Code in Utah</h1><p>103 Utah ZIP codes with local Medicare plan and provider information.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">103</div><div class="lbl">ZIP Codes</div></div>
    <div class="stat"><div class="num">6</div><div class="lbl">Regions</div></div>
    <div class="stat"><div class="num">100</div><div class="lbl">Cities</div></div>
    <div class="stat"><div class="num">29</div><div class="lbl">Counties</div></div>
  </div>

  <div class="rsa-ix-intro">
    <strong>Why your ZIP code matters for Medicare:</strong> Medicare Advantage plans are
    approved county by county — and some ZIP codes that straddle county lines have
    more plan options than others. Your ZIP determines which plans you can enroll in,
    which doctors are in-network, and what your out-of-pocket costs look like.
    Enter your ZIP below to see what's available where you live.
  </div>

  <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;
              color:#64748b;margin-bottom:10px">Jump to a region</div>
  <div class="prefix-nav"><a href="#840xxx">840xxx</a><a href="#841xxx">841xxx</a><a href="#843xxx">843xxx</a><a href="#844xxx">844xxx</a><a href="#846xxx">846xxx</a><a href="#847xxx">847xxx</a></div>

  <div class="prefix-section" id="840xxx">
  <div class="prefix-header">
    <span class="prefix-label">840xxx</span>
    <span class="prefix-region">Salt Lake County</span>
    <span class="prefix-count">34 ZIPs</span>
  </div>
  <div class="zip-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84003">84003</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84004">84004</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84005">84005</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84010">84010</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84015">84015</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84016">84016</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84020">84020</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84025">84025</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84037">84037</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84040">84040</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84041">84041</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84042">84042</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84043">84043</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84044">84044</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84045">84045</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84047">84047</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84054">84054</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84057">84057</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84058">84058</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84059">84059</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84060">84060</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84062">84062</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84065">84065</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84067">84067</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84070">84070</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84074">84074</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84075">84075</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84087">84087</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84088">84088</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84094">84094</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84095">84095</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84096">84096</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84097">84097</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84098">84098</a></div>
</div><div class="prefix-section" id="841xxx">
  <div class="prefix-header">
    <span class="prefix-label">841xxx</span>
    <span class="prefix-region">Salt Lake / Davis County</span>
    <span class="prefix-count">27 ZIPs</span>
  </div>
  <div class="zip-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84101">84101</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84102">84102</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84103">84103</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84104">84104</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84105">84105</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84106">84106</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84107">84107</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84108">84108</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84109">84109</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84111">84111</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84112">84112</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84113">84113</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84115">84115</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84116">84116</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84117">84117</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84118">84118</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84119">84119</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84120">84120</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84121">84121</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84123">84123</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84124">84124</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84127">84127</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84128">84128</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84129">84129</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84132">84132</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84143">84143</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84148">84148</a></div>
</div><div class="prefix-section" id="843xxx">
  <div class="prefix-header">
    <span class="prefix-label">843xxx</span>
    <span class="prefix-region">Logan / Cache County</span>
    <span class="prefix-count">11 ZIPs</span>
  </div>
  <div class="zip-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84302">84302</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84318">84318</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84319">84319</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84321">84321</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84326">84326</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84327">84327</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84332">84332</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84333">84333</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84335">84335</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84337">84337</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84341">84341</a></div>
</div><div class="prefix-section" id="844xxx">
  <div class="prefix-header">
    <span class="prefix-label">844xxx</span>
    <span class="prefix-region">Provo / Utah County</span>
    <span class="prefix-count">5 ZIPs</span>
  </div>
  <div class="zip-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84401">84401</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84403">84403</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84404">84404</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84405">84405</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84414">84414</a></div>
</div><div class="prefix-section" id="846xxx">
  <div class="prefix-header">
    <span class="prefix-label">846xxx</span>
    <span class="prefix-region">Price / Helper Area</span>
    <span class="prefix-count">12 ZIPs</span>
  </div>
  <div class="zip-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84601">84601</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84602">84602</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84603">84603</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84604">84604</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84605">84605</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84606">84606</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84651">84651</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84653">84653</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84655">84655</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84660">84660</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84663">84663</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84664">84664</a></div>
</div><div class="prefix-section" id="847xxx">
  <div class="prefix-header">
    <span class="prefix-label">847xxx</span>
    <span class="prefix-region">St. George / Washington County</span>
    <span class="prefix-count">14 ZIPs</span>
  </div>
  <div class="zip-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84720">84720</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84721">84721</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84725">84725</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84737">84737</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84738">84738</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84745">84745</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84765">84765</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84770">84770</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84774">84774</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84780">84780</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84781">84781</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84783">84783</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84784">84784</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84790">84790</a></div>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/cities">Utah Cities</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/counties">Utah Counties</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/doctors/utah">Doctors in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
  </div>

  
  
</div></div>`;
})();
