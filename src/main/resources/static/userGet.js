
const API = "/userApi/auth";
const btnAdmin = document.getElementById('btnAdmin');
function getCurrentUser() {
    fetch(API)
        .then(res => res.json())
        .then(user => {
            const roles = user.roles.map(role => role.name.replace('ROLE_', '')).join(', ');
            $('#emailCurrentUser').append(`<span>${user.username}</span>`)
            $('#roleCurrentUser').append(`<span>${roles.replace('ROLE_', '') + ' '}</span>`)
            const u = `$(
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${roles.replace('ROLE_', '') + ' '}</td>
                    </tr>)`;


            $('#oneUser').append(u)

            if(!roles.includes('ADMIN')) {
                btnAdmin.style.display = "none";
            }
        })

}



getCurrentUser()