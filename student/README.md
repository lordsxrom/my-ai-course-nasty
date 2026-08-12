# Student harness — твой portable QA/AQA набор

Здесь растёт **твой** харнес на курсе: rules и skills для работы и автоматизации. Это **не** Teacher и **не** course entrypoint (`.cursor/`).

## Структура

```text
student/
  rules/       # стандарты: тесты, DoD, naming
  skills/      # write-unit-tests, run-and-fix, bug-to-test, …
  agents/      # позже (Builder / Tester)
  memory-bank/ # позже
```

Пока папки пустые — нормально. Первые файлы появятся, когда урок скажет: «создай rule/skill в `student/…`».

## Как пользоваться в Cursor

`student/` не auto-load. Варианты:

1. **`@student/skills/write-unit-tests/SKILL.md`** в чате  
2. Скопировать нужное в `.cursor/skills/` — если хочешь auto-discovery  
3. Скопировать в `projects/<app>/.cursor/` — для одного приложения  

## После курса

Перенеси в личный харнес:

```bash
cp -R student/skills/* ~/.cursor/skills/
```

Или держи отдельный git-репо и копируй в любой проект.

## Не класть сюда

| Нельзя | Куда |
|--------|------|
| `grade-homework`, scaffold-* | `teacher/` |
| Правки уроков, rubrics | `weeks/`, `author/` |
| Stub'ы course | `.cursor/` |

→ [docs/cursor-layout.md](../docs/cursor-layout.md)
