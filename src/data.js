let users = [
    {
        id: 0,
        pseudo: "Artifice",
    },
    {
        id: 1,
        pseudo: "Alpha",
    },
    {
        id: 2,
        pseudo: "Beta",
    },
    {
        id: 3,
        pseudo: "Delta",
    },
    {
        id: 4,
        pseudo: "Theta",
    }
];

export function getUsers() {
    return users;
}

export function getUser(id) {
    return users.find(
        user => user.id === id
    );
}
