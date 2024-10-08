
export function list2Dict(lst, key, contentKey) {
  const dct = {}
  for (let i = 0; i < lst.length; i++) {
    const item = lst[i]
    dct[item[key]] = contentKey ? item[contentKey] : item
  }

  return dct
}

export function list2Tree(listData, options = {
  key: 'key',
  parent: 'parent'
}) {
  const _key = options.key
  const _parent = options.parent
  const _dct = {}
  for (let i = 0; i < listData.length; i++) {
    const key = listData[i][_key]
    _dct[key] = {
      ...listData[i],
      children: _dct[key] ? _dct[key].children : []
    }
    const parent = listData[i][_parent]
    if (parent) {
      if (!_dct[parent]) {
        _dct[parent] = {
          key: parent,
          children: []
        }
      }
      _dct[parent].children.push(_dct[key])
    }
  }

  return Object.values(_dct).filter(item => !item[_parent]);
}

export function tree2List(treeData, options = {
  key: 'key',
  parent: 'parent'
}) {
  let lst = []
  for (let i = 0; i < treeData.length; i++) {
    const item = treeData[i]
    const itemNew = {...item}
    delete itemNew.children
    lst.push(itemNew)
    if (item.children && item.children.length) {
      const lst_temp = tree2List(item.children, options);
      lst = lst.concat(lst_temp)
    }
  }

  return lst;
}