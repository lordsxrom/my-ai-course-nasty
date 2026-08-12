# Scaffold skills — болванки приложений курса

Skills для **быстрой генерации учебных приложений** по фиксированному ТЗ. Живут в `teacher/skills/scaffold-*` — часть curriculum, не portable student harness.

Студент вызывает через stub в `.cursor/skills/` (COURSE_ONLY) или фразой в чате.

## Каталог

| Skill | Неделя | Путь проекта | Стек |
|-------|--------|--------------|------|
| [scaffold-web-tip-calculator](scaffold-web-tip-calculator/SKILL.md) | 2 | `projects/web-tip-calculator/` | Vite, React, TS |
| [scaffold-android-water-tracker](scaffold-android-water-tracker/SKILL.md) | 4 | `projects/android-water-tracker/` | Kotlin, Compose |
| [scaffold-ios-countdown-list](scaffold-ios-countdown-list/SKILL.md) | 5 | `projects/ios-countdown-list/` | Swift, SwiftUI |
| [scaffold-bug-tracker](scaffold-bug-tracker/SKILL.md) | 8 | `projects/bug-tracker-web/` (+ mobile опционально) | React TS + … |

Spec в curriculum дублирует ключевое: `weeks/WW/spec/` где есть.

## Как вызывать

```text
Используй skill scaffold-web-tip-calculator.
Создай/обнови проект по DoD skill. Allowlist только projects/web-tip-calculator/
```

Или: `@` skill + `@weeks/02/spec/tip-calculator.md`.

## Правила для Agent

1. Читай **полный** skill в `teacher/skills/scaffold-*/SKILL.md` — stub в `.cursor` только роутит.  
2. Не смешивай приложения (не Tip Calculator в android-папке).  
3. Тесты/CI — только если skill или урок явно разрешает фазу.  
4. После scaffold — студент принимает diff и гоняет smoke из урока.

## Добавление нового scaffold

1. `teacher/skills/scaffold-<app>/SKILL.md` — полное ТЗ.  
2. Stub `.cursor/skills/scaffold-<app>/SKILL.md`.  
3. Запись в этот каталог + `weeks/WW/spec/` при необходимости.  
4. Строка в `.cursor/COURSE_ONLY.md`.
