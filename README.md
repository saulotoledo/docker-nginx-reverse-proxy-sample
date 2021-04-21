# Nginx reverse proxy sample on Docker

The project contains a sample application in Node.js running behind an Nginx reverse proxy.

Run the example with:

```
docker-compose up
```

Then access the browser on http://localhost:8080

The sample also saves a name in the database. Try `http://localhost:3000/?name=YourName` to set the name to be saved.
