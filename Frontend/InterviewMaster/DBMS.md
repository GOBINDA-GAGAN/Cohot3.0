# DBMS Master Interview Questions

## 24-Hour Interview Revision | Fresher Software Engineer

> **Focus:** Software Engineer / SDE Fresher
>
> **Goal:** Build enough DBMS depth to confidently handle theory, SQL concepts, design questions, optimization questions, and common interview follow-ups.
>
> For every important question:
>
> **What? → Why? → How? → When? → Example? → Trade-off?**

---

# 1. DBMS Fundamentals

* [ ] What is a database?
* [ ] What is DBMS?
* [ ] Why do we need a DBMS?
* [ ] What problems does a DBMS solve?
* [ ] What are the main responsibilities of a DBMS?
* [ ] What is data?
* [ ] What is metadata?
* [ ] What is a database schema?
* [ ] What is a database instance?
* [ ] Schema vs instance?
* [ ] What is a table?
* [ ] What is a record?
* [ ] What is a field?
* [ ] What is a relation?
* [ ] What is a tuple?
* [ ] What is an attribute?
* [ ] What is a domain?
* [ ] What is data redundancy?
* [ ] What is data inconsistency?
* [ ] Why is data integrity important?
* [ ] What is data security?
* [ ] What is data abstraction?
* [ ] What are the levels of data abstraction?
* [ ] What is physical data independence?
* [ ] What is logical data independence?
* [ ] Why is data independence important?

---

# 2. DBMS Architecture

* [ ] What are the different levels of DBMS architecture?
* [ ] What is the external level?
* [ ] What is the conceptual level?
* [ ] What is the internal level?
* [ ] What is the three-schema architecture?
* [ ] Why does DBMS use abstraction layers?
* [ ] What is a view?
* [ ] What is a physical schema?
* [ ] What is a logical schema?
* [ ] What is a database instance?
* [ ] What is a data dictionary?
* [ ] What is a system catalog?
* [ ] What is metadata?
* [ ] How does DBMS separate logical and physical storage?

---

# 3. DBMS vs File System

* [ ] What is a traditional file system?
* [ ] DBMS vs file system?
* [ ] Why is DBMS better than a file system for large applications?
* [ ] What problems occur with file-based systems?
* [ ] How does DBMS reduce redundancy?
* [ ] How does DBMS provide concurrency?
* [ ] How does DBMS provide security?
* [ ] How does DBMS provide recovery?
* [ ] When might a file system be preferable to a database?

---

# 4. Types of Databases

* [ ] What are the different types of databases?
* [ ] What is a relational database?
* [ ] What is a NoSQL database?
* [ ] What is a document database?
* [ ] What is a key-value database?
* [ ] What is a column-family database?
* [ ] What is a graph database?
* [ ] SQL vs NoSQL?
* [ ] When should you use a relational database?
* [ ] When should you use NoSQL?
* [ ] What are the advantages of relational databases?
* [ ] What are the advantages of NoSQL databases?
* [ ] What are the disadvantages of relational databases?
* [ ] What are the disadvantages of NoSQL databases?
* [ ] Can SQL databases scale horizontally?
* [ ] Can NoSQL databases support transactions?

---

# 5. Relational Model

* [ ] What is the relational model?
* [ ] What is a relation?
* [ ] What is a tuple?
* [ ] What is an attribute?
* [ ] What is a domain?
* [ ] What is a relational schema?
* [ ] What is a relational instance?
* [ ] What are relational constraints?
* [ ] What is a candidate key?
* [ ] What is a primary key?
* [ ] What is an alternate key?
* [ ] What is a super key?
* [ ] What is a foreign key?
* [ ] What is a composite key?
* [ ] What is a natural key?
* [ ] What is a surrogate key?
* [ ] Candidate key vs primary key?
* [ ] Primary key vs unique key?
* [ ] Super key vs candidate key?

---

# 6. Keys

## ⭐ Very Important

* [ ] What is a primary key?
* [ ] Why is a primary key needed?
* [ ] Can a table have multiple primary keys?
* [ ] Can a primary key contain NULL?
* [ ] What is a candidate key?
* [ ] What is a super key?
* [ ] What is a foreign key?
* [ ] Why are foreign keys needed?
* [ ] What is a composite key?
* [ ] What is a unique key?
* [ ] What is a surrogate key?
* [ ] Primary key vs unique key?
* [ ] Primary key vs foreign key?
* [ ] Candidate key vs super key?
* [ ] Natural key vs surrogate key?
* [ ] When would you choose a composite key?
* [ ] When would you use a surrogate key?

---

# 7. Constraints

* [ ] What is a database constraint?
* [ ] Why do constraints exist?
* [ ] What is NOT NULL?
* [ ] What is UNIQUE?
* [ ] What is PRIMARY KEY?
* [ ] What is FOREIGN KEY?
* [ ] What is CHECK?
* [ ] What is DEFAULT?
* [ ] What is referential integrity?
* [ ] What happens when a foreign key constraint is violated?
* [ ] What is `ON DELETE CASCADE`?
* [ ] What is `ON DELETE SET NULL`?
* [ ] What is `ON UPDATE CASCADE`?
* [ ] When should cascading deletes be used?
* [ ] When can cascading deletes become dangerous?

---

# 8. Entity Relationship Model

* [ ] What is an ER model?
* [ ] What is an entity?
* [ ] What is an entity set?
* [ ] What is an attribute?
* [ ] What is a relationship?
* [ ] What is a relationship set?
* [ ] What is cardinality?
* [ ] What is one-to-one relationship?
* [ ] What is one-to-many relationship?
* [ ] What is many-to-many relationship?
* [ ] How do you model a many-to-many relationship in a relational database?
* [ ] What is an associative/junction table?
* [ ] What is participation constraint?
* [ ] What is total participation?
* [ ] What is partial participation?
* [ ] How would you convert an ER diagram into tables?

---

# 9. Normalization

## ⭐⭐⭐ Extremely Important

