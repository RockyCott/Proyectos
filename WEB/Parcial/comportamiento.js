$(document).ready(function(){
    $('#gustos').on('click', function(){
        $("#central").load('arcgustos.php');
        return false;
    })
});

