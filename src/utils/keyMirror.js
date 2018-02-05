/**
 * 根据对象的key，生成key与value相同的对象
 * @param obj  需要被处理的对象
 * @param prefix  生成对象的value的前缀
 * @param suffix  生成对象的value的后缀
 * @returns {Object}  处理后的对象
 */
export default function keyMirror(obj, prefix, suffix) {
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  const ret = {};
  Object.keys(obj)
    .forEach((key) => {
      ret[key] = `${prefix || ''}${key}${suffix || ''}`;
    });
  return ret;
}
