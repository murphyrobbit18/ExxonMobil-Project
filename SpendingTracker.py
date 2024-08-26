import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("monthlyBudget.csv")

# Scatter plot with day against tip
plt.plot(data['Object Cost'])
plt.plot(data['Revenue After Expenditure'])

# Adding Title to the Plot
plt.title("Time Vs Currency Graph")

# Setting the X and Y labels
plt.xlabel('Day of the Month')
plt.ylabel('Currency')

plt.legend(["Currency Spent", 'Overall Currency'])
plt.show()