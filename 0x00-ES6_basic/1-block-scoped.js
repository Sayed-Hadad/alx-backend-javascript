export default function taskBlock(trueOrFalse) {
    let task = false;
    let  task2 = true;

    if (trueOrFalse) {
        let task = true;  // Just assign, no redeclaration
        let task2 = false; // Just assign, no redeclaration
    }

    return [task, task2];
}
