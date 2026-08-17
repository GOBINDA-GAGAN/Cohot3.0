Core Java Interview Master Question Bank
500+ What • How • Why Questions | No DSA

Goal: Complete this entire checklist and you should be able to confidently say “I know Core Java.”

Answer every question using this pattern:

WHAT → WHY → HOW → EXAMPLE → INTERNAL WORKING → INTERVIEW TRAP

# 1. Java Fundamentals & JVM
 1. What is Java?
 2. Why is Java platform independent?
 3. How does Java achieve platform independence?
 4. What are the main features of Java?
 5. Why is Java called object-oriented?
 6. Why is Java not considered a purely object-oriented language?
 7. What is JDK?
 8. What is JRE?
 9. What is JVM?
 10. Difference between JDK, JRE and JVM?
 11. What is bytecode?
 12. Why does Java compile to bytecode?
 13. What happens when you compile a Java program?
 14. What happens when you run a Java program?
 15. What is javac?
 16. What is the role of JVM?
 17. What is JIT?
 18. How does JIT improve Java performance?
 19. What is the difference between interpreter and JIT?
 20. What is HotSpot JVM?
 21. What are JVM runtime data areas?
 22. What is heap memory?
 23. What is stack memory?
 24. What is Metaspace?
 25. What is the PC register?
 26. What is native method stack?
 27. Difference between stack and heap?
 28. What causes StackOverflowError?
 29. What causes OutOfMemoryError?
 30. What is class loading?
 31. What is a ClassLoader?
 32. What are Bootstrap, Platform and Application ClassLoader?
 33. What is parent delegation?
 34. Why does Java use parent delegation?
 35. What happens during class loading?
 36. Difference between loading, linking and initialization?
 37. What is classpath?
 38. What is module path?
 39. What is a Java module?
 40. JVM vs JIT vs compiler?
# 2. Variables & Data Types
 41. What are primitive data types?
 42. What are the 8 primitive data types?
 43. Why are primitive types not objects?
 44. What is the difference between primitive and reference types?
 45. What is byte?
 46. What is short?
 47. What is int?
 48. What is long?
 49. What is float?
 50. What is double?
 51. What is char?
 52. What is boolean?
 53. What is the range of primitive data types?
 54. What is a variable?
 55. What is an instance variable?
 56. What is a local variable?
 57. What is a static variable?
 58. What are default values of instance variables?
 59. Do local variables have default values?
 60. Why must local variables be initialized?
 61. What is type casting?
 62. What is widening conversion?
 63. What is narrowing conversion?
 64. What happens during narrowing conversion?
 65. What is implicit casting?
 66. What is explicit casting?
 67. What is numeric promotion?
 68. What is integer overflow?
 69. What happens when an integer overflows?
 70. Difference between float and double?
 71. Why is double generally preferred over float?
 72. Why is BigDecimal used for financial calculations?
 73. What are literals?
 74. What are binary literals?
 75. What are hexadecimal literals?
 76. What are octal literals?
 77. What are numeric separators?
 78. What is final variable?
3. Operators
 79. What are arithmetic operators?
 80. What are relational operators?
 81. What are logical operators?
 82. What are bitwise operators?
 83. What are shift operators?
 84. What is the ternary operator?
 85. What is short-circuit evaluation?
 86. Difference between & and &&?
 87. Difference between | and ||?
 88. What is operator precedence?
 89. What is associativity?
 90. Difference between i++ and ++i?
 91. What happens internally during increment/decrement?
 92. Can operators be overloaded in Java?
 93. Why does Java support + for String concatenation?
