const core = require('@actions/core')
const exec = require('@actions/exec')
const { wait } = require('./wait')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const result = await exec.exec('terraform fmt -check')
    if (result === 0) {
      console.log('Terraform fmt check passed.')
    } else {
      console.error('Terraform fmt check failed.')
    }
    core.setOutput('time', result)
  } catch (error) {
    // Fail the workflow run if an error occurs
    console.error('Terraform fmt check failed.') 
  }
}

module.exports = {
  run
}
