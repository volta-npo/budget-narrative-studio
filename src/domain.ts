export const domain = {
  "kind": "budget",
  "title": "Budget Narrative Studio",
  "purpose": "A purpose-built budget interface for a structured builder for grant budget narratives that match numbers to purpose.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Budget line items",
  "metricLabels": [
    "Narrative Alignment",
    "Math Accuracy",
    "Cap Compliance"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Eastside Youth Arts Collective",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "budget lines with clear narrative support",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "monthly-volume",
      "label": "Monthly volume",
      "type": "number",
      "sample": 120,
      "placeholder": "Enter monthly volume"
    },
    {
      "id": "minutes-per-item",
      "label": "Minutes per item",
      "type": "number",
      "sample": 15,
      "placeholder": "Enter minutes per item"
    },
    {
      "id": "dollar-value-cost",
      "label": "Dollar value / cost",
      "type": "number",
      "sample": 45,
      "placeholder": "Enter dollar value / cost"
    },
    {
      "id": "confidence-percent",
      "label": "Confidence percent",
      "type": "number",
      "sample": 80,
      "placeholder": "Enter confidence percent"
    }
  ],
  "rows": [
    "Line items entered",
    "Quantity/unit cost calculated",
    "Funding source assigned",
    "Justification written",
    "Activity linked",
    "Admin cap checked",
    "Reviewer comments resolved",
    "Narrative exported"
  ],
  "artifacts": [
    "Budget CSV",
    "Budget narrative",
    "Reviewer comments report"
  ],
  "checks": [
    "Totals must match request",
    "No negative amounts",
    "Every line needs calculation and justification"
  ],
  "sampleClient": "Eastside Youth Arts Collective"
};
