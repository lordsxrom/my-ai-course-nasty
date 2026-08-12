# COURSE_ONLY — не тащить в другие проекты

При экспорте **student harness** в `~/.cursor/` или другой репо — **не копируй**:

| Путь | Слой |
|------|------|
| `.cursor/rules/course-workspace.mdc` | Entrypoint |
| `.cursor/skills/grade-homework/` | Entrypoint stub |
| `.cursor/skills/scaffold-*/` | Entrypoint stub |
| `.cursor/COURSE_ONLY.md` | Meta |
| `.cursor/README.md` | Meta |
| **`teacher/`** целиком | Teacher |
| **`author/`** целиком | Author |

## Что экспортировать (Student)

| Копировать | Откуда |
|------------|--------|
| rules, skills, agents, memory-bank | **`student/`** |

Опционально: дубли в `.cursor/skills/` **только если** ты сам туда копировал student skills для auto-discovery — тогда копируй без путей из таблицы выше.

## Личные харнесы вне курса

Другие задачи (работа, другой стек) → отдельные каталоги в `~/.cursor/skills/<domain>/`, не смешивать с `student/` без префикса.

Схема: `docs/cursor-layout.md`.
