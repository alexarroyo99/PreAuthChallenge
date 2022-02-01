
def firts_sum(numbers, n):
    for i, number in enumerate(numbers):
        num = n-number
        if num not in numbers:
            continue
        else:
            return [numbers[i], num]


def main():
    input_data = input("Enter set values separted by commas: ")
    input_data_list = input_data.split(",")
    numbers = [int(x) for x in input_data_list]
    n = int(input("\nEnter a integer: "))
    print("\n")
    print(firts_sum(numbers, n))


if __name__ == "__main__":
    main()
