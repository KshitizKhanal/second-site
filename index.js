document.querySelector('.close').style.display = 'none';
document.querySelector('.options').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.opt').style.display = 'inline'        
        document.querySelector('.close').style.display = 'none'        
    }
    else{
        document.querySelector('.close').style.display = 'inline'      
        setTimeout(() => {
            document.querySelector('.opt').style.display = 'none'            
        }, 300);  
        
    }
})