let dbUsers = [
  {
    username : "hafiz",
    password : "apihhafiz",
    name : "Mohamad Hafiz",
    email : "apihazman@gmail.com",

},
{
    username : "wan",
    password : "wanencemm",
    name : "Wan Amirul",
    email : "wanamirul@gmail.com",
},
{
    username : "alyaa",
    password : "alyaaapizz",
    name : "Alyaa Zafira",
    email : "alyaaa@gmail.com",

},    
]

function login(username, password){
console.log("someone try to login with", username, password)
let matched = dbUsers.find(element =>
    element.username == username
)
if(matched){
    if(matched.password == password){
        return matched
    }else{
        return "Password not matched"
    }
}else{
    return "Username not found"
}
}

//try to login
console.log(login("hafiz", "apihhafiz"))
console.log(login("mir, mirulll"))