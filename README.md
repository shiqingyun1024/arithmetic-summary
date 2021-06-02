# arithmetic-summary
算法相关的总结

### 一、算法
```
算法（Algorithm）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，
算法代表着用系统的方法描述解决问题的策略机制。
通俗地说，数据结构就是指存储数据的结构。算法就是操作数据的方法。
```
### 二、算法的特征
```
有穷性(Finiteness)：算法的有穷性是指算法必须能在执行有限个步骤之后终止
确切性(Definiteness)：算法的每一步骤必须有确切的定义
输入项(Input)：一个算法有0个或多个输入，以刻画运算对象的初始情况，所谓0个输入是指算法本身定出了初始条件
输出项(Output)：一个算法有一个或多个输出，以反映对输入数据加工后的结果，没有输出的算法是毫无意义的
可行性(Effectiveness)：算法中执行的任何计算步骤都是可以被分解为基本的可执行的操作步，即每个计算步都可以在有限时间内完成（也称之为有效性）
```
### 三、算法效率的度量
```
对于同一个问题，使用不同的算法，也许最终得到的结果是一样的，但在过程中消耗的资源和时间却会有很大的区别。
那么我们应该如何去衡量不同算法之间的优劣呢？
主要还是从算法所占用的「时间」和「空间」两个维度去考量。

时间维度：是指执行当前算法所消耗的时间，我们通常用「时间复杂度」来描述。

空间维度：是指执行当前算法需要占用多少内存空间，我们通常用「空间复杂度」来描述。

评价一个算法的效率主要是看它的时间复杂度和空间复杂度情况。有的时候时间和空间却又是「鱼和熊掌」不可兼得，那么我们就需要从中去取一个平衡点。
```
### 四、时间复杂度
```
【4.1】时间频度 ：一个算法执行所耗费的时间，从理论上是不能算出来的，必须上机运行测试才能知道。但我们不可能也没有必要对每个算法都上机测试，只需知道哪个算法花费的时间多，哪个算法花费的时间少就可以了。并且一个算法花费的时间与算法中语句的执行次数成正比例，哪个算法中语句执行次数多，它花费时间就多。一个算法中的语句执行次数称为语句频度或时间频度，记为T(n)。

【4.2】时间复杂度： 在刚才提到的时间频度T(n)中，n称为问题的规模，当n不断变化时，时间频度T(n)也会不断变化。但有时我们想知道它变化时呈现什么规律。为此，我们引入时间复杂度概念。 算法的时间复杂度也就是算法的时间度量，记作：T(n) = O(f(n))。它表示随问题规模n的增大，算法执行时间的增长率和f(n)的增长率相同，称作算法的渐进时间复杂度，简称时间复杂度

【4.3】大O表示法：像前面用O( )来体现算法时间复杂度的记法，我们称之为大O表示法。 算法复杂度可以从最理想情况、平均情况和最坏情况三个角度来评估，由于平均情况大多和最坏情况持平，而且评估最坏情况也可以避免后顾之忧，因此一般情况下，我们设计算法时都要直接估算最坏情况的复杂度。 
【4.4】常见的时间复杂度量级：

常数阶O(1)
线性阶O(n)
平方阶O(n²)
立方阶O(n³)
对数阶O(logn)
线性对数阶O(nlogn)
指数阶O(2ⁿ)

【4.5】计算时间复杂度时的程序分析法则：

⑴. 对于一些简单的输入输出语句或赋值语句，近似认为需要O(1)时间

⑵. 对于顺序结构，需要依次执行一系列语句所用的时间可采用大O求和法则

例一：算法的2个部分时间复杂度分别为 T1(n)=O(f(n)) 和 T2(n)=O(g(n))，则时间复杂度 T1(n)+T2(n)=O(max(f(n), g(n)))
例二：算法的2个部分时间复杂度分别为T1(m)=O(f(m)) 和 T2(n)=O(g(n))，则时间复杂度为 T1(m)+T2(n)=O(f(m) + g(n))
⑶. 对于选择结构，如if语句，它的主要时间耗费是在执行then字句或else字句所用的时间，需注意的是检验条件也需要O(1)时间

⑷. 对于循环结构，循环语句的运行时间主要体现在多次迭代中执行循环体以及检验循环条件的时间耗费，一般可用大O乘法法则

例一：算法的2个部分时间复杂度分别为 T1(n)=O(f(n)) 和 T2(n)=O(g(n))，则时间复杂度为 T1*T2=O(f(n)*g(n))
⑸. 对于复杂的算法，可以将它分成几个容易估算的部分，然后利用求和法则和乘法法则技术求出整个算法的时间复杂度

⑹. 另外还有以下2个运算法则

若 g(n)=O(f(n))，则O(f(n))+ O(g(n))= O(f(n))
O(Cf(n)) = O(f(n))，其中C是一个正常数

```
