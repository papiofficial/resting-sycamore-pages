#!/usr/bin/env python3
"""
Convert RSA HTML source files into self-contained JS embed scripts for GitHub Pages.
"""

import os
import re
import json

BASE_DIR = "/Users/michael_claw/.openclaw/workspace-rsa/obsidian/Dropbox/#for_Micheal_restingsycamore_implementation_package"
OUT_DIR = "/Users/michael_claw/.openclaw/workspace-rsa/resting-sycamore/github-pages"

# Mapping: (source_html_path, output_js_path, page_id, webflow_slug)
FILE_MAP = [
    # Plans
    (f"{BASE_DIR}/10-index-pages/state-plans/html/plans-utah.html",     "plans/utah.js",          "rsa-plans-utah",     "/medicare/plans/utah"),
    (f"{BASE_DIR}/10-index-pages/state-plans/html/plans-ohio.html",     "plans/ohio.js",          "rsa-plans-ohio",     "/medicare/plans/ohio"),
    (f"{BASE_DIR}/10-index-pages/state-plans/html/plans-pennsylvania.html", "plans/pennsylvania.js", "rsa-plans-pa",    "/medicare/plans/pennsylvania"),
    # Doctors
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/doctors-master.html",      "doctors/index.js",       "rsa-doctors-index",  "/medicare/doctors"),
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/doctors-utah.html",        "doctors/utah.js",        "rsa-doctors-utah",   "/medicare/doctors/utah"),
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/doctors-ohio.html",        "doctors/ohio.js",        "rsa-doctors-ohio",   "/medicare/doctors/ohio"),
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/doctors-pennsylvania.html","doctors/pennsylvania.js", "rsa-doctors-pa",    "/medicare/doctors/pennsylvania"),
    # Providers
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/providers-master.html",      "providers/index.js",       "rsa-providers-index",  "/medicare/providers"),
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/providers-utah.html",        "providers/utah.js",        "rsa-providers-utah",   "/medicare/providers/utah"),
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/providers-ohio.html",        "providers/ohio.js",        "rsa-providers-ohio",   "/medicare/providers/ohio"),
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/providers-pennsylvania.html","providers/pennsylvania.js","rsa-providers-pa",    "/medicare/providers/pennsylvania"),
    # Specialties
    (f"{BASE_DIR}/03-index-pages/doctors-providers-specialties/html/specialties-master.html", "specialties/index.js", "rsa-specialties-index", "/medicare/specialties"),
    # Geo - Cities
    (f"{BASE_DIR}/04-index-pages/cities-counties/html/cities-utah.html",         "geo/cities-utah.js",         "rsa-cities-utah",   "/medicare/states/utah/cities"),
    (f"{BASE_DIR}/04-index-pages/cities-counties/html/cities-ohio.html",         "geo/cities-ohio.js",         "rsa-cities-ohio",   "/medicare/states/ohio/cities"),
    (f"{BASE_DIR}/04-index-pages/cities-counties/html/cities-pennsylvania.html", "geo/cities-pennsylvania.js", "rsa-cities-pa",     "/medicare/states/pennsylvania/cities"),
    # Geo - Counties
    (f"{BASE_DIR}/04-index-pages/cities-counties/html/counties-utah.html",         "geo/counties-utah.js",         "rsa-counties-utah", "/medicare/states/utah/counties"),
    (f"{BASE_DIR}/04-index-pages/cities-counties/html/counties-ohio.html",         "geo/counties-ohio.js",         "rsa-counties-ohio", "/medicare/states/ohio/counties"),
    (f"{BASE_DIR}/04-index-pages/cities-counties/html/counties-pennsylvania.html", "geo/counties-pennsylvania.js", "rsa-counties-pa",   "/medicare/states/pennsylvania/counties"),
    # Geo - Zip codes
    (f"{BASE_DIR}/05-index-pages/zip-codes/html/zip-codes-utah.html",         "geo/zip-codes-utah.js",         "rsa-zip-utah",  "/medicare/states/utah/zip-codes"),
    (f"{BASE_DIR}/05-index-pages/zip-codes/html/zip-codes-ohio.html",         "geo/zip-codes-ohio.js",         "rsa-zip-ohio",  "/medicare/states/ohio/zip-codes"),
    (f"{BASE_DIR}/05-index-pages/zip-codes/html/zip-codes-pennsylvania.html", "geo/zip-codes-pennsylvania.js", "rsa-zip-pa",    "/medicare/states/pennsylvania/zip-codes"),
    # Questions
    (f"{BASE_DIR}/06-index-pages/questions/html/questions-master-index.html",              "questions/index.js",                  "rsa-questions-index",    "/medicare/questions"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-enrollment.html",                 "questions/enrollment.js",             "rsa-questions-enroll",   "/medicare/questions/enrollment"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-costs.html",                      "questions/costs.js",                  "rsa-questions-costs",    "/medicare/questions/costs"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-medicare-advantage.html",         "questions/medicare-advantage.js",     "rsa-questions-ma",       "/medicare/questions/medicare-advantage"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-supplement.html",                 "questions/supplement.js",             "rsa-questions-supp",     "/medicare/questions/supplement"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-part-d.html",                     "questions/part-d.js",                 "rsa-questions-partd",    "/medicare/questions/part-d"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-work-and-social-security.html",   "questions/work-and-social-security.js","rsa-questions-work",    "/medicare/questions/work-and-social-security"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-coverage-and-providers.html",     "questions/coverage-and-providers.js", "rsa-questions-coverage", "/medicare/questions/coverage-and-providers"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-choosing-a-plan.html",            "questions/choosing-a-plan.js",        "rsa-questions-choose",   "/medicare/questions/choosing-a-plan"),
    (f"{BASE_DIR}/08-index-pages/questions-sub/questions-basics.html",                     "questions/basics.js",                 "rsa-questions-basics",   "/medicare/questions/basics"),
    # Carriers & Plan Types
    (f"{BASE_DIR}/07-index-pages/carriers-plan-types/html/carriers-index.html",   "carriers/index.js",    "rsa-carriers-index",   "/medicare/carriers"),
    (f"{BASE_DIR}/07-index-pages/carriers-plan-types/html/plan-types-index.html", "plan-types/index.js",  "rsa-plan-types-index", "/medicare/plan-types"),
    # Articles
    (f"{BASE_DIR}/11-index-pages/remaining/html/articles-index.html", "articles/index.js", "rsa-articles-index", "/medicare/articles"),
]

