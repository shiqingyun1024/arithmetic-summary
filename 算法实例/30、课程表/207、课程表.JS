// 难度：中等

// 题目：
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程 bi 。

// 例如，先修课程对[0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：numCourses = 2, prerequisites = [[1, 0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。

// 示例 2：

// 输入：numCourses = 2, prerequisites = [[1, 0], [0, 1]]
// 输出：false
// 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

// 提示：

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// prerequisites[i] 中的所有课程对 互不相同

// 解题思路：
// 解决这道题，我们可以使用拓扑排序的方法。拓扑排序是对有向无环图(DAG)的顶点的一种排序，它使得对于每一条有向边 u -> v，顶点 u 都会在顶点 v 之前出现在排序结果中。在这个问题中，课程可以看作顶点，先修关系构成有向边，我们需要检查这个图是否存在环，如果不存在环，则可以完成所有课程的学习。

// 构建邻接表：首先，根据prerequisites构建一个邻接表，表示每门课程的先修课程有哪些。
// 拓扑排序：遍历所有课程，对于每门课程，检查它是否有未完成的先修课程。如果没有，则将其加入结果序列（也就是可以学习这门课了），并将它指向的所有课程的入度减一（表示其依赖减少了一个）。重复此过程直到所有课程都被处理或者无法继续推进（即存在环）。
// 检查环：使用一个队列来跟踪当前没有先修课程的课程（即入度为0的课程），如果最终能将所有课程加入结果序列，则说明没有环，可以完成所有课程；反之，如果有课程无法加入结果序列（即队列为空但还有课程未学习），则说明存在环，无法完成所有课程。
// JavaScript 实现：



/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    // 构建邻接表
    const adjList = new Array(numCourses).fill(null).map(() => []);
    for (const [course, prereq] of prerequisites) {
        adjList[prereq].push(course);
    }

    // 计算每门课程的入度
    const indegree = new Array(numCourses).fill(0);
    prerequisites.forEach(([course]) => indegree[course]++);

    // 使用队列进行拓扑排序
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // 遍历课程
    while (queue.length > 0) {
        const course = queue.shift();
        numCourses--; // 可以前进一步学习的课程数减一

        // 减少其后续课程的入度
        adjList[course].forEach(nextCourse => {
            indegree[nextCourse]--;
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        });
    }

    // 如果numCourses为0，说明所有课程都可以完成
    return numCourses === 0;
}

// 示例
const numCourses = 2;
const prerequisites = [[1, 0]];
console.log(canFinish(numCourses, prerequisites)); // 输出: true