4. OOP Fundamentals
 94. What is OOP?
 95. What are the four pillars of OOP?
 96. What is encapsulation?
 97. Why is encapsulation important?
 98. How do you implement encapsulation?
 99. What is inheritance?
 100. Why is inheritance used?
 101. What is polymorphism?
 102. What is abstraction?
 103. Why is abstraction important?
 104. Difference between abstraction and encapsulation?
 105. What is a class?
 106. What is an object?
 107. Difference between class and object?
 108. What happens when an object is created?
 109. Where is an object stored?
 110. What is object reference?
 111. What is IS-A relationship?
 112. What is HAS-A relationship?
 113. What is composition?
 114. What is aggregation?
 115. Composition vs inheritance?
 116. Why is composition often preferred over inheritance?
5. Constructors
 117. What is a constructor?
 118. Why do we need constructors?
 119. Constructor vs method?
 120. What is a default constructor?
 121. When does Java provide a default constructor?
 122. What is a no-argument constructor?
 123. What is parameterized constructor?
 124. What is constructor overloading?
 125. What is constructor chaining?
 126. What is this()?
 127. What is super()?
 128. Why must this() or super() be first?
 129. Can a constructor be private?
 130. Why would you use a private constructor?
 131. Can a constructor be static?
 132. Can a constructor be final?
 133. Can a constructor be abstract?
 134. Can a constructor be inherited?
 135. Can a constructor be overridden?
 136. Can a constructor return a value?
6. Methods
 137. What is a method?
 138. What is method overloading?
 139. What is method overriding?
 140. Overloading vs overriding?
 141. What are rules of method overriding?
 142. Can static methods be overridden?
 143. Can private methods be overridden?
 144. Can final methods be overridden?
 145. Can constructors be overridden?
 146. What is covariant return type?
 147. What is compile-time polymorphism?
 148. What is runtime polymorphism?
 149. What is dynamic method dispatch?
 150. What is static binding?
 151. What is dynamic binding?
 152. What is upcasting?
 153. What is downcasting?
 154. What is instanceof?
 155. When can downcasting cause ClassCastException?
7. this, super, static, final
 156. What is this?
 157. Why do we use this?
 158. What is super?
 159. Why do we use super?
 160. What is static?
 161. Why are static members associated with classes?
 162. What is a static variable?
 163. What is a static method?
 164. What is a static block?
 165. When is a static block executed?
 166. Can static methods access instance variables directly?
 167. Why can't static methods directly access instance members?
 168. What is static import?
 169. What is final?
 170. Final variable vs final method vs final class?
 171. Can a final reference point to a mutable object?
 172. Is a final object immutable?
8. Access Modifiers & Packages
 173. What are access modifiers?
 174. What is public?
 175. What is private?
 176. What is protected?
 177. What is package-private?
 178. Difference between protected and package-private?
 179. How does protected work across packages?
 180. Can a top-level class be private?
 181. Can a top-level class be protected?
 182. What is a package?
 183. Why are packages used?
 184. What is an import?
 185. What is static import?
 186. What is a fully qualified class name?
 187. What is package-private visibility?
 188. What is module encapsulation?
9. String
 189. What is String?
 190. Why is String immutable?
 191. Why did Java make String immutable?
 192. What are advantages of String immutability?
 193. What is String Pool?
 194. Where is String Pool stored?
 195. What happens when a String literal is created?
 196. Difference between "Java" and new String("Java")?
 197. What is intern()?
 198. Why can == sometimes work for Strings?
 199. Why should equals() be used for String comparison?
 200. Difference between String and StringBuilder?
 201. Difference between StringBuilder and StringBuffer?
 202. Is StringBuffer thread-safe?
 203. How does String concatenation work?
 204. What happens with String concatenation inside a loop?
 205. What is compile-time String constant folding?
 206. Difference between empty String and null?
 207. What are important String methods?
 208. Why is String commonly used as a HashMap key?
10. Object Class
 209. What is Object class?
 210. Why is Object the root class?
 211. What methods does Object provide?
 212. What is equals()?
 213. What is the equals contract?
 214. What is hashCode()?
 215. What is hashCode contract?
 216. Why must equals and hashCode be consistent?
 217. What happens if only equals is overridden?
 218. What happens if only hashCode is overridden?
 219. What is toString()?
 220. What is getClass()?
 221. What is clone()?
 222. What is shallow copy?
 223. What is deep copy?
 224. Why is Object.clone() problematic?
 225. What are wait(), notify() and notifyAll()?
 226. Why are wait/notify methods in Object?
