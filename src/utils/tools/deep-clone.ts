/**
 * 深拷贝
 *
 * @template T
 * @param {T} obj
 * @returns {T}
 */
function deepClone<T>(obj: T): T {
    if (obj == null || typeof obj != 'object') return obj;
    else {
        if (obj instanceof Date) {
            let copy = new Date();
            copy.setTime(obj.getTime());
            return <T>(<unknown>copy);
        }

        if (obj instanceof Array) {
            var len = obj.length;
            let copy = new Array<T>();
            for (var i = 0; i < len; ++i) {
                copy[i] = deepClone(obj[i]);
            }
            return <T>(<unknown>copy);
        }

        if (obj instanceof Object) {
            let copy: T = <T>{};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = <T[Extract<keyof T, string>]>deepClone(obj[attr]);
            }
            return copy;
        }
    }

    throw new Error('Unable to copy this object');
}

export default deepClone;
