# DOM
`console.log(window);`      //window is the object
- `console.log(window.document);` or `console.log(document);`  //we can directly use like this as well
- `console.dir(document);`  //to know more details about the 'document' 

`console.log(document.baseURI);`    //shows the base URI

`console.log(document.links);`            //show all links,in HTMLCollection

`console.log(document.links[2]);`   //show second link

`document.getElementsById('first heading');`  //show the node which 'id = first heading'

`document.getElementsById('first heading').innerHTML = "<h1> Hello </h1>" ;`  //we can manipulate as well


## All DOM selectors, NodeList and HTMLCollection
- `document.getElementsById('title');`    //Output:

        <h1 id="title" class="heading">
            DOM learning on Chai aur code
            <span style="display: none">test text</span>
        </h1>

- `document.getElementsById('title').id;` //output:

        'title'

- `document.getElementsById('title').className;` //output:

        'heading'

- `document.getElementsById('title').getAttribute('id');` 

        'title'

- `document.getElementsById('title').getAttribute('class');` 

        'heading'

- `document.getElementsById('title').setAttribute('class', 'test');`    //override

- `document.getElementsById('title').getAttribute('class', 'test heading');`    //present both 

- `document.getElementsByClass('heading');` //output will be HTMLCollection

        HTMLCollection [h1#title.heading, title: h1#title.heading]


`const title = document.getElementsById('title');`  
`title.style.backgroundColor = "green";`
`title.style.padding = "15px";`
`title.style.borderRadius = "15px";`

## Add content:


`title.innerText;`    //output (show the text which is visible) 
        
        DOM learning on Chai aur Code

`title.textContent;`    //output (show the text which is hidden also, may be through 'display or css property')
        
        DOM learning on Chai aur Code


`title.innerHTML;`    //output (shows HTML value as well)
        
        DOM learning on Chai aur Code <span style = "display: none;"> test </ span>

## querySelector()

`document.querySelector('h1');` //show first h1

`document.querySelector('#title');` //show the element which has (id = 'title')

`document.querySelector('.heading');` //show the element which has (class = 'heading')

`document.querySelector('input[type = 'password']');`

`document.querySelector('p;first-child');`  
#

    const myul = document.querySelector('ul');
    
    const turnGreen = myul.querySelector('li');

    turnGreen.style.backgroundColor = "green";

    turnGreen.innerText = 'five';

## querySelectorAll()

        `const tempLiList = document.querySelectorAll('li');`  //output: NodeList, which is not pure 'array'

        `tempLiList.style.color = 'green';` //this will not work

        `tempLiList[0].style.color = 'green';` //this will work


        const myh1 = document.querySelectorAll('h1')    //NodeList

        `myh1.style.color = 'green';` //this will not work

        `myh1[0].style.color = 'green';` //this will work

        `tempLiList.forEach(function (l) {
                l.style.backgroundColor = 'green';
        })`     

## we should use 'forEach' loop in 'NodeList', `(NodeList: forEach`) and
## if we want to use '.map()', we have to convert to 'array', (`Array: .map()`)

## document.getElementsByClassName():

`HTMLCollection != NodeList`
        
        document.getElementsByClassName('list-item')    //output: HTMLCollection
## we can't use 'forEach' loop on HTMLCollection, we have to convert it into 'Array'

       const tempClassList = document.getElementsByClassName('list-item')

       const myConvertedArray = Array.from(tempClassList)       //now we get the values in 'array []'

        myConvertedArray.forEach(function (li) {
                 li.style.color = 'orange'
        });

