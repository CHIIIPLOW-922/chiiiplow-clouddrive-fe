pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                        url: 'https://github.com/CHIIIPLOW-922/chiiiplow-clouddrive-fe.git'
            }
        }
        stage('Get Git Commit ID') {
            steps {
                script {
                    // 获取短 commit ID（前 7 位）
                    env.GIT_COMMIT_SHORT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim() + "-" + sh(script: "date +%Y%m%d%H%M%S", returnStdout: true).trim()
                    echo "Git Commit ID: ${env.GIT_COMMIT_SHORT}"
                }
            }
        }
        stage('Docker Build & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-account', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                    docker build -t chiiiplow/clouddrive-fe:${GIT_COMMIT_SHORT} .
                    docker push chiiiplow/clouddrive-fe:${GIT_COMMIT_SHORT}
                    '''
                }
            }
        }

        stage('Deploy to K8s') {
            steps {
                script {
                    sh """
                    sed -i 's|image: chiiiplow/clouddrive-fe:.*|image: chiiiplow/clouddrive-fe:${GIT_COMMIT_SHORT}|' k8s/deployment-fe.yaml
                    """
                }
                withKubeConfig([credentialsId: 'kubeconfig-jenkins']) {
                    sh 'kubectl apply -f k8s/service-fe.yaml || true'
                    sh 'kubectl apply -f k8s/deployment-fe.yaml'
                    sh 'kubectl rollout status deployment/clouddrive-fe -n default'
                }
            }
        }
    }
    post {
        always {
            // 清理本地 Docker 镜像，节省空间
            sh 'docker rmi $(docker images -f "dangling=true" -q)'
            sh "docker rmi chiiiplow/clouddrive:${GIT_COMMIT_FE} || true"
        }
    }
}
