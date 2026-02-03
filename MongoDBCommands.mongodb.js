db.adminCommand(
    {
        listDatabases: 1
    }
)

use('bosch');

db.people.insertOne({
    name: "Jhenie",
    lastName: "Ramal",
    salary: 2000
});

use('bosch');

db.people.insertMany([
    {
        name: "Malu",
        lastName: "ca",
        salary: 2101
    },
    {
        name: "Jule",
        lastName: "ca",
        salary: 2100
    },
]);

const arraypeople = [
    {
        name: "Fer",
        lastName: "bamda",
        salary: 2102
    },
    {
        name: "Joy",
        lastName: "joy",
        salary: 2103
    },
];

use('bosch');

db.people.insertMany(arraypeople);