11. Abstract Class
 227. What is an abstract class?
 228. Why use abstract classes?
 229. Can an abstract class have constructors?
 230. Can abstract class have concrete methods?
 231. Can abstract class have variables?
 232. Can abstract class have static methods?
 233. Can abstract class have final methods?
 234. Can an abstract class be instantiated?
 235. Can an abstract class have zero abstract methods?
 236. What happens if a subclass does not implement all abstract methods?
12. Interface
 237. What is an interface?
 238. Why use interfaces?
 239. Interface vs abstract class?
 240. Can an interface have variables?
 241. What is the default nature of interface variables?
 242. Can an interface have constructors?
 243. Can an interface have default methods?
 244. Why were default methods introduced?
 245. Can interfaces have static methods?
 246. Can interfaces have private methods?
 247. What is a functional interface?
 248. What is @FunctionalInterface?
 249. What is a marker interface?
 250. How does Java handle multiple inheritance using interfaces?
 251. What happens if two interfaces provide the same default method?
13. Enum, Record, Sealed Class
 252. What is enum?
 253. Why use enum?
 254. Can enum have fields?
 255. Can enum have methods?
 256. Can enum have constructors?
 257. Why are enum constructors private?
 258. What is a record?
 259. Why were records introduced?
 260. What are advantages of records?
 261. What are limitations of records?
 262. What is a sealed class?
 263. What is sealed?
 264. What is non-sealed?
 265. What is a permitted subclass?
14. Exception Handling
 266. What is an exception?
 267. What is exception handling?
 268. Difference between Error and Exception?
 269. What is Throwable?
 270. What is checked exception?
 271. What is unchecked exception?
 272. Why are checked exceptions used?
 273. What is RuntimeException?
 274. What is exception hierarchy?
 275. What is try-catch?
 276. What is finally?
 277. When does finally execute?
 278. When might finally not execute?
 279. What is try-with-resources?
 280. Why use try-with-resources?
 281. What is AutoCloseable?
 282. What is Closeable?
 283. Difference between throw and throws?
 284. What is exception propagation?
 285. What is stack trace?
 286. Difference between getMessage and printStackTrace?
 287. What is custom exception?
 288. When should you create custom exceptions?
 289. What is exception chaining?
 290. What is exception cause?
 291. What are suppressed exceptions?
 292. What is multi-catch?
 293. Why should catch blocks go from specific to general?
 294. Can finally modify a returned value?
 295. Why is return from finally dangerous?
 296. What is NullPointerException?
 297. What is ClassCastException?
 298. What is IllegalArgumentException?
 299. What is IllegalStateException?
 300. What is UnsupportedOperationException?
15. Collections Framework
 301. What is Collections Framework?
 302. Difference between Collection and Collections?
 303. Difference between Collection and Map?
 304. What is List?
 305. What is Set?
 306. What is Queue?
 307. What is Deque?
 308. What is ArrayList?
 309. How does ArrayList work internally?
 310. How does ArrayList grow?
 311. ArrayList vs array?
 312. ArrayList vs LinkedList?
 313. What is LinkedList?
 314. How does LinkedList work internally?
 315. What is Vector?
 316. Why is Vector considered legacy?
 317. What is Stack?
 318. Why is Deque preferred over Stack?
 319. What is HashSet?
 320. How does HashSet work internally?
 321. How does HashSet use hashCode and equals?
 322. What is LinkedHashSet?
 323. What is TreeSet?
 324. HashSet vs LinkedHashSet vs TreeSet?
 325. What is PriorityQueue?
 326. How does PriorityQueue work?
 327. What is ArrayDeque?
 328. What is HashMap?
 329. How does HashMap work internally?
 330. What is hash collision?
 331. How does HashMap handle collisions?
 332. What is bucket in HashMap?
 333. What is capacity in HashMap?
 334. What is load factor?
 335. When does HashMap resize?
 336. What changed in HashMap after Java 8?
 337. Why can HashMap treeify a bucket?
 338. What is LinkedHashMap?
 339. What is TreeMap?
 340. HashMap vs LinkedHashMap vs TreeMap?
 341. What is Hashtable?
 342. Why is Hashtable legacy?
 343. HashMap vs Hashtable?
 344. What is ConcurrentHashMap?
 345. HashMap vs ConcurrentHashMap?
 346. What is WeakHashMap?
 347. What is IdentityHashMap?
 348. What is EnumMap?
 349. What is EnumSet?
 350. What is immutable collection?
 351. What are List.of(), Set.of() and Map.of()?
 352. Can immutable collections contain null?
 353. What is Collections.unmodifiableList()?
 354. Unmodifiable collection vs immutable collection?
