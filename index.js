//Code your solution here
function getFirstSelector(selector)
{
  //accepts a selector and returns the first element that matches
  return document.querySelector(selector)
}

//getFirstSelector('div')

function nestedTarget()
{
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n)
{
  const lis = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++)
  {
  
    lis[i].innerHTML = Number.parseInt((i + 1).toString())
    //lis[i].innerHTML = (i+1).toString() //THIS ALSO WORKS! WITHOUT parseInt() function.
  }
}

function deepestChild()
{
  //div#grand-node
  return document.querySelector('#grand-node div div div div')
}