* [ ] What is normalization?
* [ ] Why do we normalize databases?
* [ ] What problems does normalization solve?
* [ ] What is data redundancy?
* [ ] What is an insertion anomaly?
* [ ] What is an update anomaly?
* [ ] What is a deletion anomaly?
* [ ] What is functional dependency?
* [ ] What is a trivial functional dependency?
* [ ] What is a non-trivial functional dependency?
* [ ] What is a partial dependency?
* [ ] What is a transitive dependency?
* [ ] What is 1NF?
* [ ] What is 2NF?
* [ ] What is 3NF?
* [ ] What is BCNF?
* [ ] What is 4NF?
* [ ] What is 5NF?
* [ ] What is the difference between 1NF, 2NF, and 3NF?
* [ ] 3NF vs BCNF?
* [ ] When should normalization be applied?
* [ ] Can a fully normalized database be slower?
* [ ] What is denormalization?
* [ ] Why would you denormalize a database?
* [ ] What are the trade-offs of denormalization?
* [ ] How would you normalize an unstructured table?
* [ ] How would you identify partial dependency?
* [ ] How would you identify transitive dependency?

---

# 10. Functional Dependencies

* [ ] What is a functional dependency?
* [ ] What does `A → B` mean?
* [ ] What is a determinant?
* [ ] What is a dependent attribute?
* [ ] What is a full functional dependency?
* [ ] What is a partial functional dependency?
* [ ] What is a transitive dependency?
* [ ] Why are functional dependencies important for normalization?
* [ ] How do functional dependencies help identify candidate keys?
* [ ] How do you determine whether a dependency violates 2NF?
* [ ] How do you determine whether a dependency violates 3NF?

---

# 11. SQL Fundamentals

## ⭐⭐⭐ Highest Priority

* [ ] What is SQL?
* [ ] Why was SQL created?
* [ ] What is the difference between SQL and MySQL?
* [ ] What is a SQL query?
* [ ] What is DDL?
* [ ] What is DML?
* [ ] What is DQL?
* [ ] What is DCL?
* [ ] What is TCL?
* [ ] What is `CREATE`?
* [ ] What is `ALTER`?
* [ ] What is `DROP`?
* [ ] What is `TRUNCATE`?
* [ ] What is `INSERT`?
* [ ] What is `UPDATE`?
* [ ] What is `DELETE`?
* [ ] What is `SELECT`?
* [ ] What is `GRANT`?
* [ ] What is `REVOKE`?
* [ ] What is `COMMIT`?
* [ ] What is `ROLLBACK`?
* [ ] What is `SAVEPOINT`?

---

# 12. SQL Query Execution Order

## ⭐⭐⭐ Important

* [ ] What is the logical execution order of a SQL query?
* [ ] Which executes first: FROM or SELECT?
* [ ] When does WHERE execute?
* [ ] When does JOIN execute?
* [ ] When does GROUP BY execute?
* [ ] When does HAVING execute?
* [ ] When does SELECT execute?
* [ ] When does DISTINCT execute?
* [ ] When does ORDER BY execute?
* [ ] When does LIMIT execute?
* [ ] Why can't aggregate functions normally be used in WHERE?
* [ ] Why can aggregate functions be used in HAVING?
* [ ] Why can't SELECT aliases always be used in WHERE?

---

# 13. SQL Filtering

* [ ] What is WHERE?
* [ ] What is HAVING?
* [ ] WHERE vs HAVING?
* [ ] What is `AND`?
* [ ] What is `OR`?
* [ ] What is `NOT`?
* [ ] What is `IN`?
* [ ] What is `BETWEEN`?
* [ ] What is `LIKE`?
* [ ] What are SQL wildcards?
* [ ] What is `IS NULL`?
* [ ] Why can't you use `= NULL`?
* [ ] What is NULL semantics?
* [ ] What is three-valued logic in SQL?

---

# 14. SQL Joins

## ⭐⭐⭐ Extremely Important

* [ ] What is a JOIN?
* [ ] Why do we need joins?
* [ ] What is INNER JOIN?
* [ ] What is LEFT JOIN?
* [ ] What is RIGHT JOIN?
* [ ] What is FULL OUTER JOIN?
* [ ] What is CROSS JOIN?
* [ ] What is SELF JOIN?
* [ ] INNER JOIN vs LEFT JOIN?
* [ ] LEFT JOIN vs RIGHT JOIN?
* [ ] What is a natural join?
* [ ] What happens when there is no matching row in a LEFT JOIN?
* [ ] Why can a JOIN produce duplicate rows?
* [ ] How do you find unmatched records using JOIN?
* [ ] How do you join three or more tables?
* [ ] How do you optimize a query with multiple joins?
* [ ] What happens if you put a WHERE condition on a column from a LEFT JOIN table?
* [ ] How can WHERE accidentally turn a LEFT JOIN into an INNER JOIN?

---

# 15. Subqueries

* [ ] What is a subquery?
* [ ] What is a correlated subquery?
* [ ] What is a non-correlated subquery?
* [ ] What is the difference between correlated and non-correlated subqueries?
* [ ] Can a subquery return multiple rows?
* [ ] What is a scalar subquery?
* [ ] What is `EXISTS`?
* [ ] What is `NOT EXISTS`?
* [ ] EXISTS vs IN?
* [ ] When is EXISTS preferable?
* [ ] When should a JOIN be preferred over a subquery?
* [ ] Can a subquery appear in SELECT?
* [ ] Can a subquery appear in FROM?
* [ ] Can a subquery appear in WHERE?

---

# 16. Aggregate Functions

* [ ] What is an aggregate function?
* [ ] What does COUNT do?
* [ ] What does SUM do?
* [ ] What does AVG do?
* [ ] What does MIN do?
* [ ] What does MAX do?
* [ ] How does COUNT(*) differ from COUNT(column)?
* [ ] How does NULL affect aggregate functions?
* [ ] Why is GROUP BY used with aggregate functions?
* [ ] What is HAVING?
* [ ] How do you find the second-highest salary?
* [ ] How do you find duplicate records?
* [ ] How do you find the number of employees per department?

---

# 17. GROUP BY

* [ ] What is GROUP BY?
* [ ] Why do we use GROUP BY?
* [ ] What happens internally when GROUP BY is used?
* [ ] GROUP BY vs DISTINCT?
* [ ] GROUP BY vs ORDER BY?
* [ ] Why must selected non-aggregated columns usually appear in GROUP BY?
* [ ] What is HAVING?
* [ ] HAVING vs WHERE?
* [ ] How do you find groups having more than N records?

---

# 18. SQL Set Operations

* [ ] What is UNION?
* [ ] What is UNION ALL?
* [ ] UNION vs UNION ALL?
* [ ] What is INTERSECT?
* [ ] What is EXCEPT/MINUS?
* [ ] What conditions must two queries satisfy for UNION?
* [ ] Why is UNION ALL generally faster than UNION?

---

# 19. SQL Window Functions

