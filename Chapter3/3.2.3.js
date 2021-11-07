function task1(callback) {
    console.log(`task1`);
    asyncOperation(() => {
        task2(callback);
    });
}

function task2(callback) {
    console.log(`task2`);
    asyncOperation(() => {
        task3(callback);
    });
}

function task3(callback) {
    console.log(`task3`);
    asyncOperation(() => {
        callback();
    });
}

task1(() => {
    console.log(`task1, 2 and 3 executed`);
})