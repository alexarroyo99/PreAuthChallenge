def firts_sum(my_set, n):
    set_numbers = "There are no numbers that sums n"
    for x in my_set:
        for y in my_set:
            if x == y:
                continue
            if x + y == n:
                set_numbers = {x, y}
                return set_numbers
    return set_numbers


def main():
    input_data = input("Enter set values separted by commas: ")
    input_data_list = input_data.split(",")
    my_set = {int(x) for x in input_data_list}
    n = int(input("\nEnter a integer: "))
    print("\n")
    print(firts_sum(my_set, n))


if __name__ == "__main__":
    main()
