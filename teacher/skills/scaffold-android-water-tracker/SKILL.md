---
name: scaffold-android-water-tracker
description: Генерирует учебный Water Tracker на Kotlin+Jetpack Compose в projects/android-water-tracker. Неделя 4. Фразы «scaffold water tracker android», «болванка android water».
---

# Scaffold — Android Water Tracker

Учебное приложение **не клон** Tip Calculator: трекер воды с дневной целью.

## Стек

| | |
|---|---|
| Язык | Kotlin |
| UI | Jetpack Compose (Material 3 minimal) |
| Min SDK | 26 |
| Build | Gradle Kotlin DSL |
| Тесты | JUnit + Compose UI tests (урок, не в scaffold-only) |

## Путь

`projects/android-water-tracker/`

## Функциональные требования MVP

### Экран одной Activity

| ID | Элемент | Поведение |
|----|---------|-----------|
| W1 | Daily goal (ml) | default 2000; editable 500…5000 |
| W2 | Progress today | сумма добавленного за «день» |
| W3 | Quick add buttons | +100, +250, +500 ml |
| W4 | Custom add | поле + кнопка Add |
| W5 | Progress bar | today / goal, cap 100% визуально |
| W6 | Reset day | обнулить today (confirm опционально) |

### Логика (вынести в domain/viewmodel-testable)

```kotlin
// data class DayProgress(goalMl, consumedMl)
// fun addWater(amountMl): validates amount > 0, amount <= 2000 per action
// fun progressRatio(): Float in 0f..1f
```

### Empty / edge (QA)

- consumed=0 → progress 0%  
- consumed >= goal → bar full, текст «Goal reached» или эквивалент  
- add 0 or negative → ошибка  

### Структура (целевая)

```text
projects/android-water-tracker/
  app/src/main/java/.../MainActivity.kt
  app/src/main/java/.../ui/WaterTrackerScreen.kt
  app/src/main/java/.../domain/WaterTrackerState.kt
  app/build.gradle.kts
  README.md
```

## Фазы

| Фаза | Включить |
|------|----------|
| scaffold | Compose UI, domain logic, README (как собрать в Android Studio) |
| +tests | JUnit unit + Compose UI smoke |

## Allowlist

`projects/android-water-tracker/**` only.

## DoD scaffold

1. Проект открывается и собирается в Android Studio  
2. Quick add обновляет progress  
3. Goal editable в заданных пределах  
4. Domain-логика не только в Composable  
5. README с шагами run  

## Out of scope

- Notifications, widgets, Room/DB, multi-day history  
- Wear OS  
