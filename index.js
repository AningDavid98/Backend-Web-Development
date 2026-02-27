import fs from 'fs';

fs.writeFile('message.txt', 'welcome to node.js', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});