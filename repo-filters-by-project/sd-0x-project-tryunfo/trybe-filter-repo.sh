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
  --path only-image.png \
  --path skip-image.png \
  --path images \
  --path src/tests/01.Form.test.js \
  --path src/tests/02.FormProps.test.js \
  --path src/tests/03.CreateCard.test.js \
  --path src/tests/04.PreviewCard.test.js \
  --path src/tests/05.ValidateSaveButton.test.js \
  --path src/tests/06.SaveButton.test.js \
  --path src/tests/07.Trunfo.test.js \
  --path src/tests/08.CardList.test.js \
  --path src/tests/09.DeleteCard.test.js \
  --path src/tests/10.NameFilter.test.js \
  --path src/tests/11.RareFilter.test.js \
  --path src/tests/12.TrunfoFilter.test.js \
  --path README.md \
  --invert-paths --force
