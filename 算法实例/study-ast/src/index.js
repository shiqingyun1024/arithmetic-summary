import parse from './parse'
var templateString = `<div>
      <h3>你好</h3>
      <ul>
          <li></li>
          <li></li>
          <li></li>
      </ul>
   </div>`;
parse(templateString)
console.log(parse(templateString) );