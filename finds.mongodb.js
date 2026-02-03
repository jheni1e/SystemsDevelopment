use('bosch')
db.people.find()

use('bosch');
db.people.find({ name: "Lays" })

use('bosch');
db.people.find({ lastName: "joy" })

use('bosch')
db.people.find( { salary: { $gt: 2105 } } )