#!/usr/bin/env python3
"""
Add rsa-ix-hero CSS + HTML to all 34 JS embed files.
"""
import re
import os

BASE = "/Users/michael_claw/.openclaw/workspace-rsa/resting-sycamore/github-pages"

HERO_CSS = """\n.rsa-ix-hero{background:linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%);color:white;padding:48px 24px 40px;margin:-8px -8px 0}\n.rsa-ix-hero h1{font-family:"Onest",system-ui,sans-serif;font-size:clamp(24px,4vw,36px);font-weight:700;margin:12px 0 8px;letter-spacing:-0.3px}\n.rsa-ix-hero p{font-size:16px;opacity:0.85;max-width:600px;line-height:1.6;margin:0}\n.rsa-ix-breadcrumb{font-size:13px;opacity:0.75;margin-bottom:8px}\n.rsa-ix-breadcrumb a{color:white;text-decoration:none}\n.rsa-ix-breadcrumb a:hover{text-decoration:underline}\n.rsa-ix-breadcrumb span{margin:0 4px}\n.rsa-ix-bc-current{opacity:0.9}"""

def make_breadcrumb(crumbs):
    """crumbs: list of (label, url) pairs, last one is current (no url)"""
    parts = []
    for i, (label, url) in enumerate(crumbs):
        if i == len(crumbs) - 1:
            parts.append(f'<span class="rsa-ix-bc-current">{label}</span>')
        else:
            parts.append(f'<a href="{url}">{label}</a>')
            parts.append('<span>›</span>')
    return ' '.join(parts)

HOME = ("Home", "https://www.restingsycamore.com")
MEDICARE = ("Medicare", "https://www.restingsycamore.com/medicare")
PLANS = ("Plans", "https://www.restingsycamore.com/medicare/plans")
DOCTORS = ("Doctors", "https://www.restingsycamore.com/medicare/doctors")
PROVIDERS = ("Providers", "https://www.restingsycamore.com/medicare/providers")
QUESTIONS = ("Questions", "https://www.restingsycamore.com/medicare/questions")
UTAH_ST = ("Utah", "https://www.restingsycamore.com/medicare/states/utah")
OHIO_ST = ("Ohio", "https://www.restingsycamore.com/medicare/states/ohio")
PA_ST = ("Pennsylvania", "https://www.restingsycamore.com/medicare/states/pennsylvania")

