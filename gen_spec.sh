#!/bin/sh

echo "*** IMPORTANT NOTE ***"
echo "This script assumes you're using the latest version of swagger-codegen 2.3 and have built it locally."
echo "This script will regenerate the JSON definitions and also generate the swagger-spec.js updates for swagger-ui"
echo "This script does NOT commit or push any code."

#capture path to local swagger codegen
#/Users/dwasyluk/Development/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
read -p "Enter path to swagger-codegen-cli: " CODEGEN

#verify before generating
echo "Does this look correct:"
echo "Swagger codegen: $CODEGEN"

read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

echo "Generating server JSON spec..."
#create a temp folder to hold generated stuff
mkdir ./generated-temp
java -jar $CODEGEN generate -i swagger.yaml -l swagger -o ./generated-temp

#copy the generated .json file to the production code location
cp ./generated-temp/swagger.json ./swagger_generated.json

#remove temp files
rm -rf ./generated-temp

#copy the new spec to swagger-ui as a JS var
echo "var swaggerSpec = " > ./swagger-ui/dist/swagger-spec.js
cat swagger_generated.json >> ./swagger-ui/dist/swagger-spec.js

echo "JSON Generation complete."