## ⭐ Strong Interview Topic

* [ ] What is a window function?
* [ ] Why do we need window functions?
* [ ] What is `OVER()`?
* [ ] What is `PARTITION BY`?
* [ ] What is `ORDER BY` inside a window function?
* [ ] What is `ROW_NUMBER()`?
* [ ] What is `RANK()`?
* [ ] What is `DENSE_RANK()`?
* [ ] RANK vs DENSE_RANK?
* [ ] ROW_NUMBER vs RANK?
* [ ] What are `LAG()` and `LEAD()`?
* [ ] When would you use window functions?
* [ ] Window function vs GROUP BY?
* [ ] How do you find the second-highest salary using a window function?
* [ ] How do you find the top N employees per department?

---

# 20. SQL NULL

## ⭐ Common Trap

* [ ] What is NULL?
* [ ] Is NULL equal to zero?
* [ ] Is NULL equal to an empty string?
* [ ] Is NULL equal to NULL?
* [ ] Why does `NULL = NULL` not return TRUE?
* [ ] How do you check for NULL?
* [ ] What is `COALESCE()`?
* [ ] What is `NULLIF()`?
* [ ] How does NULL affect COUNT?
* [ ] How does NULL affect SUM?
* [ ] How does NULL affect comparisons?
* [ ] How does NULL affect joins?

---

# 21. Views

* [ ] What is a view?
* [ ] Why use views?
* [ ] How is a view different from a table?
* [ ] Does a view store data physically?
* [ ] What is a materialized view?
* [ ] View vs materialized view?
* [ ] What are the advantages of views?
* [ ] What are the disadvantages of views?
* [ ] When should you use a view?

---

# 22. Stored Procedures and Functions

* [ ] What is a stored procedure?
* [ ] What is a stored function?
* [ ] Procedure vs function?
* [ ] Why use stored procedures?
* [ ] What are the disadvantages of stored procedures?
* [ ] Should business logic live inside the database?
* [ ] When might stored procedures be useful?

---

# 23. Triggers

* [ ] What is a database trigger?
* [ ] Why are triggers used?
* [ ] What is a BEFORE trigger?
* [ ] What is an AFTER trigger?
* [ ] What are common trigger use cases?
* [ ] What are the disadvantages of triggers?
* [ ] Why can triggers make debugging difficult?
* [ ] When should triggers be avoided?

---

# 24. Transactions

## ⭐⭐⭐ Extremely Important

* [ ] What is a transaction?
* [ ] Why do we need transactions?
* [ ] What is a transaction boundary?
* [ ] What is COMMIT?
* [ ] What is ROLLBACK?
* [ ] What is SAVEPOINT?
* [ ] What are ACID properties?
* [ ] What is Atomicity?
* [ ] What is Consistency?
* [ ] What is Isolation?
* [ ] What is Durability?
* [ ] Why is Atomicity important?
* [ ] Why is Consistency important?
* [ ] Why is Isolation important?
* [ ] Why is Durability important?
* [ ] Give a real-world example of a transaction.
* [ ] What happens if a transaction fails halfway?
* [ ] What happens after COMMIT?
* [ ] What happens after ROLLBACK?
* [ ] Can a transaction contain multiple SQL statements?
* [ ] What is an autocommit mode?

---

# 25. ACID Properties

## ⭐⭐⭐ Must Know

* [ ] Explain Atomicity.
* [ ] Explain Consistency.
* [ ] Explain Isolation.
* [ ] Explain Durability.
* [ ] Why does Atomicity matter in banking?
* [ ] How does DBMS provide Durability?
* [ ] How does DBMS provide Isolation?
* [ ] What happens if the server crashes after COMMIT?
* [ ] What happens if the server crashes during a transaction?
* [ ] Can NoSQL databases provide ACID transactions?

---

# 26. Transaction States

* [ ] What are transaction states?
* [ ] What is an active transaction?
* [ ] What is a partially committed transaction?
* [ ] What is a committed transaction?
* [ ] What is a failed transaction?
* [ ] What is an aborted transaction?
* [ ] What is a terminated transaction?
* [ ] How does a transaction move between states?

---

# 27. Concurrency Control

## ⭐⭐⭐ Very Important

* [ ] What is concurrency?
* [ ] Why do databases need concurrency control?
* [ ] What problems occur when multiple transactions run simultaneously?
* [ ] What is a lost update?
* [ ] What is a dirty read?
* [ ] What is a non-repeatable read?
* [ ] What is a phantom read?
* [ ] What is a race condition?
* [ ] How can databases prevent race conditions?
* [ ] What is locking?
* [ ] What is a shared lock?
* [ ] What is an exclusive lock?
* [ ] Shared lock vs exclusive lock?
* [ ] What is two-phase locking?
* [ ] What is strict two-phase locking?
* [ ] What is optimistic concurrency control?
* [ ] What is pessimistic locking?
* [ ] Optimistic vs pessimistic locking?

---

# 28. Isolation Levels

## ⭐⭐⭐ Frequently Asked

* [ ] What is transaction isolation?
* [ ] Why do we need isolation levels?
* [ ] What is READ UNCOMMITTED?
* [ ] What is READ COMMITTED?
* [ ] What is REPEATABLE READ?
* [ ] What is SERIALIZABLE?
* [ ] What is SNAPSHOT isolation?
* [ ] What is the strongest isolation level?
* [ ] What is the weakest isolation level?
* [ ] What is a dirty read?
* [ ] Which isolation levels allow dirty reads?
* [ ] What is a non-repeatable read?
* [ ] Which isolation levels allow non-repeatable reads?
* [ ] What is a phantom read?
* [ ] Which isolation levels allow phantom reads?
* [ ] What is the trade-off between isolation and performance?
* [ ] Which isolation level would you choose for a banking system?
* [ ] Which isolation level might be appropriate for a high-throughput application?

---

# 29. Locks

* [ ] What is a database lock?
* [ ] Why do databases use locks?
* [ ] What is a row-level lock?
* [ ] What is a table-level lock?
* [ ] Row lock vs table lock?
* [ ] What is a shared lock?
* [ ] What is an exclusive lock?
* [ ] What is lock escalation?
* [ ] What is lock contention?
* [ ] How can locks affect performance?
* [ ] What happens when a transaction waits for a lock?
* [ ] What is a deadlock?
* [ ] How does a database detect deadlocks?
* [ ] How can deadlocks be prevented?
* [ ] How can deadlocks be resolved?

---

# 30. Deadlocks

