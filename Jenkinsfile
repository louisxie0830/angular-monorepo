pipeline {
    agent any
    environment {
        NODE_BIN = '/Users/louis/.nvm/versions/node/v20.0.0/bin'
        BIN = '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/louis/.nvm/versions/node/v20.0.0/bin'
        PATH = "${BIN}"
    }
    stages {
        stage('Checkout') {
          steps {
            script {
              git credentialsId: 'github', url: 'https://github.com/louisxie0830/angular-monorepo.git'
            }
          }
        }
        stage('Build') {
          steps {
            script {
              sh "npm -v"
              sh "npm ci"
              sh "npm run cy:verify"
              sh "npm run cy:info"
              sh "npm run cy:version"
            }
          }
        }
        stage('Cypress parallel tests') {
          parallel {
            stage('tester pokemon-e2e') {
              steps {
                script {
                  sh 'npx nx run pokemon-e2e:e2e'
                }
              }
            }
          }
        }
    }
}
