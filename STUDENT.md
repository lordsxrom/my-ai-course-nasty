# Стартовая инструкция для студента

Ты проходишь курс в **двух местах**: читаешь задания отсюда (template), а **ответы и код** хранишь только у себя.

---

## Шаг 1. Создай свой workbook на GitHub

1. Открой https://github.com/lordsxrom/ai-course  
2. Нажми зелёную кнопку **Use this template** → **Create a new repository**  
3. Имя любое, например `my-ai-course` — главное, что репо **под твоим аккаунтом**  
4. Склонируй **свой** репо и открой папку в **Cursor**

```bash
git clone git@github.com:<твой-логин>/my-ai-course.git
cd my-ai-course
cursor .
```

Не делай домашку прямо в `lordsxrom/ai-course` и не открывай PR с ответами в репозиторий автора.

**Модуль = неделя:** в курсе это одно и то же; папки `weeks/01`, `weeks/02`, … — модули 1, 2, … Команда проверки: `проверь домашку недели N`.

---

## Шаг 2. С чего начать

| Если ты… | Открой |
|----------|--------|
| Только зашёл | [Неделя 1](weeks/01/README.md) → урок 1 |
| Закрыл модуль 1 | [Неделя 2](weeks/02/README.md) → урок 1 (Tip Calculator) |
| Нужна карта всего курса | [COURSE.md](COURSE.md) |

Ориентир по времени на модуль 1: **4–8 часов** (4 урока + checkpoint).

---

## Шаг 3. Куда класть ответы

Скопируй шаблон → заполни → сохрани **без** `.template` в имени:

```text
weeks/01/submissions/lesson-01.template.md  →  lesson-01.md
weeks/01/practice/…                         →  файлы практики
projects/web-tip-calculator/                →  код приложения (с недели 2)
```

| Пиши сюда | Не трогай |
|-----------|-----------|
| `weeks/WW/submissions/` | `weeks/WW/lessons/` (тексты уроков) |
| `weeks/WW/practice/` | `teacher/`, `author/` |
| `projects/` | чужой GitHub курса |
| **`student/rules`, `student/skills`** | stub'ы в `.cursor/` |

---

## Шаг 4. Как сдавать урок

1. Прочитай урок в `weeks/WW/lessons/`  
2. Выполни части с метками **HAND** / **AI** / **MIX** (в каждом уроке есть таблица)  
3. Закоммить и запушь в **свой** GitHub:

```bash
git add .
git commit -m "week1 lesson2: cursor controls"
git push
```

4. В чате Cursor:

```text
проверь домашку недели 1, урок 2
```

5. Если вердикт **Rework** — исправь только указанные дыры и сдай снова.

---

## Метки в домашке (важно)

| Метка | Ты делаешь | AI делает |
|-------|------------|-----------|
| **HAND** | Сам: теория, выводы, smoke-таблицы, git | Можно спросить «объясни», нельзя «напиши ответ за меня» |
| **AI** | Принимаешь diff, self-check | Agent создаёт файл/проект |
| **MIX** | Бриф и промпт руками | Agent генерирует тело; ты принимаешь |

Teacher может не засчитать, если AI-часть сделана руками или наоборот.

---

## Болванки приложений (с недели 2)

Не нужно каждый раз придумывать ТЗ с нуля. В курсе есть **scaffold skills** с полным описанием стека и фич:

```text
Используй skill scaffold-web-tip-calculator.
Фаза: scaffold.
Создай projects/web-tip-calculator/
```

Список: [teacher/skills/scaffold-apps/README.md](teacher/skills/scaffold-apps/README.md)

---

## Харнес: четыре слоя

| Слой | Папка | Тебе |
|------|-------|------|
| Entrypoint | `.cursor/` | stub'ы курса — **не твой** харнес |
| **Student** | **`student/`** | **сюда** rules/skills с уроков — portable |
| Teacher | `teacher/` | проверка ДЗ, scaffold apps |
| Author | `author/` | игнорируй (maintainer) |

Подробно: [docs/cursor-layout.md](docs/cursor-layout.md)

Личные харнесы **вне курса** (работа, другие стеки): `~/.cursor/skills/<domain>/` — отдельно от `student/`.

---

## Обновления курса

Когда автор выкладывает новые недели — подтяни изменения в свой workbook (см. [docs/github-workflow.md](docs/github-workflow.md#обновления-курса-у-студента); кратко: `git remote add upstream` + `git merge upstream/main`, если настроишь remote на curriculum).

---

## Нужна помощь?

- Опечатка в уроке → issue или PR **только** в файлы уроков, без своих `submissions/`  
- Застрял на Rework → читай список исправлений от Teacher, не проси «сделай за меня»

Удачи. Первый урок: [1.1 — DoD и язык агента](weeks/01/lessons/01-agent-language-and-dod.md).
