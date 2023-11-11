$(document).ready(function(){

    // let searchTerm = $("myInput").val();
    let endpoint = 'https://itunes.apple.com/search';
    let params = {
        term: searchTerm,
        // filter: 'full',
        //limit: 5
    }

    

    $.get(
        endpoint,
        params,
        function(data){
            data.results.forEach(result => {
                $('#result').append(`<h4>Title: <h6>${result.collectionName ?? result.trackName}<h6> </h4>`);
                $('#result').append(`<h4>Media Type: <h6>${result.wrapperType}</h6> </h4>`);
                $('#result').append(`<h4>Artist Name: <h6> ${result.artistName ?? 'N/A'} </h6></h4><hr>`);
                
                // $('#result').append(`<h3>${result.trackName}</h3><hr>`);
                // if(item.volumeInfo.authors){
                //     $('#result').append(`<p>By: ${item.volumeInfo.authors.join(', ')}</p>`);
                // }
                
                // $('#result').append(`<p>By: ${item.volumeInfo?.authors?.join(', ') ?? 'N/A'}</p>`);

                // $('#result').append(`<img src="${item.volumeInfo?.imageLinks?.thumbnail}"><hr>`);
            })
        },
        'json'
    )

})