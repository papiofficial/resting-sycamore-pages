(function(){
  var el = document.getElementById('rsa-doctors-utah');
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
  el.innerHTML = `<div class="rsa-ix-wrap"><div class="rsa-ix-header"><h1>Medicare Doctors in Utah</h1><p>Browse 179 Medicare-accepting physicians in Utah. Click any doctor to view their Medicare plan network details.</p></div><div class="rsa-ix-container">
  <div class="rsa-ix-stats-bar">
    <div class="stat"><div class="num">179</div><div class="lbl">Physicians</div></div>
    <div class="stat"><div class="num">18</div><div class="lbl">Starting Letters</div></div>
    <div class="stat"><div class="num">3</div><div class="lbl">States Covered</div></div>
  </div>

  <div class="rsa-ix-intro">
    Finding a Medicare-accepting doctor in Utah starts here. These 179 physicians accept Medicare
    — though which Medicare <em>plans</em> they're in-network with varies. Check the individual doctor page
    to see which plans include your doctor before you enroll.
  </div>

  <div class="rsa-ix-section-title">All Utah Medicare Doctors — A to Z</div>
  
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">A</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-englebright">Aaron Englebright</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-hewlett">Aaron Hewlett</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-pugh">Aaron Pugh</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-reich-1003388265">Aaron Reich 1003388265</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-secrest-1003176934">Aaron Secrest 1003176934</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/aaron-wilkerson-1003671272">Aaron Wilkerson 1003671272</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/abinash-roy">Abinash Roy</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/adam-dye">Adam Dye</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/adam-meier">Adam Meier</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/adrienne-mcmaster-1003095373">Adrienne Mcmaster 1003095373</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ahmed-shafter">Ahmed Shafter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/akbar-shakoor">Akbar Shakoor</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alan-pearson">Alan Pearson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alan-sanderson">Alan Sanderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alec-mecham">Alec Mecham</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/alisa-corry-1003586876">Alisa Corry 1003586876</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/allison-stewart">Allison Stewart</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-curtis">Amanda Curtis</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-legg">Amanda Legg</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-stott">Amanda Stott</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amanda-turner">Amanda Turner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amelia-anderson">Amelia Anderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amelia-bell">Amelia Bell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/amy-benedict">Amy Benedict</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/andrew-badke">Andrew Badke</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/andrew-patchett">Andrew Patchett</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/angel-lybbert">Angel Lybbert</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/angela-mayer">Angela Mayer</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/angela-stevenson">Angela Stevenson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ann-shipley-1003213901">Ann Shipley 1003213901</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/annalie-tracy">Annalie Tracy</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/anngee-dreiling">Anngee Dreiling</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/april-larkin">April Larkin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashlee-fenton-1003682105">Ashlee Fenton 1003682105</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashlee-walker">Ashlee Walker</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashley-saunders-1003680117">Ashley Saunders 1003680117</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ashley-sefcovic">Ashley Sefcovic</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">B</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bailey-burgan">Bailey Burgan</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/barbara-hilton">Barbara Hilton</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/barry-acor">Barry Acor</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/beau-kunzler">Beau Kunzler</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/becky-rasmuson">Becky Rasmuson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-adams">Benjamin Adams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-carter">Benjamin Carter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-draleau">Benjamin Draleau</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-haymond">Benjamin Haymond</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-seale">Benjamin Seale</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/benjamin-stowers">Benjamin Stowers</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/blake-miles-1003526468">Blake Miles 1003526468</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bogdan-anea-1003308859">Bogdan Anea 1003308859</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brad-goates">Brad Goates</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-bybee">Bradley Bybee</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-chambers">Bradley Chambers</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-evanson">Bradley Evanson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradley-thompson">Bradley Thompson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bradon-burningham">Bradon Burningham</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brandon-bonewell">Brandon Bonewell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brandon-durfee">Brandon Durfee</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brandon-hermansen">Brandon Hermansen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brent-felix">Brent Felix</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brent-smith">Brent Smith</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brett-nance">Brett Nance</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brett-porter">Brett Porter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brett-wallin">Brett Wallin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-adams">Brian Adams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-carlson">Brian Carlson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-hess">Brian Hess</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brian-johnson">Brian Johnson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/broc-astill">Broc Astill</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/broc-parson">Broc Parson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brogan-crane">Brogan Crane</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/brooks-beal">Brooks Beal</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bruce-isaacson">Bruce Isaacson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bryant-whiting">Bryant Whiting</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/bryce-ferguson">Bryce Ferguson</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">C</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carl-turner">Carl Turner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carlos-leon">Carlos Leon</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carlos-mercado">Carlos Mercado</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carmen-gota">Carmen Gota</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/carolyn-bell">Carolyn Bell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/casey-henich-1003041740">Casey Henich 1003041740</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/cathleen-obray">Cathleen Obray</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/cedric-buckley">Cedric Buckley</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/chad-anderson">Chad Anderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/chesley-wells">Chesley Wells</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/chris-nguyen">Chris Nguyen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/christopher-black">Christopher Black</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/christopher-sauceda">Christopher Sauceda</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/christopher-strawter">Christopher Strawter</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/clint-bunker">Clint Bunker</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/colson-healy">Colson Healy</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/corey-ellis">Corey Ellis</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/corey-walker">Corey Walker</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/cort-leavitt">Cort Leavitt</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/craig-grose">Craig Grose</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/curtis-carter">Curtis Carter</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">D</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/dallas-wright">Dallas Wright</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/daniel-weiss">Daniel Weiss</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-adams">David Adams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-casey">David Casey</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-faux">David Faux</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-grygla">David Grygla</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-haak-1003444035">David Haak 1003444035</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-mitchell">David Mitchell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/david-tate">David Tate</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/dee-gardner">Dee Gardner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/don-neer">Don Neer</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/donald-morris">Donald Morris</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">E</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/elisabeth-ferlic">Elisabeth Ferlic</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/enrique-alfaro">Enrique Alfaro</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">G</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/gayle-wong">Gayle Wong</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/george-jarad">George Jarad</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/george-jeung">George Jeung</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/gordon-smith">Gordon Smith</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/grace-paradela">Grace Paradela</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">J</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/j-parkinson">J Parkinson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/james-hawkes">James Hawkes</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jameson-petersen">Jameson Petersen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jared-chin">Jared Chin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jarid-gray">Jarid Gray</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-hansen">Jason Hansen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-smart">Jason Smart</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-snarr">Jason Snarr</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jason-swigert">Jason Swigert</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jeffrey-huffman">Jeffrey Huffman</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jeffrey-schenk">Jeffrey Schenk</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jeffrey-thompson-1003076233">Jeffrey Thompson 1003076233</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/john-rathbun">John Rathbun</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jonathan-callaway">Jonathan Callaway</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/jordan-huber">Jordan Huber</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/joseph-wheeler">Joseph Wheeler</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/joshua-lovell">Joshua Lovell</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/joshua-schliesser">Joshua Schliesser</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">K</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/karl-trimble">Karl Trimble</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kelly-hubbard">Kelly Hubbard</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kevin-meier">Kevin Meier</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kirill-sinitsin">Kirill Sinitsin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/kristin-tarbet">Kristin Tarbet</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">L</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/loren-gulbranson">Loren Gulbranson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/luciana-de-saibro">Luciana De Saibro</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">M</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/marcellus-assiago">Marcellus Assiago</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/marie-tuttle">Marie Tuttle</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/matthew-crosby">Matthew Crosby</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/matthew-hubbard">Matthew Hubbard</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/matthew-williams">Matthew Williams</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/megan-meier-1003303496">Megan Meier 1003303496</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/michael-grant">Michael Grant</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/michael-hadley">Michael Hadley</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/michael-kline">Michael Kline</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mikhail-shipotko-1003217977">Mikhail Shipotko 1003217977</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mitchell-bassett">Mitchell Bassett</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mitchell-goff">Mitchell Goff</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/mustufa-saifee">Mustufa Saifee</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">N</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nathan-anderson">Nathan Anderson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nicholas-behunin">Nicholas Behunin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nicholas-knighton">Nicholas Knighton</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/nitpriya-paliwal">Nitpriya Paliwal</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">O</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/owen-owens">Owen Owens</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">P</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/patrik-luzny">Patrik Luzny</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">R</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/rachel-brown">Rachel Brown</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/richard-patilano">Richard Patilano</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/rick-nordgren">Rick Nordgren</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/robert-cope">Robert Cope</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/robin-berger">Robin Berger</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/ryan-larsen">Ryan Larsen</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">S</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/samuel-andelin">Samuel Andelin</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/scott-heiner">Scott Heiner</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/scott-salmon">Scott Salmon</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/sharon-richens">Sharon Richens</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/shawn-allen">Shawn Allen</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/steven-young">Steven Young</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">T</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/tawnya-constantino">Tawnya Constantino</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/taylor-nelson">Taylor Nelson</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/theodore-moon">Theodore Moon</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/thomas-brinton">Thomas Brinton</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/trevor-smith">Trevor Smith</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">W</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/wallace-smith">Wallace Smith</a></div><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/william-wagner">William Wagner</a></div></div>
        </div>
        <div class="rsa-ix-letter-group">
          <div class="rsa-ix-letter-heading">Y</div>
          <div class="rsa-ix-link-grid"><div class="rsa-ix-link-item"><a href="https://www.restingsycamore.com/medicare/doctor/yaw-boateng">Yaw Boateng</a></div></div>
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
