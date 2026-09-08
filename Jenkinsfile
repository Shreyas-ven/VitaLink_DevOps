
pipeline {

    agent any

    stages {

        stage('Verify Docker') {

            steps {

                bat 'where docker'

                bat 'where docker-compose'

                bat 'docker --version'

                bat 'docker-compose --version'

                bat 'docker compose version'

            }

        }

    }

    post {

        success {
            echo 'Docker verification successful'
        }

        failure {
            echo 'Docker verification failed'
        }

    }

}
