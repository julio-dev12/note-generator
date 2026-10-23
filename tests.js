function testIsEmpty() {
    console.assert(isEmpty("") === true, "Test failed: emty string");
    console.assert(isEmpty("   ") === true, "Test failed: spaces only");
    console.assert(
        isEmpty("Practice Device A") === false,
        "Test failed: non-empty value"
    );

    console.log("isEmpty tests completed.");
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