Windows Command Prompt to execute local chrome test:

set "server=prod" && npm run local_chrome

Powershell

($env:server="prod") -and (npm run local_chrome)
