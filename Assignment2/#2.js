/* 2. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a
CSS preprocess'. If it does not exist add Sass to the array and print the array. */


let webTechs = ['HTML','CSS','DJANGO','PYTHON']
if (webTechs.includes('Sass',0)) {
    console.log('Sass is a CSS preprocess');
    
}
else{
    webTechs.push('Sass')
}
console.log(webTechs);