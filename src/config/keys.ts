// docker run -d  --name mongo-on-docker  -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo
// docker run -d  -p 27017:27017 mongo
export default {
  mongoURI: 'mongodb://localhost/nest',
};
