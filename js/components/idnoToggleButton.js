// Change this value if the layer is toggled on by default
let isOn = false;

$('#idno123Togglebutton').click(function(){
    if(isOn === false){
        console.log('isOn false', isOn);
        $('#idno123Togglebutton').removeClass('fa-toggle-off');
        $('#idno123Togglebutton').addClass('fa-toggle-on');
    };
    if(isOn === true) {
        console.log('isOn false', isOn);
        $('#idno123Togglebutton').removeClass('fa-toggle-on');
        $('#idno123Togglebutton').addClass('fa-toggle-off');
    };
    isOn = !isOn;
});