RSA_CSS = """
.rsa-ix-wrap{font-family:"Onest",system-ui,sans-serif;color:#1e293b;box-sizing:border-box}
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
""".strip()


def extract_schema(html):
    """Extract the schema JSON-LD from schema-block div."""
    # schema-block contains HTML-encoded <script type="application/ld+json">...</script>
    m = re.search(r'<div class="schema-block">(.*?)</div>\s*(?:</div>)?\s*</body>', html, re.DOTALL)
    if not m:
        return ""
    raw = m.group(1)
    # Decode HTML entities
    decoded = raw.replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&').replace('&quot;', '"')
    # Extract JSON from script tag
    jm = re.search(r'<script[^>]*>(.*?)</script>', decoded, re.DOTALL)
    if jm:
        return jm.group(1).strip()
    return decoded.strip()


def extract_body_content(html):
    """
    Extract main content from HTML body, stripping:
    - nav, footer
    - .breadcrumb
    - .page-header (we'll remap to rsa-ix-header)
    - .impl-note
    - .schema-block
    And wrap everything in rsa-ix-wrap.
    Returns (header_h1, header_p, content_inner_html)
    """
    # Extract page-header h1 and p
    header_h1 = ""
    header_p = ""
    hm = re.search(r'<div class="page-header">(.*?)</div>', html, re.DOTALL)
    if hm:
        h1m = re.search(r'<h1>(.*?)</h1>', hm.group(1), re.DOTALL)
        pm = re.search(r'<p>(.*?)</p>', hm.group(1), re.DOTALL)
        if h1m:
            header_h1 = h1m.group(1).strip()
        if pm:
            header_p = pm.group(1).strip()

    # Get body content
    body_m = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if not body_m:
        return header_h1, header_p, ""
    body = body_m.group(1)

    # Remove elements we don't want
    # Remove breadcrumb
    body = re.sub(r'<div class="breadcrumb">.*?</div>', '', body, flags=re.DOTALL)
    # Remove page-header
    body = re.sub(r'<div class="page-header">.*?</div>', '', body, flags=re.DOTALL)
    # Remove impl-note
    body = re.sub(r'<div class="impl-note">.*?</div>', '', body, flags=re.DOTALL)
    # Remove schema-block (it can be deeply nested)
    body = re.sub(r'<div class="schema-block">.*?</div>', '', body, flags=re.DOTALL)
    # Remove nav
    body = re.sub(r'<nav[^>]*>.*?</nav>', '', body, flags=re.DOTALL)
    # Remove footer
    body = re.sub(r'<footer[^>]*>.*?</footer>', '', body, flags=re.DOTALL)

    # Remap CSS class names to rsa-ix- prefix
    body = remap_classes(body)

    return header_h1, header_p, body.strip()


CLASS_MAP = {
    # In order of specificity (longer first to avoid partial replacements)
    'spec-table': 'rsa-ix-table',
    'city-pills': 'rsa-ix-pills',
    'city-pill': 'rsa-ix-pill',
    'state-cards': 'rsa-ix-state-cards',
    'state-card': 'rsa-ix-state-card',
    'stats-bar': 'rsa-ix-stats-bar',
    'section-title': 'rsa-ix-section-title',
    'letter-group': 'rsa-ix-letter-group',
    'letter-heading': 'rsa-ix-letter-heading',
    'link-grid': 'rsa-ix-link-grid',
    'link-item': 'rsa-ix-link-item',
    'related-links': 'rsa-ix-related',
    'card-grid': 'rsa-ix-card-grid',
    'plan-card': 'rsa-ix-plan-card',
    'article-list': 'rsa-ix-article-list',
    'article-item': 'rsa-ix-article-item',
    'faq-item': 'rsa-ix-faq-item',
    'container': 'rsa-ix-container',
    'intro': 'rsa-ix-intro',
    'stat ': 'rsa-ix-stat ',
    '"stat"': '"rsa-ix-stat"',
    'toc': 'rsa-ix-toc',
    'cta': 'rsa-ix-cta',
}

