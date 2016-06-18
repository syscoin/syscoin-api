# Generating API

To generate the API first download swagger-codegen () and build it. After its built, create an alias:
alias swagger-codegen='java -jar [/path/to/built/swagger-codegen]/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar'

To build the server stub (node): `swagger-codegen generate -i swagger.yaml -o ./server/generated-server -l nodejs-server`

To build the client (typescript): `swagger-codegen generate -i swagger.yaml -o ./client/generated-client -l typescript-node`

The API can be built for a number of other languages as well but you will need to manually port the business logic from the existing nodesjs-server \
API to the languages of your choice. We encourage anyone who does this to submit a pull request to have their server API added to the official repo.

Package your server API using folder names mirroring the swagger language name, ie: 'nodejs-server'. Client API's can also be submitted using the same \
 format.