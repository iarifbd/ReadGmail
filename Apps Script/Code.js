function doGet(e){
  return ContentService.createTextOutput("Method GET not allowed")
}

function doPost(e){
  var build = Greader.builder(e)
  return ContentService.createTextOutput(build)
}