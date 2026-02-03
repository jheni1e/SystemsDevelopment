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
    {
        name: "Thay",
        lastName: "nar",
        salary: 2104
    },
    {
        name: "Kessy",
        lastName: "ane",
        salary: 2105
    },
    {
        name: "Helo",
        lastName: "world",
        salary: 2106
    },
    {
        name: "Beca",
        lastName: "iwouldlikearing",
        salary: 2107
    },
    {
        name: "Kety",
        lastName: "jomes",
        salary: 2108
    },
    {
        name: "Bruna",
        lastName: "do empadao",
        salary: 2109
    },
    {
        name: "Lays",
        lastName: "japonesinha",
        salary: 2110
    },
];

use('bosch');

db.people.insertMany(arraypeople);