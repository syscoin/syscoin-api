#!/bin/sh

echo "*** IMPORTANT NOTE ***"
echo "This script assumes you're using the latest version of swagger-codegen 2.3 and have built it locally."
echo "This script will only regenerate the YAML definitions for a given language as it assumes business logic is mature and should not be overwritten by generated code."
echo "This script does NOT commit or push any code."

#capture output language
read -p "Enter client language: " LANGUAGE

#capture output directory, this is where we will copy the .yaml file
read -p "Enter output directory: " OUTPUTDIR

#capture path to local swagger codegen
#/Users/dwasyluk/Development/swagger-codegen/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
read -p "Enter path to swagger-codegen-cli: " CODEGEN

#verify before generating
echo "Does this look correct:"
echo "Output language: $LANGUAGE"
echo "Output directory: $OUTPUTDIR"
echo "Swagger codegen: $CODEGEN"

read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

echo "Generating server sdk..."
#create a temp folder to hold generated stuff
mkdir ./generated-temp
java -jar $CODEGEN generate -i ../swagger.yaml -l $LANGUAGE -o ./generated-temp

#copy the generated .yaml file to the production code folder for the given language
cp ./generated-temp/api/swagger.yaml $OUTPUTDIR/api/swagger.yaml
rm -rf ./generated-temp

echo "YAML Generation complete."