* [ ] What is a deadlock?
* [ ] What are the necessary conditions for deadlock?
* [ ] How does a database detect deadlock?
* [ ] What happens when deadlock is detected?
* [ ] How can application code cause deadlocks?
* [ ] How can you prevent deadlocks?
* [ ] Why should transactions acquire locks in a consistent order?
* [ ] How would you debug a database deadlock?

---

# 31. Indexing

## ⭐⭐⭐ Highest Priority

* [ ] What is an index?
* [ ] Why do we need indexes?
* [ ] How does an index improve query performance?
* [ ] What data structure is commonly used for database indexes?
* [ ] What is a B-Tree?
* [ ] What is a B+ Tree?
* [ ] B-Tree vs B+ Tree?
* [ ] What is a hash index?
* [ ] B-Tree vs hash index?
* [ ] What is a clustered index?
* [ ] What is a non-clustered index?
* [ ] What is a composite index?
* [ ] What is a covering index?
* [ ] What is a unique index?
* [ ] What is a partial/filtered index?
* [ ] What columns should be indexed?
* [ ] When should you NOT create an index?
* [ ] Why can too many indexes hurt performance?
* [ ] How do indexes affect INSERT?
* [ ] How do indexes affect UPDATE?
* [ ] How do indexes affect DELETE?
* [ ] What is index selectivity?
* [ ] What is cardinality?
* [ ] How does column order matter in a composite index?
* [ ] What is the leftmost-prefix rule?
* [ ] How do you decide which columns to index?
* [ ] Can an index make a query slower?
* [ ] How do you identify whether a query uses an index?

---

# 32. Clustered vs Non-Clustered Index

* [ ] What is a clustered index?
* [ ] What is a non-clustered index?
* [ ] How are they physically different?
* [ ] How many clustered indexes can a table have?
* [ ] Why can a table have multiple non-clustered indexes?
* [ ] What is the relationship between clustered index and primary key?
* [ ] Does every database implement clustered indexes in exactly the same way?

---

# 33. Composite Indexes

## ⭐ Important

* [ ] What is a composite index?
* [ ] Why would you create one?
* [ ] How does column order affect a composite index?
* [ ] What is the leftmost-prefix principle?
* [ ] For an index `(A, B, C)`, which queries can use it efficiently?
* [ ] Why might an index on `(A, B)` not help a query filtering only by B?
* [ ] How should composite indexes be designed for common query patterns?
* [ ] Can a composite index help with ORDER BY?

---

# 34. Query Optimization

## ⭐⭐⭐ Very Important

* [ ] What is query optimization?
* [ ] Why can a SQL query be slow?
* [ ] What is a query execution plan?
* [ ] What is `EXPLAIN`?
* [ ] What is `EXPLAIN ANALYZE`?
* [ ] How do you inspect a slow query?
* [ ] What is a full table scan?
* [ ] Why can full table scans be expensive?
* [ ] How can indexes improve query performance?
* [ ] How can unnecessary joins slow down a query?
* [ ] How can SELECT * hurt performance?
* [ ] Why should only required columns be selected?
* [ ] How can functions on indexed columns affect index usage?
* [ ] How can wildcard searches affect indexes?
* [ ] Why can `%keyword%` be slow?
* [ ] What is query cardinality?
* [ ] What is selectivity?
* [ ] What is a query optimizer?
* [ ] What is a cost-based optimizer?
* [ ] How does a database choose an execution plan?
* [ ] What is a join algorithm?
* [ ] What is nested-loop join?
* [ ] What is hash join?
* [ ] What is merge join?
* [ ] How can you optimize a query with multiple joins?
* [ ] How do you optimize pagination?
* [ ] What is keyset/cursor pagination?
* [ ] OFFSET pagination vs cursor pagination?

---

# 35. Database Storage

* [ ] How does a database store data on disk?
* [ ] What is a data page/block?
* [ ] What is a database page?
* [ ] What is a buffer pool?
* [ ] Why does a database use memory caching?
* [ ] What is disk I/O?
* [ ] Why is disk I/O expensive?
* [ ] What is sequential I/O?
* [ ] What is random I/O?
* [ ] Why can indexes reduce disk I/O?
* [ ] What is write-ahead logging?
* [ ] What is WAL?
* [ ] Why is WAL important?
* [ ] How does WAL help durability and recovery?

---

# 36. Database Recovery

* [ ] What is database recovery?
* [ ] Why is recovery required?
* [ ] What happens when a database crashes?
* [ ] What is a transaction log?
* [ ] What is write-ahead logging?
* [ ] What is checkpointing?
* [ ] What is undo?
* [ ] What is redo?
* [ ] How does DBMS recover committed transactions?
* [ ] How does DBMS recover incomplete transactions?
* [ ] What is crash recovery?

---

# 37. Concurrency Problems

* [ ] What is a dirty read?
* [ ] What is a dirty write?
* [ ] What is a lost update?
* [ ] What is a non-repeatable read?
* [ ] What is a phantom read?
* [ ] What is write skew?
* [ ] How can these problems occur?
* [ ] Which isolation levels prevent them?
* [ ] How can application code avoid concurrency bugs?

---

# 38. MVCC

## ⭐ Strong Interview Topic

* [ ] What is MVCC?
* [ ] Why is MVCC used?
* [ ] What does Multi-Version Concurrency Control mean?
* [ ] How does MVCC allow readers and writers to work concurrently?
* [ ] How does MVCC differ from locking?
* [ ] What are snapshots?
* [ ] What is a transaction's visibility?
* [ ] How can MVCC improve read performance?
* [ ] What are the trade-offs of MVCC?
* [ ] Which popular databases use MVCC-style mechanisms?

---

# 39. Replication

* [ ] What is database replication?
* [ ] Why do we replicate databases?
* [ ] What is primary-replica replication?
* [ ] What is master-slave terminology?
* [ ] What is read replication?
* [ ] What is synchronous replication?
* [ ] What is asynchronous replication?
* [ ] Synchronous vs asynchronous replication?
* [ ] What is replication lag?
* [ ] What problems can replication lag cause?
* [ ] How can read replicas improve scalability?
* [ ] What happens if the primary database fails?
* [ ] What is failover?
* [ ] What is high availability?

---

# 40. Sharding

## ⭐ Strong SWE / System Design Awareness

