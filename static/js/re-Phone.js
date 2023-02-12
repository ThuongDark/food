onScreenPhone()
function onScreenPhone()
{
}




toggleLayout()
function toggleLayout(){
    document.querySelector('.ti-menu').onclick=()=>{
        document.querySelector('.layout-phone').style.animation = "add-layout-p 1s";
    document.querySelector('.layout-phone').style.display = 'block'
    }
    document.querySelector('.ti-close').onclick=()=>{
        document.querySelector('.layout-phone').style.animation = "re-layout-p 1s";
        document.querySelector('.p-b-h-list')
        setTimeout(() => {
            document.querySelector('.layout-phone').style.display = 'none'
        }, 900);
       
        }
}



