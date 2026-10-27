function testIsEmpty() {
    let allPassed = true;
    if (isEmpty("") !== true) {
        allPassed = false;
    }
    if (isEmpty("   ") !== true) {
        allPassed = false;
    }
    if (isEmpty("Practice Device A") !== false) {
        allPassed = false;
    }

    if (allPassed === true) {
        console.log("PASS: All isEmpty checks passed.");
    } else {
        console.log("FAIL: One or more isEmpty checks failed.");
    }
}

function testIsEmptyRejectsNull() {
    let errorWasThrown = false;

    try {
        isEmpty(null);
    } catch (error) {
        if (
            error instanceof TypeError &&
            error.message === "isEmpty() requires a string."
        ) {
            errorWasThrown = true;
        }
    }

    console.assert(
        errorWasThrown === true,
        "Test failed: null should throw the expected TypeError"
    );

    console.log("Null input test completed.");
}

function testIsEmptyRejectsNumber() {
    let errorWasThrown = false;

    try {
        isEmpty(123);
    } catch (error) {
        if (
            error instanceof TypeError &&
            error.message === "isEmpty() requires a string."
        ) {
            errorWasThrown = true;
        }
    }

    console.assert(
        errorWasThrown === true,
        "Test failed: number should throw the expected TypeError"
    );

    console.log("Number input test completed.");
}

function runAllTests() {
    console.log("Starting all tests...");

    testIsEmpty();
    testIsEmptyRejectsNull();
    testIsEmptyRejectsNumber();

    console.log("All tests finished.");
}