* [ ] What is database sharding?
* [ ] Why is sharding used?
* [ ] What is horizontal partitioning?
* [ ] What is vertical partitioning?
* [ ] Sharding vs partitioning?
* [ ] What is a shard key?
* [ ] How do you choose a good shard key?
* [ ] What is a hot shard?
* [ ] What is cross-shard query?
* [ ] What are the disadvantages of sharding?
* [ ] When should you NOT shard a database?
* [ ] Replication vs sharding?

---

# 41. Partitioning

* [ ] What is database partitioning?
* [ ] Why partition a table?
* [ ] What is range partitioning?
* [ ] What is list partitioning?
* [ ] What is hash partitioning?
* [ ] Partitioning vs sharding?
* [ ] How can partitioning improve query performance?
* [ ] What is partition pruning?
* [ ] When should partitioning be considered?

---

# 42. SQL vs NoSQL

## ⭐⭐⭐ Common Interview Topic

* [ ] What is SQL?
* [ ] What is NoSQL?
* [ ] SQL vs NoSQL?
* [ ] When should you choose SQL?
* [ ] When should you choose NoSQL?
* [ ] What is schema flexibility?
* [ ] What is horizontal scalability?
* [ ] What is vertical scalability?
* [ ] How does SQL support relationships?
* [ ] How does NoSQL model relationships?
* [ ] Can NoSQL support transactions?
* [ ] Why might a startup choose PostgreSQL instead of MongoDB?
* [ ] Why might MongoDB be useful for document-oriented data?
* [ ] What are the trade-offs of schema flexibility?

---

# 43. MongoDB / Document Database Awareness

* [ ] What is MongoDB?
* [ ] What is a document?
* [ ] What is a collection?
* [ ] Document vs row?
* [ ] Collection vs table?
* [ ] What is BSON?
* [ ] What is ObjectId?
* [ ] What is embedding?
* [ ] What is referencing?
* [ ] Embedding vs referencing?
* [ ] When should you embed documents?
* [ ] When should you reference documents?
* [ ] What is a MongoDB index?
* [ ] How does MongoDB support transactions?
* [ ] What is aggregation?
* [ ] What is an aggregation pipeline?

---

# 44. PostgreSQL / MySQL Awareness

* [ ] What is PostgreSQL?
* [ ] What is MySQL?
* [ ] PostgreSQL vs MySQL?
* [ ] What are relational databases commonly used for?
* [ ] What is ACID support?
* [ ] What is MVCC?
* [ ] What is a transaction in PostgreSQL/MySQL?
* [ ] What is a database engine?
* [ ] What is InnoDB?
* [ ] Why is database-specific behavior important when writing SQL?

---

# 45. Connection Pooling

* [ ] What is a database connection?
* [ ] Why is creating a database connection expensive?
* [ ] What is connection pooling?
* [ ] Why do backend applications use connection pools?
* [ ] What happens when the pool is exhausted?
* [ ] What is maximum pool size?
* [ ] What is connection timeout?
* [ ] What is idle connection?
* [ ] What happens when database connections leak?
* [ ] How can connection pooling improve application performance?

---

# 46. Database Transactions in Backend Applications

* [ ] How do backend services use transactions?
* [ ] When should a service use a transaction?
* [ ] When should a transaction NOT be used?
* [ ] How do you handle transactions across multiple tables?
* [ ] What happens if one operation fails?
* [ ] How should errors be handled during a transaction?
* [ ] Why should transactions be kept short?
* [ ] Why can long transactions hurt performance?
* [ ] How can long transactions cause lock contention?
* [ ] How do transactions interact with connection pools?

---

# 47. ORM

* [ ] What is an ORM?
* [ ] Why use an ORM?
* [ ] What are the advantages of ORM?
* [ ] What are the disadvantages of ORM?
* [ ] ORM vs raw SQL?
* [ ] What is an N+1 query problem?
* [ ] How can ORM abstractions generate inefficient SQL?
* [ ] How do you debug ORM-generated SQL?
* [ ] When should raw SQL be preferred?
* [ ] What is eager loading?
* [ ] What is lazy loading?
* [ ] What are the performance trade-offs?

---

# 48. N+1 Query Problem

## ⭐ Important for Backend/SWE

* [ ] What is the N+1 query problem?
* [ ] Why does N+1 happen?
* [ ] How can ORM frameworks cause N+1?
* [ ] Why is N+1 bad for performance?
* [ ] How can JOINs solve N+1?
* [ ] How can eager loading solve N+1?
* [ ] How can batching solve N+1?
* [ ] How would you detect N+1 in production?

---

# 49. Database Security

* [ ] Why is database security important?
* [ ] What is SQL injection?
* [ ] How does SQL injection happen?
* [ ] How can SQL injection be prevented?
* [ ] What are parameterized queries?
* [ ] What are prepared statements?
* [ ] Why should user input not be concatenated directly into SQL?
* [ ] What is least privilege?
* [ ] Why should database users have limited permissions?
* [ ] How should database credentials be stored?
* [ ] Should database ports be publicly exposed?
* [ ] What is encryption at rest?
* [ ] What is encryption in transit?

---

# 50. SQL Injection

## ⭐⭐⭐ Must Know

* [ ] What is SQL injection?
* [ ] How does SQL injection work conceptually?
* [ ] Why is string concatenation dangerous in SQL?
* [ ] What is a parameterized query?
* [ ] What is a prepared statement?
* [ ] How does parameterization prevent injection?
* [ ] Can ORMs completely eliminate SQL injection?
* [ ] Why should dynamic SQL be handled carefully?
* [ ] How would you secure a login query?

---

# 51. Database Design

* [ ] How do you design a database for an application?
* [ ] How do you identify entities?
* [ ] How do you identify relationships?
* [ ] How do you choose primary keys?
* [ ] How do you decide whether to normalize?
* [ ] How do you decide whether to denormalize?
* [ ] How do you design indexes?
* [ ] How do you choose data types?
* [ ] How do you model one-to-many relationships?
* [ ] How do you model many-to-many relationships?
* [ ] How do you handle soft deletion?
* [ ] What is soft delete?
* [ ] What are the advantages of soft delete?
* [ ] What are the disadvantages of soft delete?
* [ ] How would you design audit fields?
* [ ] How would you design created_at and updated_at?

---

# 52. Database Design Scenarios

