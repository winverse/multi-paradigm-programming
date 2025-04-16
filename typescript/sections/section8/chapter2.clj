(println (+ 1 2)) ; 3
 
(println '(0 1 2)) ; 0 1 2

(println (map (fn [x] (+ x 10)) '(1 2 3 4))) ; (11 12 13 14)

(println (map #(+ % 10) [1 2 3 4])) ; (11 12 13 14)

(println (map (fn [x] (+ x 10)) [1 2 3 4])) ; (11 12 13 14)

(let [a 10 b 20]
  (println (- a b))) ; -10



