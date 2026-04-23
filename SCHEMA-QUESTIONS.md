# Schema JSON-LD — Questions Pages (Fixed)

Paste into Webflow Page Settings → Custom Code → **Inside `<head>` tag**

---

## `/medicare/questions`

**Embed:**
```html
<div id="rsa-questions-index"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Medicare Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Am I buying Medicare from the government or from an insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/medicare-government-or-insurance-company"
          }
        },
        {
          "@type": "Question",
          "name": "Are Medicare penalties permanent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/are-medicare-penalties-permanent"
          }
        },
        {
          "@type": "Question",
          "name": "Are PPOs usually better than HMOs for rural Utah residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/utah-rural-ppo-vs-hmo"
          }
        },
        {
          "@type": "Question",
          "name": "Are Utah Medigap premiums community-rated, issue-age-rated, or attained-age-rated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-premium-rating-method"
          }
        },
        {
          "@type": "Question",
          "name": "Are Utah Medigap premiums higher for beneficiaries under 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-premiums-under-65"
          }
        },
        {
          "@type": "Question",
          "name": "Are all Medigap Plan G benefits the same regardless of company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/are-all-plan-g-medigap-benefits-the-same"
          }
        },
        {
          "@type": "Question",
          "name": "Are dental and vision benefits on Medicare Advantage plans worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/are-dental-vision-benefits-on-medicare-advantage-worth-it"
          }
        },
        {
          "@type": "Question",
          "name": "Can I appeal IRMAA if my income dropped?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-appeal-irmaa-if-income-dropped"
          }
        },
        {
          "@type": "Question",
          "name": "Can I appeal a Medicare penalty and what do I need to prove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-appeal-a-medicare-penalty"
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy Medigap if I am under 65 and disabled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-buy-medigap-under-65-disabled"
          }
        },
        {
          "@type": "Question",
          "name": "Can I change my Medicare plan during the year",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-change-my-medicare-plan-during-the-year"
          }
        },
        {
          "@type": "Question",
          "name": "Can I delay Social Security and still get Medicare at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/delay-social-security-still-get-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare before age 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-before-age-65"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare if I have Medicaid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-with-medicaid"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare if I have VA benefits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-with-va-benefits"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare if I was a stay-at-home spouse or was divorced or widowed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/medicare-for-stay-at-home-divorced-widowed-spouse"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare through my spouse's work history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/medicare-through-spouse-work-history"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get help paying my Medicare premiums or other costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/help-paying-medicare-premiums-and-costs"
          }
        },
        {
          "@type": "Question",
          "name": "Can I go back to Original Medicare after being on Medicare Advantage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-go-back-to-original-medicare-from-advantage"
          }
        },
        {
          "@type": "Question",
          "name": "Can I go out of network with a Medicare Advantage PPO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-go-out-of-network-with-medicare-advantage-ppo"
          }
        },
        {
          "@type": "Question",
          "name": "Can I have both Medicare and Medicaid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-have-both-medicare-and-medicaid"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep an HSA if I enroll in Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-keep-hsa-if-i-enroll-in-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my Medigap plan if I move to Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/move-to-utah-keep-medigap"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my Medigap plan if I move to another state?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-keep-medigap-if-i-move-to-another-state"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my employer coverage and delay Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/keep-employer-coverage-and-delay-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I see any doctor or specialist with Original Medicare plus a Medigap plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-see-any-doctor-with-original-medicare-and-medigap"
          }
        },
        {
          "@type": "Question",
          "name": "Can I see doctors in two states if I have Original Medicare plus Medigap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/medigap-doctors-two-states"
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay on my Affordable Care Act marketplace plan instead of Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/can-i-stay-on-aca-plan-instead-of-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay on my spouse's employer plan instead of taking Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/stay-on-spouse-employer-plan-instead-of-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from Medicare Advantage to a Medigap plan any time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our full answer at https://www.restingsycamore.com/medicare/questions/switch-medicare-advantage-to-medigap-anytime"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/enrollment`

