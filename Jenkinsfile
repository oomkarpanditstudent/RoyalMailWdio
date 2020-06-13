pipeline { 
    agent any 
   
     stages {

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
        }  
         post{  
         always{
               archiveArtifacts artifacts: '.tmp/**'
               bat 'docker-compose down' 
               }
        }                    
}