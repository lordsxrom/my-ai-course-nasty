# Инструкция для автора curriculum

Репозиторий **lordsxrom/ai-course** — учебник. Студенческие ответы сюда **не** попадают.

---

## Перед каждым push

```bash
git status
```

Убедись, что нет:

- `weeks/*/submissions/lesson-*.md` (только `*.template.md`)
- `weeks/*/submissions/checkpoint.md`
- содержимого `weeks/*/practice/` (кроме README)
- кода в `projects/*` (кроме README)

`.gitignore` страхует, но лучше глазами.

---

## Публикация

```bash
git add -A
git commit -m "…"
git push origin main
```

Remote лучше через SSH: `git@github.com:lordsxrom/ai-course.git`

Template для студентов:

```bash
gh repo edit --template
```

---

## Что отдавать студентам

1. Ссылка на репо: https://github.com/lordsxrom/ai-course  
2. Файл [STUDENT.md](STUDENT.md) — «Use this template»  
3. Точка входа: [README.md](README.md) или [weeks/01](weeks/01)

---

## Как самому проходить курс

| Папка | Назначение |
|-------|------------|
| `ai-course` | curriculum, правки уроков, **`author/`** |
| `ai-course-work` | workbook из template, **`student/`**, домашки |

Author harness (`author/`) — только в curriculum-clone maintainer'а.

---

Подробнее: [docs/github-workflow.md](docs/github-workflow.md) · [docs/cursor-layout.md](docs/cursor-layout.md)
