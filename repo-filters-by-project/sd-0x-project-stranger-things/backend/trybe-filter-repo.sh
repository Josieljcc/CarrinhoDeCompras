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
    --path .vscode \
    --path trybe.yml \
    --path trybe-filter-repo.sh \
    --path README.md \
    --path tests/util.js \
    --path tests/constants.js \
    --path tests/01-varsEnv.test.js \
    --path tests/02-docker.test.js \
    --path tests/03-heroku.test.js \
    --path tests/04-linter.test.js \
    --path tests/05-deploy.test.js \
    --path tests \
    --invert-paths --force