16. Generics
 355. What are generics?
 356. Why were generics introduced?
 357. What problem does generics solve?
 358. What is type safety?
 359. What is generic class?
 360. What is generic method?
 361. What is bounded type parameter?
 362. What does <T extends Number> mean?
 363. What is wildcard?
 364. What is <?>?
 365. What is upper bounded wildcard?
 366. What is lower bounded wildcard?
 367. What does <? extends T> mean?
 368. What does <? super T> mean?
 369. What is PECS?
 370. What is type erasure?
 371. Why does Java use type erasure?
 372. What limitations are caused by type erasure?
 373. Can generic arrays be created?
 374. Why can't primitive types be generic type arguments?
 375. What is raw type?
 376. Why should raw types be avoided?
 377. Can static fields use class type parameters?
 378. What is recursive generic type bound?
17. Iterator, Comparable & Comparator
 379. What is Iterable?
 380. What is Iterator?
 381. Iterable vs Iterator?
 382. What is ListIterator?
 383. What is fail-fast behavior?
 384. What is ConcurrentModificationException?
 385. Is fail-fast a thread-safety mechanism?
 386. What is Comparable?
 387. What is Comparator?
 388. Comparable vs Comparator?
 389. When should Comparable be used?
 390. When should Comparator be used?
 391. What is compareTo()?
 392. How should compareTo relate to equals?
 393. What is comparator chaining?
 394. What are comparing(), thenComparing() and reversed()?
 395. What are nullsFirst() and nullsLast()?
 396. How do TreeSet and TreeMap use ordering?
18. Lambda & Functional Programming
 397. What is lambda expression?
 398. Why were lambda expressions introduced?
 399. What is functional programming?
 400. What is functional interface?
 401. What is method reference?
 402. What are types of method references?
 403. What is Predicate?
 404. What is Function?
 405. What is Consumer?
 406. What is Supplier?
 407. What is UnaryOperator?
 408. What is BinaryOperator?
 409. What is BiFunction?
 410. What is BiConsumer?
 411. What is Optional?
 412. Why was Optional introduced?
 413. What problem does Optional solve?
 414. What is orElse()?
 415. What is orElseGet()?
 416. Difference between orElse and orElseGet?
 417. What is orElseThrow()?
 418. What is Optional.map()?
 419. What is Optional.flatMap()?
 420. Should Optional be used as a field?
 421. Should Optional be used as a method parameter?
