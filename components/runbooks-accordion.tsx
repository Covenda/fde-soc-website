import { FileText, PlayCircle, AlertTriangle, Shield, Activity } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface Runbook {
  id: string;
  title: string;
  category: "detection" | "response" | "automation" | "compliance" | "general";
  severity?: "low" | "medium" | "high" | "critical";
  description: string;
  steps: string[];
  tools?: string[];
  slo?: string;
}

interface RunbooksAccordionProps {
  runbooks: Runbook[];
  defaultOpen?: string[];
}

const categoryIcons = {
  detection: Shield,
  response: AlertTriangle,
  automation: PlayCircle,
  compliance: FileText,
  general: Activity,
};

const severityColors = {
  low: "bg-blue-100 text-blue-800 border-blue-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  high: "bg-orange-100 text-orange-800 border-orange-200",
  critical: "bg-red-100 text-red-800 border-red-200",
};

export function RunbooksAccordion({ runbooks, defaultOpen = [] }: RunbooksAccordionProps) {
  return (
    <Accordion type="multiple" defaultValue={defaultOpen} className="w-full">
      {runbooks.map((runbook) => {
        const Icon = categoryIcons[runbook.category];

        return (
          <AccordionItem key={runbook.id} value={runbook.id} className="border rounded-lg mb-3 px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-start gap-3 text-left w-full">
                <div className="mt-1 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="font-semibold text-base">{runbook.title}</h4>
                    {runbook.severity && (
                      <Badge
                        variant="outline"
                        className={severityColors[runbook.severity]}
                      >
                        {runbook.severity.toUpperCase()}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="capitalize">
                      {runbook.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {runbook.description}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-2">
              <div className="space-y-4 ml-8">
                {/* Steps */}
                <div>
                  <h5 className="font-medium text-sm mb-2">Procedure:</h5>
                  <ol className="space-y-2 list-decimal list-inside">
                    {runbook.steps.map((step, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tools */}
                {runbook.tools && runbook.tools.length > 0 && (
                  <div>
                    <h5 className="font-medium text-sm mb-2">Tools & Integrations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {runbook.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="font-normal">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* SLO */}
                {runbook.slo && (
                  <div>
                    <h5 className="font-medium text-sm mb-1">Response SLO:</h5>
                    <p className="text-sm text-muted-foreground">{runbook.slo}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

// Example runbooks data for reference
export const exampleRunbooks: Runbook[] = [
  {
    id: "phishing-response",
    title: "Phishing Email Response",
    category: "response",
    severity: "high",
    description: "Procedure for investigating and responding to reported phishing emails",
    steps: [
      "Isolate the reported email and extract headers, URLs, and attachments",
      "Check email authentication (SPF, DKIM, DMARC) using header analysis",
      "Detonate attachments in sandbox environment (Any.run, Joe Sandbox)",
      "Analyze URLs through VirusTotal and URLhaus",
      "Search SIEM for other recipients and similar emails (sender, subject, body patterns)",
      "If confirmed malicious: Block sender domain/IP, quarantine emails, notify affected users",
      "Create detection rule for similar future attempts",
      "Document findings in ticketing system with IOCs and remediation steps"
    ],
    tools: ["Microsoft Defender", "Proofpoint", "Any.run", "VirusTotal", "Sentinel"],
    slo: "Initial triage within 15 minutes, full investigation within 2 hours"
  },
  {
    id: "brute-force-detection",
    title: "Brute Force Attack Detection & Response",
    category: "detection",
    severity: "critical",
    description: "Automated detection and blocking of credential brute force attempts",
    steps: [
      "Detection rule triggers on 10+ failed logins within 5 minutes for single account",
      "Automation extracts source IP, target account, timestamp, and failure count",
      "Check if IP is on allowlist (VPN gateways, known offices)",
      "If not allowlisted: Temporarily block IP at firewall for 1 hour",
      "Create high-priority ticket with account owner and security team",
      "Check for any successful logins from the source IP in past 7 days",
      "If successful logins found: Force password reset and session termination",
      "Add IP to threat intel feed and update detection logic"
    ],
    tools: ["Azure AD", "Sentinel", "Palo Alto Firewall", "Jira"],
    slo: "Automated blocking within 30 seconds, analyst review within 30 minutes"
  },
  {
    id: "privileged-access-audit",
    title: "Privileged Access Quarterly Audit",
    category: "compliance",
    severity: "medium",
    description: "Quarterly review of all privileged accounts and access grants",
    steps: [
      "Export all users with admin, domain admin, or service account privileges",
      "Cross-reference against HR system to identify terminated employees",
      "Review access grants from past 90 days for business justification",
      "Identify accounts with no logins in past 60 days (dormant accounts)",
      "Send access review requests to business unit owners",
      "Document owner approvals and remove unapproved access",
      "Generate compliance report for audit trail",
      "Schedule next quarterly review and update runbook with findings"
    ],
    tools: ["Azure AD", "Okta", "ServiceNow", "Excel"],
    slo: "Complete review within 2 weeks of quarter end"
  },
  {
    id: "malware-containment",
    title: "Malware Infection Containment",
    category: "response",
    severity: "critical",
    description: "Immediate containment and investigation procedure for confirmed malware",
    steps: [
      "Isolate infected endpoint from network (disable NIC or remove from VLAN)",
      "Preserve memory dump and disk image for forensic analysis",
      "Extract file hashes, process names, network connections, and registry modifications",
      "Search EDR for lateral movement indicators (file drops, scheduled tasks, new services)",
      "Identify affected systems and apply same containment measures",
      "Run antivirus/EDR remediation on isolated systems",
      "Rebuild critical systems from clean backups if encryption or destructive malware detected",
      "Update detection rules with malware signatures and IOCs"
    ],
    tools: ["CrowdStrike Falcon", "Velociraptor", "FTK Imager", "VirusTotal Enterprise"],
    slo: "Initial containment within 10 minutes, full investigation within 4 hours"
  },
  {
    id: "cloud-access-anomaly",
    title: "Cloud Access Anomaly Investigation",
    category: "detection",
    severity: "high",
    description: "Investigate unusual cloud service access patterns",
    steps: [
      "Alert triggers on access from new geographic location or IP range",
      "Verify user's normal access patterns from past 30 days",
      "Check if VPN or business travel explains the anomaly",
      "Review actions performed during anomalous session (data downloads, permission changes)",
      "Contact user directly to confirm legitimate access",
      "If not confirmed within 30 minutes: Suspend cloud account and terminate sessions",
      "Enable MFA step-up authentication for the account",
      "Create detection rule for similar behavior patterns"
    ],
    tools: ["Azure AD Identity Protection", "AWS CloudTrail", "Okta", "Slack"],
    slo: "User contact within 15 minutes, containment within 30 minutes if unconfirmed"
  },
];
