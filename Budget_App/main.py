class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
    
    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description":description})
    
    def get_balance(self):
        balance = 0
        for item in self.ledger:
            print(item["amount"])
            balance += item["amount"]
        
        return balance

    def check_funds(self, amount):
        if self.get_balance() >= amount:
            return True
        else:
            return False

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount":-amount, "description":description})
            return True
        else:
            return False
    
    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False
    
    def __str__(self):
        title = self.name.center(30,"*")
        lines = ""
        for transaction in self.ledger:
            desc = transaction["description"][:23]
            amt = f'{transaction["amount"]:.2f}'[:7]
            lines += f"{desc:<23}{amt:>7}\n"
        
        total = f"Total: {self.get_balance():.2f}"
        return title +"\n"+ lines + total
    


    
def create_spend_chart(categories):
    chart = "Percentage spent by category\n"
    spends = []
    names = []

    # Calculate total spend and spend per category
    total = 0
    for category in categories:
        spend = 0
        for item in category.ledger:
            if item['amount'] < 0:
                spend += -item['amount']
        spends.append(spend)
        names.append(category.name)
        total += spend

    # Calculate percentage spent
    percentages = [(int((spend / total) * 10) * 10) for spend in spends]

    # Create chart lines
    for i in range(100, -1, -10):
        chart += f"{i:>3}|"
        for percent in percentages:
            chart += " o " if percent >= i else "   "
        chart += " \n"

    # Bottom line
    chart += "    " + "-" * (3 * len(categories) + 1) + "\n"

    # Category names vertically
    max_len = max(len(name) for name in names)
    for i in range(max_len):
        chart += "    "
        for name in names:
            chart += f" {name[i] if i < len(name) else ' '} "
        chart += " \n"

    return chart.rstrip("\n")
