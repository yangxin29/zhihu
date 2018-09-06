export function formatAvatarUrl (url, type) {
  if (type === 'people') return

  const ul = url.splice('_')
  if (ul[1].indexOf('s') + 1) {
    return ul[0] + 'x' + ul[1]
  } else {
    const u2 = ul[1].split('.')
    return ul[0] + '_' + '400x224.' + u2[1]
  }
}

export function formatHotTitle (big, small) {
  // const reg = /^{/
  // const b1 = big.split('{}')
  // return reg.test(big) ? small + b1[1] : b1[0] + small
  return big.replace(/\{\}/, small)
}
