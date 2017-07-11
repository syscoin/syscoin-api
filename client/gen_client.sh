#!/bin/sh

echo "*** IMPORTANT NOTE ***"
echo "This script assumes you're using the latest version of swagger-codegen 2.3 and have built it locally"
echo "This script does NOT commit or push any code."

#capture output language
read -p "Enter client language: " LANGUAGE

#capture output directory
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

echo "Generating client sdk..."
java -jar $CODEGEN generate -i ../swagger.yaml -l $LANGUAGE -o $OUTPUTDIR
echo "Generation complete."

