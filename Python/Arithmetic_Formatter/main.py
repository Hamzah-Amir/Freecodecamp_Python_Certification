

def arithmetic_formatter(problems,display_answer=False):
    if len(problems) >5:
        return("Too many Problems")
    top_line = []
    bottom_line = []
    dash_line = []
    if display_answer == True:
        result_line = []
    for problem in problems:
        parts = problem.split()
        operand1 = parts[0]
        operator = parts[1]
        operand2 = parts[2]

        if operator not in ("+", "-"):
            return("Invalid Input operator")
        if not operand1.isdigit() or not operand2.isdigit():
            return("Invalid Input")
        if len(operand1) > 4  or len(operand2) > 4:
            return("Too many numbers")
        
        width = max(len(operand1), len(operand2)) + 2
        top_line.append(operand1.rjust(width))
        bottom_line.append(operator + operand2.rjust(width-1))
        dash_line.append("-"*width)

        if display_answer == True:
            if operator == '+':
                result = int(operand1) + int(operand2)
            else:
                result = int(operand1) - int(operand2)
            result = str(result).rjust(width)
            result_line.append(result) 
    
    top = "    ".join(top_line)
    bottom = "    ".join(bottom_line)
    dash = "    ".join(dash_line)
    if display_answer == True:
        results = "    ".join(result_line)
        return top + "\n" + bottom + "\n" + dash +"\n" + results
    else:
        return top + "\n" + bottom + "\n" + dash
    
print(arithmetic_formatter(["354 + 125", "123 - 25", "455 + 550"]) )
print("With result")
print(arithmetic_formatter(["354 + 125", "123 - 25", "455 + 550"], True) )