FILES = {
    "plans/utah.js": {
        "title": "Medicare Plans in Utah",
        "subtitle": "Browse 33 Medicare Advantage and Part D plans from 6 carriers available to Utah residents.",
        "crumbs": [HOME, MEDICARE, PLANS, ("Utah", None)],
    },
    "plans/ohio.js": {
        "title": "Medicare Plans in Ohio",
        "subtitle": "Browse 170 Medicare plans from 21 carriers available to Ohio residents.",
        "crumbs": [HOME, MEDICARE, PLANS, ("Ohio", None)],
    },
    "plans/pennsylvania.js": {
        "title": "Medicare Plans in Pennsylvania",
        "subtitle": "Browse 216 Medicare plans from 20 carriers available to Pennsylvania residents.",
        "crumbs": [HOME, MEDICARE, PLANS, ("Pennsylvania", None)],
    },
    "plans/index.js": {
        "title": "Medicare Plans by State",
        "subtitle": "Compare Medicare Advantage and Part D plans in Utah, Ohio, and Pennsylvania.",
        "crumbs": [HOME, MEDICARE, ("Plans", None)],
    },
    "doctors/index.js": {
        "title": "Medicare Doctors",
        "subtitle": "Find Medicare-accepting physicians in Utah, Ohio, and Pennsylvania.",
        "crumbs": [HOME, MEDICARE, ("Doctors", None)],
    },
    "doctors/utah.js": {
        "title": "Medicare Doctors in Utah",
        "subtitle": "179 Medicare-accepting physicians in Utah, listed A\u2013Z.",
        "crumbs": [HOME, MEDICARE, DOCTORS, ("Utah", None)],
    },
    "doctors/ohio.js": {
        "title": "Medicare Doctors in Ohio",
        "subtitle": "416 Medicare-accepting physicians in Ohio, listed A\u2013Z.",
        "crumbs": [HOME, MEDICARE, DOCTORS, ("Ohio", None)],
    },
    "doctors/pennsylvania.js": {
        "title": "Medicare Doctors in Pennsylvania",
        "subtitle": "399 Medicare-accepting physicians in Pennsylvania, listed A\u2013Z.",
        "crumbs": [HOME, MEDICARE, DOCTORS, ("Pennsylvania", None)],
    },
    "providers/index.js": {
        "title": "Medicare Care Facilities",
        "subtitle": "Find Medicare-certified skilled nursing and rehabilitation facilities in Utah, Ohio, and Pennsylvania.",
        "crumbs": [HOME, MEDICARE, ("Providers", None)],
    },
    "providers/utah.js": {
        "title": "Medicare Care Facilities in Utah",
        "subtitle": "54 Medicare-certified skilled nursing and care facilities in Utah.",
        "crumbs": [HOME, MEDICARE, PROVIDERS, ("Utah", None)],
    },
    "providers/ohio.js": {
        "title": "Medicare Care Facilities in Ohio",
        "subtitle": "167 Medicare-certified skilled nursing and care facilities in Ohio.",
        "crumbs": [HOME, MEDICARE, PROVIDERS, ("Ohio", None)],
    },
    "providers/pennsylvania.js": {
        "title": "Medicare Care Facilities in Pennsylvania",
        "subtitle": "167 Medicare-certified skilled nursing and care facilities in Pennsylvania.",
        "crumbs": [HOME, MEDICARE, PROVIDERS, ("Pennsylvania", None)],
    },
    "specialties/index.js": {
        "title": "Medicare Medical Specialties",
        "subtitle": "Browse 136 medical specialties covered by Medicare doctors in Utah.",
        "crumbs": [HOME, MEDICARE, ("Specialties", None)],
    },
    "carriers/index.js": {
        "title": "Medicare Insurance Carriers",
        "subtitle": "Compare Medicare insurance carriers offering plans in Utah, Ohio, and Pennsylvania.",
        "crumbs": [HOME, MEDICARE, ("Carriers", None)],
    },
    "plan-types/index.js": {
        "title": "Medicare Plan Types",
        "subtitle": "Understand the differences between Medicare Advantage HMO, PPO, SNP, and Part D plans.",
        "crumbs": [HOME, MEDICARE, ("Plan Types", None)],
    },
    "articles/index.js": {
        "title": "Medicare Articles &amp; Guides",
        "subtitle": "149 in-depth guides organized by topic to help you understand and choose Medicare coverage.",
        "crumbs": [HOME, MEDICARE, ("Articles", None)],
    },
    "questions/index.js": {
        "title": "Medicare Questions &amp; Answers",
        "subtitle": "304 answered Medicare questions organized by topic.",
        "crumbs": [HOME, MEDICARE, ("Questions", None)],
    },
    "questions/enrollment.js": {
        "title": "Medicare Enrollment Questions",
        "subtitle": "40 answered questions about when and how to enroll in Medicare.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Enrollment", None)],
    },
    "questions/costs.js": {
        "title": "Medicare Cost Questions",
        "subtitle": "36 answered questions about Medicare premiums, deductibles, and out-of-pocket costs.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Costs", None)],
    },
    "questions/medicare-advantage.js": {
        "title": "Medicare Advantage Questions",
        "subtitle": "51 answered questions about Medicare Advantage plans.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Medicare Advantage", None)],
    },
    "questions/supplement.js": {
        "title": "Medicare Supplement Questions",
        "subtitle": "33 answered questions about Medigap and Medicare Supplement plans.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Supplement", None)],
    },
    "questions/part-d.js": {
        "title": "Medicare Part D Questions",
        "subtitle": "24 answered questions about Medicare prescription drug coverage.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Part D", None)],
    },
    "questions/work-and-social-security.js": {
        "title": "Medicare, Work &amp; Social Security",
        "subtitle": "36 answered questions about Medicare and working past 65 or Social Security.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Work &amp; Social Security", None)],
    },
    "questions/coverage-and-providers.js": {
        "title": "Medicare Coverage &amp; Providers",
        "subtitle": "18 answered questions about what Medicare covers and finding providers.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Coverage &amp; Providers", None)],
    },
    "questions/choosing-a-plan.js": {
        "title": "Choosing a Medicare Plan",
        "subtitle": "37 answered questions about how to choose the right Medicare plan.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Choosing a Plan", None)],
    },
    "questions/basics.js": {
        "title": "Medicare Basics",
        "subtitle": "29 answered questions about the fundamentals of Medicare.",
        "crumbs": [HOME, MEDICARE, QUESTIONS, ("Basics", None)],
    },
    "geo/cities-utah.js": {
        "title": "Medicare Resources by City in Utah",
        "subtitle": "100 Utah cities with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, UTAH_ST, ("Cities", None)],
    },
    "geo/cities-ohio.js": {
        "title": "Medicare Resources by City in Ohio",
        "subtitle": "Ohio cities with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, OHIO_ST, ("Cities", None)],
    },
    "geo/cities-pennsylvania.js": {
        "title": "Medicare Resources by City in Pennsylvania",
        "subtitle": "Pennsylvania cities with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, PA_ST, ("Cities", None)],
    },
    "geo/counties-utah.js": {
        "title": "Medicare Resources by County in Utah",
        "subtitle": "Utah counties with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, UTAH_ST, ("Counties", None)],
    },
    "geo/counties-ohio.js": {
        "title": "Medicare Resources by County in Ohio",
        "subtitle": "Ohio counties with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, OHIO_ST, ("Counties", None)],
    },
    "geo/counties-pennsylvania.js": {
        "title": "Medicare Resources by County in Pennsylvania",
        "subtitle": "Pennsylvania counties with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, PA_ST, ("Counties", None)],
    },
    "geo/zip-codes-utah.js": {
        "title": "Medicare by ZIP Code in Utah",
        "subtitle": "103 Utah ZIP codes with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, UTAH_ST, ("ZIP Codes", None)],
    },
    "geo/zip-codes-ohio.js": {
        "title": "Medicare by ZIP Code in Ohio",
        "subtitle": "1,269 Ohio ZIP codes with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, OHIO_ST, ("ZIP Codes", None)],
    },
    "geo/zip-codes-pennsylvania.js": {
        "title": "Medicare by ZIP Code in Pennsylvania",
        "subtitle": "1,763 Pennsylvania ZIP codes with local Medicare plan and provider information.",
        "crumbs": [HOME, MEDICARE, PA_ST, ("ZIP Codes", None)],
    },
}