* [ ] Design a database for an e-commerce application.
* [ ] Design a database for a shopping cart.
* [ ] Design a database for an order management system.
* [ ] Design a database for a banking system.
* [ ] Design a database for a social media application.
* [ ] Design a database for a chat application.
* [ ] Design a database for a quiz application.
* [ ] Design a database for a learning management system.
* [ ] Design a database for a ticket booking system.
* [ ] Design a database for an employee management system.
* [ ] Design a database for a URL shortener.
* [ ] Design a database for a food delivery application.
* [ ] Design a database for a pharmacy management system.
* [ ] Design a database for a content management system.

---

# 53. Pagination

* [ ] What is pagination?
* [ ] Why is pagination needed?
* [ ] What is offset pagination?
* [ ] What is cursor pagination?
* [ ] OFFSET vs cursor pagination?
* [ ] Why can OFFSET become slow for large datasets?
* [ ] What is keyset pagination?
* [ ] When should cursor pagination be used?
* [ ] How would you paginate millions of records?
* [ ] How do indexes help pagination?

---

# 54. Soft Delete

* [ ] What is soft delete?
* [ ] Why use soft delete?
* [ ] Soft delete vs hard delete?
* [ ] What are the advantages of soft delete?
* [ ] What are the disadvantages?
* [ ] How does soft delete affect indexes?
* [ ] How does soft delete affect unique constraints?
* [ ] How would you query only active records?

---

# 55. Audit and History

* [ ] What is an audit trail?
* [ ] Why do applications need audit logs?
* [ ] What information should an audit record contain?
* [ ] Should audit logs be stored in the same database?
* [ ] How would you track changes to important records?
* [ ] What is temporal data?
* [ ] How would you maintain record history?

---

# 56. Database Backup

* [ ] Why do databases need backups?
* [ ] What is a full backup?
* [ ] What is an incremental backup?
* [ ] What is a differential backup?
* [ ] What is point-in-time recovery?
* [ ] What is disaster recovery?
* [ ] Backup vs replication?
* [ ] Does replication replace backups?
* [ ] What happens if bad data is replicated?
* [ ] What is RPO?
* [ ] What is RTO?

---

# 57. High Availability

* [ ] What is high availability?
* [ ] Why do databases need high availability?
* [ ] What is failover?
* [ ] What is automatic failover?
* [ ] What is replication?
* [ ] Primary-replica architecture?
* [ ] What happens when the primary database fails?
* [ ] What is database clustering?
* [ ] How does load balancing work with read replicas?
* [ ] What are the trade-offs of high availability?

---

# 58. Database Performance

* [ ] What makes a database query slow?
* [ ] How do indexes improve performance?
* [ ] How can indexes hurt performance?
* [ ] How does query complexity affect performance?
* [ ] How does data size affect performance?
* [ ] How does network latency affect database performance?
* [ ] How does connection pooling affect performance?
* [ ] How can caching reduce database load?
* [ ] How can read replicas improve scalability?
* [ ] How can partitioning improve performance?
* [ ] How can denormalization improve read performance?
* [ ] How can database design affect application performance?

---

# 59. Database Caching

* [ ] Why cache database results?
* [ ] What is Redis?
* [ ] When should Redis be used?
* [ ] What data should be cached?
* [ ] What data should NOT be cached?
* [ ] What is cache-aside?
* [ ] What is write-through caching?
* [ ] What is write-back caching?
* [ ] What is cache invalidation?
* [ ] What happens when cached data becomes stale?
* [ ] What is cache stampede?
* [ ] How can cache stampede be prevented?

---

# 60. Database Failure Scenarios

* [ ] What happens if the database goes down?
* [ ] What happens if the database becomes slow?
* [ ] What happens if the connection pool is exhausted?
* [ ] What happens if a query times out?
* [ ] What happens if a transaction fails?
* [ ] What happens if the application crashes during a transaction?
* [ ] What happens if the database crashes after COMMIT?
* [ ] What happens if replication falls behind?
* [ ] What happens if a read replica is unavailable?
* [ ] What happens if an index becomes corrupted?
* [ ] How would you troubleshoot a production database issue?

---

# 61. Most Repeated Fresher DBMS Questions

* [ ] What is DBMS?
* [ ] DBMS vs file system?
* [ ] DBMS vs RDBMS?
* [ ] What is a relational database?
* [ ] What is a primary key?
* [ ] What is a foreign key?
* [ ] Primary key vs unique key?
* [ ] What is normalization?
* [ ] Explain 1NF, 2NF, and 3NF.
* [ ] What is BCNF?
* [ ] What is denormalization?
* [ ] What is a transaction?
* [ ] Explain ACID properties.
* [ ] What is isolation?
* [ ] What are isolation levels?
* [ ] What is a dirty read?
* [ ] What is a non-repeatable read?
* [ ] What is a phantom read?
* [ ] What is a deadlock?
* [ ] What is an index?
* [ ] Why are indexes useful?
* [ ] Why can indexes hurt performance?
* [ ] Clustered vs non-clustered index?
* [ ] What is a composite index?
* [ ] What is a B+ Tree?
* [ ] What is a query execution plan?
* [ ] What is `EXPLAIN`?
* [ ] What is JOIN?
* [ ] INNER JOIN vs LEFT JOIN?
* [ ] WHERE vs HAVING?
* [ ] DELETE vs TRUNCATE vs DROP?
* [ ] UNION vs UNION ALL?
* [ ] What is a subquery?
* [ ] What is a view?
* [ ] What is a stored procedure?
* [ ] What is a trigger?
* [ ] What is SQL injection?
* [ ] How do prepared statements prevent SQL injection?
* [ ] SQL vs NoSQL?
* [ ] What is replication?
* [ ] What is sharding?
* [ ] What is connection pooling?
* [ ] What is the N+1 problem?
* [ ] How do you optimize a slow SQL query?

---

# 62. Important SQL Comparison Questions

* [ ] DELETE vs TRUNCATE vs DROP
* [ ] WHERE vs HAVING
* [ ] UNION vs UNION ALL
* [ ] JOIN vs subquery
* [ ] INNER JOIN vs LEFT JOIN
* [ ] PRIMARY KEY vs UNIQUE KEY
* [ ] PRIMARY KEY vs FOREIGN KEY
* [ ] PRIMARY KEY vs candidate key
* [ ] Candidate key vs super key
* [ ] Clustered vs non-clustered index
* [ ] B-Tree vs hash index
* [ ] Normalization vs denormalization
* [ ] SQL vs NoSQL
* [ ] View vs materialized view
* [ ] Procedure vs function
* [ ] Stored procedure vs application logic
* [ ] Row-level lock vs table-level lock
* [ ] Optimistic vs pessimistic locking
* [ ] Replication vs sharding
* [ ] Vertical vs horizontal scaling
* [ ] Offset vs cursor pagination
* [ ] Hard delete vs soft delete
* [ ] Backup vs replication

