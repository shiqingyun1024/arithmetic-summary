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
    // 抓取结束标记前的文字
    const wordRegExp = /^([^\<]+)\<\/([a-z]+[1-6]?)\>/
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
            // console.log('开始标记'+tag);
            // 将开始标记推入栈中
            stack1.push(tag);
            // 将空数组推入栈2中
            stack2.push([])
            // 指针移动标签的长度加2，为什么要加2呢？因为<>也占两位
            index += tag.toString().length + 2
        }else if(endRegExp.test(rest)){
            // 识别遍历到的字符，是不是一个结束标签
            let tag = rest.match(endRegExp)[1]
            // console.log('检测到结束标记'+tag);
            // 此时，tag一定是和栈1顶部的是相同的
            if(tag == stack1[stack1.length - 1]){
                // stack1进行弹栈
               stack1.pop();
            }else{
                throw new Error('标签没有封闭！！！')
            }
            // 指针移动标签的长度加3，为什么要加2呢？因为</>也占三位
            index += tag.toString().length + 3
        }else if(wordRegExp.test(rest)){
            // 识别遍历到的这个字符，是不是文字，并且不能是全空
            let word = rest.match(wordRegExp)[1];
            // 看word是不是全是空
            if(!/^\s+$/.test(word)){
                // 不是全是空时
                console.log('检测到文字',word);
            }
            

            index += word.length;

        }else{
            index++;
        }
        // index++;
    }
}