#!/bin/sh

echo "*** IMPORTANT NOTE ***"
echo "This script assumes you're using the latest version of swagger-codegen 2.3 and have built it locally."
echo "This script will regenerate the JSON definitions ONLY at all levels, also generating the swagger-spec.js updates for swagger-ui."
echo "This script DOES NOT COMMIT AND PUSH CODE!"

#capture path to local swagger codegen
#/Users/dwasyluk/Development/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
read -p "Enter path to swagger-codegen-cli: " CODEGEN

#capture commit message to be used on swagger-ui
read -p "Enter swagger-ui commit message: " SWAGGER_UI_MSG

#capture commit message to be used on syscoin-api
read -p "Enter syscoin-api commit message: " SYSCOIN_API_MSG

#verify before generating
echo "Does this look correct:"
echo "Swagger codegen: ${CODEGEN}"
echo "swagger-ui msg: ${SWAGGER_UI_MSG}"
echo "syscoin-api msg: ${SYSCOIN_API_MSG}"

read -p "Continue? (Y/N): " confirm && [[ ${confirm} == [yY] || ${confirm} == [yY][eE][sS] ]] || exit 1

echo "Generating server JSON spec..."
#create a temp folder to hold generated stuff
mkdir ./generated-temp
java -jar ${CODEGEN} generate -i swagger.yaml -l swagger -o ./generated-temp

#copy the generated .json file to the production code location
cp ./generated-temp/swagger.json ./swagger_generated.json

#generate the server side YAML version of the definitions
java -jar ${CODEGEN} generate -i swagger.yaml -l nodejs-server -o ./generated-temp
cp ./generated-temp/api/swagger.yaml ./server/nodejs/api/swagger.yaml #move the regenerated YAML to the nodjs dir

#remove all temp files
rm -rf ./generated-temp

echo "Server Spec JSON Generation complete."

#copy the new spec to swagger-ui as a JS var
echo "var swaggerSpec = " > ./swagger-ui/dist/swagger-spec.js
cat swagger_generated.json >> ./swagger-ui/dist/swagger-spec.js

#commit and push the changes thus far
( cd swagger-ui && git commit -m "${SWAGGER_UI_MSG}" dist/swagger-spec.js && git push origin dev )
git add swagger-ui
echo "Swagger-ui successfully updated via GIT"

#commit the nodejs server
git commit swagger.yaml swagger_generated.json server/nodejs/api/swagger.yaml swagger-ui -m "${SYSCOIN_API_MSG}"
git push

echo "All spec files regenerated and committed/pushed."


