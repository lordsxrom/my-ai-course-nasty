---
name: scaffold-bug-tracker
description: Генерирует выпускной Bug Tracker (web React TS минимум) в projects/bug-tracker-web. Неделя 8. Фразы «scaffold bug tracker», «болванка bug tracker graduation».
---

# Scaffold — Bug Tracker (выпускной)

Мини-трекер багов: список, создание, статусы, фильтры. Web обязателен; mobile — отдельные skills или фаза +mobile.

## Стек (web)

| | |
|---|---|
| UI | React + TypeScript + Vite |
| State | useState / простой context — без Redux |
| Persistence | localStorage или in-memory (зафиксируй; localStorage предпочтительнее для QA) |
| API | нет backend; mock optional |
| Тесты | Vitest + Playwright по харнесу студента |

## Путь

`projects/bug-tracker-web/`

## Модель

```typescript
type BugStatus = 'new' | 'triaged' | 'in_progress' | 'fixed' | 'closed';

type Bug = {
  id: string;
  title: string;
  description: string;
  status: BugStatus;
  severity: 'blocker' | 'critical' | 'major' | 'minor';
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  createdAt: string; // ISO
};
```

## Функциональные требования

| ID | Фича |
|----|------|
| B1 | Список багов (title, status, severity) |
| B2 | Create bug (title required, defaults status=new) |
| B3 | Detail / edit bug |
| B4 | Change status (workflow из модуля 1) |
| B5 | Filter: by status, by severity |
| B6 | Search by title substring |

### QA-связь

- Severity + Priority — отдельные поля (как в `templates/bug-report.md`)  
- Fixed ≠ Closed: UI должен позволять retest-flow (перевод fixed → closed вручную)  

## Структура

```text
projects/bug-tracker-web/
  src/lib/bugs.ts          # CRUD + filter + storage
  src/components/BugList.tsx
  src/components/BugForm.tsx
  src/components/BugFilters.tsx
  README.md
```

## Фазы

| Фаза | Включить |
|------|----------|
| scaffold | web app, localStorage, B1–B6 |
| +tests | unit bugs.ts + e2e smoke create→filter |
| +ci | GitHub Actions |
| +mobile | out of this skill — отдельный scope |

## Allowlist

`projects/bug-tracker-web/**` (+ `projects/bug-tracker-android/` если явно запрошено).

## DoD scaffold

1. Create + list + filter работают после reload (localStorage)  
2. Все статусы из модели доступны  
3. Severity/priority на форме  
4. README  
5. Чистая `src/lib/bugs.ts` для unit-тестов  

## Out of scope

- Auth, multi-user, attachments, Jira sync  
- Полноценный backend  
