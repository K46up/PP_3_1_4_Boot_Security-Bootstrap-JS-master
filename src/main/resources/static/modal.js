async function getUserById(id) {
    let response = await fetch("/adminApi/userGet?id=" + id);
    return await response.json();
}

async function openModal(form, modal, id) {
    modal.show();
    let user = await getUserById(id);
    form.id.value = user.id;
    form.username.value = user.username;
    form.firstName.value = user.firstName;
    form.lastName.value = user.lastName;
    form.age.value = user.age;
    form.email.value = user.email;
    form.password.value = user.password;
    form.roles.value = user.roles;
}