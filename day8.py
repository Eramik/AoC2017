import re

def main():
    registry = {}
    log = []
    while True:
        instruction = input()

        if instruction == '':
            print("Max:", max(registry.values()))
            print("Max ever held:", max(log))
            continue

        key = re.search('^.+? ', instruction).group(0)[0:-1]
        operation = re.search('(inc)|(dec)', instruction).group(0)
        operation_value = int(re.search('-?\d+? if', instruction).group(0)[0:-3])
        if_key = re.search('if .+? ', instruction).group(0)[3:-1]
        if_operation = re.search('(>=)|(<=)|(==)|(!=)|>|<', instruction).group(0)
        if_value = int(re.search('-?\d+?$', instruction).group(0))

        if_key_value = getRegistryValue(registry, if_key)
        if if_operation == '>':
            if_is_true = if_key_value > if_value
        elif if_operation == '<':
            if_is_true = if_key_value < if_value
        elif if_operation == '>=':
            if_is_true = if_key_value >= if_value
        elif if_operation == '<=':
            if_is_true = if_key_value <= if_value
        elif if_operation == '==':
            if_is_true = if_key_value == if_value
        elif if_operation == '!=':
            if_is_true = if_key_value != if_value
        else:
            raise ValueError('Unexpected if operation')

        if not if_is_true:
            continue

        value = getRegistryValue(registry, key)
        if operation == 'dec':
            registry[key] = value - operation_value
        elif operation == 'inc':
            registry[key] = value + operation_value
        else:
            raise ValueError('Unexpected operation. "inc" or "dec" expected')
        log.append(registry[key])

def getRegistryValue(registry, key):
    try:
        value = registry[key]
    except KeyError:
        registry[key] = 0
        value = 0
    return value

main()
