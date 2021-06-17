// parse函数，主函数
export default function (templateString){
    // 指针
    let index = 0;
    // 剩余部分
    let rest = '';
    // 开始标记
    const startRegExp = /^\<([a-z]+[1-6]?)\>/;
    // 结束标记
    const endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    // 准备两个栈
    let stack1 = [];
    let stack2 = [];

    while(index < templateString.length - 1){
        rest = templateString.slice(index)
        // console.log(restTemplateString);
        // console.log(templateString[index]);
        // 识别遍历剩余的字符。看是不是一个开始标签。
        if(startRegExp.test(rest)){
            let tag = rest.match(startRegExp)[1]
            console.log('开始标记'+tag);
            // 将开始标记推入栈中
            stack1.push(tag);
            // 将空数组推入栈2中
            stack2.push([])
            // 指针移动标签的长度加2，为什么要加2呢？因为<>也占两位
            index += tag.toString().length + 2
        }else if(endRegExp.test(rest)){
            // 识别遍历到的字符，是不是一个结束标签
            let tag = rest.match(endRegExp)[1]
            console.log('结束标记'+tag);
            // 指针移动标签的长度加3，为什么要加2呢？因为</>也占三位
            index += tag.toString().length + 3
        }else{
            index++;
        }
        // index++;
    }
}