pipeline {
  agent {
    node {
      label '1'
    }

  }
  stages {
    stage('Build') {
      steps {
        script {
          echo "Building Docker image"
          sh 'docker build -t my-app .'
        }

      }
    }

    stage('Test') {
      steps {
        script {
          echo "Running tests"
          sh 'docker run --rm my-app npm test'
        }

      }
    }

    stage('Deploy') {
      steps {
        script {
          echo "Deploying application"
          sh 'docker run -d -p 3000:3000 --name my-app-container my-app'
        }

      }
    }

  }
}