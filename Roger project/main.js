$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

// $(document).ready(function(){
//     $('#my-table').dataTable();
// });

var options = {
  valueNames: [ 'name', 'price' ]
};

var userList = new List('users', options);

