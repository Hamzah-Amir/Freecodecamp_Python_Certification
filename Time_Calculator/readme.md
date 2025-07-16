# 🕒 Add Time Function

## Overview

This Python function `add_time(start, duration, starting_day=None)` adds a duration to a starting time and returns the resulting time in a human-readable format. It also handles AM/PM conversion, calculates the number of days passed, and updates the day of the week if provided.

---

## ✨ Features

- Adds hours and minutes to a start time.
- Handles 12-hour AM/PM format correctly.
- Calculates how many days later the result is.
- Optionally accepts a starting day and updates it accordingly.
- Formats results like:
  - `6:10 PM`
  - `2:02 PM, Monday`
  - `1:40 AM (next day)`
  - `7:42 AM (9 days later)`

---

## 🧠 Function Signature

```python
def add_time(start, duration, starting_day=None) -> str
