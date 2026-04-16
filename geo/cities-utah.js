(function(){
  var el = document.getElementById('rsa-cities-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare by City in Utah</h1><p>Find Medicare plans, doctors, and local healthcare resources in any of the 100 cities we cover across Utah.</p></div><div class="rsa-ix-container">
  <div class="stats-row">
    <div class="stat"><div class="num">100</div><div class="lbl">Cities</div></div>
    <div class="stat"><div class="num">104</div><div class="lbl">ZIP Codes</div></div>
    <div class="stat"><div class="num">20</div><div class="lbl">Medicare Plans</div></div>
    <div class="stat"><div class="num">20</div><div class="lbl">A–Z Groups</div></div>
  </div>

  <div class="rsa-ix-intro">
    Medicare plan availability, premium costs, and doctor networks all vary by location —
    even within the same state. Your city determines which plans you can enroll in and
    which doctors are in-network. Find your city below to see what's available where you live.
  </div>

  <div class="section-label">Browse all Utah cities — A to Z</div>
  <div class="alpha-nav"><a href="#A">A</a><a href="#B">B</a><a href="#C">C</a><a href="#D">D</a><a href="#E">E</a><a href="#F">F</a><a href="#G">G</a><a href="#H">H</a><a href="#I">I</a><a href="#K">K</a><a href="#L">L</a><a href="#M">M</a><a href="#N">N</a><a href="#O">O</a><a href="#P">P</a><a href="#R">R</a><a href="#S">S</a><a href="#T">T</a><a href="#V">V</a><a href="#W">W</a></div>
  <div class="letter-block" id="A">
  <div class="rsa-ix-letter-heading">A</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/alpine">Alpine</a><a href="https://www.restingsycamore.com/medicare/cities/american-fork">American Fork</a></div>
</div><div class="letter-block" id="B">
  <div class="rsa-ix-letter-heading">B</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/beaver">Beaver</a><a href="https://www.restingsycamore.com/medicare/cities/blanding">Blanding</a><a href="https://www.restingsycamore.com/medicare/cities/bluffdale">Bluffdale</a><a href="https://www.restingsycamore.com/medicare/cities/bountiful">Bountiful</a><a href="https://www.restingsycamore.com/medicare/cities/brigham-city">Brigham City</a></div>
</div><div class="letter-block" id="C">
  <div class="rsa-ix-letter-heading">C</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/cedar-city">Cedar City</a><a href="https://www.restingsycamore.com/medicare/cities/cedar-hills">Cedar Hills</a><a href="https://www.restingsycamore.com/medicare/cities/centerfield">Centerfield</a><a href="https://www.restingsycamore.com/medicare/cities/clearfield">Clearfield</a><a href="https://www.restingsycamore.com/medicare/cities/clinton-sfs5p">Clinton Sfs5p</a><a href="https://www.restingsycamore.com/medicare/cities/cottonwood-heights">Cottonwood Heights</a></div>
</div><div class="letter-block" id="D">
  <div class="rsa-ix-letter-heading">D</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/delta">Delta</a><a href="https://www.restingsycamore.com/medicare/cities/draper">Draper</a></div>
</div><div class="letter-block" id="E">
  <div class="rsa-ix-letter-heading">E</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/eagle-mountain">Eagle Mountain</a><a href="https://www.restingsycamore.com/medicare/cities/elk-ridge">Elk Ridge</a><a href="https://www.restingsycamore.com/medicare/cities/enterprise">Enterprise</a></div>
</div><div class="letter-block" id="F">
  <div class="rsa-ix-letter-heading">F</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/farmington">Farmington</a><a href="https://www.restingsycamore.com/medicare/cities/farr-west">Farr West</a><a href="https://www.restingsycamore.com/medicare/cities/ferron">Ferron</a><a href="https://www.restingsycamore.com/medicare/cities/fillmore">Fillmore</a></div>
</div><div class="letter-block" id="G">
  <div class="rsa-ix-letter-heading">G</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/gunnison">Gunnison</a></div>
</div><div class="letter-block" id="H">
  <div class="rsa-ix-letter-heading">H</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/harrisville">Harrisville</a><a href="https://www.restingsycamore.com/medicare/cities/heber-city">Heber City</a><a href="https://www.restingsycamore.com/medicare/cities/herriman">Herriman</a><a href="https://www.restingsycamore.com/medicare/cities/highland">Highland</a><a href="https://www.restingsycamore.com/medicare/cities/hildale">Hildale</a><a href="https://www.restingsycamore.com/medicare/cities/holladay">Holladay</a><a href="https://www.restingsycamore.com/medicare/cities/hurricane">Hurricane</a><a href="https://www.restingsycamore.com/medicare/cities/hyde-park">Hyde Park</a><a href="https://www.restingsycamore.com/medicare/cities/hyrum">Hyrum</a></div>
</div><div class="letter-block" id="I">
  <div class="rsa-ix-letter-heading">I</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/ivins">Ivins</a></div>
</div><div class="letter-block" id="K">
  <div class="rsa-ix-letter-heading">K</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/kanab">Kanab</a><a href="https://www.restingsycamore.com/medicare/cities/kaysville">Kaysville</a><a href="https://www.restingsycamore.com/medicare/cities/kearns">Kearns</a></div>
</div><div class="letter-block" id="L">
  <div class="rsa-ix-letter-heading">L</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/la-verkin">La Verkin</a><a href="https://www.restingsycamore.com/medicare/cities/layton">Layton</a><a href="https://www.restingsycamore.com/medicare/cities/lehi">Lehi</a><a href="https://www.restingsycamore.com/medicare/cities/lindon">Lindon</a><a href="https://www.restingsycamore.com/medicare/cities/logan">Logan</a></div>
</div><div class="letter-block" id="M">
  <div class="rsa-ix-letter-heading">M</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/magna">Magna</a><a href="https://www.restingsycamore.com/medicare/cities/mapleton">Mapleton</a><a href="https://www.restingsycamore.com/medicare/cities/midvale">Midvale</a><a href="https://www.restingsycamore.com/medicare/cities/milford">Milford</a><a href="https://www.restingsycamore.com/medicare/cities/millcreek">Millcreek</a><a href="https://www.restingsycamore.com/medicare/cities/millville">Millville</a><a href="https://www.restingsycamore.com/medicare/cities/moab">Moab</a><a href="https://www.restingsycamore.com/medicare/cities/monticello">Monticello</a><a href="https://www.restingsycamore.com/medicare/cities/mount-pleasant">Mount Pleasant</a><a href="https://www.restingsycamore.com/medicare/cities/murray">Murray</a></div>
</div><div class="letter-block" id="N">
  <div class="rsa-ix-letter-heading">N</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/nephi">Nephi</a><a href="https://www.restingsycamore.com/medicare/cities/newton">Newton</a><a href="https://www.restingsycamore.com/medicare/cities/nibley">Nibley</a><a href="https://www.restingsycamore.com/medicare/cities/north-logan">North Logan</a><a href="https://www.restingsycamore.com/medicare/cities/north-ogden">North Ogden</a><a href="https://www.restingsycamore.com/medicare/cities/north-salt-lake">North Salt Lake</a></div>
</div><div class="letter-block" id="O">
  <div class="rsa-ix-letter-heading">O</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/ogden">Ogden</a><a href="https://www.restingsycamore.com/medicare/cities/orem">Orem</a></div>
</div><div class="letter-block" id="P">
  <div class="rsa-ix-letter-heading">P</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/panguitch">Panguitch</a><a href="https://www.restingsycamore.com/medicare/cities/park-city">Park City</a><a href="https://www.restingsycamore.com/medicare/cities/payson">Payson</a><a href="https://www.restingsycamore.com/medicare/cities/pleasant-grove">Pleasant Grove</a><a href="https://www.restingsycamore.com/medicare/cities/pleasant-view">Pleasant View</a><a href="https://www.restingsycamore.com/medicare/cities/price">Price</a><a href="https://www.restingsycamore.com/medicare/cities/providence">Providence</a><a href="https://www.restingsycamore.com/medicare/cities/provo">Provo</a></div>
</div><div class="letter-block" id="R">
  <div class="rsa-ix-letter-heading">R</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/richfield">Richfield</a><a href="https://www.restingsycamore.com/medicare/cities/richmond">Richmond</a><a href="https://www.restingsycamore.com/medicare/cities/riverdale">Riverdale</a><a href="https://www.restingsycamore.com/medicare/cities/riverton">Riverton</a><a href="https://www.restingsycamore.com/medicare/cities/roosevelt">Roosevelt</a><a href="https://www.restingsycamore.com/medicare/cities/roy">Roy</a></div>
</div><div class="letter-block" id="S">
  <div class="rsa-ix-letter-heading">S</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/salem">Salem</a><a href="https://www.restingsycamore.com/medicare/cities/salina">Salina</a><a href="https://www.restingsycamore.com/medicare/cities/salt-lake-city">Salt Lake City</a><a href="https://www.restingsycamore.com/medicare/cities/sandy">Sandy</a><a href="https://www.restingsycamore.com/medicare/cities/santa-clara">Santa Clara</a><a href="https://www.restingsycamore.com/medicare/cities/santaquin">Santaquin</a><a href="https://www.restingsycamore.com/medicare/cities/saratoga-springs">Saratoga Springs</a><a href="https://www.restingsycamore.com/medicare/cities/smithfield">Smithfield</a><a href="https://www.restingsycamore.com/medicare/cities/south-jordan">South Jordan</a><a href="https://www.restingsycamore.com/medicare/cities/south-ogden">South Ogden</a><a href="https://www.restingsycamore.com/medicare/cities/south-salt-lake">South Salt Lake</a><a href="https://www.restingsycamore.com/medicare/cities/spanish-fork">Spanish Fork</a><a href="https://www.restingsycamore.com/medicare/cities/springville">Springville</a><a href="https://www.restingsycamore.com/medicare/cities/st-george">St George</a><a href="https://www.restingsycamore.com/medicare/cities/syracuse">Syracuse</a></div>
</div><div class="letter-block" id="T">
  <div class="rsa-ix-letter-heading">T</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/taylorsville">Taylorsville</a><a href="https://www.restingsycamore.com/medicare/cities/tooele">Tooele</a><a href="https://www.restingsycamore.com/medicare/cities/toquerville">Toquerville</a><a href="https://www.restingsycamore.com/medicare/cities/tremonton">Tremonton</a></div>
</div><div class="letter-block" id="V">
  <div class="rsa-ix-letter-heading">V</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/vernal">Vernal</a><a href="https://www.restingsycamore.com/medicare/cities/vineyard">Vineyard</a></div>
</div><div class="letter-block" id="W">
  <div class="rsa-ix-letter-heading">W</div>
  <div class="rsa-ix-link-grid"><a href="https://www.restingsycamore.com/medicare/cities/washington">Washington</a><a href="https://www.restingsycamore.com/medicare/cities/washington-terrace">Washington Terrace</a><a href="https://www.restingsycamore.com/medicare/cities/west-haven">West Haven</a><a href="https://www.restingsycamore.com/medicare/cities/west-jordan">West Jordan</a><a href="https://www.restingsycamore.com/medicare/cities/west-valley-city">West Valley City</a><a href="https://www.restingsycamore.com/medicare/cities/woods-cross">Woods Cross</a></div>
</div>

  <div class="related">
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/counties">Utah Counties</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah/zip-codes">Utah ZIP Codes</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Medicare Plans</a>
    <a href="https://www.restingsycamore.com/medicare/doctors/utah">Doctors in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
  </div>

  
  
</div></div>`;
})();
