# Fintech Automation Framework (TypeScript + Playwright)

## Overview
This project is a modern, scalable test automation framework built using **TypeScript + Playwright**, following **Page Object Model (POM)** and **DRY (Don’t Repeat Yourself)** principles.

It includes:
- API tests (User & Transaction services)
- UI tests (Registration & Transaction flows)
- Test data factory
- Service abstraction layer
- Page Object Model for UI
- HTML + JUnit reporting
- Automatic screenshots & traces on failure
- Full environment-based configuration for API + UI

---
# 📊 Architecture Diagram (included for clarity)

```mermaid
flowchart TD
  subgraph ENV_CONFIG [Environment Config]
    A1[.env File]
    A2[src/config/env.ts]
  end
  
  subgraph API_LAYER [API Layer]
    B1[routes.ts]
    B2[client.ts]
    B3[services.ts]
  end
  
  subgraph UTILS [Test Utilities]
    C1[dataFactory.ts]
    C2[assertions.ts]
  end

  subgraph UI_LAYER [UI Layer (POM)]
    D1[BasePage.ts]
    D2[RegisterPage.ts]
    D3[TransactionPage.ts]
  end
  
  subgraph TESTS [Test Files]
    E1[API Tests]
    E2[UI Tests]
  end
  
  ENV_CONFIG --> API_LAYER
  ENV_CONFIG --> UI_LAYER
  API_LAYER --> E1
  UTILS --> E1
  UTILS --> E2
  UI_LAYER --> E2
```

---

## 📁 Folder Structure

```
.
├── package.json
├── tsconfig.json
├── playwright.config.ts
├── src/
│   ├── config/
│   │   └── env.ts
│   ├── api/
│   │   ├── routes.ts
│   │   ├── client.ts
│   │   └── services.ts
│   ├── utils/
│   │   ├── dataFactory.ts
│   │   └── assertions.ts
│   └── ui/pages/
│       ├── BasePage.ts
│       ├── RegisterPage.ts
│       └── TransactionPage.ts
└── tests/
    ├── api/
    │   ├── users.api.spec.ts
    │   └── transactions.api.spec.ts
    └── ui/
        ├── user-registration.ui.spec.ts
        └── transaction-flow.ui.spec.ts
```

---

## 🚀 How the Framework Works

### 1. **POM (Page Object Model)**
All UI interactions are encapsulated inside reusable page objects:
- `RegisterPage`
- `TransactionPage`
- `BasePage`

This keeps UI tests short, stable, and readable.

---

### 2. **DRY API Layer**
API tests use:
- `routes.ts` → single source of truth for endpoints  
- `client.ts` → generic GET/POST wrapper  
- `services.ts` → user & transaction business logic  

No repeated request logic anywhere.

---

### 3. **Test Data Management (Factory Pattern)**
`dataFactory.ts` generates:
- unique users  
- valid/invalid transactions  
- random emails  

Ensures tests never collide or conflict.

---

### 4. **Environment-Based Config**
`env.ts` loads values from `.env` file:

```
API_BASE_URL=http://localhost:8080
UI_BASE_URL=http://localhost:3000
AUTH_TOKEN=
ENV_NAME=local
```

Switching between QA / Stage / Prod is instant.

---

### 5. **Reporting**
Playwright automatically generates:
- HTML reports  
- JUnit XML for CI  
- Screenshots on failure  
- Traces on retry  

Open report after test run:

```bash
npx playwright show-report
```

---

## 🔧 Installation

```bash
npm install
npx playwright install
```

---

## ▶️ Running Tests

### Run **all** tests
```bash
npx playwright test
```

### Run only API tests
```bash
npx playwright test tests/api
```

### Run only UI tests
```bash
npx playwright test tests/ui
```

### Open HTML report
```bash
npx playwright show-report
```

---

## 🏁 Summary

This framework demonstrates:
- Real-world automation structure  
- Strong separation of concerns  
- Clean architecture using DRY principles  
- Modern UI + API testing  
- Reliable, scalable design suitable for fintech microservices systems  

---