---

# 63. "WHY" Questions

* [ ] Why do we need a DBMS?
* [ ] Why do we use primary keys?
* [ ] Why do we use foreign keys?
* [ ] Why do we normalize databases?
* [ ] Why can over-normalization hurt performance?
* [ ] Why do we need transactions?
* [ ] Why do we need ACID?
* [ ] Why do we need isolation?
* [ ] Why can concurrent transactions cause problems?
* [ ] Why do databases use locks?
* [ ] Why do databases use indexes?
* [ ] Why can indexes hurt writes?
* [ ] Why is B+ Tree commonly used for indexes?
* [ ] Why can't NULL be compared using `=`?
* [ ] Why is WHERE different from HAVING?
* [ ] Why can SELECT * be inefficient?
* [ ] Why can OFFSET pagination become slow?
* [ ] Why do we use connection pools?
* [ ] Why do we need replication?
* [ ] Why do we need sharding?
* [ ] Why do we use caching?
* [ ] Why are prepared statements important?
* [ ] Why should transactions be short?
* [ ] Why can long transactions cause performance problems?

---

# 64. "HOW" Questions

* [ ] How does a database execute a SQL query?
* [ ] How does a query optimizer choose a plan?
* [ ] How does an index speed up a query?
* [ ] How does a B+ Tree work?
* [ ] How does a transaction work?
* [ ] How does rollback work?
* [ ] How does WAL provide durability?
* [ ] How does a database recover after a crash?
* [ ] How does locking prevent conflicting updates?
* [ ] How does MVCC work?
* [ ] How does replication work?
* [ ] How does sharding work?
* [ ] How does connection pooling work?
* [ ] How does caching reduce database load?
* [ ] How does a prepared statement prevent SQL injection?
* [ ] How does a JOIN work?
* [ ] How does pagination work?
* [ ] How does an ORM generate SQL?
* [ ] How would you troubleshoot a slow query?
* [ ] How would you optimize a database under high traffic?

---

# 65. "WHEN" Questions

* [ ] When should you normalize?
* [ ] When should you denormalize?
* [ ] When should you use an index?
* [ ] When should you avoid an index?
* [ ] When should you use a composite index?
* [ ] When should you use a transaction?
* [ ] When should you use optimistic locking?
* [ ] When should you use pessimistic locking?
* [ ] When should you use replication?
* [ ] When should you use sharding?
* [ ] When should you use caching?
* [ ] When should you use Redis?
* [ ] When should you use SQL?
* [ ] When should you use NoSQL?
* [ ] When should you use a JOIN?
* [ ] When should you use a subquery?
* [ ] When should you use a window function?
* [ ] When should you use cursor pagination?
* [ ] When should you use soft delete?
* [ ] When should you use a database trigger?
* [ ] When should you use stored procedures?

---

# 66. SQL Interview Practice Concepts

Be able to solve questions involving:

* [ ] Find duplicate records.
* [ ] Find the second-highest salary.
* [ ] Find the Nth-highest salary.
* [ ] Find employees with salary greater than department average.
* [ ] Find the highest salary in each department.
* [ ] Find top N records per group.
* [ ] Find employees who don't belong to a department.
* [ ] Find departments without employees.
* [ ] Find duplicate emails.
* [ ] Find customers who never placed an order.
* [ ] Find customers who placed more than N orders.
* [ ] Find the latest order for every customer.
* [ ] Find the first order for every customer.
* [ ] Calculate running totals.
* [ ] Calculate rankings.
* [ ] Find consecutive records.
* [ ] Find missing IDs.
* [ ] Find records existing in one table but not another.
* [ ] Find records common to two tables.
* [ ] Remove duplicate rows safely.
* [ ] Find the top-selling product.
* [ ] Find monthly revenue.
* [ ] Find users active for consecutive days.
* [ ] Find the most recent record per group.

---

# 67. Database Design Interview Scenarios

For each scenario, practice:

**Entities → Relationships → Keys → Constraints → Normalization → Indexes → Transactions → Scalability**

* [ ] Design an e-commerce database.
* [ ] Design an online bookstore database.
* [ ] Design a food delivery database.
* [ ] Design a railway ticket booking database.
* [ ] Design a banking database.
* [ ] Design a social media database.
* [ ] Design a chat application database.
* [ ] Design a quiz application database.
* [ ] Design a learning platform database.
* [ ] Design a job portal database.
* [ ] Design a URL shortener database.
* [ ] Design a payment system database.
* [ ] Design a shopping cart database.
* [ ] Design an inventory management database.

---

# 68. Production Database Scenarios

* [ ] A query suddenly becomes slow in production. What do you check?
* [ ] CPU usage on the database reaches 100%. What do you investigate?
* [ ] Database disk usage reaches 95%. What do you investigate?
* [ ] Connection pool is exhausted. What could be wrong?
* [ ] Database connections are leaking. How do you identify the issue?
* [ ] A query performs a full table scan. How would you investigate?
* [ ] A new index made writes slower. Why?
* [ ] An API becomes slow after data grows from 10,000 to 10 million rows. What changed?
* [ ] Database CPU is low but queries are slow. What could be the problem?
* [ ] Database is fast locally but slow from the application server. What would you check?
* [ ] Read traffic is much higher than write traffic. How could you scale?
* [ ] One database server cannot handle the traffic. What options do you have?
* [ ] A transaction is holding locks for too long. How would you investigate?
* [ ] Deadlocks suddenly increase. What would you investigate?
* [ ] Replication lag is increasing. What could cause it?
* [ ] A database server crashes during a transaction. What happens?
* [ ] A user sees stale data after an update. What could cause it?
* [ ] A cached record is outdated. How would you handle invalidation?

---

# 69. Final 24-Hour Priority

## 🔴 Tier 1: MUST MASTER

* [ ] DBMS fundamentals
* [ ] RDBMS
* [ ] Keys
* [ ] Constraints
* [ ] ER model
* [ ] Normalization
* [ ] 1NF
* [ ] 2NF
* [ ] 3NF
* [ ] BCNF awareness
* [ ] SQL fundamentals
* [ ] SELECT
* [ ] WHERE
* [ ] GROUP BY
* [ ] HAVING
* [ ] ORDER BY
* [ ] JOINs
* [ ] Subqueries
* [ ] Aggregate functions
* [ ] NULL
* [ ] DELETE vs TRUNCATE vs DROP
* [ ] Transactions
* [ ] ACID
* [ ] Isolation levels
* [ ] Locks
* [ ] Deadlocks
* [ ] Indexes
* [ ] Composite indexes
* [ ] Query optimization
* [ ] SQL injection
* [ ] Connection pooling

