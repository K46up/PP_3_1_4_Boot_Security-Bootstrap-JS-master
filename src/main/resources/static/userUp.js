
let formEdit = document.forms["formEdit"];
editUser();

async function editModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#edit'));
    await openModal(formEdit, modal, id);
}

function editUser() {
    formEdit.addEventListener("submit", ev => {
        ev.preventDefault();
        let roles = [];
        for (let i = 0; i < formEdit.roles.options.length; i++) {
            if (formEdit.roles.options[i].selected)

                roles.push({
                    id: formEdit.roles.options[i].value,
                    name: "ROLE_" + formEdit.roles.options[i].text
                });
        }

        const age = +formEdit.age.value;

        fetch("adminApi/userUp", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                id: formEdit.id.value,
                username: formEdit.username.value,
                firstName: formEdit.firstName.value,
                lastName: formEdit.lastName.value,
                age: age,
                email: formEdit.email.value,
                password: formEdit.password.value,
                roles: roles
            })
        }).then(() => {
            document.getElementById("closeEdit").click();
            getUsers()
        });
    });
}