19. Stream API
 422. What is Stream API?
 423. Why was Stream API introduced?
 424. Collection vs Stream?
 425. Is Stream a data structure?
 426. What is lazy evaluation?
 427. What is intermediate operation?
 428. What is terminal operation?
 429. What is filter()?
 430. What is map()?
 431. What is flatMap()?
 432. Difference between map and flatMap?
 433. What is distinct()?
 434. What is sorted()?
 435. What is peek()?
 436. Why should peek not generally be used for business logic?
 437. What is limit()?
 438. What is skip()?
 439. What is anyMatch()?
 440. What is allMatch()?
 441. What is noneMatch()?
 442. What is findFirst()?
 443. What is findAny()?
 444. What is reduce()?
 445. What is collect()?
 446. What are Collectors?
 447. What is groupingBy()?
 448. What is partitioningBy()?
 449. What is joining()?
 450. What is toMap()?
 451. What happens when duplicate keys occur in toMap()?
 452. What is stream short-circuiting?
 453. Can a Stream be reused?
 454. What is parallel stream?
 455. When should parallel streams be avoided?
 456. What is IntStream?
 457. What are LongStream and DoubleStream?
20. Date & Time
 458. Why was java.time introduced?
 459. What is LocalDate?
 460. What is LocalTime?
 461. What is LocalDateTime?
 462. What is ZonedDateTime?
 463. What is Instant?
 464. What is Duration?
 465. What is Period?
 466. What is ZoneId?
 467. What is DateTimeFormatter?
 468. LocalDateTime vs ZonedDateTime?
 469. Instant vs LocalDateTime?
 470. Why is java.time generally preferred over Date and Calendar?
21. Multithreading
 471. What is a thread?
 472. Process vs thread?
 473. Why use multithreading?
 474. What are thread states?
 475. What is Thread class?
 476. How can you create a thread?
 477. Thread vs Runnable?
 478. Runnable vs Callable?
 479. What is start()?
 480. What is run()?
 481. Difference between start() and run()?
 482. What happens if start() is called twice?
 483. What is sleep()?
 484. What is yield()?
 485. What is join()?
 486. What is interrupt()?
 487. Does interrupt() kill a thread?
 488. What is daemon thread?
 489. What is thread priority?
 490. What is race condition?
 491. What is critical section?
 492. What is thread safety?
 493. What is thread confinement?
 494. How does immutability help multithreading?
22. Synchronization & Concurrency
 495. What is synchronization?
 496. Why is synchronization required?
 497. What is synchronized method?
 498. What is synchronized block?
 499. What is synchronized static method?
 500. What object is used as the monitor lock?
 501. What is intrinsic locking?
 502. What is reentrant synchronization?
 503. What is volatile?
 504. What guarantee does volatile provide?
 505. Does volatile provide atomicity?
 506. What is atomicity?
 507. What is visibility?
 508. What is ordering?
 509. What is deadlock?
 510. What are the four conditions for deadlock?
 511. How can deadlock be prevented?
 512. What is livelock?
 513. What is starvation?
 514. Race condition vs deadlock?
 515. What is wait()?
 516. What is notify()?
 517. What is notifyAll()?
 518. Why must wait() be called while holding the monitor?
 519. What is Lock?
 520. What is ReentrantLock?
 521. synchronized vs ReentrantLock?
 522. What is ReadWriteLock?
 523. What is ReentrantReadWriteLock?
 524. What is Condition?
 525. What is Semaphore?
 526. What is CountDownLatch?
 527. What is CyclicBarrier?
 528. What is Phaser?
 529. What is AtomicInteger?
 530. What is CAS?
 531. What is java.util.concurrent?
23. Executor Framework
 532. Why use ExecutorService?
 533. What is Executor?
 534. What is ExecutorService?
 535. What is ScheduledExecutorService?
 536. What is thread pool?
 537. What is fixed thread pool?
 538. What is cached thread pool?
 539. What is single-thread executor?
 540. What is scheduled thread pool?
 541. What is work-stealing pool?
 542. What is ThreadPoolExecutor?
 543. What is corePoolSize?
 544. What is maximumPoolSize?
 545. What is keepAliveTime?
 546. What is work queue?
 547. What happens when a thread pool is full?
 548. What is RejectedExecutionHandler?
 549. What is Future?
 550. What is FutureTask?
 551. What is CompletableFuture?
 552. Future vs CompletableFuture?
 553. What is thenApply()?
 554. What is thenCompose()?
 555. What is thenCombine()?
 556. What is exceptionally()?
 557. What is handle()?
 558. What is whenComplete()?
 559. Synchronous vs asynchronous execution?
 560. What is ForkJoinPool?
 561. What is RecursiveTask?
