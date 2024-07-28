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
