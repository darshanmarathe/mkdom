const container = mkDOM('div' , {
    'id' : 'container',
    "class": 'container'
})


function SayHi(){
    alert('hello world');
  
    const container2 = mkDOM('div' , {
        'id' : 'container2',
        "class": 'container'
    })
    
    setTimeout(() => {
        container2.clear().remove();
    }, 5000);
     container2.content("Append to test... will clear in 5 sec.")
    .attr('data-id' , "container")
    .append(
        mkDOM('ul' , {'class' : 'menu'}).appendArray(
            [1 , 2 , 3, 4 ,5] , function(i) {
                return mkDOM('li' , {'class' : 'menuItem'})
                .content(i)
                .css('border' , '1px dashed green')
                .css('text-align' , 'center')
                .on('mouseenter' , function(){
                    this.style.backgroundColor = 'gray';
                })
                .on('mouseout' , function(){
                    this.style.backgroundColor = '';
                })
            }
        )
     )
     .append(
        mkDOM('button' , {
            'type' : 'submit'
         }).content('Submit')
         .on('click' , "SayHi()")    
    )
    .append(
        mkDOM('button' , {
            'type' : 'submit'
         }).content('reset with inline function')
         .on('click' , function(e) {
            e.preventDefault();
            alert('resetting....')
         })    
    )



    container2.AppendTo('#copy')

}



container.content("Hello world")
        .attr('data-id' , "container")
        .append(
            mkDOM('ul' , {'class' : 'menu'}).appendArray(
                [1 , 2 , 3, 4 ,5] , function(i) {
                    return mkDOM('li' , {'class' : 'menuItem'})
                    .content(i)
                    .css('border' , '1px dashed green')
                    .css('text-align' , 'center')
                    .on('mouseenter' , function(){
                        this.style.backgroundColor = 'gray';
                    })
                    .on('mouseout' , function(){
                        this.style.backgroundColor = '';
                    })
                }
            )
         )
         .append(
            mkDOM('button' , {
                'type' : 'submit'
             }).content('Submit')
             .on('click' , "SayHi()")    
        )
        .append(
            mkDOM('button' , {
                'type' : 'submit'
             }).content('reset with inline function')
             .on('click' , function(e) {
                e.preventDefault();
                alert('resetting....')
             })    
        )

console.warn(container)

document.querySelector('#code').innerText = tidy_html5(container.markup() , options);

//Vanilla js
//document.getElementById('result').appendChild(container.element)

//JQuery
$('#result').append(container.element);



//Cant create scripts 
const script = mkDOM('script').content('alert("hi")') 


$('#result').append(script.element);
