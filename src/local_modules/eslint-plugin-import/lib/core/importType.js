'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports.












isAbsolute = isAbsolute;exports.




isBuiltIn = isBuiltIn;exports.

























isExternalModule = isExternalModule;exports.




isExternalModuleMain = isExternalModuleMain;exports.




isScoped = isScoped;exports.




isScopedMain = isScopedMain;exports.


































isScopedModule = isScopedModule;exports.default =



resolveImportType;var _core = require('resolve/lib/core');var _core2 = _interopRequireDefault(_core);var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function baseModule(name) {if (isScoped(name)) {var _name$split = name.split('/'),_name$split2 = _slicedToArray(_name$split, 2);const scope = _name$split2[0],pkg = _name$split2[1];return `${scope}/${pkg}`;}var _name$split3 = name.split('/'),_name$split4 = _slicedToArray(_name$split3, 1);const pkg = _name$split4[0];return pkg;}function isAbsolute(name) {return name && name.startsWith('/');} // path is defined only when a resolver resolves to a non-standard path
function isBuiltIn(name, settings, path) {if (path || !name) return false;const base = baseModule(name);const extras = settings && settings['import/core-modules'] || [];return _core2.default[base] || extras.indexOf(base) > -1;}function isExternalPath(path, name, settings) {const folders = settings && settings['import/external-module-folders'] || ['node_modules'];return !path || folders.some(folder => isSubpath(folder, path));}function isSubpath(subpath, path) {const normPath = path.replace(/\\/g, '/');const normSubpath = subpath.replace(/\\/g, '/').replace(/\/$/, '');if (normSubpath.length === 0) {return false;}const left = normPath.indexOf(normSubpath);const right = left + normSubpath.length;return left !== -1 && (left === 0 || normSubpath[0] !== '/' && normPath[left - 1] === '/') && (right >= normPath.length || normPath[right] === '/');}const externalModuleRegExp = /^\w/;function isExternalModule(name, settings, path) {return externalModuleRegExp.test(name) && isExternalPath(path, name, settings);}const externalModuleMainRegExp = /^[\w]((?!\/).)*$/;function isExternalModuleMain(name, settings, path) {return externalModuleMainRegExp.test(name) && isExternalPath(path, name, settings);}const scopedRegExp = /^@[^/]*\/?[^/]+/;function isScoped(name) {return name && scopedRegExp.test(name);}const scopedMainRegExp = /^@[^/]+\/?[^/]+$/;function isScopedMain(name) {return name && scopedMainRegExp.test(name);}function isInternalModule(name, settings, path) {const internalScope = settings && settings['import/internal-regex'];const matchesScopedOrExternalRegExp = scopedRegExp.test(name) || externalModuleRegExp.test(name);return matchesScopedOrExternalRegExp && (internalScope && new RegExp(internalScope).test(name) || !isExternalPath(path, name, settings));}function isRelativeToParent(name) {return (/^\.\.$|^\.\.[\\/]/.test(name));}const indexFiles = ['.', './', './index', './index.js'];function isIndex(name) {return indexFiles.indexOf(name) !== -1;}function isRelativeToSibling(name) {return (/^\.[\\/]/.test(name));}function typeTest(name, settings, path) {if (isAbsolute(name, settings, path)) {return 'absolute';}if (isBuiltIn(name, settings, path)) {return 'builtin';}if (isInternalModule(name, settings, path)) {return 'internal';}if (isExternalModule(name, settings, path)) {return 'external';}if (isScoped(name, settings, path)) {return 'external';}if (isRelativeToParent(name, settings, path)) {return 'parent';}if (isIndex(name, settings, path)) {return 'index';}if (isRelativeToSibling(name, settings, path)) {return 'sibling';}return 'unknown';}function isScopedModule(name) {return name.indexOf('@') === 0;}function resolveImportType(name, context) {return typeTest(name, context.settings, (0, _resolve2.default)(name, context));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2ltcG9ydFR5cGUuanMiXSwibmFtZXMiOlsiaXNBYnNvbHV0ZSIsImlzQnVpbHRJbiIsImlzRXh0ZXJuYWxNb2R1bGUiLCJpc0V4dGVybmFsTW9kdWxlTWFpbiIsImlzU2NvcGVkIiwiaXNTY29wZWRNYWluIiwiaXNTY29wZWRNb2R1bGUiLCJyZXNvbHZlSW1wb3J0VHlwZSIsImJhc2VNb2R1bGUiLCJuYW1lIiwic3BsaXQiLCJzY29wZSIsInBrZyIsInN0YXJ0c1dpdGgiLCJzZXR0aW5ncyIsInBhdGgiLCJiYXNlIiwiZXh0cmFzIiwiY29yZU1vZHVsZXMiLCJpbmRleE9mIiwiaXNFeHRlcm5hbFBhdGgiLCJmb2xkZXJzIiwic29tZSIsImZvbGRlciIsImlzU3VicGF0aCIsInN1YnBhdGgiLCJub3JtUGF0aCIsInJlcGxhY2UiLCJub3JtU3VicGF0aCIsImxlbmd0aCIsImxlZnQiLCJyaWdodCIsImV4dGVybmFsTW9kdWxlUmVnRXhwIiwidGVzdCIsImV4dGVybmFsTW9kdWxlTWFpblJlZ0V4cCIsInNjb3BlZFJlZ0V4cCIsInNjb3BlZE1haW5SZWdFeHAiLCJpc0ludGVybmFsTW9kdWxlIiwiaW50ZXJuYWxTY29wZSIsIm1hdGNoZXNTY29wZWRPckV4dGVybmFsUmVnRXhwIiwiUmVnRXhwIiwiaXNSZWxhdGl2ZVRvUGFyZW50IiwiaW5kZXhGaWxlcyIsImlzSW5kZXgiLCJpc1JlbGF0aXZlVG9TaWJsaW5nIiwidHlwZVRlc3QiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYWdCQSxVLEdBQUFBLFU7Ozs7O0FBS0FDLFMsR0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkFDLGdCLEdBQUFBLGdCOzs7OztBQUtBQyxvQixHQUFBQSxvQjs7Ozs7QUFLQUMsUSxHQUFBQSxROzs7OztBQUtBQyxZLEdBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBQyxjLEdB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ZCxDQUFqQyxDQUFQO0FBQ0QiLCJmaWxlIjoiaW1wb3J0VHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JlTW9kdWxlcyBmcm9tICdyZXNvbHZlL2xpYi9jb3JlJ1xuXG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnXG5cbmZ1bmN0aW9uIGJhc2VNb2R1bGUobmFtZSkge1xuICBpZiAoaXNTY29wZWQobmFtZSkpIHtcbiAgICBjb25zdCBbc2NvcGUsIHBrZ10gPSBuYW1lLnNwbGl0KCcvJylcbiAgICByZXR1cm4gYCR7c2NvcGV9LyR7cGtnfWBcbiAgfVxuICBjb25zdCBbcGtnXSA9IG5hbWUuc3BsaXQoJy8nKVxuICByZXR1cm4gcGtnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fic29sdXRlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgJiYgbmFtZS5zdGFydHNXaXRoKCcvJylcbn1cblxuLy8gcGF0aCBpcyBkZWZpbmVkIG9ubHkgd2hlbiBhIHJlc29sdmVyIHJlc29sdmVzIHRvIGEgbm9uLXN0YW5kYXJkIHBhdGhcbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWx0SW4obmFtZSwgc2V0dGluZ3MsIHBhdGgpIHtcbiAgaWYgKHBhdGggfHwgIW5hbWUpIHJldHVybiBmYWxzZVxuICBjb25zdCBiYXNlID0gYmFzZU1vZHVsZShuYW1lKVxuICBjb25zdCBleHRyYXMgPSAoc2V0dGluZ3MgJiYgc2V0dGluZ3NbJ2ltcG9ydC9jb3JlLW1vZHVsZXMnXSkgfHwgW11cbiAgcmV0dXJuIGNvcmVNb2R1bGVzW2Jhc2VdIHx8IGV4dHJhcy5pbmRleE9mKGJhc2UpID4gLTFcbn1cblxuZnVuY3Rpb24gaXNFeHRlcm5hbFBhdGgocGF0aCwgbmFtZSwgc2V0dGluZ3MpIHtcbiAgY29uc3QgZm9sZGVycyA9IChzZXR0aW5ncyAmJiBzZXR0aW5nc1snaW1wb3J0L2V4dGVybmFsLW1vZHVsZS1mb2xkZXJzJ10pIHx8IFsnbm9kZV9tb2R1bGVzJ11cbiAgcmV0dXJuICFwYXRoIHx8IGZvbGRlcnMuc29tZShmb2xkZXIgPT4gaXNTdWJwYXRoKGZvbGRlciwgcGF0aCkpXG59XG5cbmZ1bmN0aW9uIGlzU3VicGF0aChzdWJwYXRoLCBwYXRoKSB7XG4gIGNvbnN0IG5vcm1QYXRoID0gcGF0aC5yZXBsYWNlKC9cXFxcL2csICcvJylcbiAgY29uc3Qgbm9ybVN1YnBhdGggPSBzdWJwYXRoLnJlcGxhY2UoL1xcXFwvZywgJy8nKS5yZXBsYWNlKC9cXC8kLywgJycpXG4gIGlmIChub3JtU3VicGF0aC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCBsZWZ0ID0gbm9ybVBhdGguaW5kZXhPZihub3JtU3VicGF0aClcbiAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgbm9ybVN1YnBhdGgubGVuZ3RoXG4gIHJldHVybiBsZWZ0ICE9PSAtMSAmJlxuICAgICAgICAobGVmdCA9PT0gMCB8fCBub3JtU3VicGF0aFswXSAhPT0gJy8nICYmIG5vcm1QYXRoW2xlZnQgLSAxXSA9PT0gJy8nKSAmJlxuICAgICAgICAocmlnaHQgPj0gbm9ybVBhdGgubGVuZ3RoIHx8IG5vcm1QYXRoW3JpZ2h0XSA9PT0gJy8nKVxufVxuXG5jb25zdCBleHRlcm5hbE1vZHVsZVJlZ0V4cCA9IC9eXFx3L1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZXJuYWxNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgpIHtcbiAgcmV0dXJuIGV4dGVybmFsTW9kdWxlUmVnRXhwLnRlc3QobmFtZSkgJiYgaXNFeHRlcm5hbFBhdGgocGF0aCwgbmFtZSwgc2V0dGluZ3MpXG59XG5cbmNvbnN0IGV4dGVybmFsTW9kdWxlTWFpblJlZ0V4cCA9IC9eW1xcd10oKD8hXFwvKS4pKiQvXG5leHBvcnQgZnVuY3Rpb24gaXNFeHRlcm5hbE1vZHVsZU1haW4obmFtZSwgc2V0dGluZ3MsIHBhdGgpIHtcbiAgcmV0dXJuIGV4dGVybmFsTW9kdWxlTWFpblJlZ0V4cC50ZXN0KG5hbWUpICYmIGlzRXh0ZXJuYWxQYXRoKHBhdGgsIG5hbWUsIHNldHRpbmdzKVxufVxuXG5jb25zdCBzY29wZWRSZWdFeHAgPSAvXkBbXi9dKlxcLz9bXi9dKy9cbmV4cG9ydCBmdW5jdGlvbiBpc1Njb3BlZChuYW1lKSB7XG4gIHJldHVybiBuYW1lICYmIHNjb3BlZFJlZ0V4cC50ZXN0KG5hbWUpXG59XG5cbmNvbnN0IHNjb3BlZE1haW5SZWdFeHAgPSAvXkBbXi9dK1xcLz9bXi9dKyQvXG5leHBvcnQgZnVuY3Rpb24gaXNTY29wZWRNYWluKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgJiYgc2NvcGVkTWFpblJlZ0V4cC50ZXN0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJuYWxNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgpIHtcbiAgY29uc3QgaW50ZXJuYWxTY29wZSA9IChzZXR0aW5ncyAmJiBzZXR0aW5nc1snaW1wb3J0L2ludGVybmFsLXJlZ2V4J10pXG4gIGNvbnN0IG1hdGNoZXNTY29wZWRPckV4dGVybmFsUmVnRXhwID0gc2NvcGVkUmVnRXhwLnRlc3QobmFtZSkgfHwgZXh0ZXJuYWxNb2R1bGVSZWdFeHAudGVzdChuYW1lKVxuICByZXR1cm4gKG1hdGNoZXNTY29wZWRPckV4dGVybmFsUmVnRXhwICYmIChpbnRlcm5hbFNjb3BlICYmIG5ldyBSZWdFeHAoaW50ZXJuYWxTY29wZSkudGVzdChuYW1lKSB8fCAhaXNFeHRlcm5hbFBhdGgocGF0aCwgbmFtZSwgc2V0dGluZ3MpKSlcbn1cblxuZnVuY3Rpb24gaXNSZWxhdGl2ZVRvUGFyZW50KG5hbWUpIHtcbiAgcmV0dXJuL15cXC5cXC4kfF5cXC5cXC5bXFxcXC9dLy50ZXN0KG5hbWUpXG59XG5cbmNvbnN0IGluZGV4RmlsZXMgPSBbJy4nLCAnLi8nLCAnLi9pbmRleCcsICcuL2luZGV4LmpzJ11cbmZ1bmN0aW9uIGlzSW5kZXgobmFtZSkge1xuICByZXR1cm4gaW5kZXhGaWxlcy5pbmRleE9mKG5hbWUpICE9PSAtMVxufVxuXG5mdW5jdGlvbiBpc1JlbGF0aXZlVG9TaWJsaW5nKG5hbWUpIHtcbiAgcmV0dXJuIC9eXFwuW1xcXFwvXS8udGVzdChuYW1lKVxufVxuXG5mdW5jdGlvbiB0eXBlVGVzdChuYW1lLCBzZXR0aW5ncywgcGF0aCkge1xuICBpZiAoaXNBYnNvbHV0ZShuYW1lLCBzZXR0aW5ncywgcGF0aCkpIHsgcmV0dXJuICdhYnNvbHV0ZScgfVxuICBpZiAoaXNCdWlsdEluKG5hbWUsIHNldHRpbmdzLCBwYXRoKSkgeyByZXR1cm4gJ2J1aWx0aW4nIH1cbiAgaWYgKGlzSW50ZXJuYWxNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgpKSB7IHJldHVybiAnaW50ZXJuYWwnIH1cbiAgaWYgKGlzRXh0ZXJuYWxNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgpKSB7IHJldHVybiAnZXh0ZXJuYWwnIH1cbiAgaWYgKGlzU2NvcGVkKG5hbWUsIHNldHRpbmdzLCBwYXRoKSkgeyByZXR1cm4gJ2V4dGVybmFsJyB9XG4gIGlmIChpc1JlbGF0aXZlVG9QYXJlbnQobmFtZSwgc2V0dGluZ3MsIHBhdGgpKSB7IHJldHVybiAncGFyZW50JyB9XG4gIGlmIChpc0luZGV4KG5hbWUsIHNldHRpbmdzLCBwYXRoKSkgeyByZXR1cm4gJ2luZGV4JyB9XG4gIGlmIChpc1JlbGF0aXZlVG9TaWJsaW5nKG5hbWUsIHNldHRpbmdzLCBwYXRoKSkgeyByZXR1cm4gJ3NpYmxpbmcnIH1cbiAgcmV0dXJuICd1bmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTY29wZWRNb2R1bGUobmFtZSkge1xuICByZXR1cm4gbmFtZS5pbmRleE9mKCdAJykgPT09IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZUltcG9ydFR5cGUobmFtZSwgY29udGV4dCkge1xuICByZXR1cm4gdHlwZVRlc3QobmFtZSwgY29udGV4dC5zZXR0aW5ncywgcmVzb2x2ZShuYW1lLCBjb250ZXh0KSlcbn1cbiJdfQ==