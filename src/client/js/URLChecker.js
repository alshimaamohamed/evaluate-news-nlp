function CheckFormatofURL(url) {
   var regularForUrl= new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
    if(regularForUrl.test(url))
         return true
     else
         return false   
}

export default CheckFormatofURL 
