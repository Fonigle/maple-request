export default function removeItem<T>(array: Array<T>, item: any) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            break;
        }
    }
}
