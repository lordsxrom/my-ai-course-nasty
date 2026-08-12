# Test case template

## Заголовок

<!-- Кратко: что проверяем -->

## Тип

<!-- smoke / functional / negative / boundary / regression / exploratory / … -->

## Приоритетность

<!-- high / medium / low — насколько важно прогнать в этом билде -->

## Окружение

- App / screen:
- OS / browser:
- Build / commit:

## Предусловия

-

## Шаги

1. 
2. 
3. 

## Результат

-

## Дополнение

-

---

## Example: Tip Calculator (filled)

### Заголовок

Valid bill + 15% tip → корректный total

### Тип

positive / functional

### Приоритетность

high

### Окружение

- App / screen: Tip Calculator / main
- OS / browser: Chrome 128, macOS
- Build / commit: local / main

### Предусловия

- Приложение Tip Calculator открыто на главном экране
- Поля ввода пустые

### Шаги

1. Ввести в поле Bill значение `100`
2. Выбрать процент чаевых `15%`
3. Дождаться пересчёта итога

### Результат

- Сумма чаевых = `15.00`
- Итого (total) = `115.00`
- Нет ошибки / краша на экране

### Дополнение

- Happy-path: валидный ввод; приоритет high — базовый сценарий приложения.
