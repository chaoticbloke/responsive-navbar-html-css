
const selectFunction = (selector)=>{
    const ele =document.querySelector(selector)
    if(ele){
     return ele
    } else{
        throw new Error(`No class/id with name ${selector}`)
    }

}

const toggleBtn = selectFunction('.nav-btn');
const links = selectFunction('.nav-links')

toggleBtn.addEventListener('click',()=>{
    console.log(`clicked ${toggleBtn}`);
    links.classList.toggle('toggle')
})