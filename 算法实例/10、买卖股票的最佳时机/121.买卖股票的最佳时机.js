/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0] // 初始化最低价格为第一天的价格
    let maxProfit = 0 // 初始化最大利润为0

    // 从第二天开始遍历，因为第一天无法卖出
    for (let i = 0; i < prices.length; i++) {
        // 更新最低价格
        minPrice = Math.min(minPrice, prices[i])
        // 计算当前价格卖出的利润prices[i] - minPrice，并尝试更新最大利润
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit
};