'use strict'

// TODO: make all of these functions configurable from the outside
// the user should be able to manipulate those

function getNamespace(service) {
  return `sls-${service}`
}

function getRepository(username, name) {
  return `${username}/${name}`.toLowerCase()
}

function getTag() {
  // TODO: this has to increment / be changed so that Knative picks up the changes
  return 'latest'
}

function getFuncName(service, funcName) {
  return `${service}-${funcName}`.toLowerCase()
}

function getFuncUrl(service, funcName) {
  return `${getFuncName(service, funcName)}.${getNamespace(service)}.example.com`
}

module.exports = {
  getNamespace,
  getRepository,
  getTag,
  getFuncName,
  getFuncUrl
}
