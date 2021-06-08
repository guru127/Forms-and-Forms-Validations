
const name=document.getElementById('name')
const password=document.getElementById("password")
const form=document.getElementById('form')
const errorElement= document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages =[]
    if(name.value==='' || name.value == null) {
        messages.push('name is required')
    }
    if (password.length<5){
          messages.push('password lenth must be min of 5')
    }
    if (password.length>10){
        messages.push('password lenth must be max of 10')
    }
    if (password.value===password){
        messages.push('password canot be password')
    }
    if(messages.length>0){
       e.preventDefault()
       errorElement.innerText= messages.join(',')
    }
})