def main():
    inp = input("")
    arr = list(inp)
    score = 0
    characters = 0
    counter_of_groups = 0
    in_garbage = False
    skip = False
    for ch in arr:
        if skip:
            skip = False
        elif ch == '!':
            skip = True
        elif in_garbage:
            if ch == '>':
                in_garbage = False
            else:
                characters += 1
        elif ch == '<' and not in_garbage:
            in_garbage = True
        elif ch == '{':
            counter_of_groups += 1
        elif ch == '}':
            if counter_of_groups != 0:
                score += counter_of_groups
                counter_of_groups -= 1
    print("Score:", score)
    print("Characters:", characters)


main()
