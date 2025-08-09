# Budget App

This project implements a `Category` class to track spending by category and visualize expenses with a text-based chart.

## Features

### ✅ Category Class
- `deposit(amount, description="")`: Adds a deposit to the ledger.
- `withdraw(amount, description="")`: Withdraws funds if enough balance is available.
- `transfer(amount, category)`: Transfers funds to another category with ledger logs on both ends.
- `get_balance()`: Returns the current balance.
- `check_funds(amount)`: Checks if there are enough funds for a withdrawal or transfer.
- `__str__()`: Nicely formats the ledger when printed.

### 📊 create_spend_chart(categories)
- Generates a bar chart showing percentage of spending per category.
- Based only on withdrawals (not deposits or transfers).
- Output is a vertical bar chart using `o` characters and aligned category names below.

## Example

```python
food = Category("Food")
clothing = Category("Clothing")
auto = Category("Auto")

food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant")
food.transfer(50, clothing)

print(food)
print(create_spend_chart([food, clothing, auto]))