24. JVM Memory & Garbage Collection
 562. What is garbage collection?
 563. Why does Java need garbage collection?
 564. When is an object eligible for GC?
 565. Can System.gc() guarantee garbage collection?
 566. What is a GC root?
 567. What is strong reference?
 568. What is soft reference?
 569. What is weak reference?
 570. What is phantom reference?
 571. What is memory leak in Java?
 572. How can Java have memory leaks despite GC?
 573. What is Stop-The-World?
 574. What is generational garbage collection?
 575. What is young generation?
 576. What is old generation?
 577. What is minor GC?
 578. What is major GC?
 579. What is full GC?
 580. What is G1 GC?
 581. What is ZGC?
 582. What is Shenandoah GC?
 583. When would you choose a low-latency collector?
 584. What is GC tuning?
 585. What are -Xms and -Xmx?
 586. What is heap dump?
 587. What is thread dump?
 588. What is JMX?
 589. What is JVM profiling?
25. Reflection & Annotations
 590. What is reflection?
 591. Why is reflection used?
 592. What are disadvantages of reflection?
 593. What is the Class class?
 594. What is getDeclaredMethods()?
 595. What is getDeclaredFields()?
 596. What is getDeclaredConstructors()?
 597. What is an annotation?
 598. Why are annotations used?
 599. What is @Override?
 600. What is @Deprecated?
 601. What is @SuppressWarnings?
 602. What is a custom annotation?
 603. What is annotation retention?
 604. What are SOURCE, CLASS and RUNTIME retention?
 605. What is annotation target?
 606. How does reflection read runtime annotations?
26. Serialization
 607. What is serialization?
 608. What is deserialization?
 609. What is Serializable?
 610. What is serialVersionUID?
 611. Why is serialVersionUID important?
 612. What is transient?
 613. What happens to transient fields during serialization?
 614. What is Externalizable?
 615. Serializable vs Externalizable?
 616. What are serialization security risks?
 617. Why should untrusted serialized data be handled carefully?
27. Java I/O & NIO
 618. What is Java I/O?
 619. Difference between byte stream and character stream?
 620. What is InputStream?
 621. What is OutputStream?
 622. What is Reader?
 623. What is Writer?
 624. What is BufferedReader?
 625. What is BufferedInputStream?
 626. Why is buffering useful?
 627. What is File?
 628. What is Path?
 629. File vs Path?
 630. What is Files API?
 631. What is NIO?
 632. What are Channel and Buffer?
 633. What is ByteBuffer?
 634. What is memory-mapped I/O?
28. JDBC
 635. What is JDBC?
 636. Why is JDBC used?
 637. What are main JDBC components?
 638. What is DriverManager?
 639. What is Connection?
 640. What is Statement?
 641. What is PreparedStatement?
 642. What is CallableStatement?
 643. What is ResultSet?
 644. Statement vs PreparedStatement?
 645. Why is PreparedStatement safer?
 646. How does PreparedStatement help prevent SQL injection?
 647. What is JDBC transaction?
 648. What is auto-commit?
 649. What are commit() and rollback()?
 650. What is transaction isolation?
 651. What is batch processing in JDBC?
 652. What is connection pooling?
 653. Why use connection pooling?
 654. What is SQLException?
 655. Difference between execute(), executeQuery() and executeUpdate()?
 656. Why should JDBC resources use try-with-resources?
29. Modern Java
 657. What is var?
 658. Where can var be used?
 659. Where can't var be used?
 660. What are switch expressions?
 661. What are text blocks?
 662. What is pattern matching for instanceof?
 663. What is pattern matching for switch?
 664. What are records?
 665. What are sealed classes?
 666. What are default interface methods?
 667. What are private interface methods?
 668. What are Java modules?
 669. What is JPMS?
 670. What is an LTS Java release?
 671. Why are LTS versions important?
 672. Which modern Java features should a Java backend developer know?
