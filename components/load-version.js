(function() {
  var httpRequest
  httpRequest = new XMLHttpRequest()

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance')
    return false
  }
  httpRequest.onreadystatechange = loadContent
  httpRequest.open('GET', 'versions.json')
  httpRequest.send()

  function loadContent() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        versions = JSON.parse(httpRequest.responseText)
        location.href = versions[versions.length - 1]
      } else {
        alert('There was a problem with the request.')
      }
    }
  }
})()
