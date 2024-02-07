let fs = require('fs')
let path = require('path')
const file = path.join(__dirname, './data.txt')
const {ageCheck} = require('./age')


function write(content){
    try {
        fs.writeFile(file, content, err =>{
            if(!err){
                console.log('Saved to text file, check file for content');
            }
        })
        
    } catch (e) {
        console.log('Issue writing to file'+ ''+ e);
        
    }
}

write(ageCheck(15))


