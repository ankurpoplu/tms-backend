
module.exports = {
  TMS: 'TMS',
  STATUS: {
    ACTIVATE: 'Active',
    PASSIVE: 'Passive',
    OFFLINE: 'Offline',
    DECLARED: 'Declared',
  },
  APPLICATION: {
    TYPE: 'Application',
    DOWNLOADED: 'Download requested',
  },
  FILESTORE: {
    BLACKLIST: 'Blacklist'
  },
  PASSWORDGENERATE: {
    SUPER_PASSWORD: 'superPassword',
    MAINTAINER_PASSWORD: 'maintainerPassword'
  },
  TERMINAL: {
    BLACKLIST: 'Blacklist',
    ACTIVE: 'Active',
    PARAMETER: 'Parameter',
    PARAMETER_PROD: 'Parameter_Prod',
    PARAMETER_TEST: 'Parameter_Test',
    PARAMETER_BILL: 'Parameter_Bill'
  },
  LOGS: {
    USER: 'User',
    SYSTEM: 'System',
    DOWNLOADED: 'Downloaded',
    ACTION: "Download Logs File",
    TERMINAL_UPDATE: {
      ACTION: "Terminal Update",
      AAS_SETTING: 'AAS Setting Changed'
    },
    TERMINAL_STATUS_CHANGE: {
      ACTIVE: 'Terminal Status Active',
      PASSIVE: 'Terminal Status Passive',
    },
    TERMINAL_DELETE: {
      ACTION: 'Terminal Deleted'
    },
    GROUP_CREATED: {
      ACTION_GROUP: "Group Added",
      ACTION_SUB_GROUP: "Sub Group Added"
    },
    GROUP_UPDATE: {
      BANK: "bank",
      ACTION_GROUP: "Group Updated",
      ACTION_SUB_GROUP: "Sub Group Updated"
    },
    GROUP_DELETE: {
      ACTION: 'Group Deleted'
    },
    PARAMS_FILE_DOWNLOAD: {
      ACTION: 'Download Parameters Files'
    },
    CALL_INIT: {
      ACTION: 'Call Initiated'
    },
    DOWNLOAD_BLACKLIST: {
      ACTION: 'Blacklist Files Downloaded'
    },
    APPLICATION_DOWNLOAD: {
      ACTION: 'Application Downloaded'
    },
    HEART_BEAT_CALL: {
      ACTION: 'Heartbeat call initiated'
    },
    DOWNLOAD_HISTORY: {
      COMMENT: 'Downloaded',
      ACTION: 'Download Response'
    },
    HEART_BEAT_CALL_DONE: {
      ACTION: 'Heartbeat call change terminal status',
      COMMENT: 'Heartbeat Timer done at '
    },
    LOGS_UPLOAD: {
      ACTION: 'Logs Uploaded',
      COMMENT: ''
    }
  },
  FILE_TYPE: {
    APPLICATION: 'Application',
    KERNEL: 'Kernel',
    OS: 'OS',
    BLACKLIST: 'Blacklist',
    DOWNLOAD_STATUS: 'Done'
  },
  TRANSACTION: {
    SALE: 'sale',
    CASH: 'cash',
    REFUND: 'refund',
    BILL_PAYMENT: 'billPayment',
    CANCELLATION: 'cancellation',
    PRE_AUTHORIZATION: 'preAuthorization',
    PRE_AUTHORIZATION_VALIDATION: 'preAuthorizationValidation',
    ACCEPT: 'accept',
    REFUSED: 'refused',
    FAILED: 'failed',
  },
};