def make_hero_html(title, subtitle, crumbs):
    bc = make_breadcrumb(crumbs)
    return (
        f'<div class="rsa-ix-hero">'
        f'<div class="rsa-ix-breadcrumb">{bc}</div>'
        f'<h1>{title}</h1>'
        f'<p>{subtitle}</p>'
        f'</div>'
    )


def update_file(rel_path, title, subtitle, crumbs):
    path = os.path.join(BASE, rel_path)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add hero CSS before the closing backtick of s.textContent
    # The CSS block ends with: ...}`;
    # We insert HERO_CSS before the final backtick of the css string
    # Pattern: find the s.textContent closing: `};` or just `}`;
    # The CSS string ends with the media query block closing brace then backtick+semicolon
    # Insert hero CSS just before the closing backtick of the style string
    
    # Find the end of the CSS textContent string - it ends with `}` then optional whitespace then backtick+semicolon
    # The pattern is: closing of @media block = `}` followed by backtick on its own or inline
    css_end_pattern = r"(\.rsa-ix-state-cards,\.rsa-ix-card-grid\{grid-template-columns:1fr\}\s*\}`)"
    
    if re.search(css_end_pattern, content):
        # Append hero CSS before the closing backtick
        content = re.sub(
            css_end_pattern,
            lambda m: m.group(1)[:-1] + HERO_CSS + '`',
            content
        )
    else:
        # Fallback: find the last backtick that closes the CSS string (before document.head.appendChild)
        # Try alternate ending pattern
        alt_pattern = r"(\}\`\s*;\s*\n\s*document\.head\.appendChild)"
        match = re.search(alt_pattern, content)
        if match:
            pos = match.start() + 1  # position of the backtick
            content = content[:pos] + HERO_CSS + content[pos:]
        else:
            print(f"  WARNING: Could not find CSS end in {rel_path}")

    # 2. Replace old header with rsa-ix-hero
    hero_html = make_hero_html(title, subtitle, crumbs)
    
    # Pattern A: <div class="page-header" style="background:#XXXXXX;">...(content)...</div>
    # The page-header div closes with </div> and is followed by <div class="rsa-ix-container">
    page_header_pattern = r'<div class="page-header"[^>]*>.*?</div>'
    
    # Pattern B: <div class="rsa-ix-header">...(content)...</div>
    rsa_header_pattern = r'<div class="rsa-ix-header">.*?</div>'
    
    if re.search(page_header_pattern, content, re.DOTALL):
        content = re.sub(page_header_pattern, hero_html, content, count=1, flags=re.DOTALL)
    elif re.search(rsa_header_pattern, content, re.DOTALL):
        content = re.sub(rsa_header_pattern, hero_html, content, count=1, flags=re.DOTALL)
    else:
        print(f"  WARNING: Could not find header div in {rel_path}")

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True


def main():
    updated = []
    failed = []
    
    for rel_path, info in FILES.items():
        full_path = os.path.join(BASE, rel_path)
        if not os.path.exists(full_path):
            print(f"MISSING: {rel_path}")
            failed.append(rel_path)
            continue
        
        try:
            result = update_file(rel_path, info["title"], info["subtitle"], info["crumbs"])
            if result:
                print(f"✓ {rel_path}")
                updated.append(rel_path)
        except Exception as e:
            print(f"✗ {rel_path}: {e}")
            failed.append(rel_path)
    
    print(f"\nUpdated: {len(updated)}/{len(FILES)}")
    if failed:
        print(f"Failed: {failed}")


if __name__ == "__main__":
    main()
