// parse函数，主函数
export default function (templateString){
    // 指针
    let index = 0;
    // 剩余部分
    let rest = '';
    // 开始标记
    const startRegExp = /^\<([a-z]+[1-6]?)\>/;
    while(index < templateString.length - 1){
        rest = templateString.slice(index)
        // console.log(restTemplateString);
        // console.log(templateString[index]);
        // 识别遍历剩余的字符。看是不是一个开始标签。
        if(startRegExp.test(rest)){
            let tag = rest.match(startRegExp)[1]
            console.log(tag);
            // 指针移动标签的长度加2，为什么要加2呢？因为<>也占两位
            index += tag.toString().length + 2
        }else{
            index++
        }
        // index++;
    }
}