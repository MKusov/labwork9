// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function show_result(data) {
    var array=data.value;
    var table=document.createElement('div');
    table.className='div-table';
    var legend=document.createElement('div');
    legend.className='div-table-legend';
    var string='Нашлось ' + data.value.length + ' простых чисел Мерсена';
    var name=document.createTextNode(string);
    legend.appendChild(name);
    table.appendChild(legend);
    for (var i = 0; i < data.value.length; i++) {
        var row = document.createElement('div');
        row.className = 'div-table-row';
        var col1 = document.createElement('div');
        col1.className = 'div-table-col';
        var col2 = document.createElement('div');
        col2.className = 'div-table-col';
        var iter = document.createTextNode((i + 1).toString());
        var num = document.createTextNode((array[i]).toString());
        col1.appendChild(iter);
        col2.appendChild(num);
        row.appendChild(col1);
        row.appendChild(col2);
        table.appendChild(row);
    }
    $('#div-table').replaceWith(table);
}
$(document).ready(function(){
    $("#my_form").bind("ajax:success",
        function(xhr, data) {
            show_result(data)
        })
});