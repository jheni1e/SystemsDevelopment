use('bosch')
db.people.find()

use('bosch');
db.people.find({ name: "Lays" })

use('bosch');
db.people.find({ lastName: "joy" })

use('bosch')
db.people.find({ salary: { $gt: 2105 } })

use('bosch');
db.people.find({ name: /a/ })

use('bosch');
db.people.find({ name: /^L.*s$/ })

use('bosch');
db.people.find({ $and: [{ name: /^M.*u$/ }, { lastName: /^c.*a$/ }] })

use('bosch')
db.people.find({ salary: { $gt: 2105 } }, { name: 1, lastName: 1 })