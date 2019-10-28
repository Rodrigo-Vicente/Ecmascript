
const user = {
    name: "Rodrigo",
    lastName: "Vicente"
};

function getUserWithFullName(user){
    return {
    ...user,
        fullName: ${user.name} $ {user.lastName}
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);