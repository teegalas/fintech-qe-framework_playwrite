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

