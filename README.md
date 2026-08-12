# AI Course — от ручного QA к автоматизации через Cursor

Практический курс для тестировщиков: учишься **управлять AI в Cursor** так же, как управляешь качеством — через ТЗ, приёмку и тесты. К финалу у тебя свой **харнес** (rules, skills, CI), на котором собираются и проверяются учебные приложения.

Цель курса — не стать сильным разработчиком, а уметь ставить задачи агенту, принимать результат и наращивать автоматизацию.

---

## Кому подходит

- Ручной QA / junior, который идёт в автоматизацию  
- Уже работаешь с Cursor, но хочешь систему, а не «магические промпты»  
- Готов делать домашки в **своём** GitHub и проходить проверку Teacher в Cursor  

---

## Как устроен репозиторий

Этот репо на GitHub — **учебник (curriculum)**. Здесь только задания, уроки и инструменты проверки.

| | Curriculum (этот репо) | Workbook (твой репо) |
|---|------------------------|----------------------|
| **Кто владелец** | Автор курса | Ты |
| **Что внутри** | Уроки, rubrics, шаблоны, Teacher | То же + **твои ответы**, код приложений, practice |
| **Как получить** | Template на GitHub | **Use this template** → свой репо |

Подробная схема: [docs/github-workflow.md](docs/github-workflow.md).

**Начать учиться:** [STUDENT.md](STUDENT.md)  
**Карта курса:** [COURSE.md](COURSE.md)

---

## Что уже опубликовано

| Модуль | Содержание | Статус |
|--------|------------|--------|
| **1** | Cursor, DoD, diff, STLC, баги, типы тестов, checkpoint | готов |
| **2** | Tip Calculator — scaffold, Vitest, CI, Playwright, student harness | готов |

**Сейчас иди сюда:** [Неделя 2](weeks/02/README.md) (после модуля 1)  
Если только зашёл — начни с [Недели 1](weeks/01/README.md).  
Модуль 3 — в разработке.

---

## Чем закончится курс (план)

За ~8 недель — разные учебные приложения (web, Android, iOS), black-box по Yango Motors, Appium, выпускной **Bug Tracker**. На каждом шаге — тест-кейсы, сьюты, нативные тесты, GitHub Actions.

| Платформа | Приложение |
|-----------|------------|
| Web | Tip Calculator → тесты + CI |
| Android | Water Tracker (Kotlin, Compose) |
| iOS | Countdown List (Swift, SwiftUI) |
| Black-box | Yango Motors |
| Выпускной | Bug Tracker |

---

## Проверка домашки

В Cursor, в **своём** workbook:

```text
проверь домашку недели 1, урок 3
проверь checkpoint недели 1
```

Работает локально через Teacher (`teacher/` + skills). Живого ревьюера нет — но rubric такой же, как у препода.

---

## Полезные ссылки

- [Старт студента](STUDENT.md)  
- [Раскладка харнесов: Student / Teacher / Author](docs/cursor-layout.md)  
- [Student harness (`student/`)](student/README.md)  
- [Шпаргалка промптов](docs/prompting.md) (заполняешь на checkpoint модуля 1)  
- [Приложения курса](projects/README.md)  
- [Scaffold skills — болванки приложений](teacher/skills/scaffold-apps/README.md)

---

Репозиторий-template: https://github.com/lordsxrom/ai-course