**Embed:**
```html
<div id="rsa-questions-enroll"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/enrollment.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Enrollment & Eligibility",
          "item": "https://www.restingsycamore.com/medicare/questions/enrollment"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Enrollment & Eligibility Medicare Questions",
      "description": "When to sign up, what windows to know, and who qualifies for Medicare.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get Medicare before age 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-before-age-65"
          }
        },
        {
          "@type": "Question",
          "name": "Can non-citizens or green card holders qualify for Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-non-citizens-qualify-for-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Do I apply for Medicare online, by phone, or in person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-apply-for-medicare-online-phone-in-person"
          }
        },
        {
          "@type": "Question",
          "name": "Do I automatically get Medicare when I turn 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-i-automatically-get-medicare-at-65"
          }
        },
        {
          "@type": "Question",
          "name": "Do I get a Special Enrollment Period if I move?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/sep-if-i-move"
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to re-enroll in Medicare every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-i-need-to-reenroll-in-medicare-every-year"
          }
        },
        {
          "@type": "Question",
          "name": "Do I qualify for Medicare at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-i-qualify-for-medicare-at-65"
          }
        },
        {
          "@type": "Question",
          "name": "Do I qualify for Medicare if I have ESRD or ALS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/qualify-for-medicare-with-esrd-or-als"
          }
        },
        {
          "@type": "Question",
          "name": "Does retiring count as a Special Enrollment Period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-retiring-trigger-special-enrollment-period"
          }
        },
        {
          "@type": "Question",
          "name": "How do I confirm my Medicare enrollment is active and know which card to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/confirm-medicare-enrollment-active-which-card-to-use"
          }
        },
        {
          "@type": "Question",
          "name": "How do I enroll in Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-do-i-enroll-in-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "How do I help my parent enroll in Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-help-parent-enroll-in-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "How many months before I turn 65 should I apply for Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-many-months-before-65-to-apply"
          }
        },
        {
          "@type": "Question",
          "name": "If I only focus on dental and vision extras, what am I missing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/only-focus-dental-vision-missing"
          }
        },
        {
          "@type": "Question",
          "name": "In what order should I enroll in the different parts of Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/order-to-enroll-in-medicare-parts"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medicare mandatory at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-medicare-mandatory-at-65"
          }
        },
        {
          "@type": "Question",
          "name": "Should I use a Medicare agent to help me enroll?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/should-i-use-agent-to-enroll-in-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "What am I not thinking about with Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-am-i-missing-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "What are my Medicare options in Utah if I am under 65 and disabled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-under-65-disabled-options"
          }
        },
        {
          "@type": "Question",
          "name": "What counts as a qualifying Special Enrollment Period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-qualifies-as-special-enrollment-period"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/costs`

**Embed:**
```html
<div id="rsa-questions-costs"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/costs.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Costs & Premiums",
          "item": "https://www.restingsycamore.com/medicare/questions/costs"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Costs & Premiums Medicare Questions",
      "description": "Part A and B premiums, deductibles, IRMAA surcharges, and savings programs.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I appeal IRMAA if my income dropped?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-appeal-irmaa-if-income-dropped"
          }
        },
        {
          "@type": "Question",
          "name": "Can I appeal a Medicare penalty and what do I need to prove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-appeal-a-medicare-penalty"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get help paying my Medicare premiums or other costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/help-paying-medicare-premiums-and-costs"
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay on my Affordable Care Act marketplace plan instead of Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-stay-on-aca-plan-instead-of-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can Utah Medicaid pay my Medicare premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medicaid-pay-premium"
          }
        },
        {
          "@type": "Question",
          "name": "Do I get a Social Security income deduction for Medicare premiums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/social-security-income-deduction-for-medicare-premiums"
          }
        },
        {
          "@type": "Question",
          "name": "Does selling a house, Roth conversion, or taking RMDs affect IRMAA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-house-sale-roth-conversion-rmds-affect-irmaa"
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply for a Medicare Savings Program in Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-apply-medicare-savings-program"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare total annual cost instead of just monthly premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/compare-total-annual-medicare-cost-not-just-premium"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare worst-case costs across Medicare plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/compare-worst-case-costs-across-medicare-plans"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare worst-case costs across plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/compare-worst-case-costs"
          }
        },
        {
          "@type": "Question",
          "name": "How many work credits do I need for premium-free Part A?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/work-credits-needed-for-free-part-a"
          }
        },
        {
          "@type": "Question",
          "name": "How much does Medicare cost per month?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-much-does-medicare-cost-per-month"
          }
        },
        {
          "@type": "Question",
          "name": "If I only focus on monthly premium, what am I missing about Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/only-focusing-on-monthly-premium-what-am-i-missing"
          }
        },
        {
          "@type": "Question",
          "name": "If I only focus on monthly premium, what am I missing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/only-focus-premium-missing"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medicare free at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-medicare-free-at-65"
          }
        },
        {
          "@type": "Question",
          "name": "Is a lower monthly premium always cheaper overall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-lower-monthly-premium-actually-cheaper"
          }
        },
        {
          "@type": "Question",
          "name": "What Part A coinsurance costs apply after certain hospital days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/part-a-coinsurance-after-hospital-days"
          }
        },
        {
          "@type": "Question",
          "name": "What Utah program can help pay my Part B premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-program-part-b-premium"
          }
        },
        {
          "@type": "Question",
          "name": "What are Medicare Savings Programs and what costs can they cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-are-medicare-savings-programs"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/medicare-advantage`

