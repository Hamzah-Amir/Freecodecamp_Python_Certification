import copy
import random

class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for color, count in kwargs.items():
            self.contents.extend([color] * count)

    def draw(self, num_balls_drawn):
        if num_balls_drawn >= len(self.contents):
            drawn = self.contents.copy()
            self.contents.clear()
            return drawn
        drawn = random.sample(self.contents, num_balls_drawn)
        for ball in drawn:
            self.contents.remove(ball)
        return drawn


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    success_count = 0

    for _ in range(num_experiments):
        test_hat = copy.deepcopy(hat)
        drawn = test_hat.draw(num_balls_drawn)

        drawn_counts = {}
        for color in drawn:
            drawn_counts[color] = drawn_counts.get(color, 0) + 1

        success = True
        for color, expected_count in expected_balls.items():
            if drawn_counts.get(color, 0) < expected_count:
                success = False
                break

        if success:
            success_count += 1

    return success_count / num_experiments


# Example usage
hat = Hat(black=6, red=4, green=3)
probability = experiment(
    hat=hat,
    expected_balls={'red': 2, 'green': 1},
    num_balls_drawn=5,
    num_experiments=2000
)
print(probability)
