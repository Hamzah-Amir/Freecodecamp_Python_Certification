# 🧮 Polygon Area Calculator

This project implements a simple **Polygon Area Calculator** using **Object-Oriented Programming** in Python. It includes two classes:

- `Rectangle`
- `Square` (which inherits from `Rectangle`)

## 📦 Features

### `Rectangle` class

The `Rectangle` class provides the following functionality:

- **Initialization** with `width` and `height`
- `set_width(width)` – Update the width
- `set_height(height)` – Update the height
- `get_area()` – Returns the area of the rectangle
- `get_perimeter()` – Returns the perimeter
- `get_diagonal()` – Returns the diagonal length
- `get_picture()` – Returns a text picture made of `*` showing the shape (max size 50x50)
- `get_amount_inside(shape)` – Returns how many times another shape fits inside (no rotation)
- String representation: `"Rectangle(width=5, height=10)"`

### `Square` class

The `Square` class inherits from `Rectangle` and adds:

- **Initialization** with a single `side` value (used for both width and height)
- `set_side(side)` – Sets both width and height
- Overridden `set_width()` and `set_height()` to update both dimensions
- String representation: `"Square(side=9)"`

## 🧪 Example Usage

```python
rect = Rectangle(10, 5)
print(rect.get_area())              # 50
rect.set_height(3)
print(rect.get_perimeter())         # 26
print(rect)                         # Rectangle(width=10, height=3)
print(rect.get_picture())           # Prints rectangle with '*'

sq = Square(9)
print(sq.get_area())                # 81
sq.set_side(4)
print(sq.get_diagonal())            # 5.656854249...
print(sq)                           # Square(side=4)
print(sq.get_picture())             # Prints 4x4 square

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))   # 8
