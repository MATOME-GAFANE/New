print("Welcome to BMI calculator")


height=float(input("Please enter your height in m: "))
weight=float(input("Please enter your weight in kg: "))

BMI=weight/(height*height)

round(BMI,4)

if(BMI<18.5):
    {
        print(f"You are underweight {BMI}.")
    }

if(BMI>18.5 and BMI < 25):
    {
        print(f"You have normal weight. {BMI}")
    }

if(BMI>25 and BMI <30):
    {
        print(f"You are overweight. {BMI}")
    }

if(BMI>30 and BMI <35):
    {
        print(f"You are obese. {BMI}")
    }

if(BMI>35):
    {
        print(f"You are obese.{BMI}")
    }

