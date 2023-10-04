import { getAllUsers,getUserById } from "./modules/model/dummyjasonLib.js";


/* getAllUsers(0,0).then((myUsers)=>{
    console.log(myUsers);
}); */



getUserById('1').then((myUser)=>{
    console.log(myUser);
});