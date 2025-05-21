import { contacts,getContactsFromSession,saveContactsInSession} from './data.js'
export function addcontacts(contact) {
    contacts.push(contact);
    saveContactsInSession();
}
export function getallcontacts() {
    return getContactsFromSession();
}
 export function remove(index){
    contacts.splice(index,1);
    saveContactsInSession();
}
export function update(index,newcontact){
    contacts[index].name=newcontact.name
    contacts[index].number=newcontact.number
    saveContactsInSession();    
}
