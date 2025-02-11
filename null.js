// Значение null представляет отсутствие какого-либо объектного значения. В JavaScript, null является примитивом, и в контексте логических операций, рассматривается как ложное (falsy)
// Значение null записывается литералом null. Оно является самостоятельным, а не свойством глобального объекта (как undefined). В API, null часто присутствует в местах где ожидается объект, но подходящего объекта нет.

let PersonAge = null;
console.log(PersonAge);

const HumanAge = null;
console.log(PersonAge);
