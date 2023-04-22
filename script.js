let arr= [{id:1,name:"John",age:"18",profession:"Developer"},{id:2, name:"Jack",age:"20", profession:"Developer"},{id:3, name:"Karen", age:"19",profession:"Admin"}]

let liArray = []

const selector = document.getElementById("selectPro")

let list = document.getElementById("userList")

let liList = document.getElementsByTagName("li")

if(selector.value=="Profession"){
    for(let i = 0; i<arr.length; i++)
    {
        let item = document.createElement("li")
        item.innerText= arr[i].id+"."+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"Name: "+arr[i].name+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"Profession: "+arr[i].profession+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"Age: "+arr[i].age
        list.appendChild(item)
        liArray.push(item)
    }
}



const add = document.getElementById("addBtn")
add.addEventListener("click", addUser)

function addUser(){
    let name = document.getElementById("name").value;
    let profession = document.getElementById("pro").value;
    let age = document.getElementById("age").value;
    if(name && profession && age){
        let user = {
            id: arr.length+1,
            name: name.charAt(0).toUpperCase()+name.slice(1),
            profession: profession.charAt(0).toUpperCase()+profession.slice(1),
            age: age
        }
        arr.push(user)

        let item = document.createElement("li")
        item.innerText= user.id+"."+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"Name: "+user.name+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"Profession: "+user.profession+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+"Age: "+user.age
        list.appendChild(item)
        liArray.push("item")

        alert("User addded successfully!")

        selector.value="Profession"

        for(let i = 0; i<liList.length; i++)
    {
        liList[i].style.display="block"
    }

        document.getElementById("name").value=""
        document.getElementById("pro").value=""
        document.getElementById("age").value=""
    }
     else{
        alert("Fill every detail")
     }

}

function filterUser(){
    if(selector.value==="Profession"){
        alert("Select a profession before clicking the button!")
    }
    else{
        for(let i = 0; i<liList.length; i++)
    {
        if(liList[i].innerText.includes(selector.value)){
            liList[i].style.display="block"
        }
        else{
            liList[i].style.display="none"
        }
    }
    }
    
    

}

const filterBtn = document.getElementById("filter")
filterBtn.addEventListener("click", filterUser)