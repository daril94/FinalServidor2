// importaciones a mongo
mongoimport --db arduino --collection blogPost --drop --file ./blog.json
mongoimport --db arduino --collection users --drop --file ./users.json
mongoimport --db arduino --collection temperaturas --drop --file ./temperaturas.json