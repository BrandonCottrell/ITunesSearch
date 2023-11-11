$(document).ready(function(){

    var searchThis = prompt("What would you like to look up?")
    
    let endpoint = 'https://itunes.apple.com/search';
    let params = {
        term: searchThis,
        // filter: 'full',
        limit: 20
        
    }

    

    $.get(
        endpoint,
        params,
        function(data){
            data.results.forEach(result => {
                $('#result').append(`<h4>Title: <h6>${result.collectionName ?? result.trackName}<h6> </h4>`);
                $('#result').append(`<h4>Media Type: <h6>${result.kind ?? result.wrapperType}</h6> </h4>`);
                $('#result').append(`<h4>Artist Name: <h6> ${result.artistName ?? 'N/A'} </h6></h4><hr>`);
            })
        },
        'json'
    )

})
