(function(){
  var el = document.getElementById('rsa-doctors-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-hero"><div class="rsa-ix-breadcrumb"><a href="https://www.restingsycamore.com">Home</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare">Medicare</a> <span>›</span> <a href="https://www.restingsycamore.com/medicare/doctors">Doctors</a> <span>›</span> <span class="rsa-ix-bc-current">Utah</span></div><h1>Medicare Doctors in Utah</h1><p>179 Medicare-accepting physicians in Utah, listed A–Z.</p></div><div class="rsa-ix-content">
  <div class="rsa-ix-stats">
    <div class="rsa-ix-stat"><div class="num">179</div><div class="lbl">Physicians</div></div>
    <div class="rsa-ix-stat"><div class="num">18</div><div class="lbl">Starting Letters</div></div>
    <div class="rsa-ix-stat"><div class="num">3</div><div class="lbl">States Covered</div></div>
  </div>

  <div class="rsa-ix-intro">
    Finding a Medicare-accepting doctor in Utah starts here. These 179 physicians accept Medicare
    — though which Medicare <em>plans</em> they're in-network with varies. Check the individual doctor page
    to see which plans include your doctor before you enroll.
  </div>

  <div class="rsa-ix-section-title">All Utah Medicare Doctors — A to Z</div>
  
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">A</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-englebright">Aaron Englebright</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-hewlett">Aaron Hewlett</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-pugh">Aaron Pugh</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-reich-1003388265">Aaron Reich 1003388265</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-secrest-1003176934">Aaron Secrest 1003176934</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-wilkerson-1003671272">Aaron Wilkerson 1003671272</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/abinash-roy">Abinash Roy</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/adam-dye">Adam Dye</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/adam-meier">Adam Meier</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/adrienne-mcmaster-1003095373">Adrienne Mcmaster 1003095373</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ahmed-shafter">Ahmed Shafter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/akbar-shakoor">Akbar Shakoor</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alan-pearson">Alan Pearson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alan-sanderson">Alan Sanderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alec-mecham">Alec Mecham</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alisa-corry-1003586876">Alisa Corry 1003586876</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/allison-stewart">Allison Stewart</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-curtis">Amanda Curtis</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-legg">Amanda Legg</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-stott">Amanda Stott</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-turner">Amanda Turner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amelia-anderson">Amelia Anderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amelia-bell">Amelia Bell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amy-benedict">Amy Benedict</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/andrew-badke">Andrew Badke</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/andrew-patchett">Andrew Patchett</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/angel-lybbert">Angel Lybbert</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/angela-mayer">Angela Mayer</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/angela-stevenson">Angela Stevenson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ann-shipley-1003213901">Ann Shipley 1003213901</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/annalie-tracy">Annalie Tracy</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/anngee-dreiling">Anngee Dreiling</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/april-larkin">April Larkin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashlee-fenton-1003682105">Ashlee Fenton 1003682105</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashlee-walker">Ashlee Walker</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashley-saunders-1003680117">Ashley Saunders 1003680117</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashley-sefcovic">Ashley Sefcovic</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">B</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bailey-burgan">Bailey Burgan</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/barbara-hilton">Barbara Hilton</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/barry-acor">Barry Acor</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/beau-kunzler">Beau Kunzler</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/becky-rasmuson">Becky Rasmuson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-adams">Benjamin Adams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-carter">Benjamin Carter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-draleau">Benjamin Draleau</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-haymond">Benjamin Haymond</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-seale">Benjamin Seale</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-stowers">Benjamin Stowers</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/blake-miles-1003526468">Blake Miles 1003526468</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bogdan-anea-1003308859">Bogdan Anea 1003308859</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brad-goates">Brad Goates</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-bybee">Bradley Bybee</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-chambers">Bradley Chambers</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-evanson">Bradley Evanson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-thompson">Bradley Thompson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradon-burningham">Bradon Burningham</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brandon-bonewell">Brandon Bonewell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brandon-durfee">Brandon Durfee</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brandon-hermansen">Brandon Hermansen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brent-felix">Brent Felix</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brent-smith">Brent Smith</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brett-nance">Brett Nance</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brett-porter">Brett Porter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brett-wallin">Brett Wallin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-adams">Brian Adams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-carlson">Brian Carlson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-hess">Brian Hess</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-johnson">Brian Johnson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/broc-astill">Broc Astill</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/broc-parson">Broc Parson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brogan-crane">Brogan Crane</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brooks-beal">Brooks Beal</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bruce-isaacson">Bruce Isaacson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bryant-whiting">Bryant Whiting</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bryce-ferguson">Bryce Ferguson</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">C</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carl-turner">Carl Turner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carlos-leon">Carlos Leon</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carlos-mercado">Carlos Mercado</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carmen-gota">Carmen Gota</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carolyn-bell">Carolyn Bell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/casey-henich-1003041740">Casey Henich 1003041740</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/cathleen-obray">Cathleen Obray</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/cedric-buckley">Cedric Buckley</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/chad-anderson">Chad Anderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/chesley-wells">Chesley Wells</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/chris-nguyen">Chris Nguyen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/christopher-black">Christopher Black</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/christopher-sauceda">Christopher Sauceda</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/christopher-strawter">Christopher Strawter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/clint-bunker">Clint Bunker</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/colson-healy">Colson Healy</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/corey-ellis">Corey Ellis</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/corey-walker">Corey Walker</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/cort-leavitt">Cort Leavitt</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/craig-grose">Craig Grose</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/curtis-carter">Curtis Carter</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">D</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/dallas-wright">Dallas Wright</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/daniel-weiss">Daniel Weiss</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-adams">David Adams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-casey">David Casey</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-faux">David Faux</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-grygla">David Grygla</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-haak-1003444035">David Haak 1003444035</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-mitchell">David Mitchell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-tate">David Tate</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/dee-gardner">Dee Gardner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/don-neer">Don Neer</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/donald-morris">Donald Morris</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">E</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/elisabeth-ferlic">Elisabeth Ferlic</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/enrique-alfaro">Enrique Alfaro</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">G</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/gayle-wong">Gayle Wong</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/george-jarad">George Jarad</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/george-jeung">George Jeung</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/gordon-smith">Gordon Smith</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/grace-paradela">Grace Paradela</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">J</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/j-parkinson">J Parkinson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/james-hawkes">James Hawkes</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jameson-petersen">Jameson Petersen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jared-chin">Jared Chin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jarid-gray">Jarid Gray</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-hansen">Jason Hansen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-smart">Jason Smart</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-snarr">Jason Snarr</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-swigert">Jason Swigert</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jeffrey-huffman">Jeffrey Huffman</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jeffrey-schenk">Jeffrey Schenk</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jeffrey-thompson-1003076233">Jeffrey Thompson 1003076233</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/john-rathbun">John Rathbun</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jonathan-callaway">Jonathan Callaway</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jordan-huber">Jordan Huber</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/joseph-wheeler">Joseph Wheeler</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/joshua-lovell">Joshua Lovell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/joshua-schliesser">Joshua Schliesser</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">K</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/karl-trimble">Karl Trimble</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kelly-hubbard">Kelly Hubbard</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kevin-meier">Kevin Meier</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kirill-sinitsin">Kirill Sinitsin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kristin-tarbet">Kristin Tarbet</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">L</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/loren-gulbranson">Loren Gulbranson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/luciana-de-saibro">Luciana De Saibro</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">M</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/marcellus-assiago">Marcellus Assiago</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/marie-tuttle">Marie Tuttle</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/matthew-crosby">Matthew Crosby</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/matthew-hubbard">Matthew Hubbard</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/matthew-williams">Matthew Williams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/megan-meier-1003303496">Megan Meier 1003303496</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/michael-grant">Michael Grant</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/michael-hadley">Michael Hadley</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/michael-kline">Michael Kline</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mikhail-shipotko-1003217977">Mikhail Shipotko 1003217977</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mitchell-bassett">Mitchell Bassett</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mitchell-goff">Mitchell Goff</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mustufa-saifee">Mustufa Saifee</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">N</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nathan-anderson">Nathan Anderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nicholas-behunin">Nicholas Behunin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nicholas-knighton">Nicholas Knighton</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nitpriya-paliwal">Nitpriya Paliwal</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">O</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/owen-owens">Owen Owens</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">P</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/patrik-luzny">Patrik Luzny</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">R</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/rachel-brown">Rachel Brown</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/richard-patilano">Richard Patilano</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/rick-nordgren">Rick Nordgren</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/robert-cope">Robert Cope</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/robin-berger">Robin Berger</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ryan-larsen">Ryan Larsen</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">S</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/samuel-andelin">Samuel Andelin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/scott-heiner">Scott Heiner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/scott-salmon">Scott Salmon</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/sharon-richens">Sharon Richens</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/shawn-allen">Shawn Allen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/steven-young">Steven Young</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">T</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/tawnya-constantino">Tawnya Constantino</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/taylor-nelson">Taylor Nelson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/theodore-moon">Theodore Moon</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/thomas-brinton">Thomas Brinton</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/trevor-smith">Trevor Smith</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">W</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/wallace-smith">Wallace Smith</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/william-wagner">William Wagner</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">Y</div>
          <div class="rsa-ix-alpha-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/yaw-boateng">Yaw Boateng</a></div></div>
        </div>

  <div class="rsa-ix-related">
    <a href="https://www.restingsycamore.com/medicare/doctors">← All States</a>
    <a href="https://www.restingsycamore.com/medicare/states/utah">Medicare in Utah</a>
    <a href="https://www.restingsycamore.com/medicare/providers/utah">Utah Care Facilities</a>
    <a href="https://www.restingsycamore.com/medicare/plans/utah">Utah Plans</a>
    <a href="https://www.restingsycamore.com/medicare/compare-medicare-plans">Compare Plans</a>
  </div>

  

  
</div></div>`;
})();