**Embed:**
```html
<div id="rsa-questions-ma"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/medicare-advantage.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Medicare Advantage",
          "item": "https://www.restingsycamore.com/medicare/questions/medicare-advantage"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Medicare Advantage Medicare Questions",
      "description": "HMO, PPO, SNP plans \u2014 how they work, networks, and out-of-pocket limits.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are PPOs usually better than HMOs for rural Utah residents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-rural-ppo-vs-hmo"
          }
        },
        {
          "@type": "Question",
          "name": "Are dental and vision benefits on Medicare Advantage plans worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/are-dental-vision-benefits-on-medicare-advantage-worth-it"
          }
        },
        {
          "@type": "Question",
          "name": "Can I go back to Original Medicare after being on Medicare Advantage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-go-back-to-original-medicare-from-advantage"
          }
        },
        {
          "@type": "Question",
          "name": "Can I go out of network with a Medicare Advantage PPO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-go-out-of-network-with-medicare-advantage-ppo"
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a new Medicare Advantage plan if I move to Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/move-to-utah-new-ma-plan"
          }
        },
        {
          "@type": "Question",
          "name": "Do Medicare Advantage plans limit which doctors I can see?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-advantage-limits-which-doctors-i-can-see"
          }
        },
        {
          "@type": "Question",
          "name": "Do all Intermountain clinics take the same Medicare Advantage plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/intermountain-clinics-same-plans"
          }
        },
        {
          "@type": "Question",
          "name": "Do rural Utah counties have fewer Medicare Advantage plan options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/rural-utah-counties-fewer-medicare-advantage-options"
          }
        },
        {
          "@type": "Question",
          "name": "Do rural Utah counties have narrower Medicare Advantage networks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-rural-narrower-networks"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare Advantage cover care outside my home service area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-advantage-coverage-outside-service-area"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare Advantage require prior authorization, and for what services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-advantage-prior-authorization-requirements"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare cover dental, vision, and hearing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-medicare-cover-dental-vision-hearing"
          }
        },
        {
          "@type": "Question",
          "name": "Does Original Medicare have a maximum out-of-pocket limit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-original-medicare-have-moop-limit"
          }
        },
        {
          "@type": "Question",
          "name": "How do I check whether my doctor accepts Medicare and is in-network?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-check-if-doctor-accepts-medicare-in-network"
          }
        },
        {
          "@type": "Question",
          "name": "How does Medicare Advantage work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-does-medicare-advantage-work"
          }
        },
        {
          "@type": "Question",
          "name": "How much risk am I taking with a $0 premium Medicare Advantage plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/risk-of-zero-premium-medicare-advantage"
          }
        },
        {
          "@type": "Question",
          "name": "How often do Medicare Advantage provider networks change?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-often-do-medicare-advantage-networks-change"
          }
        },
        {
          "@type": "Question",
          "name": "If a plan says Intermountain is in-network, does that mean all Intermountain providers are covered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/intermountain-in-network-all-providers"
          }
        },
        {
          "@type": "Question",
          "name": "Is a $0 premium Medicare Advantage plan too good to be true?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/zero-premium-medicare-advantage-too-good-to-be-true"
          }
        },
        {
          "@type": "Question",
          "name": "What am I supposed to do first, second, and third with Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-steps-first-second-third"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/supplement`

