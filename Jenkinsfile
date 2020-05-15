pipeline { 
    agent any 
   
     stages {

        stage('Build Image') {
            steps {
                bat 'docker build -t oomkar/rm_wdio . '
            }
        }
        stage('Push Image') {
            steps {
			        bat 'docker push oomkar/rm_wdio:latest'
			    }                           
            }
        
        stage('Docker base image- checking for latest') {
            steps {
                bat 'docker pull oomkar/rm_wdio' 
            }
        }
        stage('Build - Set up GRID') { 
             
            steps { 
                bat 'docker-compose up -d selenium-hub chrome-dbug firefox-dbug' 
            }
        }   
        stage('Test - Run Automated Tests'){
            steps {
               bat 'docker-compose up rm_wdio-framework' 
            }
        }
        stage('Shutdown - Grid down') {
         
            steps {
                bat 'docker-compose down' 
                  }
            }                                   
         
        stage('Publish Report') {
         
            steps {
                publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, keepAll: true, reportDir: '.tmp\report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '']) 
                  }
             }                                   
    }
}