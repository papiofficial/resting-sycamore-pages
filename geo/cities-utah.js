(function(){
  var el = document.getElementById('rsa-cities-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/states/utah">Utah</a> <span>›</span> <span class="rsa-ix-bc-current">Cities</span></div><h1>Medicare Resources by City in Utah</h1><p>100 Utah cities with local Medicare plan and provider information.</p></div><div class="rsa-ix-content">
  <div class="rsa-ix-stats">
    <div class="rsa-ix-stat"><div class="num">100</div><div class="lbl">Cities</div></div>
    <div class="rsa-ix-stat"><div class="num">104</div><div class="lbl">ZIP Codes</div></div>
    <div class="rsa-ix-stat"><div class="num">20</div><div class="lbl">Medicare Plans</div></div>
    <div class="rsa-ix-stat"><div class="num">20</div><div class="lbl">A–Z Groups</div></div>
  </div>

  <div class="rsa-ix-intro">
    Medicare plan availability, premium costs, and doctor networks all vary by location —
    even within the same state. Your city determines which plans you can enroll in and
    which doctors are in-network. Find your city below to see what's available where you live.
  </div>

  <div class="rsa-ix-section-label">Browse all Utah cities — A to Z</div>
  <div class="rsa-ix-carrier-nav"><a href="#A">A</a><a href="#B">B</a><a href="#C">C</a><a href="#D">D</a><a href="#E">E</a><a href="#F">F</a><a href="#G">G</a><a href="#H">H</a><a href="#I">I</a><a href="#K">K</a><a href="#L">L</a><a href="#M">M</a><a href="#N">N</a><a href="#O">O</a><a href="#P">P</a><a href="#R">R</a><a href="#S">S</a><a href="#T">T</a><a href="#V">V</a><a href="#W">W</a></div>
  <div class="rsa-ix-alpha" id="A">
  <div class="rsa-ix-letter-heading">A</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/alpine">Alpine</a><a href="https://www.restingsycamore.com/medicare/cities/american-fork">American Fork</a></div>
</div><div class="rsa-ix-alpha" id="B">
  <div class="rsa-ix-letter-heading">B</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/beaver">Beaver</a><a href="https://www.restingsycamore.com/medicare/cities/blanding">Blanding</a><a href="https://www.restingsycamore.com/medicare/cities/bluffdale">Bluffdale</a><a href="https://www.restingsycamore.com/medicare/cities/bountiful">Bountiful</a><a href="https://www.restingsycamore.com/medicare/cities/brigham-city">Brigham City</a></div>
</div><div class="rsa-ix-alpha" id="C">
  <div class="rsa-ix-letter-heading">C</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/cedar-city">Cedar City</a><a href="https://www.restingsycamore.com/medicare/cities/cedar-hills">Cedar Hills</a><a href="https://www.restingsycamore.com/medicare/cities/centerfield">Centerfield</a><a href="https://www.restingsycamore.com/medicare/cities/clearfield">Clearfield</a><a href="https://www.restingsycamore.com/medicare/cities/clinton-sfs5p">Clinton Sfs5p</a><a href="https://www.restingsycamore.com/medicare/cities/cottonwood-heights">Cottonwood Heights</a></div>
</div><div class="rsa-ix-alpha" id="D">
  <div class="rsa-ix-letter-heading">D</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/delta">Delta</a><a href="https://www.restingsycamore.com/medicare/cities/draper">Draper</a></div>
</div><div class="rsa-ix-alpha" id="E">
  <div class="rsa-ix-letter-heading">E</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/eagle-mountain">Eagle Mountain</a><a href="https://www.restingsycamore.com/medicare/cities/elk-ridge">Elk Ridge</a><a href="https://www.restingsycamore.com/medicare/cities/enterprise">Enterprise</a></div>
</div><div class="rsa-ix-alpha" id="F">
  <div class="rsa-ix-letter-heading">F</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/farmington">Farmington</a><a href="https://www.restingsycamore.com/medicare/cities/farr-west">Farr West</a><a href="https://www.restingsycamore.com/medicare/cities/ferron">Ferron</a><a href="https://www.restingsycamore.com/medicare/cities/fillmore">Fillmore</a></div>
</div><div class="rsa-ix-alpha" id="G">
  <div class="rsa-ix-letter-heading">G</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/gunnison">Gunnison</a></div>
</div><div class="rsa-ix-alpha" id="H">
  <div class="rsa-ix-letter-heading">H</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/harrisville">Harrisville</a><a href="https://www.restingsycamore.com/medicare/cities/heber-city">Heber City</a><a href="https://www.restingsycamore.com/medicare/cities/herriman">Herriman</a><a href="https://www.restingsycamore.com/medicare/cities/highland">Highland</a><a href="https://www.restingsycamore.com/medicare/cities/hildale">Hildale</a><a href="https://www.restingsycamore.com/medicare/cities/holladay">Holladay</a><a href="https://www.restingsycamore.com/medicare/cities/hurricane">Hurricane</a><a href="https://www.restingsycamore.com/medicare/cities/hyde-park">Hyde Park</a><a href="https://www.restingsycamore.com/medicare/cities/hyrum">Hyrum</a></div>
</div><div class="rsa-ix-alpha" id="I">
  <div class="rsa-ix-letter-heading">I</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/ivins">Ivins</a></div>
</div><div class="rsa-ix-alpha" id="K">
  <div class="rsa-ix-letter-heading">K</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/kanab">Kanab</a><a href="https://www.restingsycamore.com/medicare/cities/kaysville">Kaysville</a><a href="https://www.restingsycamore.com/medicare/cities/kearns">Kearns</a></div>
</div><div class="rsa-ix-alpha" id="L">
  <div class="rsa-ix-letter-heading">L</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/la-verkin">La Verkin</a><a href="https://www.restingsycamore.com/medicare/cities/layton">Layton</a><a href="https://www.restingsycamore.com/medicare/cities/lehi">Lehi</a><a href="https://www.restingsycamore.com/medicare/cities/lindon">Lindon</a><a href="https://www.restingsycamore.com/medicare/cities/logan">Logan</a></div>
</div><div class="rsa-ix-alpha" id="M">
  <div class="rsa-ix-letter-heading">M</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/magna">Magna</a><a href="https://www.restingsycamore.com/medicare/cities/mapleton">Mapleton</a><a href="https://www.restingsycamore.com/medicare/cities/midvale">Midvale</a><a href="https://www.restingsycamore.com/medicare/cities/milford">Milford</a><a href="https://www.restingsycamore.com/medicare/cities/millcreek">Millcreek</a><a href="https://www.restingsycamore.com/medicare/cities/millville">Millville</a><a href="https://www.restingsycamore.com/medicare/cities/moab">Moab</a><a href="https://www.restingsycamore.com/medicare/cities/monticello">Monticello</a><a href="https://www.restingsycamore.com/medicare/cities/mount-pleasant">Mount Pleasant</a><a href="https://www.restingsycamore.com/medicare/cities/murray">Murray</a></div>
</div><div class="rsa-ix-alpha" id="N">
  <div class="rsa-ix-letter-heading">N</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/nephi">Nephi</a><a href="https://www.restingsycamore.com/medicare/cities/newton">Newton</a><a href="https://www.restingsycamore.com/medicare/cities/nibley">Nibley</a><a href="https://www.restingsycamore.com/medicare/cities/north-logan">North Logan</a><a href="https://www.restingsycamore.com/medicare/cities/north-ogden">North Ogden</a><a href="https://www.restingsycamore.com/medicare/cities/north-salt-lake">North Salt Lake</a></div>
</div><div class="rsa-ix-alpha" id="O">
  <div class="rsa-ix-letter-heading">O</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/ogden">Ogden</a><a href="https://www.restingsycamore.com/medicare/cities/orem">Orem</a></div>
</div><div class="rsa-ix-alpha" id="P">
  <div class="rsa-ix-letter-heading">P</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/panguitch">Panguitch</a><a href="https://www.restingsycamore.com/medicare/cities/park-city">Park City</a><a href="https://www.restingsycamore.com/medicare/cities/payson">Payson</a><a href="https://www.restingsycamore.com/medicare/cities/pleasant-grove">Pleasant Grove</a><a href="https://www.restingsycamore.com/medicare/cities/pleasant-view">Pleasant View</a><a href="https://www.restingsycamore.com/medicare/cities/price">Price</a><a href="https://www.restingsycamore.com/medicare/cities/providence">Providence</a><a href="https://www.restingsycamore.com/medicare/cities/provo">Provo</a></div>
</div><div class="rsa-ix-alpha" id="R">
  <div class="rsa-ix-letter-heading">R</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/richfield">Richfield</a><a href="https://www.restingsycamore.com/medicare/cities/richmond">Richmond</a><a href="https://www.restingsycamore.com/medicare/cities/riverdale">Riverdale</a><a href="https://www.restingsycamore.com/medicare/cities/riverton">Riverton</a><a href="https://www.restingsycamore.com/medicare/cities/roosevelt">Roosevelt</a><a href="https://www.restingsycamore.com/medicare/cities/roy">Roy</a></div>
</div><div class="rsa-ix-alpha" id="S">
  <div class="rsa-ix-letter-heading">S</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/salem">Salem</a><a href="https://www.restingsycamore.com/medicare/cities/salina">Salina</a><a href="https://www.restingsycamore.com/medicare/cities/salt-lake-city">Salt Lake City</a><a href="https://www.restingsycamore.com/medicare/cities/sandy">Sandy</a><a href="https://www.restingsycamore.com/medicare/cities/santa-clara">Santa Clara</a><a href="https://www.restingsycamore.com/medicare/cities/santaquin">Santaquin</a><a href="https://www.restingsycamore.com/medicare/cities/saratoga-springs">Saratoga Springs</a><a href="https://www.restingsycamore.com/medicare/cities/smithfield">Smithfield</a><a href="https://www.restingsycamore.com/medicare/cities/south-jordan">South Jordan</a><a href="https://www.restingsycamore.com/medicare/cities/south-ogden">South Ogden</a><a href="https://www.restingsycamore.com/medicare/cities/south-salt-lake">South Salt Lake</a><a href="https://www.restingsycamore.com/medicare/cities/spanish-fork">Spanish Fork</a><a href="https://www.restingsycamore.com/medicare/cities/springville">Springville</a><a href="https://www.restingsycamore.com/medicare/cities/st-george">St George</a><a href="https://www.restingsycamore.com/medicare/cities/syracuse">Syracuse</a></div>
</div><div class="rsa-ix-alpha" id="T">
  <div class="rsa-ix-letter-heading">T</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/taylorsville">Taylorsville</a><a href="https://www.restingsycamore.com/medicare/cities/tooele">Tooele</a><a href="https://www.restingsycamore.com/medicare/cities/toquerville">Toquerville</a><a href="https://www.restingsycamore.com/medicare/cities/tremonton">Tremonton</a></div>
</div><div class="rsa-ix-alpha" id="V">
  <div class="rsa-ix-letter-heading">V</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/vernal">Vernal</a><a href="https://www.restingsycamore.com/medicare/cities/vineyard">Vineyard</a></div>
</div><div class="rsa-ix-alpha" id="W">
  <div class="rsa-ix-letter-heading">W</div>
  <div class="rsa-ix-alpha-grid"><a href="https://www.restingsycamore.com/medicare/cities/washington">Washington</a><a href="https://www.restingsycamore.com/medicare/cities/washington-terrace">Washington Terrace</a><a href="https://www.restingsycamore.com/medicare/cities/west-haven">West Haven</a><a href="https://www.restingsycamore.com/medicare/cities/west-jordan">West Jordan</a><a href="https://www.restingsycamore.com/medicare/cities/west-valley-city">West Valley City</a><a href="https://www.restingsycamore.com/medicare/cities/woods-cross">Woods Cross</a></div>
</div>

  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/counties">Utah Counties</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/zip-codes">Utah ZIP Codes</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/doctors/utah">Doctors in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
  </div>

  
  
</div></div>`;
})();
