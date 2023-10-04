import { getAllUsers,getUserById,getAllProducts } from "./modules/model/dummyjasonLib.js";
import {addButton} from './modules/view/test.js';



function initApp(){
    getAllUsers(0,0).then((myUsers)=>{
        console.log(myUsers);
    });

}




addButton();


export function testFunctionCallback(mydata){
console.log(mydata);
initApp();

}




/* getAllProducts(0,0).then((myUsers)=>{
    console.log(myUsers);
}); */