**Embed:**
```html
<div id="rsa-questions-supp"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/supplement.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Medigap / Supplement",
          "item": "https://www.restingsycamore.com/medicare/questions/supplement"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Medigap / Supplement Medicare Questions",
      "description": "Plan G, Plan N, guaranteed issue rights, and long-term premium trends.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are Utah Medigap premiums community-rated, issue-age-rated, or attained-age-rated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-premium-rating-method"
          }
        },
        {
          "@type": "Question",
          "name": "Are Utah Medigap premiums higher for beneficiaries under 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-premiums-under-65"
          }
        },
        {
          "@type": "Question",
          "name": "Are all Medigap Plan G benefits the same regardless of company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/are-all-plan-g-medigap-benefits-the-same"
          }
        },
        {
          "@type": "Question",
          "name": "Can I buy Medigap if I am under 65 and disabled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-buy-medigap-under-65-disabled"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my Medigap plan if I move to Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/move-to-utah-keep-medigap"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my Medigap plan if I move to another state?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-keep-medigap-if-i-move-to-another-state"
          }
        },
        {
          "@type": "Question",
          "name": "Can I see doctors in two states if I have Original Medicare plus Medigap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medigap-doctors-two-states"
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from Medicare Advantage to a Medigap plan any time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/switch-medicare-advantage-to-medigap-anytime"
          }
        },
        {
          "@type": "Question",
          "name": "Can a Utah Medicare agent compare both Medicare Advantage and Medigap fairly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-agent-compares-both"
          }
        },
        {
          "@type": "Question",
          "name": "Can disabled Medicare beneficiaries buy Medigap in Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-disabled-medigap"
          }
        },
        {
          "@type": "Question",
          "name": "Do I get a new Medigap enrollment opportunity in Utah when I turn 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-new-enrollment-at-65"
          }
        },
        {
          "@type": "Question",
          "name": "Does Utah guarantee Medigap for disabled Medicare beneficiaries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-guaranteed-disabled"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare a high-premium supplement to a low-premium Medicare Advantage plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/compare-high-premium-supplement-vs-low-premium-advantage"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medigap safer for people living in rural Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-rural-medigap-safer"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medigap the safer choice if I split time between Utah and another state?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-split-state"
          }
        },
        {
          "@type": "Question",
          "name": "Is Original Medicare plus Medigap the easiest way to keep Intermountain access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/intermountain-medigap-vs-ma"
          }
        },
        {
          "@type": "Question",
          "name": "Is it harder to get a Medigap supplement in Utah if I started with Medicare Advantage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/harder-to-get-medigap-in-utah-after-medicare-advantage"
          }
        },
        {
          "@type": "Question",
          "name": "Should I go with Original Medicare plus a supplement or Medicare Advantage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/original-medicare-supplement-vs-medicare-advantage"
          }
        },
        {
          "@type": "Question",
          "name": "What are the biggest regrets people have with Medicare Advantage versus Medigap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/biggest-regrets-medicare-advantage-vs-medigap"
          }
        },
        {
          "@type": "Question",
          "name": "What gaps does Original Medicare leave me with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-gaps-does-original-medicare-leave"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/part-d`

**Embed:**
```html
<div id="rsa-questions-partd"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/part-d.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Part D & Drug Coverage",
          "item": "https://www.restingsycamore.com/medicare/questions/part-d"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Part D & Drug Coverage Medicare Questions",
      "description": "Prescription drug plans, formularies, the coverage gap, and Extra Help.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I see any doctor or specialist with Original Medicare plus a Medigap plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-see-any-doctor-with-original-medicare-and-medigap"
          }
        },
        {
          "@type": "Question",
          "name": "Can I use GoodRx instead of my Part D plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-use-goodrx-instead-of-part-d-plan"
          }
        },
        {
          "@type": "Question",
          "name": "Do I get a Special Enrollment Period if I lose Medicaid or qualify for Extra Help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/sep-if-lose-medicaid-or-qualify-extra-help"
          }
        },
        {
          "@type": "Question",
          "name": "Do I need referrals to see specialists with Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-i-need-referrals-for-specialists-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Do Medicare Advantage plans include drug coverage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-medicare-advantage-plans-include-drug-coverage"
          }
        },
        {
          "@type": "Question",
          "name": "How do I find the lowest total drug cost, not just the lowest premium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/find-lowest-total-drug-cost-not-just-premium"
          }
        },
        {
          "@type": "Question",
          "name": "How do Part D formularies and drug tiers work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-part-d-formularies-and-drug-tiers-work"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medigap better than Medicare Advantage in Utah for access to academic specialists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medigap-academic-specialists"
          }
        },
        {
          "@type": "Question",
          "name": "Is Original Medicare plus Medigap the easiest option for University of Utah specialists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/uou-medigap-vs-ma"
          }
        },
        {
          "@type": "Question",
          "name": "Is Part D included in Original Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-part-d-included-in-original-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Is VA drug coverage creditable for Part D?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-va-drug-coverage-creditable-for-part-d"
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose a Medicare plan based mostly on my prescriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/choose-medicare-plan-based-on-prescriptions"
          }
        },
        {
          "@type": "Question",
          "name": "What counts as creditable drug coverage for Part D?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-counts-as-creditable-drug-coverage-part-d"
          }
        },
        {
          "@type": "Question",
          "name": "What does Medicare cover for prescriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-for-prescriptions"
          }
        },
        {
          "@type": "Question",
          "name": "What if my county has very few in-network specialists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-county-few-specialists"
          }
        },
        {
          "@type": "Question",
          "name": "What if my medication is not on the Part D formulary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-if-medication-not-on-part-d-formulary"
          }
        },
        {
          "@type": "Question",
          "name": "What if my medication needs prior authorization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-if-medication-needs-prior-authorization"
          }
        },
        {
          "@type": "Question",
          "name": "What is Extra Help for Medicare Part D and who qualifies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-is-extra-help-for-medicare-part-d"
          }
        },
        {
          "@type": "Question",
          "name": "What is Medicare Part D?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-is-medicare-part-d"
          }
        },
        {
          "@type": "Question",
          "name": "What is catastrophic coverage in Part D?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-is-catastrophic-coverage-in-part-d"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/work-and-social-security`

