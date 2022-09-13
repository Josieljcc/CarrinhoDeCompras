### GIT FILTER-REPO ###

## NÃO EXECUTE ESSE SCRIPT DIRETAMENTE
## Esse script foi feito para uso do
## script 'publisher.sh' fornecido
## pela Trybe.

[[ $# == 1 ]] && \ 
[[ $1 == "trybe-security-parameter" ]] && \ 
git filter-repo \
  --path .trybe \
  --path .github \
  --path trybe.yml \
  --path trybe-filter-repo.sh \
  --path src/tests/01.Header.test.js \
  --path src/tests/02.SolarSystem.test.js \
  --path src/tests/03.Title.test.js \
  --path src/tests/04.SolarSystemTitle.test.js \
  --path src/tests/05.PlanetCard.test.js \
  --path src/tests/06.SolarSystemRender.test.js \
  --path src/tests/07.Missions.test.js \
  --path src/tests/09.MissionCard.test.js \
  --path src/tests/08.MissionsTitle.test.js \
  --path src/tests/10.MissionsRender.test.js \
  --path only-image.png \
  --path skip-image.png \
  --path README.md \
  --invert-paths --force
