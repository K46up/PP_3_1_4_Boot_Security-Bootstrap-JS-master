'use strict';

const API = "/adminApi/users";
const card = $('#cardsUsers');
getUsers();
function getUsers() {
    card.empty();
    fetch(API)
        .then((res) => res.json())
        .then(js => {
            js.forEach(user => {
                const rolesStr = user.roles.map(role => role.name.replace('ROLE_', '')).join(', ');
                const users = $(
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
                    </tr>`
                );
                card.append(users);
            });
        });
}
