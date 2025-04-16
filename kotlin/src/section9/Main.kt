package section9

fun sumOfSquaresOfOddNumbers(limit: Int, list: List<Int>): Int {
    return list.asSequence()
        .filter { it % 2 == 1 }
        .map { it * it }
        .take(limit)
        .reduce { a, b -> a + b }
}

//
//fun sumOfSquaresOfOddNumbers(limit: Int, list: List<Int>): Int {
//    var acc = 0
//    var remainder = limit
//    for (number in list) {
//        if (a % 2 == 1) {
//            val b = number * number
//            acc += b;
//            if (--remainder == 0) break
//        }
//    }
//    return acc
//}

fun main() {
    val result = sumOfSquaresOfOddNumbers(3, listOf(1, 2, 3, 4, 5, 6, 7, 8, 9))
    println(result)
}