const userData = [
    {
     "createdAt": "2022-04-06T22:25:04.950Z",
     "name": "PRIYA",
     "avatar": "https://wallpaperaccess.com/full/2213424.jpg",
     "id": "1"
    },
    {
        "createdAt": "2022-04-06T22:25:04.950Z",
        "name": "ZARAH",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "id": "2"
       },
       {
        "createdAt": "2022-04-06T22:25:04.950Z",
        "name": "DHARSHINI",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
        "id": "2"
       },
       {
        "createdAt": "2022-04-06T22:25:04.950Z",
        "name": "HANNAH",
        "avatar": "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "id": "3"
       }];


function foo(user){
const userList = document.querySelector(".user-list");

const userContainer = document.createElement("div");
userContainer.className = "user-container";
//const userImg = document.createElement("img");
//userImg.src=" https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ;
//userImg.className = "user-avatar";
//userContainer.append(userImg);
userContainer.innerHTML=`<img src=${user.avatar} alt ="${user.name}" class="user-avatar">
 <div>
   <p class="user-name">${user.name}</p>
    <p class="user-join">${new Date(user.createdAt).toDateString()}</p>
</div>
`;
userList.append(userContainer);
}

//fetch("https://624a7f94852fe6ebf887cbf8.mockapi.io/user")
//          .then((data)=>data.json())
 //         .then((userData)=>userData.forEach((user)=>foo(user)));

async function loadUser(){
   const data= await fetch("https://624a7f94852fe6ebf887cbf8.mockapi.io/user")
   const userData=await data.json()
    userData.forEach((user)=>foo(user));
}     
loadUser();        