**Embed:**
```html
<div id="rsa-questions-work"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/work-and-social-security.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Medicare & Work / Social Security",
          "item": "https://www.restingsycamore.com/medicare/questions/work-and-social-security"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Medicare & Work / Social Security Medicare Questions",
      "description": "Working past 65, employer coverage, HSAs, COBRA, Social Security, and VA benefits.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I delay Social Security and still get Medicare at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/delay-social-security-still-get-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare if I have VA benefits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-with-va-benefits"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare through my spouse's work history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-through-spouse-work-history"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep an HSA if I enroll in Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-keep-hsa-if-i-enroll-in-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I keep my employer coverage and delay Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/keep-employer-coverage-and-delay-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can I stay on my spouse's employer plan instead of taking Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/stay-on-spouse-employer-plan-instead-of-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Can Part A be backdated and what does that mean for my HSA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/part-a-backdating-and-hsa-impact"
          }
        },
        {
          "@type": "Question",
          "name": "Do I qualify for Medicare if I am still working at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/qualify-for-medicare-still-working"
          }
        },
        {
          "@type": "Question",
          "name": "Do I qualify for Medicare if I receive Social Security Disability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/qualify-for-medicare-on-ssdi"
          }
        },
        {
          "@type": "Question",
          "name": "Do veterans need Medicare, and how do VA benefits work with Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-veterans-need-medicare-va-benefits-coordination"
          }
        },
        {
          "@type": "Question",
          "name": "Does Original Medicare work in any state?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-original-medicare-work-in-any-state"
          }
        },
        {
          "@type": "Question",
          "name": "Does Part B cover lab work, preventive services, and mental health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/part-b-covers-lab-work-preventive-mental-health"
          }
        },
        {
          "@type": "Question",
          "name": "Does employer size affect whether I need to take Part B at 65?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/employer-size-affects-part-b-timing"
          }
        },
        {
          "@type": "Question",
          "name": "How do I enroll in Part B after leaving employer coverage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/enroll-in-part-b-after-leaving-employer-coverage"
          }
        },
        {
          "@type": "Question",
          "name": "How do I line up my Medicare start date with my retirement date?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/line-up-medicare-start-date-with-retirement"
          }
        },
        {
          "@type": "Question",
          "name": "How do Medicare and Medicaid work together in Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-medicare-medicaid-together"
          }
        },
        {
          "@type": "Question",
          "name": "How do Medicare claims work and do I file my own claims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-do-medicare-claims-work"
          }
        },
        {
          "@type": "Question",
          "name": "How do the different parts of Medicare work together?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-do-medicare-parts-work-together"
          }
        },
        {
          "@type": "Question",
          "name": "How does Medicare work if I am under 65 and disabled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-under-65-disabled"
          }
        },
        {
          "@type": "Question",
          "name": "How does Medicare work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-does-medicare-work"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/coverage-and-providers`

