var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export function list2Dict(lst, key, contentKey) {
    var dct = {};
    for (var i = 0; i < lst.length; i++) {
        var item = lst[i];
        dct[item[key]] = contentKey ? item[contentKey] : item;
    }
    return dct;
}
export function list2Tree(listData, options) {
    if (options === void 0) { options = {
        key: 'key',
        parent: 'parent'
    }; }
    var _key = options.key;
    var _parent = options.parent;
    var _dct = {};
    for (var i = 0; i < listData.length; i++) {
        var key = listData[i][_key];
        _dct[key] = __assign(__assign({}, listData[i]), { children: _dct[key] ? _dct[key].children : [] });
        var parent_1 = listData[i][_parent];
        if (parent_1) {
            if (!_dct[parent_1]) {
                _dct[parent_1] = {
                    key: parent_1,
                    children: []
                };
            }
            _dct[parent_1].children.push(_dct[key]);
        }
    }
    return Object.values(_dct).filter(function (item) { return !item[_parent]; });
}
export function tree2List(treeData, options) {
    if (options === void 0) { options = {
        key: 'key',
        parent: 'parent'
    }; }
    var lst = [];
    for (var i = 0; i < treeData.length; i++) {
        var item = treeData[i];
        var itemNew = __assign({}, item);
        delete itemNew.children;
        lst.push(itemNew);
        if (item.children && item.children.length) {
            var lst_temp = tree2List(item.children, options);
            lst = lst.concat(lst_temp);
        }
    }
    return lst;
}
//# sourceMappingURL=transform.js.map