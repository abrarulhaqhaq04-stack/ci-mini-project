pipeline {
    agent any 

    environment {
        APP_NAME = 'Hello-app'
        VERSION = '1.0'
    }

    parameters {
        choice(name: 'Environment', choices: ['dev', 'qa', 'prod'], description: 'Select the environment to deploy')
        booleanParam(name: 'Deploy', defaultValue: true, description: 'Check to deploy the application')
    }

    stages {
        stage('checkout') {
            steps {
                echo "Checking out the code...."
        
            }
        }
        stage('Build') {
            steps {
                echo "Building the application..."
                sh  'echo "Building ${APP_NAME} version ${VERSION}"'
            }
        }

        stage('Test') {
            steps {
                sh '''
                    echo "Hello World" > test.txt

                    if grep -q "Hello" test.txt; then
                        echo "Test passed"
                    else
                        echo "Test failed"
                        exit 1
                    fi
                '''
            }
        }
        stage('Deploy') {
            when {
                expression { params.Deploy }
            }
            steps {
                echo "Deploying the application to ${params.Environment} environment..."
                sh 'echo "Deploying ${APP_NAME} version ${VERSION} to ${params.Environment}"'
            }
        }
    }
        post {
            always {
                echo "Cleaning up workspace..."
                cleanWs()
            }
        }
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check the logs for details......"
        }
    }

