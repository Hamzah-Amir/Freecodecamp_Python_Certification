# Arithmetic Formatter

A Python function that arranges simple arithmetic problems vertically and side-by-side.  
Designed as a beginner-friendly project to practice string manipulation and formatting.

## Features

- Supports addition (`+`) and subtraction (`-`) problems only  
- Validates input for operator correctness, digit-only operands, and operand length (max 4 digits)  
- Limits to maximum 5 problems  
- Arranges problems with proper spacing and alignment  
- Optional display of calculated results  

## Usage

```python
from arithmetic_formatter import arithmetic_formatter

problems = ["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]

# Without answers
print(arithmetic_formatter(problems))

# With answers
print(arithmetic_formatter(problems, True))
# Arithmetic Formatter

A Python function that arranges simple arithmetic problems vertically and side-by-side.  
Designed as a beginner-friendly project to practice string manipulation and formatting.

## Features

- Supports addition (`+`) and subtraction (`-`) problems only  
- Validates input for operator correctness, digit-only operands, and operand length (max 4 digits)  
- Limits to maximum 5 problems  
- Arranges problems with proper spacing and alignment  
- Optional display of calculated results  

## Usage

```python
from arithmetic_formatter import arithmetic_formatter

problems = ["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]

# Without answers
print(arithmetic_formatter(problems))

# With answers
print(arithmetic_formatter(problems, True))
    