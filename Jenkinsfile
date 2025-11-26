pipeline {
    agent any

    environment {
        IMAGE_NAME = 'bratin2912/react-app'
        IMAGE_TAG = "${IMAGE_NAME}:${GIT_COMMIT}"
    }

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Login to docker hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'docker-creds',
                        usernameVariable: 'USERNAME',
                        passwordVariable: 'PASSWORD'
                    )
                ]) {
                    sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                }
            }
        }

        stage('Build docker image') {
            steps {
                sh "docker build -t ${IMAGE_TAG} ."
                sh "docker image ls"
            }
        }

        stage('Push Docker Image') {
            steps {
                sh "docker push ${IMAGE_TAG}"
            }
        }
    }
}
