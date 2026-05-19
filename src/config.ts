export const config = {
  "number": 15,
  "slug": "budget-narrative-studio",
  "title": "Budget Narrative Studio",
  "category": "Finance & Grants",
  "tagline": "A structured builder for grant budget narratives that match numbers to purpose.",
  "persona": "Finance students drafting budgets with mentor review.",
  "gap": "Budget narratives are intimidating and easy to mismatch with proposal claims.",
  "niche": "Small grant applications under student supervision.",
  "metric": "budget lines with clear narrative support",
  "modules": [
    "Line item explainer",
    "Cost justification guides",
    "Mismatch detector checklist",
    "Reviewer comments"
  ],
  "theme": {
    "accent": "#16a34a",
    "accent2": "#86efac",
    "emoji": "\ud83d\udcb8",
    "metricLabel": "Funding readiness",
    "workflow": [
      "Collect verified facts",
      "Map requirements to evidence",
      "Score readiness",
      "Export funder-ready packet"
    ],
    "privacy": "Financial and grant materials can be sensitive. Keep exports local and label confidential notes."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "line-item-explainer",
      "label": "Line item explainer",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify line item explainer with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "cost-justification-guides",
      "label": "Cost justification guides",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify cost justification guides with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "mismatch-detector-checklist",
      "label": "Mismatch detector checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify mismatch detector checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "reviewer-comments",
      "label": "Reviewer comments",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify reviewer comments with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Budget Narrative Studio and capture baseline evidence.",
      "Complete the line item explainer workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Eastside Youth Arts Collective",
    "chapter": "NYC",
    "studentLead": "Volta Student Lead",
    "notes": "Grant and finance readiness project for a small community nonprofit. Budget Narrative Studio sample.",
    "evidencePrefix": "Budget Narrative Studio",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