30. Immutability & Design
 673. What is immutability?
 674. Why is immutability useful?
 675. How do you create an immutable class?
 676. Why should an immutable class often be final?
 677. Why should mutable fields be defensively copied?
 678. What is defensive copying?
 679. Shallow immutability vs deep immutability?
 680. Can a final object be mutable?
 681. What is loose coupling?
 682. What is high cohesion?
 683. What is composition over inheritance?
 684. What is SOLID?
 685. What is Single Responsibility Principle?
 686. What is Open/Closed Principle?
 687. What is Liskov Substitution Principle?
 688. What is Interface Segregation Principle?
 689. What is Dependency Inversion Principle?
 690. Why does immutability help thread safety?
 691. Why is defensive programming important?
31. Java Interview Traps
 692. Why is Java pass-by-value?
 693. Is Java pass-by-reference?
 694. What exactly happens when an object is passed to a method?
 695. Why does == behave differently for primitives and objects?
 696. Why does == sometimes work for Integer?
 697. What is Integer caching?
 698. Why does Integer == Integer sometimes return true?
 699. Why is String immutable?
 700. Why does String Pool exist?
 701. Why should equals and hashCode be overridden together?
 702. What happens if a mutable object is used as a HashMap key?
 703. Why can HashMap return unexpected results after a key is mutated?
 704. Why is HashMap not thread-safe?
 705. Why is ConcurrentHashMap different?
 706. Why doesn't volatile make count++ thread-safe?
 707. Why can deadlock happen even when synchronized is used correctly?
 708. Why can finally override a return value?
 709. Why can NullPointerException happen during unboxing?
 710. Why can't generic types use primitives?
 711. Why can't a generic array be directly created?
 712. Why can't static members use a class's generic type parameter?
 713. Why are streams lazy?
 714. Why can't a Stream be reused?
 715. Why can parallel streams make performance worse?
 716. Why is ArrayList usually faster than LinkedList for iteration?
 717. Why is TreeMap slower than HashMap for typical lookup?
 718. Why does HashSet internally use HashMap?
 719. Why does HashMap need both hashCode and equals?
 720. Why is Collections.unmodifiableList() not necessarily immutable?
 721. Why can Java still have memory leaks with garbage collection?
 722. StackOverflowError vs OutOfMemoryError?
 723. ClassNotFoundException vs NoClassDefFoundError?
 724. Exception vs Error?
 725. Checked vs unchecked exception?
 726. ArrayList vs LinkedList?
 727. HashMap vs Hashtable?
 728. HashMap vs ConcurrentHashMap?
 729. Comparable vs Comparator?
 730. String vs StringBuilder vs StringBuffer?
 731. Interface vs abstract class?
 732. Composition vs inheritance?
 733. Overloading vs overriding?
 734. this vs super?
 735. final vs finally vs finalize()?
 736. throw vs throws?
 737. sleep() vs wait()?
 738. notify() vs notifyAll()?
 739. synchronized vs volatile?
 740. Runnable vs Callable?
 741. Future vs CompletableFuture?
 742. Collection vs Collections?
 743. Stream vs Collection?
 744. map() vs flatMap()?
 745. orElse() vs orElseGet()?
 746. findFirst() vs findAny()?
 747. filter() vs map()?
 748. HashSet vs TreeSet?
 749. HashMap vs TreeMap?
 750. ArrayList vs Vector?
 751. StringBuilder vs StringBuffer?
 752. shallow copy vs deep copy?
 753. aggregation vs composition?
 754. process vs thread?
 755. concurrency vs parallelism?
 756. race condition vs deadlock?
 757. deadlock vs livelock?
 758. visibility vs atomicity?
 759. heap vs stack?
 760. JVM vs JRE vs JDK?