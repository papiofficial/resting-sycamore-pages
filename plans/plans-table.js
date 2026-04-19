/* RSA Plans Table Renderer v2 */
window.rsaPTrender = function(uid, cdnBase, total) {
  var wrap = document.getElementById('rpt-'+uid);
  if (!wrap) return;
  var base = 'https://www.restingsycamore.com';

  // Inject CSS once
  if (!document.getElementById('rsa-pt-css')) {
    var s = document.createElement('style');
    s.id = 'rsa-pt-css';
    s.textContent = [
      '.rsa-pt-wrap{font-family:system-ui,sans-serif;color:#0b1220}',
      '.rsa-pt-h2{font-size:1.4rem;font-weight:700;color:#1e3a5f;margin:0 0 12px}',
      '.rsa-pt-search{width:100%;padding:9px 14px;border:1px solid #e5e7eb;border-radius:8px;font-size:14px;margin-bottom:8px;box-sizing:border-box}',
      '.rsa-pt-search:focus{outline:none;border-color:#2563eb}',
      '.rsa-pt-meta{display:flex;justify-content:space-between;font-size:13px;color:#6b7280;margin:0 0 10px}',
      '.rsa-pt-tbl{width:100%;border-collapse:collapse;font-size:14px;background:#fff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden}',
      '.rsa-pt-tbl thead{background:#1e3a5f;color:#fff}',
      '.rsa-pt-tbl th{padding:11px 16px;text-align:left;font-weight:600;font-size:13px;white-space:nowrap}',
      '.rsa-pt-tbl tbody tr{border-bottom:1px solid #f3f4f6}',
      '.rsa-pt-tbl tbody tr:last-child{border-bottom:none}',
      '.rsa-pt-tbl tbody tr:hover{background:#f9fafb}',
      '.rsa-pt-tbl td{padding:10px 16px;vertical-align:top;color:#374151}',
      '.rsa-pt-tbl td a{color:#2563eb;text-decoration:none;font-weight:500}',
      '.rsa-pt-tbl td a:hover{text-decoration:underline}',
      '.rpt{display:block;font-size:11px;color:#6b7280;margin-top:2px}',
      '.rsa-pt-more{background:#2563eb;color:#fff;border:none;padding:10px 24px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;margin:14px auto 0;display:block}',
      '.rsa-pt-more:hover{background:#1d4ed8}',
      '@media(max-width:640px){.rsa-pt-tbl td:nth-child(4),.rsa-pt-tbl th:nth-child(4){display:none}}'
    ].join('');
    document.head.appendChild(s);
  }

  // Fetch JSON data
  fetch(cdnBase+'/'+uid+'.json')
    .then(function(r){return r.json();})
    .then(function(plans){
      var shown = 15;
      function starsHtml(n){
        n=parseInt(n)||0;
        return n?'<span style="color:#f59e0b">'+'★'.repeat(n)+'</span><span style="color:#d1d5db">'+'★'.repeat(5-n)+'</span>':'<span style="color:#9ca3af;font-size:12px">Not rated</span>';
      }
      function buildRows(data){
        return data.map(function(p,i){
          var pUrl=base+'/medicare/plans/'+p[1];
          var cUrl=p[3]?base+'/medicare/carriers/'+p[3]:'#';
          return '<tr'+(i>=shown?' style="display:none"':'')+'>'
            +'<td><a href="'+pUrl+'">'+p[0]+'</a><span class="rpt">'+p[7]+'</span></td>'
            +'<td><a href="'+cUrl+'">'+p[2]+'</a></td>'
            +'<td>'+p[4]+'</td><td>'+p[5]+'</td>'
            +'<td>'+starsHtml(p[6])+'</td></tr>';
        }).join('');
      }
      wrap.innerHTML = [
        '<div class="rsa-pt-wrap">',
        '<h2 class="rsa-pt-h2">Medicare Advantage Plans in '+uid.charAt(0).toUpperCase()+uid.slice(1)+'</h2>',
        '<input class="rsa-pt-search" type="text" placeholder="Search plans or carriers...">',
        '<div class="rsa-pt-meta"><span class="rsa-ct">Showing '+shown+' of '+plans.length+' plans</span><span>2026 plan year</span></div>',
        '<div style="overflow-x:auto"><table class="rsa-pt-tbl"><thead><tr>',
        '<th>Plan Name</th><th>Carrier</th><th>Premium/mo</th><th>Max Out-of-Pocket</th><th>Rating</th>',
        '</tr></thead><tbody id="rpt-tb-'+uid+'">'+buildRows(plans)+'</tbody></table></div>',
        plans.length>shown?'<button class="rsa-pt-more">Show all '+plans.length+' plans ↓</button>':'',
        '</div>'
      ].join('');

      var rows=Array.from(wrap.querySelectorAll('tbody tr'));
      var ct=wrap.querySelector('.rsa-ct');
      var btn=wrap.querySelector('.rsa-pt-more');
      var srch=wrap.querySelector('.rsa-pt-search');

      if(btn) btn.onclick=function(){
        rows.forEach(function(r){r.style.display='';});
        shown=plans.length; btn.style.display='none';
        ct.textContent='Showing '+plans.length+' of '+plans.length+' plans';
      };
      if(srch) srch.oninput=function(){
        var q=this.value.trim().toLowerCase(),n=0;
        rows.forEach(function(r){
          var m=!q||r.textContent.toLowerCase().includes(q);
          r.style.display=m?'':'none';
          if(m)n++;
        });
        if(!q){rows.forEach(function(r,i){if(i>=shown)r.style.display='none';});n=Math.min(shown,plans.length);}
        ct.textContent='Showing '+n+' of '+plans.length+' plans';
        if(btn)btn.style.display=q?'none':(shown>=plans.length?'none':'block');
      };
    })
    .catch(function(){wrap.innerHTML='<p style="color:#dc2626">Failed to load plans. Please refresh.</p>';});
};
