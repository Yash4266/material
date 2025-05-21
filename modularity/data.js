export let contacts=[]

export function saveContactsInSession()
{
    localStorage.setItem("contacts",JSON.stringify(contacts))
}
export function getContactsFromSession()
{
    return JSON.parse(localStorage.getItem("contacts"))
}