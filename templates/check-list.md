# Smoke checklist template

| Field | Value |
|-------|-------|
| **App / screen** | |
| **Build / commit** | |
| **Environment** | |
| **Tester** | |
| **Date** | |

## Checklist

| № | Пункт | Актуальность | Результат |
|---|-------|--------------|-----------|
| 1 | | yes / no / n/a | pass / fail / blocked / skip |
| 2 | | yes / no / n/a | pass / fail / blocked / skip |
| 3 | | yes / no / n/a | pass / fail / blocked / skip |
| 4 | | yes / no / n/a | pass / fail / blocked / skip |
| 5 | | yes / no / n/a | pass / fail / blocked / skip |
| 6 | | yes / no / n/a | pass / fail / blocked / skip |
| 7 | | yes / no / n/a | pass / fail / blocked / skip |
| 8 | | yes / no / n/a | pass / fail / blocked / skip |
| 9 | | yes / no / n/a | pass / fail / blocked / skip |
| 10 | | yes / no / n/a | pass / fail / blocked / skip |

## Notes

-

---

## Example: Tip Calculator (filled)

| Field | Value |
|-------|-------|
| **App / screen** | Tip Calculator / main |
| **Build / commit** | local / main@abc1234 |
| **Environment** | Chrome 128, macOS |
| **Tester** | QA |
| **Date** | 2026-08-12 |

### Checklist

| № | Пункт | Актуальность | Результат |
|---|-------|--------------|-----------|
| 1 | Открывается главная страница Tip Calculator без ошибки | yes | pass |
| 2 | Поле суммы (bill) принимает положительное число | yes | pass |
| 3 | Можно выбрать процент чаевых (например 10 / 15 / 20) | yes | pass |
| 4 | Отображается сумма чаевых | yes | pass |
| 5 | Отображается итоговая сумма (bill + tip) | yes | pass |
| 6 | Пересчёт работает после смены процента чаевых | yes | pass |
| 7 | [NEG] Пустая сумма: нет краша, итог не считается как валидный | yes | pass |
| 8 | [NEG] Отрицательная сумма отклоняется / не даёт ложный итог | yes | pass |
| 9 | [NEG] Нечисловой ввод (буквы) не ломает экран и не даёт NaN в UI | yes | pass |
| 10 | [NEG] Процент чаевых вне допустимого диапазона не применяется | yes | pass |

### Notes

- Всего 10 проверок; негативных (NEG): 4 из 10 = 40% (≥30%).

---

### Reminder

- **Актуальность** — нужен ли пункт в этом прогоне (`yes` / `no` / `n/a`).
- **Результат** — итог проверки (`pass` / `fail` / `blocked` / `skip`).
- **DoD чек-листа:** ≥10 пунктов; ≥30% негативных.
