const API = "/adminApi/users";
const card = document.querySelector('#cardsUsers');
let newUser = "";

function getUsers() {
    fetch(API)
        .then((res) => res.json())
        .then((users) => {
            users.map((user) => {
                let rolesStr = user.roles.map(role => role.name.replace('ROLE_', '')).join(', ');
                return (newUser +=
                    `<tr>
                        <td class="pt-3" >${user.id}</td>
                        <td class="pt-3" >${user.username}</td>
                        <td class="pt-3" >${user.firstName}</td>
                        <td class="pt-3" >${user.lastName}</td>
                        <td class="pt-3" >${user.age}</td>
                        <td class="pt-3" >${user.email}</td>
                        <td class="pt-3" >${rolesStr}</td>
                                            
                        <td>
                            <button 
                                type="button" 
                                class="btn btn-info" 
                                data-toggle="modal" 
                                data-target="#edit"
                                onClick="editModal(${user.id})">
                                Edit
                            </button>
                        </td>
                    
                        <td>
                            <button 
                                type="button" 
                                class="btn btn-danger" 
                                data-toggle="modal" 
                                data-target="#delete"
                                onClick="deleteModal(${user.id})">
                                Delete
                            </button>
                        </td>
                        
                    </tr>
 
                `);
            });
            card.innerHTML = newUser;
        });
}

getUsers();
/*
<td>
    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#edit"
            onClick="editModal(${user.id})">
        Edit
    </button>
</td>
<td>
    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#delete"
            onClick="deleteModal(${user.id})">
        Delete
    </button>
</td>*/
