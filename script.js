//your code here
window.onload= function(){
    var image=document.querySelectorAll('.image');
    var boxes=document.querySelectorAll('.boxes');

    image.addEventListener('dragstart',(e)=>{
        console.log("dragstart");
        
        e.target.className+='.selected';
        setTimeout(()=>{
            e.target.className+='hide';
        },0);
       
    });

    image.addEventListener('dragend',()=>{
        console.log("dragend");
    });

    boxes.forEach(box=>{
        box.addEventListener('dragover',(e)=>{
           e.preventDefault();
        });
        box.addEventListener('dragenter',()=>{

        });
        box.addEventListener('dragleave',()=>{

        });
        box.addEventListener('drop',()=>{

        });
    

        });
    }
