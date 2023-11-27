
var x  = 0;

async function getString1() {
    // Simulate a time-consuming task with a Promise that resolves after 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    x++;
    return "Hello, world!"+x;
}

async function getString2() {
    // Simulate a time-consuming task with a Promise that resolves after 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    x++;
    return "Goodbye, world!"+x;
}