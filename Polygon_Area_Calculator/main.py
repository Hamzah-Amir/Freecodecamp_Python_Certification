class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return 2 * (self.width + self.height)

    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** 0.5

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        return ("*" * self.width + "\n") * self.height

    def get_amount_inside(self, shape):
        return (self.width // shape.width) * (self.height // shape.height)

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

    def set_side(self, side):
        self.width = side
        self.height = side

    def set_width(self, width):
        self.set_side(width)

    def set_height(self, height):
        self.set_side(height)

    def __str__(self):
        return f"Square(side={self.width})"


rect = Rectangle(10, 5)
print(rect.get_area())            # 50
rect.set_height(3)
print(rect.get_perimeter())       # 26
print(rect)                       # Rectangle(width=10, height=3)
print(rect.get_picture())         # Prints 3 lines of 10 stars

sq = Square(9)
print(sq.get_area())              # 81
sq.set_side(4)
print(sq.get_diagonal())          # 5.656...
print(sq)                         # Square(side=4)
print(sq.get_picture())           # 4x4 stars

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq)) # 8
