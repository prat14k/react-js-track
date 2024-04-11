let counter = 0;

export default function autoIncrementingId(prefix='id') {
    counter++;
    return `${prefix}-${counter}`;
}