/companies:
get.browse (/) : consultants, admin
get.read (/:id) : consultants, admin

/profils:
get.browse (/) : consultants, admin
get.read (/:id) : candidat, consultant, admin
put.edit (/:id) : candidat, admin
put.editCV (/:id) : candidat,

/offers:
get.browse (/) : visiteur, candidat, consultant, admin
get.read (/:id) : visiteur, candidat, consultant, admin
post.add (/) : consultant, admin
"delete.destroy (/:id): consultant, admin"

/users:
get.browse ("") : visiteur, candidat, consultant, admin
post.add (/register) : visiteur, candidat, consultant, admin
post.login (/login) : visiteur, candidat, consultant, admin
delete.destroy (/:id) : candidat, consultant, admin

/contract:
get.browse (/) : consultant, admin

/workTime:
get.browse (/) : consultant, admin

/workFormat:
get.browse (/) : consultant, admin

/category:
get.browse (/) : candidat, consultant, admin

/studyLevel:
get.browse (/) : consultant, admin

/technology:
get.browse (/) : candidat, consultant, admin

/favorite:
post.add (/) : candidat
get.read (/:candidateId) : candidat
delete.destroy (/:offerId) : candidat

visiteurs candidats consultants admin