**Embed:**
```html
<div id="rsa-questions-coverage"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/coverage-and-providers.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Coverage & Providers",
          "item": "https://www.restingsycamore.com/medicare/questions/coverage-and-providers"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Coverage & Providers Medicare Questions",
      "description": "What Medicare covers, doctor and hospital networks, and care facility rules.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do all doctors accept Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-all-doctors-accept-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare cover emergency care anywhere in the U.S.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-medicare-cover-emergency-care-anywhere"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare cover long-term nursing home or assisted living care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-medicare-cover-long-term-nursing-assisted-living"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare cover outpatient surgery and physical therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-medicare-cover-outpatient-surgery-physical-therapy"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare have family coverage or can my spouse be on my plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-medicare-have-family-coverage"
          }
        },
        {
          "@type": "Question",
          "name": "Does Part B cover durable medical equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-part-b-cover-durable-medical-equipment"
          }
        },
        {
          "@type": "Question",
          "name": "What does Medicare Part A cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-does-medicare-part-a-cover"
          }
        },
        {
          "@type": "Question",
          "name": "What does Medicare Part B cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-does-medicare-part-b-cover"
          }
        },
        {
          "@type": "Question",
          "name": "What does Medicare cover for home health and hospice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-home-health-hospice"
          }
        },
        {
          "@type": "Question",
          "name": "What does Medicare cover for skilled nursing facility care?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-does-medicare-cover-skilled-nursing"
          }
        },
        {
          "@type": "Question",
          "name": "What does Medicare not cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-does-medicare-not-cover"
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my Medicare if I move to Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/move-to-utah-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my Medicare plan if I move out of the service area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-plan-if-i-move-out-of-service-area"
          }
        },
        {
          "@type": "Question",
          "name": "What if I need long-term care and Medicare does not cover it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/long-term-care-not-covered"
          }
        },
        {
          "@type": "Question",
          "name": "What if my doctors stop taking my plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/doctors-stop-taking-plan"
          }
        },
        {
          "@type": "Question",
          "name": "What is the best Medicare choice in Utah if my top priority is keeping my doctors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-best-keep-doctors"
          }
        },
        {
          "@type": "Question",
          "name": "Why was my hospital stay billed as observation instead of inpatient?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/observation-vs-inpatient-hospital-stay-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "Will I be able to keep my current doctors with Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-keep-my-doctors-with-medicare"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/choosing-a-plan`

**Embed:**
```html
<div id="rsa-questions-choose"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/choosing-a-plan.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Choosing a Plan",
          "item": "https://www.restingsycamore.com/medicare/questions/choosing-a-plan"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Choosing a Plan Medicare Questions",
      "description": "How to compare plans, avoid common mistakes, and work with Medicare agents.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get Medicare if I was a stay-at-home spouse or was divorced or widowed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-for-stay-at-home-divorced-widowed-spouse"
          }
        },
        {
          "@type": "Question",
          "name": "Can Utah SHIP help caregivers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-ship-help-caregivers"
          }
        },
        {
          "@type": "Question",
          "name": "Do I need Original Medicare first before I can choose a plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/do-i-need-original-medicare-first"
          }
        },
        {
          "@type": "Question",
          "name": "How do I avoid Medicare scams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/avoid-medicare-scams"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare Medicare plans the right way?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/compare-medicare-plans-right-way"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare Medicare plans without getting overwhelmed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-compare-medicare-plans-without-overwhelm"
          }
        },
        {
          "@type": "Question",
          "name": "How do I compare total value instead of marketing hype?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/compare-total-value-not-hype"
          }
        },
        {
          "@type": "Question",
          "name": "How do I find a trustworthy Medicare agent in Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-find-trustworthy-agent"
          }
        },
        {
          "@type": "Question",
          "name": "How do I find a trustworthy Medicare agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-find-trustworthy-medicare-agent"
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if a Medicare agent is trustworthy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-agent-trustworthy"
          }
        },
        {
          "@type": "Question",
          "name": "How do I protect my parent from Medicare scams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/protect-parent-from-medicare-scams"
          }
        },
        {
          "@type": "Question",
          "name": "How do I stop overthinking Medicare and make a smart choice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/stop-overthinking-medicare-make-smart-choice"
          }
        },
        {
          "@type": "Question",
          "name": "How do I tell whether someone is steering me toward the wrong Utah plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-agent-steering-wrong-plan"
          }
        },
        {
          "@type": "Question",
          "name": "If I am on a fixed income in Utah, what Medicare help programs should I check first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-fixed-income-help-programs"
          }
        },
        {
          "@type": "Question",
          "name": "Is it better to use a Utah-based Medicare agent instead of a call center?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-agent-vs-call-center"
          }
        },
        {
          "@type": "Question",
          "name": "What do I need to know before I choose a Medicare plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-to-know-before-choosing-medicare-plan"
          }
        },
        {
          "@type": "Question",
          "name": "What do Utah Medicare shoppers usually regret not checking first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-shoppers-common-regrets"
          }
        },
        {
          "@type": "Question",
          "name": "What do most people choose when they first get Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-do-most-people-choose-for-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "What is the best Medicare choice in Utah if I travel a lot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-best-choice-travel"
          }
        },
        {
          "@type": "Question",
          "name": "What is the best Medicare option in Utah if I want access to both Intermountain and University of Utah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-best-intermountain-and-uou"
          }
        }
      ]
    }
  ]
}
</script>
```

