//add attribute on input

const attr = document.createAttribute('onkeypress')
attr.value = 'return num(event)'

function num(e){
    const keyc = e.keyCode;
        
    if(keyc >= 97 && keyc <=122){
        return false
    }
    else{
        return true
    }
}
//first-page
const fpage = document.getElementsByClassName('first-page')[0]
const finput =fpage.getElementsByTagName('input')
finput[6].setAttributeNode(attr);
document.getElementsByTagName('button')[0].addEventListener('click' , function(){
   
    for(let i = 0; i < finput.length; i++ ){
        if(finput[i].value =='' || !finput[7].value.includes('@') ){
            for(let i= 0; i < finput.length ;i++){
                if(finput[i].value != ''){
                    finput[i].style.borderColor = 'rgba(128, 128, 128, 0.397)'
                }
                else{
                    finput[i].style.borderColor = 'red'
                    finput[i].setAttribute('placeholder', 'Required')
                    finput[i].addEventListener('keydown', function(e){
                        this.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                        finput[i].setAttribute('placeholder', '')
                    })
                    finput[i].addEventListener('change', function(e){
                        this.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                        finput[i].setAttribute('placeholder', '')
                    })
                }
                
            }
            const email = '@'
            if(!finput[7].value.includes(email)){
                finput[7].style.borderColor = 'red'
            }
            else if(finput[7].value.includes(email)){
                finput[7].style.borderColor = 'rgba(128, 128, 128, 0.397)'
            }
            return
        }
       
    }
    document.getElementsByClassName('second-page')[0].scrollIntoView({behavior:'smooth', block: 'start'});
})

//second-page prev
document.getElementsByTagName('button')[1].addEventListener('click' , function(){
    document.getElementsByClassName('first-page')[0].scrollIntoView({behavior:'smooth', block: 'start'});
})
//second-page next
const spage = document.getElementsByClassName('second-page')[0]
const sinput = spage.getElementsByTagName('input')
const select = spage.getElementsByTagName('select')[0]
document.getElementsByTagName('button')[2].addEventListener('click' , function(){
   
    for(let i = 0; i < sinput.length; i++ ){
        if(sinput[i].value =='' || select.value =='' ){
            for(let i= 0; i < sinput.length ;i++){
                if(sinput[i].value != '' ){
                    sinput[i].style.borderColor = 'rgba(128, 128, 128, 0.397)'
                    select.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                }
                else{
                    sinput[i].style.borderColor = 'red'
                    select.style.borderColor = 'red'
                    sinput[i].setAttribute('placeholder', 'Required')
                    sinput[i].addEventListener('keydown', function(e){
                        this.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                        this.setAttribute('placeholder', '')
                    })
                }
               
            }
            if(select.value !=''){
                select.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                
            }
            else{
                select.style.borderColor = 'red'
                select.addEventListener('change', function(e){
                    this.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                    select.setAttribute('placeholder', '')
                })
              return
            }
            
            return
        }
       
    }
    document.getElementsByClassName('third-page')[0].scrollIntoView({behavior:'smooth', block: 'start'});
})

for(let i = 1; i < sinput.length; i++){
    const attr = document.createAttribute("onkeypress");
    attr.value = "return num(event)";
    sinput[i].setAttributeNode(attr);
}
//third-page prev
document.getElementsByTagName('button')[3].addEventListener('click' , function(){   
    document.getElementsByClassName('second-page')[0].scrollIntoView({behavior:'smooth', block: 'start'});
})
const tpage = document.getElementsByClassName('third-page')[0]
const tinput = tpage.getElementsByTagName('input')
const attri = document.createAttribute('onkeypress')
attri.value = 'return num(event)'
tinput[6].setAttributeNode(attri);

tinput[2].addEventListener('focusin' , function(){
   if(tinput[0].checked = true){
    tinput[0].checked = false
   }
   else if(tinput[1].checked = true){
    tinput[1].checked = false
   }
   else if(tinput[2].value ==  '' ){
    tinput[0].checked = true
   }
})
tinput[2].addEventListener('focusout' , function(){
  if(tinput[2].value ==  '' ){
     tinput[0].checked = true
    }
 })

 //third-page next
document.getElementsByTagName('button')[4].addEventListener('click' , function(){
    tinput[2].addEventListener('click' , function(){
       
    })
    const select = tpage.getElementsByTagName('select')[0];
      for(let i = 3; i < tinput.length; i++ ){
        if(tinput[i].value =='' || select.value == ''){
            for(let i= 3; i < tinput.length ;i++){
                if(tinput[i].value != '' ){
                    tinput[i].style.borderColor = 'rgba(128, 128, 128, 0.397)'
                }
                else{
                    tinput[i].style.borderColor = 'red'
                    tinput[i].setAttribute('placeholder', 'Required')
                    tinput[i].addEventListener('keydown', function(e){
                        this.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                        tinput[i].setAttribute('placeholder', '')
                    })
                }
            }
            if(select.value !=''){
                select.style.borderColor = 'rgba(128, 128, 128, 0.397)' 
            }
            else{
                select.style.borderColor = 'red'
                select.addEventListener('change', function(e){
                    this.style.borderColor = 'rgba(128, 128, 128, 0.397)'
                    select.setAttribute('placeholder', '')
                })
            }
            return
        }
    }
    document.getElementsByClassName('last-page')[0].scrollIntoView({behavior:'smooth', block: 'start'});
})

document.getElementById('subbtn').addEventListener('click' , function(){
    const subpg = document.getElementsByClassName('last-page')[0]
    const input = subpg.getElementsByTagName('input')[0]
    if(input.value == ''){
        input.style.borderColor = 'red'
        return
    }
    else{
        input.style.borderColor =  'rgba(128, 128, 128, 0.397)'
      
    }
    document.getElementById('submited-page').style.display = 'flex'
})
document.getElementById('dlbtn').addEventListener('click' , function(){
    document.getElementById('submited-page').style.display = 'none'
    document.getElementsByClassName('submited-page')[0].scrollIntoView({block: 'start'})
})

