
/*页面顶部滚动改变样式 */
window.addEventListener("scroll", function () {
    const headerTop = document.getElementById("headerTop");
    const headerMiddle = document.getElementById("headerMiddle");
    const RE = document.getElementsByClassName('RE');
    //可以用Foreach来遍历数组
    const L0 = document.getElementById("L0");
    const L1 = document.getElementById("L1");
    const L2 = document.getElementById("L2");
    const L3 = document.getElementById("L3");
    const L4 = document.getElementById("L4");
    const L5 = document.getElementById("L5");
    const L6 = document.getElementById("L6");
    const L7 = document.getElementById("L7");
    const L8 = document.getElementById("L8");
    const L9 = document.getElementById("L9");
    const L10 = document.getElementById("L10");
    const L0Bottom = document.getElementById('L0Bottom');
    const elseContainer = document.getElementById('elseContainer');
    if (window.scrollY > 200) {
        headerTop.classList.add('scrollBgcColor');
        L0.classList.add('scrollFontColor');
        L1.classList.add('scrollFontColor');
        L2.classList.add('scrollFontColor');
        L3.classList.add('scrollFontColor');
        L4.classList.add('scrollFontColor');
        L5.classList.add('scrollFontColor');
        L6.classList.add('scrollFontColor');
        L7.classList.add('scrollFontColor');
        L8.classList.add('scrollFontColor');
        L9.classList.add('scrollFontColor');
        L10.classList.add('scrollFontColor');
        L0.innerHTML = '&#xe6b4;'
        L0.classList.add('scrollBilibili');
        elseContainer.classList.add('show');

        Array.from(RE).forEach((element) => {
            element.classList.add('scrollFontColor');
        })
    }
    if (window.scrollY > 400) {
        headerMiddle.classList.add('show');
    }
    if (window.scrollY < 200) {
        headerTop.classList.remove('scrollBgcColor');
        L0.classList.remove('scrollFontColor');
        L1.classList.remove('scrollFontColor');
        L2.classList.remove('scrollFontColor');
        L3.classList.remove('scrollFontColor');
        L4.classList.remove('scrollFontColor');
        L5.classList.remove('scrollFontColor');
        L6.classList.remove('scrollFontColor');
        L7.classList.remove('scrollFontColor');
        L8.classList.remove('scrollFontColor');
        L9.classList.remove('scrollFontColor');
        L10.classList.remove('scrollFontColor');
        elseContainer.classList.remove('show');

        L0.innerHTML = '&#xe609;'
        L0.classList.remove('scrollBilibili');

        Array.from(RE).forEach((element) => {
            element.classList.remove('scrollFontColor');
        })
    }
    if (window.scrollY < 400) {
        headerMiddle.classList.remove('show');
    }
})



/*搜索下拉框*/
function myFunction() {
    const searchContent = document.getElementById("searchContent");
    searchContent.classList.toggle("show");
}


/*取消搜索下拉框 */
window.onclick = function (event) {
    if (!event.target.matches('.input') && !event.target.matches('.searchContent')) {
        const searchContent2 = document.getElementById('searchContent');
        searchContent2.classList.remove('show');
    }
}




/*清除搜索的内容 */
const inputField = document.getElementById("inputField");
const randomPlaceholder = Math.random() * 100;
inputField.placeholder = randomPlaceholder;
function clearFunction() {
    document.getElementById("inputField").value = "";
    const searchContent = document.getElementById("searchContent");
    searchContent.classList.toggle("show");
}

/*回到顶部显示按钮 */
window.addEventListener('scroll', function () {
    if (window.scrollY > 800) {
        document.getElementById('returnBtn').classList.add('show');
    }
    else {
        document.getElementById('returnBtn').classList.remove('show');
    }
})


/*回到顶部 */
document.getElementById('toTop').addEventListener("click", function () {
    window.scrollTo({
        top: 0
    })
})



/*无限加载功能之无限加载 */
const detail = document.getElementById('detail');
const detailImg = document.getElementById('detailImg');
const container = document.getElementById('container');
function loadDate() {
    detail.innerHTML += detailImg.outerHTML;
}
window.addEventListener('scroll', function () {
    if ((window.scrollY >= container.clientHeight) && 
    (window.scrollY <= container.clientHeight * 1.1)) 
    {
        loadDate();
    }
});


/*下拉箭头变方向改变 */
const C213 = document.getElementById('C213');
const headerMiddleContent = document.getElementById('headerMiddleContent');
C213.addEventListener('mouseover', function () {
    C213.innerHTML = '&#xe6e6;';
})
headerMiddleContent.addEventListener('mouseover', function () {
    C213.innerHTML = '&#xe6e6;';
})
C213.addEventListener('mouseout', () => {
    C213.innerHTML = '&#xe87e;';
})
headerMiddleContent.addEventListener('mouseout', () => {
    C213.innerHTML = '&#xe87e;';
})
const moreContainerBtn2 = document.getElementById('moreContainerBtn2');
const moreContent = document.getElementById('moreContent');
moreContainerBtn2.addEventListener('mouseover',()=>{
    moreContainerBtn2.innerHTML = '更多&#xe6e6;'
})
moreContent.addEventListener('mouseover',()=>{
    moreContainerBtn2.innerHTML = '更多&#xe6e6;'
})
moreContainerBtn2.addEventListener('mouseout',()=>{
    moreContainerBtn2.innerHTML = '更多&#xe87e;'
})
moreContent.addEventListener('mouseout',()=>{
    moreContainerBtn2.innerHTML = '更多&#xe87e;'
})

/*输入内容时，出现清除小图标*/
const off = document.getElementById('off');
inputField.addEventListener('input',()=>{
    if(inputField.value !== ''){
        off.classList.add('show3');
        console.log('有');
    }else{
        off.classList.remove('show3');
        console.log('无');
    }
})
/*悬浮框*/
const L1 = document.getElementById('L1');
const elseContentF = document.getElementById('elseContentF');
L1.addEventListener('mouseover',()=>{
    elseContentF.classList.add('show4');
})
L1.addEventListener('mouseout',()=>{
    elseContentF.classList.remove('show4');
})