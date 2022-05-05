function FindFirstCommonNode(pHead1, pHead2) {
  const len1 = getLinkLength(pHead1),
    len2 = getLinkLength(pHead2);
  let pLong = pHead1,
    pShort = pHead2,
    lenGap = len1 - len2;
  if (len1 < len2) {
    pLong = pHead2;
    pShort = pHead1;
    lenGap = len2 - len1;
  }
  while (lenGap--) {
    pLong = pLong.next;
  }
  while (pLong !== null) {
    // pLong,pShort一起跑
    if (pLong.val === pShort.val) {
      return pLong;
    }
    pLong = pLong.next;
    pShort = pShort.next;
  }
  return null;
}
function getLinkLength(pHead) {
  let length = 0;
  while (pHead !== null) {
    pHead = pHead.next;
    length++;
  }
  return length;
}


function FindFirstCommonNode(pHead1, pHead2)
{
    let p1 = pHead1,
        p2 = pHead2;
    while (p1 != p2) {
        p1 = p1 === null ? pHead2 : p1.next
        p2 = p2 === null ? pHead1 : p2.next
    }
    return p1
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};