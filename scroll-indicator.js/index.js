/**
 * @param {string} container 滚动容器元素
 * @param {string} indicator 指示器容器元素
 */
function indicator(container, indicator) {
  // 滚动容器元素
  const ctn = document.querySelector(container)
  // 滚动容器滚动长度
  const scrollLength = ctn.scrollWidth - ctn.offsetWidth
  
  // 指示器容器元素
  const idc = document.querySelector(indicator)
  // 指示器滚动条元素
  const bar = idc.children[0]
  // 指示器滚动条元素宽度（根据滚动容器的滚动比例设置）
  bar.style.width = idc.offsetWidth * (ctn.offsetWidth) / ctn.scrollWidth + 'px'
  // 指示器空白部分宽度
  const idcSpace = idc.offsetWidth - bar.offsetWidth

  // 定义滚动事件
  function handleScroll() {
    const scrollRate = ctn.scrollLeft / scrollLength
    const transLength = idcSpace * scrollRate
    bar.style.transform = `translateX(${transLength}px)`
  } 

  // 监听容器滚动
  ctn.addEventListener('scroll', handleScroll)
}