---

## `/medicare/questions/basics`

**Embed:**
```html
<div id="rsa-questions-basics"></div>
<script src="https://papiofficial.github.io/resting-sycamore-pages/questions/basics.js"></script>
```

**Schema:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Medicare",
          "item": "https://www.restingsycamore.com/medicare"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Questions",
          "item": "https://www.restingsycamore.com/medicare/questions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Medicare Basics & Other",
          "item": "https://www.restingsycamore.com/medicare/questions/basics"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "name": "Medicare Basics & Other Medicare Questions",
      "description": "General Medicare questions, forms, coordination of benefits, and state-specific topics.",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Am I buying Medicare from the government or from an insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-government-or-insurance-company"
          }
        },
        {
          "@type": "Question",
          "name": "Are Medicare penalties permanent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/are-medicare-penalties-permanent"
          }
        },
        {
          "@type": "Question",
          "name": "Can I change my Medicare plan during the year",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-change-my-medicare-plan-during-the-year"
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Medicare if I have Medicaid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-get-medicare-with-medicaid"
          }
        },
        {
          "@type": "Question",
          "name": "Can I have both Medicare and Medicaid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/can-i-have-both-medicare-and-medicaid"
          }
        },
        {
          "@type": "Question",
          "name": "Can moving from one Utah county to another change my Medicare plan options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/moving-utah-counties-changes-medicare-plan-options"
          }
        },
        {
          "@type": "Question",
          "name": "Does Medicare depend on my income or assets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/does-medicare-depend-on-income-or-assets"
          }
        },
        {
          "@type": "Question",
          "name": "Does Utah have a SHIP program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-ship-program"
          }
        },
        {
          "@type": "Question",
          "name": "How do I appeal a Medicare claim denial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-appeal-medicare-claim-denial"
          }
        },
        {
          "@type": "Question",
          "name": "How do I avoid Medicare fraud and misleading sales tactics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/how-to-avoid-medicare-fraud-misleading-sales"
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Utah SHIP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/utah-ship-contact"
          }
        },
        {
          "@type": "Question",
          "name": "How do I know I am not making a terrible Medicare decision?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/avoid-terrible-medicare-decision"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medicare just one plan or do I have to build it myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-medicare-one-plan-or-build-yourself"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medicare the same as Medicaid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-medicare-same-as-medicaid"
          }
        },
        {
          "@type": "Question",
          "name": "Is Medicare the same thing as health insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-medicare-same-as-health-insurance"
          }
        },
        {
          "@type": "Question",
          "name": "Is the Medicare giveback benefit real or a sales pitch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/is-medicare-giveback-benefit-real"
          }
        },
        {
          "@type": "Question",
          "name": "Is there really a Medicare giveback or am I being sold something?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/medicare-giveback-real-or-sales"
          }
        },
        {
          "@type": "Question",
          "name": "What am I not thinking about with Medicare that I should be?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-am-i-not-thinking-about-with-medicare"
          }
        },
        {
          "@type": "Question",
          "name": "What are the most important variables in choosing a Medicare plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/most-important-variables-choosing-plan"
          }
        },
        {
          "@type": "Question",
          "name": "What are the parts of Medicare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See the full answer at https://www.restingsycamore.com/medicare/questions/what-are-the-parts-of-medicare"
          }
        }
      ]
    }
  ]
}
</script>
```

---
