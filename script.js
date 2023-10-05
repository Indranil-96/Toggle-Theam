let target=document.getElementById('toggle');
let count=0;

target.addEventListener('click',function(){
    count++;
    if(count%2==0 && count>0){
        target.style.color='cyan';
        document.body.style.background='white';
    }
    
    if(count%2!=0){
        target.style.color='grey';
        document.body.style.background='black'
    }
})

