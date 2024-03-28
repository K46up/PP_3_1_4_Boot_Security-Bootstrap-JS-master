let deleteForm = document.forms["formDelete"]

deleteUser()
async function deleteModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#delete'));
    await openModal(deleteForm, modal, id);
}

function deleteUser() {
    deleteForm.addEventListener("submit", ev => {
        ev.preventDefault();
        fetch("/adminApi/userRemove?id=" + deleteForm.id.value, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            document.getElementById("closeDelete").click();
            getUsers();
        });
    });
}