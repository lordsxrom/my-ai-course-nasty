---
name: scaffold-ios-countdown-list
description: Генерирует учебный Countdown List на Swift+SwiftUI в projects/ios-countdown-list. Неделя 5. Фразы «scaffold countdown ios», «болванка ios countdown».
---

# Scaffold — iOS Countdown List

Список событий с датой и сортировкой по «дней до».

## Стек

| | |
|---|---|
| Язык | Swift 5.9+ |
| UI | SwiftUI |
| Min iOS | 17 (или 16 — зафиксируй в README) |
| Тесты | XCTest / XCUITest (урок, не scaffold-only) |

## Путь

`projects/ios-countdown-list/`

## Функциональные требования MVP

### Экраны

| Экран | Содержимое |
|-------|------------|
| List | название события, дата, «N days» (или «Today» / «Past») |
| Add/Edit | title (non-empty), date picker (future allowed), Save |
| Detail (опционально) | можно объединить с Edit |

### Модель

```swift
struct CountdownEvent: Identifiable {
    let id: UUID
    var title: String
    var date: Date
}
// func daysUntil(from: Date = .now) -> Int
```

### Сортировка

- Ascending по daysUntil (ближайшие сверху)  
- Past events — внизу или секция «Past»  

### Структура (целевая)

```text
projects/ios-countdown-list/
  CountdownListApp.swift
  Views/EventListView.swift
  Views/EventFormView.swift
  Models/CountdownEvent.swift
  README.md
```

In-memory storage достаточно для scaffold ( массив @State / ObservableObject ).

## Фазы

| Фаза | Включить |
|------|----------|
| scaffold | SwiftUI app, CRUD in-memory, sort |
| +tests | XCTest на daysUntil; XCUITest add event |

## Allowlist

`projects/ios-countdown-list/**` only.

## DoD scaffold

1. Xcode project/build без ошибок  
2. Add event появляется в списке с корректным N days  
3. Sort работает  
4. Empty title blocked  
5. README: open in Xcode, run  

## Out of scope

- iCloud, notifications, widgets  
- Core Data  
