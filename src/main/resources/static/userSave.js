import getTableUser from './allUsers.js';

const API = "/adminApi/userSave";
const homeTab = document.getElementById('nav-home-tab');
let form = document.forms["create"];
userSave();

function userSave() {

    form.addEventListener("submit", ev => {
        ev.preventDefault();

        let roles = [];
        for (let i = 0; i < form.roles.options.length; i++) {
            if (form.roles.options[i].selected)

                roles.push({
                id: form.roles.options[i].value,
                name: "ROLE_" + form.roles.options[i].text
            });
        }
        const age = +form.age.value;

        fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                        username: form.username.value,
                        firstName: form.firstName.value,
                        lastName: form.lastName.value,
                        age: age,
                        email: form.email.value,
                        password: form.password.value,
                        roles: roles

                    }
                )
            }
        ).then(() => {

            form.reset();
            homeTab.click();
            getTableUser();

        });

    })
}