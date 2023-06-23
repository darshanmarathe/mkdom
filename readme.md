# mkDOM (Make DOM)

Make DOM is a library which will allow you to create DOM Programmatically.   

## Why

Have you written code like this 

    myElem.innerHTML = `<div class='card'> ${title} </div>

 and **Source Code Analysis Tools** for e.g. checkmarks are reporting as possible **XSS** attack the tool is right but then how to fix it here comes the mkDOM lib with a fluent API to help you 

    const div = mkDOM('div' , {
    "class":  'card'
    }).content(title)
    myElem.appendChild(div.element)

But now your code is safe and SCAT tools are happy with it. :-)  

## Fluent API

    const  container  =  mkDOM('div' , {
    'id' :  'container',
    "class":  'container'
    })
    
    container.content("Hello world")
    .attr('data-id' , "container")
    .append(
	    mkDOM('ul' , {'class' :  'menu'}).appendArray(
	    [1 , 2 , 3, 4 ,5] , function(i) {
	    return  mkDOM('li' , {'class' :  'menuItem'})
	    .content(i)
	    .css('border' , '1px dashed green')
	    .css('text-align' , 'center')
	    .on('mouseenter' , function(){
	    this.style.backgroundColor  =  'gray';
    })
    .on('mouseout' , function(){
	    this.style.backgroundColor  =  ''
    })
    })).append(
    mkDOM('button' , {
    'type' :  'submit'
    }).content('Submit')
    .on('click' , "SayHi()")
    )
    .append(
    mkDOM('button' , {
    'type' :  'submit'
    }).content('reset with inline function')
    .on('click' , function(e) {
    e.preventDefault();
    alert('resetting....')
    })
    )

## API
construct 

    const elem  = mkDOM('div')
    // Output
    //<div></div>


construct advanced 

    const elem  = mkDOM('div', {
    'class' : 'app'
    })
    // Output
    //<div class='app'></div>


append

    const elem  = mkDOM('div', {
        'class' : 'app'
        }).append(
		    mkDOM('span').content('hello world')
    	)
        // Output
        //<div class='app'>
        <span> Hello world </span>
        </div>

.data (setter and getter)

    const elem  = mkDOM('div').data('id' , 'test')
    const id = elem.data('id')
    //<div data-id='test></div>

.content (setter, getter)

    const elem  = mkDOM('div').content('hello world')
    const content = elem.content();
    //<div>Hello world</div>

.css (setter , getter)

    const elem  = mkDOM('div').css('border' , '1px solid black')
    const css= elem.css('broder');
    //<div style='border:1px solid black'></div>


.attr (setter , getter)

    const elem  = mkDOM('div').attr('rel' , 'container')
    const attr= elem.attr('rel');
    //<div rel='container'></div>

.on(event , callback)

    const elem  = mkDOM('div'),content('click me').on('click' , (e) => {
    alert('hello')   
    })	
    const attr= elem.attr('rel');
    //<div>click me</div>

appendArray(arr, callback)
     
 

    mkDOM('ul' , {'class' :  'menu'}).appendArray(
    	    [1 , 2 , 3, 4 ,5] , function(i) {
    	    return  mkDOM('li' , {'class' :  'menuItem'})
    	    .content(i)
    )