def remap_classes(html):
    """Remap CSS class names in HTML to rsa-ix- prefixed versions."""
    # Process class attributes
    def replace_class(m):
        classes = m.group(1)
        # Replace each known class
        for old, new in CLASS_MAP.items():
            # Only replace exact class names (word boundaries in class string)
            classes = re.sub(r'(?<![a-zA-Z0-9-])' + re.escape(old) + r'(?![a-zA-Z0-9-])', new, classes)
        return f'class="{classes}"'
    
    html = re.sub(r'class="([^"]*)"', replace_class, html)
    return html


def escape_for_js_template(s):
    """Escape string for use inside a JS template literal."""
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s


def build_js(page_id, header_h1, header_p, content_html):
    """Build the JS embed script."""
    header_html = ""
    if header_h1:
        header_html = f'<div class="rsa-ix-header"><h1>{header_h1}</h1>'
        if header_p:
            header_html += f'<p>{header_p}</p>'
        header_html += '</div>'

    full_html = f'<div class="rsa-ix-wrap">{header_html}{content_html}</div>'
    escaped_html = escape_for_js_template(full_html)
    escaped_css = escape_for_js_template(RSA_CSS)

    js = f"""(function(){{
  var el = document.getElementById('{page_id}');
  if (!el) return;
  if (!document.getElementById('rsa-ix-styles')) {{
    var s = document.createElement('style');
    s.id = 'rsa-ix-styles';
    s.textContent = `{escaped_css}`;
    document.head.appendChild(s);
  }}
  el.innerHTML = `{escaped_html}`;
}})();
"""
    return js


def process_file(src_path, out_rel_path, page_id, webflow_slug):
    """Process a single HTML file and write the JS embed."""
    if not os.path.exists(src_path):
        print(f"  MISSING: {src_path}")
        return None

    with open(src_path, 'r', encoding='utf-8') as f:
        html = f.read()

    schema = extract_schema(html)
    header_h1, header_p, content = extract_body_content(html)
    js = build_js(page_id, header_h1, header_p, content)

    out_path = os.path.join(OUT_DIR, out_rel_path)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js)

    size = len(js.encode('utf-8'))
    print(f"  OK [{size//1024}KB]: {out_rel_path}")
    return schema, webflow_slug, out_rel_path, page_id, size


def build_cheatsheet(results):
    """Build the Webflow cheat sheet markdown."""
    lines = [
        "# Webflow Embed Cheat Sheet — Resting Sycamore",
        "",
        "**GitHub Pages base URL:** `https://papiofficial.github.io/resting-sycamore-pages/`",
        "",
        "---",
        "",
    ]

    for schema, webflow_slug, js_path, page_id, size in results:
        js_url = f"https://papiofficial.github.io/resting-sycamore-pages/{js_path}"
        div_id = page_id
        lines.append(f"## `{webflow_slug}`")
        lines.append("")
        lines.append(f"**JS file:** `{js_path}` ({size//1024}KB)")
        lines.append("")
        lines.append("**Webflow embed (2 lines):**")
        lines.append("```html")
        lines.append(f'<div id="{div_id}"></div>')
        lines.append(f'<script src="{js_url}"></script>')
        lines.append("```")
        lines.append("")
        if schema:
            lines.append("**Schema JSON-LD:**")
            lines.append("```json")
            lines.append(schema[:3000] + ("..." if len(schema) > 3000 else ""))
            lines.append("```")
        lines.append("")
        lines.append("---")
        lines.append("")

    return "\n".join(lines)


def main():
    print(f"Output dir: {OUT_DIR}")
    results = []

    for src, out_rel, page_id, webflow_slug in FILE_MAP:
        result = process_file(src, out_rel, page_id, webflow_slug)
        if result:
            schema, slug, js_path, pid, size = result
            results.append((schema, slug, js_path, pid, size))

    print(f"\n✓ Generated {len(results)} JS embed files")

    # Write cheat sheet
    cheatsheet = build_cheatsheet(results)
    cheatsheet_path = os.path.join(OUT_DIR, "WEBFLOW-CHEATSHEET.md")
    with open(cheatsheet_path, 'w', encoding='utf-8') as f:
        f.write(cheatsheet)
    print(f"✓ Wrote cheat sheet: {cheatsheet_path}")

    return results


if __name__ == "__main__":
    main()
