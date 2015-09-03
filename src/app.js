$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/repos/HopeUA/theme-modular/branches",
        dataType: "json",
        success: function (returndata)
        {
            $.each(returndata, function(index, item){
                if (item.name != 'master') {
                    var link = '<li><a href="/' + item.name +'">' + item.name + '</a></li>';
                    $('.branches').append(link);
                }
            });
        }
    });
});