export const saas = {
    "productName": "Budget Narrative Studio",
    "category": "Finance & Grants",
    "northStar": "budget lines with clear narrative support",
    "segments": [
        "Grant finance students",
        "Nonprofit finance staff",
        "Program managers",
        "Grant reviewers"
    ],
    "jobs": [
        "Build budget lines with units, quantities, and justifications",
        "Detect mismatches between proposal activities and costs",
        "Check caps, restricted categories, and math accuracy",
        "Export funder-ready budget narratives"
    ],
    "plans": [
        {
            "name": "Community",
            "price": "Free",
            "promise": "Single budget narrative export"
        },
        {
            "name": "Builder",
            "price": "49/mo",
            "promise": "Formula checks, cap rules, reviewer comments"
        },
        {
            "name": "Chapter",
            "price": "199/mo",
            "promise": "Multi-budget pipeline and mentor approvals"
        },
        {
            "name": "Consulting",
            "price": "Custom",
            "promise": "White-labeled grant budget operations"
        }
    ],
    "metrics": [
        {
            "label": "Narrative-supported lines",
            "current": 86,
            "target": 100,
            "note": "Lines with justification text"
        },
        {
            "label": "Math accuracy",
            "current": 94,
            "target": 100,
            "note": "Rows passing formula checks"
        },
        {
            "label": "Cap compliance",
            "current": 72,
            "target": 90,
            "note": "Restricted categories within limits"
        },
        {
            "label": "Reviewer issues closed",
            "current": 63,
            "target": 85,
            "note": "Open comments resolved"
        }
    ],
    "playbooks": [
        "Budget line intake",
        "Unit-cost calculation review",
        "Narrative justification sprint",
        "Cap/compliance QA",
        "Funder export packet"
    ],
    "integrations": [
        "Spreadsheet CSV import/export",
        "Proposal Brief Builder sync",
        "QuickBooks category mapping",
        "Funder template library",
        "Reviewer comment log"
    ],
    "controls": [
        "No negative amounts or unsupported formulas",
        "Every line needs quantity, unit cost, and purpose",
        "Admin caps require explicit rule checks",
        "Narrative exports flag unresolved reviewer comments"
    ],
    "roadmap": [
        "Budget table engine",
        "Funder cap rule library",
        "Formula audit trail",
        "Proposal-budget cross-check",
        "Scenario and match-funding planner"
    ],
    "personas": [
        {
            "name": "Grant finance lead",
            "role": "Builds compliant grant budgets and narratives",
            "pain": "Numbers and justifications drift during edits",
            "success": "Every line item has formula, purpose, and evidence",
            "activation": "Create first budget line narrative"
        },
        {
            "name": "Program manager",
            "role": "Explains how costs support activities and outcomes",
            "pain": "Budget categories do not reflect actual delivery model",
            "success": "Activities, costs, and outcomes reconcile",
            "activation": "Review activity-cost map"
        },
        {
            "name": "Reviewer",
            "role": "Checks compliance caps and funder rules",
            "pain": "Indirect caps and match rules are easy to miss",
            "success": "Critical math and compliance checks pass before export",
            "activation": "Run compliance checklist"
        }
    ],
    "journeys": [
        {
            "stage": "Budget intake",
            "moment": "Enter line items, categories, quantities, rates, and funder rules",
            "success": "All lines have calculation basis",
            "automation": "Budget table wizard"
        },
        {
            "stage": "Narrative drafting",
            "moment": "Link each line item to activity, need, and outcome",
            "success": "Narratives explain purpose without unsupported claims",
            "automation": "Line item explainer"
        },
        {
            "stage": "Reconciliation",
            "moment": "Compare totals, categories, match, and indirect caps",
            "success": "Math and compliance blockers resolved",
            "automation": "Formula and cap validator"
        },
        {
            "stage": "Review",
            "moment": "Route finance/program comments and approvals",
            "success": "Reviewer notes resolved with rationale",
            "automation": "Reviewer queue"
        },
        {
            "stage": "Export",
            "moment": "Generate budget narrative, CSV, and compliance notes",
            "success": "Funder-ready packet is internally consistent",
            "automation": "Narrative and table export"
        }
    ],
    "features": [
        {
            "name": "Budget formula table",
            "tier": "Community",
            "description": "Line items with quantity, unit cost, category, and funding source",
            "evidence": "Formula basis required for every amount"
        },
        {
            "name": "Line-item narrative generator",
            "tier": "Team",
            "description": "Purpose, activity, and outcome explanation per budget line",
            "evidence": "Narratives reference program activity and evidence"
        },
        {
            "name": "Indirect and admin cap validator",
            "tier": "Team",
            "description": "Checks funder-specific caps and restricted categories",
            "evidence": "Cap calculations shown in compliance notes"
        },
        {
            "name": "Match and leverage tracker",
            "tier": "Chapter",
            "description": "Committed, pending, and in-kind match documentation",
            "evidence": "Match rows require source and approval status"
        },
        {
            "name": "Reviewer reconciliation queue",
            "tier": "Chapter",
            "description": "Finance/program review comments and resolved rationale",
            "evidence": "Approvals stored before certified export"
        },
        {
            "name": "Scenario budget versions",
            "tier": "Network",
            "description": "Compare lean, target, and stretch request scenarios",
            "evidence": "Version changes preserve assumptions and delta notes"
        }
    ],
    "experiments": [
        {
            "hypothesis": "Formula validation eliminates math rework",
            "measure": "Critical math mismatches",
            "target": "0 at export",
            "cadence": "per budget"
        },
        {
            "hypothesis": "Line-item prompts improve reviewer approval",
            "measure": "Narrative approval rate",
            "target": "90% first-pass approval",
            "cadence": "monthly"
        },
        {
            "hypothesis": "Cap checks prevent compliance revisions",
            "measure": "Cap violations",
            "target": "0 critical violations",
            "cadence": "per funder"
        },
        {
            "hypothesis": "Scenario versions improve leadership decisions",
            "measure": "Budget decision cycle time",
            "target": "30% faster approval",
            "cadence": "per proposal"
        }
    ],
    "risks": [
        {
            "risk": "Narrative claims do not match budget lines",
            "mitigation": "Line item to activity/outcome mapping required",
            "owner": "Program manager",
            "severity": "high"
        },
        {
            "risk": "Indirect or admin caps exceed funder rules",
            "mitigation": "Cap validator blocks certified export",
            "owner": "Finance lead",
            "severity": "high"
        },
        {
            "risk": "Match commitments are overstated",
            "mitigation": "Match source and approval status required",
            "owner": "Development lead",
            "severity": "medium"
        },
        {
            "risk": "Version changes erase assumptions",
            "mitigation": "Scenario delta notes and deterministic export history",
            "owner": "Reviewer",
            "severity": "medium"
        }
    ],
    "automations": [
        {
            "name": "Formula checker",
            "trigger": "Budget line amount changes",
            "action": "Recalculate totals and flag mismatch",
            "owner": "Finance lead"
        },
        {
            "name": "Cap validator",
            "trigger": "Funder rule or budget category changes",
            "action": "Check indirect/admin limits",
            "owner": "Reviewer"
        },
        {
            "name": "Narrative gap prompt",
            "trigger": "Line item lacks justification",
            "action": "Ask for activity, need, and outcome explanation",
            "owner": "Program manager"
        },
        {
            "name": "Funder packet export",
            "trigger": "All compliance controls verified",
            "action": "Generate narrative, CSV, and compliance memo",
            "owner": "Grant finance lead"
        }
    ],
    "dashboards": [
        {
            "name": "Budget cockpit",
            "audience": "Finance",
            "widgets": [
                "Total request",
                "Category totals",
                "Formula gaps",
                "Cap status"
            ]
        },
        {
            "name": "Narrative readiness",
            "audience": "Program managers",
            "widgets": [
                "Lines missing purpose",
                "Outcome links",
                "Reviewer comments",
                "Evidence gaps"
            ]
        },
        {
            "name": "Compliance board",
            "audience": "Reviewers",
            "widgets": [
                "Indirect cap",
                "Match status",
                "Restricted costs",
                "Approval queue"
            ]
        }
    ],
    "templates": [
        {
            "name": "Budget narrative packet",
            "format": "Markdown",
            "sections": [
                "Summary",
                "Line item narratives",
                "Compliance notes",
                "Assumptions",
                "Reviewer approvals"
            ]
        },
        {
            "name": "Budget table export",
            "format": "CSV",
            "sections": [
                "Category",
                "Line item",
                "Quantity",
                "Unit cost",
                "Total",
                "Narrative status"
            ]
        },
        {
            "name": "Compliance review memo",
            "format": "Markdown",
            "sections": [
                "Caps",
                "Match",
                "Restricted costs",
                "Open questions"
            ]
        }
    ]
};
//# sourceMappingURL=saas.js.map