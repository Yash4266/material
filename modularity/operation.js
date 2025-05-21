import { addcontacts ,getallcontacts} from "./api.js";

let form=document.getElementById("contactform")
let list=document.getElementById("conlist")
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    //console.log("hii");
    let name = form.name.value
    let number = form.mobile.value
    
    let contact = {'name':name,'contact':number}

    addcontacts(contact);
    alert("cotact saved");
    renderContacts();   
    form.reset();
});

function renderContacts()
{
    let contacts = getallcontacts();
    //console.log(contacts);
    // clean the list
    list.innerHTML = ''
    contacts.forEach((contact,index) => {
        //console.log("mycontact",contact);
        let listElement = document.createElement("li");
        listElement.textContent = `${contact.name} - ${contact.contact}`
        list.appendChild(listElement)
    });
}
renderContacts();