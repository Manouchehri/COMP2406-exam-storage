$(function() {
    var fileList = $("#fileList");

    var stats;

    function downloadFile(i) {
        function saveDownloadedFile(fileContents) {
            console.log("Trying to save file");
            console.log(fileContents);
            saveAs(new Blob([fileContents],
                            {type: "text/plain;charset=utf-8"}),
                   stats[i].name);
        }
        
        return function() {
            $.post("/downloadFile", {downloadFile: stats[i].name},
                   saveDownloadedFile);
        }
    }
    
    function doUpdateFileList (returnedStats) {
        var i;
        stats = returnedStats;
        fileList.empty();
        for (i=0; i<stats.length; i++) {
            fileList.append('<li> <a id="file' + i + '" href="#">' +
                            stats[i].name +
                            "</a> (" + stats[i].size + " bytes)");
            $("#file" + i).click(downloadFile(i));
        }
    }
    
    function updateFileList () {
        $.getJSON("/getFileStats", doUpdateFileList);
    }

    updateFileList();
    
    $("#fileuploader").uploadFile({
        url:"/uploadText",
        fileName:"theFile",
        dragDrop: false,
        uploadStr: "Upload Files",
        afterUploadAll: updateFileList
    });    
});
