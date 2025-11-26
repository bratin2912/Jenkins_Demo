pipeline {
    agent any

    environment {
        IMAGE_NAME = 'bratin2912/react-app'
        IMAGE_TAG = '${IMAGE_NAME}:${env.GIT_COMMIT}'
    }

    stages {

        stage('Setup') {
            steps {
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                sh "npm run test"
            }
        }
        stage('Login to docker hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-creds',
                usernameVariable: 'USERNAME', password: 'PASSWORD')]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                    echo 'Login to Docker Hub successful'
                }
            }
        }
        stage('Build docker image') {
            steps {
                sh 'docker build -t ${IMAGE_TAG} .'
                echo 'Docker image build successfully'
                sh 'docker image ls'
            }
        }
        stage('Push Docker Image') {
            steps {
                sh 'docker push ${IMAGE_TAG}'
                echo 'Docker image pushed successfully'
            }
        }
    }
}