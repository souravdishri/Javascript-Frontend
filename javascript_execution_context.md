# Javascript Execution Context

## Runs in 2 phases:

## 1. Global Execution Context (this)
Note: Global scope is different for both 'node environment' and 'browser environment'

## 2. Functional Execution Context

## 3. Eval on Mongoose (It's an property of global object)

## How?
1. Memory Creation Phase:
2. Execution Phase

## Steps:
    1. Global Execution:
        (this)
    2. Memory Phase: 
        val1 = undefined
        val2 = undefined
        addnum = defination
        result1 = undefined
        result2 = undefined
    3. Execution Phase:
        val1 = 10
        val2 = 5
        addnum:
            (Again, memory creation phase and execution phase), (After done it will be deleted..)
            new variable emvironment + execution thread
        result1 = undefined
        result2 = undefined
        Then, it goes to Global execution phase


# Call Stack

+one()

Global execution phase
