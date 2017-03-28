# Generating API

To generate the API first download [swagger-codegen](https://github.com/swagger-api/swagger-codegen) and build it. After its built, create an alias:

`alias swagger-codegen='java -jar [/path/to/built/swagger-codegen]/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar'`

##Generating the JSON Spec 
Anytime the root swagger.yaml is modified the JSON spec should be updated and copied into 
`swagger-ui/dist/swagger-spec.js` as the value for the `swaggerSpec` var. Currently this is a manual process.

To regenerate the JSON API spec due to YAML changes (required for docs UI to be accurate): `generate -i swagger.yaml -o ./generated-json -l swagger`. 
The generated JSON can be deleted after its been copied to `swagger-spec.js`.

##Generating Server Stubs
You can contribute to the syscoin-api project by writing connectors for Syscoin in different languages.
Swagger-codegen can greatly reduce the time it takes to write connectors in other languages by generating a server-api stub 
in the desired language. To generate the Server stub use the command below replacing LANGUAGE with one of the [supported SwaggerJS server values](https://github.com/swagger-api/swagger-codegen/wiki/Server-stub-generator-HOWTO).

To build the server SDK stub: `swagger-codegen generate -i swagger.yaml -o ./server/generated-server -l LANGUAGE`

We encourage anyone who does this to submit a pull request to have their server API added to the official repo. 
Package your server API using folder names mirroring the swagger language name, ie: 'nodejs-server'. Client API's can also be submitted using the same \
 format.

##Generating the Client SDK
To quickly start communicating with an instance of the Syscoin API server simply generate a client-side SDK 
in your preferred language. To generate the Client SDK use the command below replacing LANGUAGE with one of 
the [supported SwaggerJS client values](https://generator.swagger.io/#!/clients/clientOptions).

To build the client: `swagger-codegen generate -i swagger.yaml -o ./client/generated-client -l LANGUAGE`