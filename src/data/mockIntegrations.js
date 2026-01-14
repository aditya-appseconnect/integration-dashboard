export const mockIntegrations = [
  {
    id: 1,
    name: "Shopify → SAP Orders Sync",
    sourceApp: "Shopify",
    targetApp: "SAP",
    status: "SUCCESS",
    lastRunTime: "2026-01-13T10:45:00Z",
    recordsProcessed: 120,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-13T10:45:01Z", level: "INFO", message: "Order sync started" },
      { timestamp: "2026-01-13T10:45:05Z", level: "INFO", message: "120 orders synced successfully" }
    ]
  },

  {
    id: 2,
    name: "Magento → Salesforce Customers Sync",
    sourceApp: "Magento",
    targetApp: "Salesforce",
    status: "FAILED",
    lastRunTime: "2026-01-13T09:30:00Z",
    recordsProcessed: 45,
    errorCount: 2,
    errors: [
      { code: "SF_AUTH_401", message: "Salesforce authentication failed" }
    ],
    logs: [
      { timestamp: "2026-01-13T09:30:01Z", level: "INFO", message: "Customer sync started" },
      { timestamp: "2026-01-13T09:30:04Z", level: "ERROR", message: "Authentication failed for Salesforce" }
    ]
  },

  {
    id: 3,
    name: "WooCommerce → Netsuite Products Sync",
    sourceApp: "WooCommerce",
    targetApp: "Netsuite",
    status: "RUNNING",
    lastRunTime: "2026-01-13T11:00:00Z",
    recordsProcessed: 78,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-13T11:00:00Z", level: "INFO", message: "Product sync started" }
    ]
  },

  {
    id: 4,
    name: "Zoho → SAP Vendors Sync",
    sourceApp: "Zoho",
    targetApp: "SAP",
    status: "DISABLED",
    lastRunTime: null,
    recordsProcessed: 0,
    errorCount: 0,
    errors: [],
    logs: []
  },

  {
    id: 5,
    name: "BigCommerce → SAP Orders Sync",
    sourceApp: "BigCommerce",
    targetApp: "SAP",
    status: "SUCCESS",
    lastRunTime: "2026-01-12T18:20:00Z",
    recordsProcessed: 210,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-12T18:20:00Z", level: "INFO", message: "Orders synced successfully" }
    ]
  },

  {
    id: 6,
    name: "Shopify → Salesforce Customers Sync",
    sourceApp: "Shopify",
    targetApp: "Salesforce",
    status: "FAILED",
    lastRunTime: "2026-01-12T15:10:00Z",
    recordsProcessed: 60,
    errorCount: 1,
    errors: [
      { code: "SF_TIMEOUT", message: "Salesforce API timeout" }
    ],
    logs: [
      { timestamp: "2026-01-12T15:10:03Z", level: "ERROR", message: "Timeout while syncing customers" }
    ]
  },

  {
    id: 7,
    name: "Amazon → SAP Inventory Sync",
    sourceApp: "Amazon",
    targetApp: "SAP",
    status: "SUCCESS",
    lastRunTime: "2026-01-13T08:15:00Z",
    recordsProcessed: 340,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-13T08:15:02Z", level: "INFO", message: "Inventory sync completed" }
    ]
  },

  {
    id: 8,
    name: "NetSuite → Shopify Products Sync",
    sourceApp: "Netsuite",
    targetApp: "Shopify",
    status: "RUNNING",
    lastRunTime: "2026-01-13T11:20:00Z",
    recordsProcessed: 95,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-13T11:20:00Z", level: "INFO", message: "Product sync in progress" }
    ]
  },

  {
    id: 9,
    name: "SAP → PowerBI Sales Report Sync",
    sourceApp: "SAP",
    targetApp: "PowerBI",
    status: "SUCCESS",
    lastRunTime: "2026-01-12T22:45:00Z",
    recordsProcessed: 30,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-12T22:45:01Z", level: "INFO", message: "Reports exported successfully" }
    ]
  },

  {
    id: 10,
    name: "Zoho → Salesforce Leads Sync",
    sourceApp: "Zoho",
    targetApp: "Salesforce",
    status: "FAILED",
    lastRunTime: "2026-01-11T14:30:00Z",
    recordsProcessed: 22,
    errorCount: 1,
    errors: [
      { code: "SF_RATE_LIMIT", message: "Salesforce API rate limit exceeded" }
    ],
    logs: [
      { timestamp: "2026-01-11T14:30:02Z", level: "ERROR", message: "Rate limit exceeded" }
    ]
  },

  {
    id: 11,
    name: "Shopify → QuickBooks Invoices Sync",
    sourceApp: "Shopify",
    targetApp: "QuickBooks",
    status: "SUCCESS",
    lastRunTime: "2026-01-12T09:00:00Z",
    recordsProcessed: 80,
    errorCount: 0,
    errors: [],
    logs: []
  },

  {
    id: 12,
    name: "WooCommerce → SAP Orders Sync",
    sourceApp: "WooCommerce",
    targetApp: "SAP",
    status: "SUCCESS",
    lastRunTime: "2026-01-13T07:50:00Z",
    recordsProcessed: 150,
    errorCount: 0,
    errors: [],
    logs: []
  },

  {
    id: 13,
    name: "Magento → SAP Products Sync",
    sourceApp: "Magento",
    targetApp: "SAP",
    status: "RUNNING",
    lastRunTime: "2026-01-13T11:10:00Z",
    recordsProcessed: 65,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-13T11:10:00Z", level: "INFO", message: "Product sync running" }
    ]
  },

  {
    id: 14,
    name: "HubSpot → Salesforce Contacts Sync",
    sourceApp: "HubSpot",
    targetApp: "Salesforce",
    status: "DISABLED",
    lastRunTime: null,
    recordsProcessed: 0,
    errorCount: 0,
    errors: [],
    logs: []
  },

  {
    id: 15,
    name: "SAP → Azure Data Lake Sync",
    sourceApp: "SAP",
    targetApp: "Azure",
    status: "SUCCESS",
    lastRunTime: "2026-01-12T23:55:00Z",
    recordsProcessed: 500,
    errorCount: 0,
    errors: [],
    logs: [
      { timestamp: "2026-01-12T23:55:01Z", level: "INFO", message: "Data lake sync completed" }
    ]
  }
]
