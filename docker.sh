#!/usr/bin/env bash

set -o errexit
set -o pipefail

SCRIPT_DIR="$(cd `dirname ${0}` && pwd)"

export RUN_UID="$(id -u)"
export RUN_GID="$(id -g)"
export COMPOSE_PROJECT_NAME="sample-integration-angular-offline"

docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" build
docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" run --rm change-volume-owner
docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" run --service-ports --rm "sample-integration" "${@}"
