//aneeqa
exports.ageCheck = (age)=>{
    if(age>=18){
        return 'You are vrek old yoh';
    } else {
        return 'Go do your creative arts homework';
    }
}
let fs = require('fs')
let path = require('path')
const file = path.join(__dirname, './data.txt')

exports.write = (content)=>{
    try {
        fs.writeFile(file, content, err =>{
            if(!err){
                console.log('Saved to text file, check file for content');
            }
        })
        
    } catch (e) {
        console.log('Issue writing to file'+ e);
        
    }
}

