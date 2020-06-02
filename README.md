# Skripsi Finder

Skripsi Finder is a semantic web to help you search the thesis of computer science student in Unpad. The project is built in React JavaScript Framework that used RDF as its database and Apache Jena Fuseki as its database server. 

## Installation

### React Js
- Download NodeJs (https://nodejs.org/en/)
- Clone this project by typing 
`
$ git clone https://github.com/fardil/SkripsiFinder.git
` in command prompt 
- Type 
`
 npm start
` 
- Website will be opened automatically in your browser

### Access Dataset
- Download Apache Jena Fuseki (https://jena.apache.org/documentation/fuseki2/)
- Access cmd in fuseki directory and type
`
fuseki-server 
`
- Access `
http://localhost:3030
` in your browser
- Click `
Manage Dataset
` in Apache Jena Fuseki
- Set `
skripsi-finder
` as its dataset name
- Choose `
Persistent
` as its dataset type
- Upload dataset `dataskripsi
`that is located in `
.\SkripsiFinder\src\Database
`
## Features
- Find thesis by title
- Find thesis by student ID
- Find thesis by author
- Find thesis by specific field of study
- Find thesis by year

## Group
- Faradilla A - 140810170001
- Rividya Permata A - 140810170047
- Cryssa Aprilia E P - 140810170063
