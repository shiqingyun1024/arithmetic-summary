/**
 * 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。

给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。

 

示例 1：

输入：sequence = "ababc", word = "ab"
输出：2
解释："abab" 是 "ababc" 的子字符串。
示例 2：

输入：sequence = "ababc", word = "ba"
输出：1
解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
示例 3：

输入：sequence = "ababc", word = "ac"
输出：0
解释："ac" 不是 "ababc" 的子字符串。

提示：

1 <= sequence.length <= 100
1 <= word.length <= 100
sequence 和 word 都只包含小写英文字母。

*/ 

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let [maxRepeatCount,repeatCount,repeatString] = [sequence.length / word.length,0,'']
    for(let i = 0; i < maxRepeatCount; i++){
        repeatString += word
        if(sequence.includes(repeatString)){
            repeatCount++
        }else{
            break
        }
    }
    return repeatCount
};

/**
 * 一定要读懂题目，是连续重复，不是这个字符串里面包含多少个字符串，连续重复。
 * 最主要的是这个思想，先算出在这个是字符串中，可以重复的word的最大次数，然后进行循环遍历，每次都先加上word这个字符串，然后进行判断是否包含
 * 如果包含就加1，最后把这个总数return出去。这就是最后的连续的包含数
 * */ 