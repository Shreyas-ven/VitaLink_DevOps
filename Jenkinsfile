pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Client Dependencies') {
            steps {
                dir('client') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Server Dependencies') {
            steps {
                dir('server') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker compose build'
            }
        }

    }

    post {

        success {
            echo 'VITALINK CI Pipeline Completed Successfully'
        }

        failure {
            echo 'VITALINK CI Pipeline Failed'
        }

    }
}