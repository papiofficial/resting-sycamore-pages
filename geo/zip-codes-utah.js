(function(){
  var el = document.getElementById('rsa-zip-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/states/utah">Utah</a> <span>›</span> <span class="rsa-ix-bc-current">ZIP Codes</span></div><h1>Medicare by ZIP Code in Utah</h1><p>103 Utah ZIP codes with local Medicare plan and provider information.</p></div><div class="rsa-ix-content">
  <div class="rsa-ix-stats">
    <div class="rsa-ix-stat"><div class="num">103</div><div class="lbl">ZIP Codes</div></div>
    <div class="rsa-ix-stat"><div class="num">6</div><div class="lbl">Regions</div></div>
    <div class="rsa-ix-stat"><div class="num">100</div><div class="lbl">Cities</div></div>
    <div class="rsa-ix-stat"><div class="num">29</div><div class="lbl">Counties</div></div>
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
  <div class="rsa-ix-geo-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84003">84003</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84004">84004</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84005">84005</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84010">84010</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84015">84015</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84016">84016</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84020">84020</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84025">84025</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84037">84037</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84040">84040</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84041">84041</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84042">84042</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84043">84043</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84044">84044</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84045">84045</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84047">84047</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84054">84054</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84057">84057</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84058">84058</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84059">84059</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84060">84060</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84062">84062</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84065">84065</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84067">84067</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84070">84070</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84074">84074</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84075">84075</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84087">84087</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84088">84088</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84094">84094</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84095">84095</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84096">84096</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84097">84097</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84098">84098</a></div>
</div><div class="prefix-section" id="841xxx">
  <div class="prefix-header">
    <span class="prefix-label">841xxx</span>
    <span class="prefix-region">Salt Lake / Davis County</span>
    <span class="prefix-count">27 ZIPs</span>
  </div>
  <div class="rsa-ix-geo-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84101">84101</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84102">84102</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84103">84103</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84104">84104</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84105">84105</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84106">84106</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84107">84107</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84108">84108</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84109">84109</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84111">84111</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84112">84112</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84113">84113</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84115">84115</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84116">84116</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84117">84117</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84118">84118</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84119">84119</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84120">84120</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84121">84121</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84123">84123</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84124">84124</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84127">84127</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84128">84128</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84129">84129</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84132">84132</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84143">84143</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84148">84148</a></div>
</div><div class="prefix-section" id="843xxx">
  <div class="prefix-header">
    <span class="prefix-label">843xxx</span>
    <span class="prefix-region">Logan / Cache County</span>
    <span class="prefix-count">11 ZIPs</span>
  </div>
  <div class="rsa-ix-geo-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84302">84302</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84318">84318</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84319">84319</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84321">84321</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84326">84326</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84327">84327</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84332">84332</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84333">84333</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84335">84335</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84337">84337</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84341">84341</a></div>
</div><div class="prefix-section" id="844xxx">
  <div class="prefix-header">
    <span class="prefix-label">844xxx</span>
    <span class="prefix-region">Provo / Utah County</span>
    <span class="prefix-count">5 ZIPs</span>
  </div>
  <div class="rsa-ix-geo-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84401">84401</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84403">84403</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84404">84404</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84405">84405</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84414">84414</a></div>
</div><div class="prefix-section" id="846xxx">
  <div class="prefix-header">
    <span class="prefix-label">846xxx</span>
    <span class="prefix-region">Price / Helper Area</span>
    <span class="prefix-count">12 ZIPs</span>
  </div>
  <div class="rsa-ix-geo-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84601">84601</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84602">84602</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84603">84603</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84604">84604</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84605">84605</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84606">84606</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84651">84651</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84653">84653</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84655">84655</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84660">84660</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84663">84663</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84664">84664</a></div>
</div><div class="prefix-section" id="847xxx">
  <div class="prefix-header">
    <span class="prefix-label">847xxx</span>
    <span class="prefix-region">St. George / Washington County</span>
    <span class="prefix-count">14 ZIPs</span>
  </div>
  <div class="rsa-ix-geo-grid"><a href="https://www.restingsycamore.com/medicare/zip-codes/84720">84720</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84721">84721</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84725">84725</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84737">84737</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84738">84738</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84745">84745</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84765">84765</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84770">84770</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84774">84774</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84780">84780</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84781">84781</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84783">84783</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84784">84784</a><a href="https://www.restingsycamore.com/medicare/zip-codes/84790">84790</a></div>
</div>

  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/cities">Utah Cities</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/counties">Utah Counties</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/doctors/utah">Doctors in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
  </div>

  
  
</div></div>`;
})();