## 🟠 Tier 2: Strong SWE Knowledge

* [ ] Window functions
* [ ] Views
* [ ] Stored procedures
* [ ] Triggers
* [ ] MVCC
* [ ] Query execution plans
* [ ] EXPLAIN
* [ ] B+ Trees
* [ ] Replication
* [ ] Read replicas
* [ ] Sharding
* [ ] Partitioning
* [ ] Caching
* [ ] Redis
* [ ] ORM
* [ ] N+1 queries
* [ ] Pagination
* [ ] Soft delete
* [ ] Backup and recovery

## 🟡 Tier 3: Awareness

* [ ] Distributed transactions
* [ ] Two-phase commit
* [ ] Advanced replication
* [ ] Advanced sharding
* [ ] Database clustering
* [ ] Point-in-time recovery
* [ ] RPO/RTO
* [ ] Advanced query optimizer internals
* [ ] Storage-engine internals

---

# 70. Final Interview Simulation

## Round 1: Fundamentals

* [ ] What is DBMS?
* [ ] DBMS vs file system?
* [ ] DBMS vs RDBMS?
* [ ] What is a relational database?
* [ ] What is a primary key?
* [ ] What is a foreign key?
* [ ] What is normalization?
* [ ] Explain 1NF, 2NF, and 3NF.
* [ ] What is an ER diagram?
* [ ] Explain one-to-many and many-to-many relationships.

## Round 2: SQL

* [ ] Explain JOINs.
* [ ] INNER JOIN vs LEFT JOIN?
* [ ] WHERE vs HAVING?
* [ ] GROUP BY?
* [ ] Subquery vs JOIN?
* [ ] What is a window function?
* [ ] What is NULL?
* [ ] DELETE vs TRUNCATE vs DROP?
* [ ] UNION vs UNION ALL?
* [ ] How do you find duplicate records?

## Round 3: Transactions

* [ ] What is a transaction?
* [ ] Explain ACID.
* [ ] What is isolation?
* [ ] Explain isolation levels.
* [ ] What is a dirty read?
* [ ] What is a non-repeatable read?
* [ ] What is a phantom read?
* [ ] What is a deadlock?
* [ ] What is locking?
* [ ] What is MVCC?

## Round 4: Performance

* [ ] What is an index?
* [ ] Why does an index improve performance?
* [ ] Why can an index hurt performance?
* [ ] What is a composite index?
* [ ] What is a B+ Tree?
* [ ] What is EXPLAIN?
* [ ] How do you optimize a slow query?
* [ ] What is connection pooling?
* [ ] What is N+1?
* [ ] How do you optimize database performance?

## Round 5: Scalability

* [ ] What is replication?
* [ ] What is a read replica?
* [ ] What is sharding?
* [ ] What is partitioning?
* [ ] What is caching?
* [ ] When would you use Redis?
* [ ] SQL vs NoSQL?
* [ ] How would you scale a database for millions of users?
* [ ] How would you handle read-heavy traffic?
* [ ] How would you handle write-heavy traffic?

## Round 6: Security

* [ ] What is SQL injection?
* [ ] How do prepared statements prevent SQL injection?
* [ ] What is least privilege?
* [ ] How should database credentials be managed?
* [ ] Should a database be publicly accessible?
* [ ] What is encryption at rest?
* [ ] What is encryption in transit?

---

# 71. Final Confidence Test

Without looking at notes, explain these aloud:

* [ ] What is DBMS?
* [ ] What is RDBMS?
* [ ] DBMS vs file system.
* [ ] Explain primary key and foreign key.
* [ ] Explain normalization.
* [ ] Explain 1NF, 2NF, and 3NF.
* [ ] Explain JOINs.
* [ ] Explain WHERE vs HAVING.
* [ ] Explain GROUP BY.
* [ ] Explain subqueries.
* [ ] Explain window functions.
* [ ] Explain NULL.
* [ ] Explain DELETE vs TRUNCATE vs DROP.
* [ ] Explain transactions.
* [ ] Explain ACID.
* [ ] Explain isolation levels.
* [ ] Explain dirty reads.
* [ ] Explain deadlocks.
* [ ] Explain indexes.
* [ ] Explain composite indexes.
* [ ] Explain B+ Trees.
* [ ] Explain query optimization.
* [ ] Explain EXPLAIN.
* [ ] Explain MVCC.
* [ ] Explain replication.
* [ ] Explain sharding.
* [ ] Explain caching.
* [ ] Explain connection pooling.
* [ ] Explain N+1 queries.
* [ ] Explain SQL injection.
* [ ] Explain SQL vs NoSQL.
* [ ] Explain how you would design a production database.

---

# 72. DBMS Interview Confidence Rule

For every major concept, answer:

### 1. What?

What is it?

### 2. Why?

Why does the database need it?

### 3. How?

How does it work internally?

### 4. When?

When should you use it?

### 5. When NOT?

When is it a bad choice?

### 6. Example?

Can you give a practical Software Engineering example?

### 7. Trade-off?

What does it cost in performance, storage, complexity, consistency, or scalability?

---

# Final Target

You should be able to comfortably answer questions such as:

> "Explain normalization."

> "Why do we need indexes?"

> "Why can indexes slow down INSERT?"

> "Explain ACID with a real example."

> "What happens when two users update the same row?"

> "What is a deadlock?"

> "What is the difference between READ COMMITTED and REPEATABLE READ?"

> "How does a database execute a query?"

> "How would you optimize a slow query?"

> "What is a composite index?"

> "What is the N+1 problem?"

> "SQL vs NoSQL?"

> "How would you design the database for an e-commerce application?"

> "How would you scale a database when millions of users start accessing it?"

> "How do prepared statements prevent SQL injection?"

> "What happens when the database crashes during a transaction?"

The goal is not to become a DBA.

The goal is to become a **Software Engineer who understands what happens behind the API, ORM, query, transaction, and database call.** 🗄️⚙️

If you can confidently handle **Tier 1 + SQL + ACID + isolation + indexes + query optimization + database design + production scenarios**, your DBMS preparation is in very good shape for a fresher SWE interview.
