# Operating Systems Master Interview Questions

## 24-Hour Interview Revision \| Fresher Software Engineer

> **Focus:** Software Engineer / SDE Fresher\
> **Goal:** Build confidence in OS theory, concepts, optimization,
> concurrency, memory, processes, threads, and practical SWE scenarios.\
> For every concept practice: **What → Why → How → When → Example →
> Trade-off**

------------------------------------------------------------------------

# 1. Operating System Fundamentals

-   [ ] What is an Operating System?
-   [ ] Why do we need an Operating System?
-   [ ] What are the main responsibilities of an OS?
-   [ ] What happens if there is no Operating System?
-   [ ] What is the kernel?
-   [ ] What is the difference between OS and kernel?
-   [ ] What is a shell?
-   [ ] What is the difference between shell and kernel?
-   [ ] What is a system call?
-   [ ] What is user mode?
-   [ ] What is kernel mode?
-   [ ] Why does an OS have user mode and kernel mode?
-   [ ] What is privileged mode?
-   [ ] What are privileged instructions?
-   [ ] What is hardware abstraction?
-   [ ] What is resource management?
-   [ ] What resources does an OS manage?
-   [ ] What is process management?
-   [ ] What is memory management?
-   [ ] What is file management?
-   [ ] What is I/O management?
-   [ ] What is security and protection in an OS?

# 2. Types of Operating Systems

-   [ ] What are the different types of Operating Systems?
-   [ ] What is a batch Operating System?
-   [ ] What is a multiprogramming OS?
-   [ ] What is a multitasking OS?
-   [ ] What is a multiprocessing OS?
-   [ ] What is a time-sharing OS?
-   [ ] What is a distributed OS?
-   [ ] What is a real-time OS?
-   [ ] What is an embedded OS?
-   [ ] Multitasking vs multiprocessing?
-   [ ] Multiprogramming vs multitasking?
-   [ ] Hard real-time vs soft real-time?
-   [ ] When would a real-time OS be used?

# 3. Kernel

-   [ ] What is a kernel?
-   [ ] What are the responsibilities of the kernel?
-   [ ] What happens when a program requests an OS service?
-   [ ] What is kernel space?
-   [ ] What is user space?
-   [ ] User space vs kernel space?
-   [ ] Why can't normal applications directly access hardware?
-   [ ] What is a kernel mode transition?
-   [ ] What is a monolithic kernel?
-   [ ] What is a microkernel?
-   [ ] Monolithic kernel vs microkernel?
-   [ ] What is a hybrid kernel?
-   [ ] What are the advantages of a monolithic kernel?
-   [ ] What are the advantages of a microkernel?

# 4. System Calls

## ⭐⭐⭐ Highest Priority

-   [ ] What is a system call?
-   [ ] Why are system calls required?
-   [ ] How does a system call work?
-   [ ] What happens when user code makes a system call?
-   [ ] What is the transition from user mode to kernel mode?
-   [ ] What happens after the kernel finishes a system call?
-   [ ] What is a system call interface?
-   [ ] What are examples of system calls?
-   [ ] What is `fork()`?
-   [ ] What is `exec()`?
-   [ ] What is `wait()`?
-   [ ] What is `exit()`?
-   [ ] What is `open()`?
-   [ ] What is `read()`?
-   [ ] What is `write()`?
-   [ ] What is `close()`?
-   [ ] What is `mmap()`?
-   [ ] System call vs normal function call?
-   [ ] Why are system calls more expensive than normal function calls?

# 5. Program vs Process

-   [ ] What is a program?
-   [ ] What is a process?
-   [ ] Program vs process?
-   [ ] Is a program active or passive?
-   [ ] Is a process active or passive?
-   [ ] Can multiple processes execute the same program?
-   [ ] Can one program create multiple processes?
-   [ ] What happens when you execute a program?
-   [ ] What information does the OS maintain for a process?

# 6. Process

## ⭐⭐⭐ Extremely Important

-   [ ] What is a process?
-   [ ] Why do we need processes?
-   [ ] What is a process ID?
-   [ ] What is a parent process?
-   [ ] What is a child process?
-   [ ] What is a process control block?
-   [ ] What is stored in a PCB?
-   [ ] What is process state?
-   [ ] What are the different process states?
-   [ ] What is New state?
-   [ ] What is Ready state?
-   [ ] What is Running state?
-   [ ] What is Waiting/Blocked state?
-   [ ] What is Terminated state?
-   [ ] What causes a process to move from Ready to Running?
-   [ ] What causes a process to move from Running to Waiting?
-   [ ] What causes a process to move from Waiting to Ready?
-   [ ] What causes a process to move from Running to Ready?
-   [ ] What happens when a process terminates?

# 7. Process State and Context Switching

-   [ ] Explain the process state diagram.
-   [ ] Why is a process moved to the Ready state?
-   [ ] Why is a process moved to the Waiting state?
-   [ ] Can a waiting process directly become Running?
-   [ ] What is the dispatcher?
-   [ ] What is the scheduler?
-   [ ] Scheduler vs dispatcher?
-   [ ] What is a context switch?
-   [ ] When does a context switch occur?
-   [ ] Why is context switching expensive?
-   [ ] What information is saved during a context switch?
-   [ ] Where is process context stored?
-   [ ] Does context switching happen between processes?
-   [ ] Does context switching happen between threads?
-   [ ] How does context-switch overhead affect performance?

# 8. Process Scheduling

## ⭐⭐⭐ Highest Priority

-   [ ] What is CPU scheduling?
-   [ ] Why is CPU scheduling required?
-   [ ] What is a scheduler?
-   [ ] What is a short-term scheduler?
-   [ ] What is a long-term scheduler?
-   [ ] What is a medium-term scheduler?
-   [ ] Short-term vs long-term scheduler?
-   [ ] What is a preemptive scheduler?
-   [ ] What is a non-preemptive scheduler?
-   [ ] Preemptive vs non-preemptive scheduling?
-   [ ] What is CPU burst?
-   [ ] What is I/O burst?
-   [ ] What is CPU-bound process?
-   [ ] What is I/O-bound process?

# 9. Scheduling Algorithms

## ⭐⭐⭐ Must Know

-   [ ] What is FCFS scheduling?
-   [ ] How does FCFS work?
-   [ ] Advantages and disadvantages of FCFS?
-   [ ] What is the convoy effect?
-   [ ] What is SJF scheduling?
-   [ ] How does SJF work?
-   [ ] Why can SJF minimize average waiting time?
-   [ ] What is SRTF?
-   [ ] SJF vs SRTF?
-   [ ] What is Round Robin scheduling?
-   [ ] How does Round Robin work?
-   [ ] What is time quantum?
-   [ ] What happens if time quantum is too small?
-   [ ] What happens if time quantum is too large?
-   [ ] What is Priority Scheduling?
-   [ ] What is starvation?
-   [ ] What is aging?
-   [ ] How does aging solve starvation?
-   [ ] What is Multilevel Queue Scheduling?
-   [ ] What is Multilevel Feedback Queue?
-   [ ] Multilevel Queue vs MLFQ?
-   [ ] When would Round Robin be useful?
-   [ ] Which scheduling algorithm is best for interactive systems?
-   [ ] Can there be one universally best scheduling algorithm?

# 10. Scheduling Metrics

-   [ ] What is turnaround time?
-   [ ] What is waiting time?
-   [ ] What is response time?
-   [ ] What is completion time?
-   [ ] What is arrival time?
-   [ ] What is burst time?
-   [ ] How do you calculate turnaround time?
-   [ ] How do you calculate waiting time?
-   [ ] How do you calculate response time?
-   [ ] Waiting time vs response time?
-   [ ] Turnaround time vs response time?
-   [ ] Why is response time important for interactive applications?
-   [ ] Why is throughput important?
-   [ ] What is CPU utilization?

# 11. Threads

## ⭐⭐⭐ Extremely Important

-   [ ] What is a thread?
-   [ ] Why do we need threads?
-   [ ] Process vs thread?
-   [ ] What resources are shared between threads?
-   [ ] What resources are private to each thread?
-   [ ] What is a thread's stack?
-   [ ] What is a thread's program counter?
-   [ ] What is a thread control block?
-   [ ] Can multiple threads exist inside one process?
-   [ ] Can threads run in parallel?
-   [ ] What is multithreading?
-   [ ] What is concurrency?
-   [ ] What is parallelism?
-   [ ] Concurrency vs parallelism?
-   [ ] Why are threads cheaper than processes?
-   [ ] What are the disadvantages of threads?
-   [ ] What happens if one thread crashes?
-   [ ] What is thread creation overhead?
-   [ ] What is a thread pool?

# 12. Multithreading

-   [ ] Why is multithreading useful?
-   [ ] What is thread concurrency?
-   [ ] What is thread parallelism?
-   [ ] What is CPU-bound work?
-   [ ] What is I/O-bound work?
-   [ ] Why are threads useful for I/O-bound tasks?
-   [ ] Why can multiple threads help CPU-bound tasks on multicore CPUs?
-   [ ] What is a thread pool?
-   [ ] Why use thread pools?
-   [ ] What happens if a thread pool is too small?
-   [ ] What happens if a thread pool is too large?
-   [ ] What is thread starvation?
-   [ ] What is thread contention?

# 13. Concurrency

## ⭐⭐⭐ Very Important

-   [ ] What is concurrency?
-   [ ] Why is concurrency difficult?
-   [ ] What is a race condition?
-   [ ] What is a critical section?
-   [ ] What is mutual exclusion?
-   [ ] What is synchronization?
-   [ ] What is atomicity?
-   [ ] What is thread safety?
-   [ ] What is a data race?
-   [ ] Race condition vs data race?
-   [ ] How can race conditions occur?
-   [ ] How can race conditions be prevented?
-   [ ] What is synchronization overhead?
-   [ ] What is lock contention?

# 14. Critical Section and Synchronization

-   [ ] What is a critical section?
-   [ ] Why do we need critical-section protection?
-   [ ] What are the requirements of a correct critical-section
    solution?
-   [ ] What is mutual exclusion?
-   [ ] What is progress?
-   [ ] What is bounded waiting?
-   [ ] Why must only one thread enter a critical section at a time?
-   [ ] What happens if multiple threads modify shared data
    simultaneously?
-   [ ] How can you protect a critical section?
-   [ ] What is a mutex?
-   [ ] Why is a mutex used?
-   [ ] How does a mutex work?
-   [ ] What happens when a thread tries to lock an already locked
    mutex?
-   [ ] What is lock contention?
-   [ ] What is a semaphore?
-   [ ] Why are semaphores used?
-   [ ] What is a binary semaphore?
-   [ ] What is a counting semaphore?
-   [ ] Binary semaphore vs mutex?
-   [ ] When would you use a counting semaphore?

# 15. Mutex vs Semaphore

## ⭐ Common Interview Question

-   [ ] Mutex vs semaphore?
-   [ ] What is ownership in a mutex?
-   [ ] Does a semaphore have ownership?
-   [ ] When should you use a mutex?
-   [ ] When should you use a semaphore?
-   [ ] Can a mutex be used to count resources?
-   [ ] Can a semaphore provide mutual exclusion?
-   [ ] Which is better for protecting shared data?
-   [ ] Which is better for resource counting?

# 16. Deadlock

## ⭐⭐⭐⭐⭐ Highest Priority

-   [ ] What is deadlock?
-   [ ] Why does deadlock occur?
-   [ ] What are the four necessary conditions for deadlock?
-   [ ] What is mutual exclusion?
-   [ ] What is hold and wait?
-   [ ] What is no preemption?
-   [ ] What is circular wait?
-   [ ] How do these four conditions create deadlock?
-   [ ] Give a real-world deadlock example.
-   [ ] Give a programming deadlock example.
-   [ ] How can deadlock be prevented?
-   [ ] How can deadlock be avoided?
-   [ ] How can deadlock be detected?
-   [ ] What is deadlock recovery?
-   [ ] Deadlock prevention vs avoidance?
-   [ ] Deadlock detection vs prevention?
-   [ ] What is the Banker's Algorithm?
-   [ ] Why is Banker's Algorithm used?
-   [ ] What is a safe state?
-   [ ] What is an unsafe state?
-   [ ] Is an unsafe state always a deadlock?

# 17. Deadlock Prevention and Starvation

-   [ ] How can mutual exclusion be eliminated?
-   [ ] How can hold-and-wait be prevented?
-   [ ] How can no-preemption be prevented?
-   [ ] How can circular wait be prevented?
-   [ ] Why is consistent lock ordering useful?
-   [ ] Why should locks be acquired in a fixed order?
-   [ ] How does timeout help avoid deadlocks?
-   [ ] What is starvation?
-   [ ] Why does starvation happen?
-   [ ] Starvation vs deadlock?
-   [ ] How can priority scheduling cause starvation?
-   [ ] What is aging?
-   [ ] How does aging prevent starvation?
-   [ ] Can a system have starvation without deadlock?
-   [ ] What is livelock?
-   [ ] Deadlock vs livelock?
-   [ ] How can livelock be prevented?

# 18. Memory Management

## ⭐⭐⭐ Extremely Important

-   [ ] What is memory management?
-   [ ] Why does the OS manage memory?
-   [ ] What is RAM?
-   [ ] What is physical memory?
-   [ ] What is virtual memory?
-   [ ] What is an address space?
-   [ ] What is logical address?
-   [ ] What is physical address?
-   [ ] Logical vs physical address?
-   [ ] What is address translation?
-   [ ] Why is address translation required?
-   [ ] What is memory allocation?
-   [ ] What is memory deallocation?
-   [ ] What is memory protection?
-   [ ] What is memory sharing?
-   [ ] What is memory fragmentation?

# 19. Virtual Memory

## ⭐⭐⭐⭐⭐ Highest Priority

-   [ ] What is virtual memory?
-   [ ] Why do we need virtual memory?
-   [ ] How does virtual memory work?
-   [ ] What is virtual address space?
-   [ ] What is physical address space?
-   [ ] How does a process get its own virtual address space?
-   [ ] Why can't one process normally access another process's memory?
-   [ ] What is address translation?
-   [ ] What is a page?
-   [ ] What is a frame?
-   [ ] Page vs frame?
-   [ ] What is paging?
-   [ ] What is a page table?
-   [ ] What is a page-table entry?
-   [ ] What is a page fault?
-   [ ] What happens during a page fault?
-   [ ] Why is a page fault expensive?
-   [ ] What is demand paging?
-   [ ] What is swapping?
-   [ ] Paging vs swapping?
-   [ ] What is thrashing?
-   [ ] Why does thrashing happen?
-   [ ] How can thrashing be reduced?

# 20. Paging and Page Tables

-   [ ] What is paging?
-   [ ] Why do we use paging?
-   [ ] How does paging eliminate external fragmentation?
-   [ ] What is a page?
-   [ ] What is a frame?
-   [ ] What is a page table?
-   [ ] How does virtual address translation work?
-   [ ] What is page offset?
-   [ ] What is page number?
-   [ ] How is a virtual address divided?
-   [ ] What is a multi-level page table?
-   [ ] Why are multi-level page tables used?
-   [ ] What is an inverted page table?
-   [ ] What is a page-table entry?

# 21. TLB

## ⭐⭐⭐ Very Important

-   [ ] What is TLB?
-   [ ] Why is TLB needed?
-   [ ] How does TLB speed up address translation?
-   [ ] What is a TLB hit?
-   [ ] What is a TLB miss?
-   [ ] What happens on a TLB miss?
-   [ ] TLB vs cache?
-   [ ] Why is TLB usually very fast?
-   [ ] How does TLB affect memory access time?
-   [ ] What happens to TLB state during a process switch?

# 22. Page Replacement

-   [ ] What is page replacement?
-   [ ] Why is page replacement required?
-   [ ] What is FIFO page replacement?
-   [ ] How does FIFO work?
-   [ ] What is the disadvantage of FIFO?
-   [ ] What is Belady's anomaly?
-   [ ] What is Optimal Page Replacement?
-   [ ] Why is Optimal Page Replacement theoretically optimal?
-   [ ] Why is it not directly implementable in real systems?
-   [ ] What is LRU?
-   [ ] How does LRU work?
-   [ ] FIFO vs LRU?
-   [ ] What is Clock/Second-Chance replacement?
-   [ ] Which page replacement algorithm is practical?
-   [ ] What factors affect page replacement performance?

# 23. Page Fault and Thrashing

-   [ ] What is a page fault?
-   [ ] Is a page fault always an error?
-   [ ] What happens when a page fault occurs?
-   [ ] Why can page faults be expensive?
-   [ ] What happens if there is a free frame?
-   [ ] What happens if there is no free frame?
-   [ ] How does the OS choose a page to evict?
-   [ ] What happens after the required page is loaded?
-   [ ] What is a minor page fault?
-   [ ] What is a major page fault?
-   [ ] What is thrashing?
-   [ ] Why does thrashing happen?
-   [ ] How does excessive paging affect performance?
-   [ ] How can you detect thrashing?
-   [ ] How can you reduce thrashing?
-   [ ] What is working-set model?
-   [ ] What is page-fault frequency?
-   [ ] Why does adding more processes sometimes make performance worse?

# 24. Memory Fragmentation

-   [ ] What is fragmentation?
-   [ ] What is internal fragmentation?
-   [ ] What is external fragmentation?
-   [ ] Internal vs external fragmentation?
-   [ ] Why does paging reduce external fragmentation?
-   [ ] Can paging cause internal fragmentation?
-   [ ] How does segmentation relate to fragmentation?
-   [ ] How can fragmentation be reduced?

# 25. Segmentation

-   [ ] What is segmentation?
-   [ ] Why was segmentation used?
-   [ ] What is a segment?
-   [ ] How does segmentation differ from paging?
-   [ ] Paging vs segmentation?
-   [ ] What is a segment table?
-   [ ] What is external fragmentation in segmentation?
-   [ ] Can modern systems combine paging and segmentation concepts?

# 26. Stack and Heap

## ⭐⭐⭐ Very Important for SWE

-   [ ] What is stack memory?
-   [ ] What is heap memory?
-   [ ] Stack vs heap?
-   [ ] What is stored on the stack?
-   [ ] What is stored on the heap?
-   [ ] Why is stack allocation fast?
-   [ ] Why is heap allocation more expensive?
-   [ ] What causes stack overflow?
-   [ ] What causes memory leak?
-   [ ] What is dynamic memory allocation?
-   [ ] What happens when heap memory is exhausted?
-   [ ] How does recursion affect stack memory?
-   [ ] Why can deep recursion cause stack overflow?

# 27. Memory Allocation and Memory Bugs

-   [ ] What is dynamic memory allocation?
-   [ ] What is malloc?
-   [ ] What is calloc?
-   [ ] What is realloc?
-   [ ] What is free?
-   [ ] What is a memory leak?
-   [ ] What is a dangling pointer?
-   [ ] What is a double-free?
-   [ ] What is use-after-free?
-   [ ] How can memory bugs affect applications?
-   [ ] How does garbage collection relate to memory management?

# 28. Garbage Collection

## ⭐ Java/SWE Relevant

-   [ ] What is garbage collection?
-   [ ] Why do programming languages use garbage collection?
-   [ ] What is automatic memory management?
-   [ ] What is a garbage collector?
-   [ ] What is a reachable object?
-   [ ] What is an unreachable object?
-   [ ] What is reference counting?
-   [ ] What is mark-and-sweep?
-   [ ] What is generational garbage collection?
-   [ ] What is stop-the-world?
-   [ ] Why can GC affect application performance?
-   [ ] Can Java have memory leaks?
-   [ ] What causes OutOfMemoryError?
-   [ ] StackOverflowError vs OutOfMemoryError?

# 29. Inter-Process Communication

## ⭐⭐⭐ Important

-   [ ] What is IPC?
-   [ ] Why do processes need IPC?
-   [ ] What are the different IPC mechanisms?
-   [ ] What is a pipe?
-   [ ] What is a named pipe?
-   [ ] What is a message queue?
-   [ ] What is shared memory?
-   [ ] What is a socket?
-   [ ] What is a signal?
-   [ ] Shared memory vs message passing?
-   [ ] Pipe vs socket?
-   [ ] When should shared memory be used?
-   [ ] When should message passing be used?
-   [ ] Why is shared memory fast?
-   [ ] Why does shared memory require synchronization?

# 30. File Systems

## ⭐⭐⭐ Important

-   [ ] What is a file system?
-   [ ] Why does an OS need a file system?
-   [ ] What is a file?
-   [ ] What is a directory?
-   [ ] What is a file descriptor?
-   [ ] What is an inode?
-   [ ] What is file metadata?
-   [ ] What are file permissions?
-   [ ] What is a symbolic link?
-   [ ] What is a hard link?
-   [ ] Hard link vs symbolic link?
-   [ ] What happens when a file is opened?
-   [ ] What is a file descriptor table?
-   [ ] What happens when a process reads a file?
-   [ ] What happens when a process writes to a file?

# 31. File Descriptors

-   [ ] What is a file descriptor?
-   [ ] Why does the OS use file descriptors?
-   [ ] What are standard input, output, and error?
-   [ ] What are stdin, stdout, and stderr?
-   [ ] Why are sockets represented as file descriptors in Unix-like
    systems?
-   [ ] What happens when a file is opened?
-   [ ] What happens when a file is closed?
-   [ ] What happens if a process opens too many files?
-   [ ] What is a file descriptor leak?

# 32. I/O Management

-   [ ] What is I/O?
-   [ ] Why does the OS manage I/O?
-   [ ] What is blocking I/O?
-   [ ] What is non-blocking I/O?
-   [ ] Blocking vs non-blocking I/O?
-   [ ] What is synchronous I/O?
-   [ ] What is asynchronous I/O?
-   [ ] Synchronous vs asynchronous I/O?
-   [ ] What is I/O buffering?
-   [ ] What is spooling?
-   [ ] What is interrupt-driven I/O?
-   [ ] What is DMA?
-   [ ] Why is DMA useful?

# 33. Blocking, Non-Blocking, Sync and Async

## ⭐⭐⭐ SWE Important

-   [ ] What does blocking mean?
-   [ ] What does non-blocking mean?
-   [ ] What happens to a thread during blocking I/O?
-   [ ] Why can blocking operations reduce throughput?
-   [ ] Why is non-blocking I/O useful for servers?
-   [ ] Does non-blocking automatically mean asynchronous?
-   [ ] What is synchronous execution?
-   [ ] What is asynchronous execution?
-   [ ] Does asynchronous always mean multithreading?
-   [ ] Does asynchronous always mean parallel?
-   [ ] How can asynchronous I/O improve responsiveness?
-   [ ] What is an event loop?
-   [ ] How does asynchronous I/O relate to OS I/O?

# 34. Interrupts

-   [ ] What is an interrupt?
-   [ ] Why are interrupts required?
-   [ ] What is a hardware interrupt?
-   [ ] What is a software interrupt?
-   [ ] What is an interrupt handler?
-   [ ] What happens when an interrupt occurs?
-   [ ] What is an interrupt vector?
-   [ ] Interrupt vs system call?
-   [ ] What is an exception?
-   [ ] Interrupt vs exception?

# 35. CPU and I/O

-   [ ] What is CPU-bound work?
-   [ ] What is I/O-bound work?
-   [ ] CPU-bound vs I/O-bound?
-   [ ] Why do I/O-bound processes spend time waiting?
-   [ ] Why can multitasking improve CPU utilization?
-   [ ] How does the OS schedule CPU-bound processes?
-   [ ] How does the OS handle I/O-bound processes?

# 36. Process Creation

## ⭐ Strong Interview Topic

-   [ ] How is a process created?
-   [ ] What is fork?
-   [ ] What does fork return?
-   [ ] What happens to memory after fork?
-   [ ] What is copy-on-write?
-   [ ] Why is copy-on-write useful?
-   [ ] What is exec?
-   [ ] fork vs exec?
-   [ ] What is wait?
-   [ ] Why does a parent process call wait?
-   [ ] What is a zombie process?
-   [ ] What is an orphan process?
-   [ ] Zombie vs orphan?
-   [ ] How can zombie processes be cleaned up?

# 37. Zombie, Orphan and Copy-on-Write

-   [ ] What is a zombie process?
-   [ ] Why does a zombie process exist?
-   [ ] What information remains for a zombie?
-   [ ] How does a parent clean up a zombie?
-   [ ] What is an orphan process?
-   [ ] What happens to an orphan process?
-   [ ] Can zombies consume significant resources?
-   [ ] What is copy-on-write?
-   [ ] Why is copy-on-write used after fork?
-   [ ] Does fork immediately copy all memory?
-   [ ] When is a memory page actually copied?
-   [ ] How does copy-on-write improve performance?

# 38. CPU Architecture Awareness

-   [ ] What is a CPU core?
-   [ ] What is a hardware thread?
-   [ ] What is hyper-threading / SMT?
-   [ ] Core vs thread?
-   [ ] What is a CPU register?
-   [ ] What is the program counter?
-   [ ] What is the stack pointer?
-   [ ] Why does the OS save CPU registers during context switching?
-   [ ] What is cache memory?
-   [ ] What is L1 cache?
-   [ ] What is L2 cache?
-   [ ] What is L3 cache?
-   [ ] Why is CPU cache important for software performance?
-   [ ] What is cache locality?
-   [ ] What is temporal locality?
-   [ ] What is spatial locality?
-   [ ] Why can arrays have better cache locality than linked lists?

# 39. Atomic Operations and Memory Ordering

-   [ ] What is an atomic operation?
-   [ ] Why are atomic operations important?
-   [ ] What is compare-and-swap?
-   [ ] What is CAS?
-   [ ] How does CAS support lock-free algorithms?
-   [ ] Atomic operation vs mutex?
-   [ ] When would atomic variables be useful?
-   [ ] What is memory ordering?
-   [ ] Why can multiple threads observe memory differently?
-   [ ] What is a memory barrier?
-   [ ] What is a memory fence?
-   [ ] Why do concurrent programs need memory ordering guarantees?
-   [ ] What is a data race?
-   [ ] Why is volatile not a universal solution for synchronization?

# 40. Signals

-   [ ] What is a signal?
-   [ ] Why are signals used?
-   [ ] What is SIGTERM?
-   [ ] What is SIGKILL?
-   [ ] What is SIGINT?
-   [ ] SIGTERM vs SIGKILL?
-   [ ] Can a process handle SIGTERM?
-   [ ] Can a process handle SIGKILL?
-   [ ] When would you gracefully terminate a process?
-   [ ] Why is graceful shutdown important?

# 41. User Mode vs Kernel Mode

## ⭐⭐⭐ Common Interview Question

-   [ ] What is user mode?
-   [ ] What is kernel mode?
-   [ ] Why are there two execution modes?
-   [ ] What can kernel mode do that user mode cannot?
-   [ ] What happens when an application needs privileged functionality?
-   [ ] How does a system call transition between modes?
-   [ ] What happens when a process executes an invalid instruction?
-   [ ] Why is user/kernel separation important for security?

# 42. Process Isolation

-   [ ] Why are processes isolated?
-   [ ] Can one process directly access another process's memory?
-   [ ] How does virtual memory provide isolation?
-   [ ] What happens when a process tries to access invalid memory?
-   [ ] What is segmentation fault?
-   [ ] What is access violation?
-   [ ] How does the OS protect process memory?
-   [ ] How can processes intentionally communicate?

# 43. Boot Process

-   [ ] What happens when a computer starts?
-   [ ] What is BIOS?
-   [ ] What is UEFI?
-   [ ] What is bootloader?
-   [ ] What does the bootloader do?
-   [ ] How does the OS kernel get loaded?
-   [ ] What happens after the kernel starts?
-   [ ] What is initialization?
-   [ ] Firmware vs bootloader vs kernel vs user space?

# 44. Security and Protection

-   [ ] What is OS security?
-   [ ] What is protection?
-   [ ] Security vs protection?
-   [ ] Why should processes be isolated?
-   [ ] What is memory protection?
-   [ ] What is access control?
-   [ ] What is privilege?
-   [ ] What is least privilege?
-   [ ] What is privilege escalation?
-   [ ] What is sandboxing?
-   [ ] Why is user/kernel separation important?
-   [ ] Why shouldn't every application run with administrator
    privileges?

# 45. Virtualization and Containers

-   [ ] What is virtualization?
-   [ ] Why is virtualization useful?
-   [ ] What is a virtual machine?
-   [ ] What is a hypervisor?
-   [ ] What is a Type 1 hypervisor?
-   [ ] What is a Type 2 hypervisor?
-   [ ] VM vs container?
-   [ ] Why are containers lighter than VMs?
-   [ ] What is hardware virtualization?
-   [ ] Why is virtualization important for cloud computing?
-   [ ] What is a container?
-   [ ] How do containers isolate processes?
-   [ ] What are namespaces?
-   [ ] What are cgroups?
-   [ ] How do containers limit CPU and memory?
-   [ ] Why are containers lightweight?

# 46. OS + Java

## ⭐ Java/SWE Relevant

-   [ ] How does Java run on an Operating System?
-   [ ] What is the JVM?
-   [ ] JVM vs OS process?
-   [ ] Is a Java application a process?
-   [ ] Are Java threads OS threads?
-   [ ] How does Java create threads?
-   [ ] What is the Java heap?
-   [ ] What is the Java stack?
-   [ ] How does garbage collection interact with OS memory?
-   [ ] What happens when Java creates a new thread?
-   [ ] What happens when a Java thread blocks on I/O?
-   [ ] What is a thread pool in Java?
-   [ ] How does Java synchronization relate to OS synchronization?
-   [ ] What happens when Java throws OutOfMemoryError?
-   [ ] What happens when Java throws StackOverflowError?

# 47. OS + Node.js

## ⭐ Full-Stack/SWE Relevant

-   [ ] How does Node.js use the OS?
-   [ ] What is the Node.js event loop?
-   [ ] Is Node.js single-threaded?
-   [ ] What does "single-threaded" mean in Node.js?
-   [ ] Does Node.js use multiple OS threads?
-   [ ] What is libuv?
-   [ ] How does Node.js handle I/O?
-   [ ] Why is Node.js good for I/O-heavy applications?
-   [ ] What happens when Node.js performs a file read?
-   [ ] What happens when Node.js performs a network request?
-   [ ] What is the Node.js thread pool?
-   [ ] Which operations can use the thread pool?
-   [ ] What happens if CPU-heavy work blocks the event loop?
-   [ ] How can CPU-heavy tasks be handled in Node.js?

# 48. OS + Backend

-   [ ] What happens when a backend server starts?
-   [ ] How does a server listen on a port?
-   [ ] What is a listening socket?
-   [ ] How does the OS deliver incoming network data to a process?
-   [ ] How does a server handle multiple connections?
-   [ ] Threads vs event-driven I/O?
-   [ ] How does a backend server use CPU?
-   [ ] How does a backend server use memory?
-   [ ] What happens when a backend runs out of memory?
-   [ ] What happens when the server runs out of file descriptors?
-   [ ] How does OS scheduling affect backend performance?

# 49. File and Disk Performance

-   [ ] Why is reading from memory faster than reading from disk?
-   [ ] What is disk I/O?
-   [ ] What is sequential access?
-   [ ] What is random access?
-   [ ] Why is sequential I/O generally faster?
-   [ ] What is buffering?
-   [ ] What is page cache?
-   [ ] Why does the OS cache file data?
-   [ ] What happens when an application reads a frequently accessed
    file?
-   [ ] What happens when memory pressure increases?
-   [ ] What is an HDD?
-   [ ] What is an SSD?
-   [ ] HDD vs SSD?
-   [ ] What is seek time?
-   [ ] What is rotational latency?
-   [ ] Why don't SSDs have mechanical seek time?

# 50. Disk Scheduling Awareness

-   [ ] What is disk scheduling?
-   [ ] Why is disk scheduling needed?
-   [ ] What is FCFS disk scheduling?
-   [ ] What is SSTF?
-   [ ] What is SCAN?
-   [ ] What is C-SCAN?
-   [ ] What is LOOK?
-   [ ] What is C-LOOK?
-   [ ] Which disk scheduling algorithms are important historically?
-   [ ] Why is disk scheduling less central for modern SSD-based
    systems?

# 51. OS Performance

-   [ ] What is CPU utilization?
-   [ ] What is memory utilization?
-   [ ] What is I/O utilization?
-   [ ] What is load average?
-   [ ] What causes high CPU usage?
-   [ ] What causes high memory usage?
-   [ ] What causes excessive context switching?
-   [ ] What causes excessive page faults?
-   [ ] What causes high disk I/O?
-   [ ] How would you diagnose a slow application from an OS
    perspective?

# 52. Linux Commands for SWE

## ⭐ Practical Awareness

-   [ ] What does `ps` do?
-   [ ] What does `top` do?
-   [ ] What does `htop` do?
-   [ ] What does `free` show?
-   [ ] What does `df` show?
-   [ ] What does `du` show?
-   [ ] What does `ls` do?
-   [ ] What does `chmod` do?
-   [ ] What does `chown` do?
-   [ ] What does `kill` do?
-   [ ] What does `kill -9` mean?
-   [ ] What does `grep` do?
-   [ ] What does `find` do?
-   [ ] What does `lsof` do?
-   [ ] What does `ss` show?
-   [ ] What does `vmstat` show?
-   [ ] What does `iostat` show?
-   [ ] What does `uptime` show?
-   [ ] What does `dmesg` show?
-   [ ] How would you find a process using too much CPU?
-   [ ] How would you find a process using too much memory?
-   [ ] How would you find which process is using a port?
-   [ ] How would you investigate disk usage?

# 53. Production Troubleshooting

-   [ ] Application CPU reaches 100%. What would you investigate?
-   [ ] Application memory continuously increases. What could be wrong?
-   [ ] Application suddenly crashes with out-of-memory errors. What
    would you check?
-   [ ] Application becomes slow under high traffic. What OS-level
    factors could matter?
-   [ ] Server has thousands of processes. What would you investigate?
-   [ ] Server has thousands of threads. What could be wrong?
-   [ ] Context switches are extremely high. What could cause this?
-   [ ] Page faults suddenly increase. What could cause this?
-   [ ] Disk usage reaches 100%. What would you check?
-   [ ] Disk I/O becomes very high. What would you investigate?
-   [ ] A process is stuck in a waiting state. What could be happening?
-   [ ] A server cannot create new connections because of file
    descriptor limits. How would you investigate?
-   [ ] A Java process consumes too much memory. How would you determine
    whether the issue is heap, native memory, or threads?
-   [ ] A Node.js application becomes unresponsive. What OS and runtime
    factors would you investigate?

# 54. Most Repeated Fresher OS Questions

-   [ ] What is an Operating System?
-   [ ] What is a kernel?
-   [ ] What is a system call?
-   [ ] User mode vs kernel mode?
-   [ ] Program vs process?
-   [ ] What is a process?
-   [ ] Explain process states.
-   [ ] What is PCB?
-   [ ] What is context switching?
-   [ ] What is CPU scheduling?
-   [ ] Explain FCFS.
-   [ ] Explain SJF.
-   [ ] Explain Round Robin.
-   [ ] What is priority scheduling?
-   [ ] What is starvation?
-   [ ] What is aging?
-   [ ] Process vs thread?
-   [ ] What is multithreading?
-   [ ] Concurrency vs parallelism?
-   [ ] What is a race condition?
-   [ ] What is a critical section?
-   [ ] What is mutex?
-   [ ] What is semaphore?
-   [ ] Mutex vs semaphore?
-   [ ] What is deadlock?
-   [ ] Four conditions of deadlock?
-   [ ] How do you prevent deadlock?
-   [ ] What is virtual memory?
-   [ ] What is paging?
-   [ ] What is a page fault?
-   [ ] What is TLB?
-   [ ] What is page replacement?
-   [ ] What is thrashing?
-   [ ] Internal vs external fragmentation?
-   [ ] Stack vs heap?
-   [ ] What is IPC?
-   [ ] What is a file descriptor?
-   [ ] Blocking vs non-blocking I/O?
-   [ ] Synchronous vs asynchronous I/O?
-   [ ] What is an interrupt?
-   [ ] What is a zombie process?
-   [ ] What is an orphan process?
-   [ ] What is fork?
-   [ ] What is exec?
-   [ ] What is copy-on-write?
-   [ ] What is cache locality?

# 55. Most Important Comparison Questions

-   [ ] OS vs kernel
-   [ ] Kernel mode vs user mode
-   [ ] Program vs process
-   [ ] Process vs thread
-   [ ] Concurrency vs parallelism
-   [ ] Preemptive vs non-preemptive scheduling
-   [ ] FCFS vs SJF
-   [ ] SJF vs SRTF
-   [ ] Mutex vs semaphore
-   [ ] Deadlock vs starvation
-   [ ] Deadlock vs livelock
-   [ ] Paging vs segmentation
-   [ ] Virtual memory vs physical memory
-   [ ] Page vs frame
-   [ ] TLB vs cache
-   [ ] Internal vs external fragmentation
-   [ ] Stack vs heap
-   [ ] Shared memory vs message passing
-   [ ] Pipe vs socket
-   [ ] Blocking vs non-blocking I/O
-   [ ] Synchronous vs asynchronous I/O
-   [ ] Interrupt vs system call
-   [ ] Interrupt vs exception
-   [ ] Zombie vs orphan process
-   [ ] fork vs exec
-   [ ] HDD vs SSD
-   [ ] VM vs container

# 56. "WHY" Questions

-   [ ] Why do we need an OS?
-   [ ] Why do we need a kernel?
-   [ ] Why are user mode and kernel mode separated?
-   [ ] Why are system calls needed?
-   [ ] Why do we need processes?
-   [ ] Why do we need threads?
-   [ ] Why is context switching expensive?
-   [ ] Why do we need CPU scheduling?
-   [ ] Why does starvation happen?
-   [ ] Why is aging used?
-   [ ] Why do we need synchronization?
-   [ ] Why do race conditions happen?
-   [ ] Why do we need mutexes?
-   [ ] Why do we need semaphores?
-   [ ] Why does deadlock happen?
-   [ ] Why does virtual memory exist?
-   [ ] Why do we use paging?
-   [ ] Why is a page fault expensive?
-   [ ] Why do we need TLB?
-   [ ] Why does thrashing happen?
-   [ ] Why do we need process isolation?
-   [ ] Why is stack allocation fast?
-   [ ] Why can heap allocation be expensive?
-   [ ] Why do we need IPC?
-   [ ] Why is shared memory fast?
-   [ ] Why do we need interrupts?
-   [ ] Why is non-blocking I/O useful?
-   [ ] Why does the OS cache files?
-   [ ] Why are containers lighter than VMs?

# 57. "HOW" Questions

-   [ ] How does an OS create a process?
-   [ ] How does a process move between states?
-   [ ] How does CPU scheduling work?
-   [ ] How does context switching work?
-   [ ] How does a thread work?
-   [ ] How does a mutex work?
-   [ ] How does a semaphore work?
-   [ ] How does deadlock occur?
-   [ ] How can deadlock be prevented?
-   [ ] How does virtual memory work?
-   [ ] How does paging work?
-   [ ] How does address translation work?
-   [ ] How does TLB speed up memory access?
-   [ ] How does a page fault work?
-   [ ] How does page replacement work?
-   [ ] How does garbage collection work?
-   [ ] How do processes communicate?
-   [ ] How does a file get opened?
-   [ ] How does blocking I/O work?
-   [ ] How does non-blocking I/O work?
-   [ ] How does an interrupt work?
-   [ ] How does fork work?
-   [ ] How does exec work?
-   [ ] How does copy-on-write work?
-   [ ] How does a container isolate processes?

# 58. "WHEN" Questions

-   [ ] When should you use processes?
-   [ ] When should you use threads?
-   [ ] When is multithreading useful?
-   [ ] When is multiprocessing useful?
-   [ ] When should you use a mutex?
-   [ ] When should you use a semaphore?
-   [ ] When does deadlock occur?
-   [ ] When can starvation occur?
-   [ ] When does a context switch happen?
-   [ ] When does a page fault happen?
-   [ ] When does the OS perform a system call?
-   [ ] When does a process enter kernel mode?
-   [ ] When is virtual memory useful?
-   [ ] When can thrashing happen?
-   [ ] When should shared memory be used?
-   [ ] When should message passing be used?
-   [ ] When is blocking I/O acceptable?
-   [ ] When is non-blocking I/O preferable?
-   [ ] When should asynchronous I/O be used?
-   [ ] When should containers be preferred over VMs?

# 59. Whiteboard Questions

-   [ ] Draw and explain OS architecture.
-   [ ] Draw user space vs kernel space.
-   [ ] Draw system call flow.
-   [ ] Draw the process state diagram.
-   [ ] Draw a CPU scheduling timeline.
-   [ ] Draw context switching.
-   [ ] Draw process vs thread memory.
-   [ ] Draw a critical section.
-   [ ] Draw mutex synchronization.
-   [ ] Draw semaphore behavior.
-   [ ] Draw a deadlock scenario.
-   [ ] Draw virtual memory.
-   [ ] Draw a page table.
-   [ ] Draw virtual-to-physical address translation.
-   [ ] Draw TLB lookup.
-   [ ] Draw a page fault flow.
-   [ ] Draw page replacement.
-   [ ] Draw stack vs heap.
-   [ ] Draw IPC.
-   [ ] Draw file descriptor flow.
-   [ ] Draw blocking vs non-blocking I/O.
-   [ ] Draw fork + exec.
-   [ ] Draw copy-on-write.
-   [ ] Draw container vs VM.

# 60. Final 24-Hour Priority

## 🔴 Tier 1: MUST MASTER

-   [ ] OS fundamentals
-   [ ] Kernel
-   [ ] User mode vs kernel mode
-   [ ] System calls
-   [ ] Process
-   [ ] Process states
-   [ ] PCB
-   [ ] Context switching
-   [ ] CPU scheduling
-   [ ] FCFS
-   [ ] SJF
-   [ ] Round Robin
-   [ ] Priority Scheduling
-   [ ] Starvation
-   [ ] Aging
-   [ ] Thread
-   [ ] Process vs thread
-   [ ] Concurrency
-   [ ] Parallelism
-   [ ] Race condition
-   [ ] Critical section
-   [ ] Mutex
-   [ ] Semaphore
-   [ ] Mutex vs semaphore
-   [ ] Deadlock
-   [ ] Four deadlock conditions
-   [ ] Deadlock prevention
-   [ ] Virtual memory
-   [ ] Paging
-   [ ] Page table
-   [ ] Page fault
-   [ ] TLB
-   [ ] Page replacement
-   [ ] Thrashing
-   [ ] Stack vs heap
-   [ ] IPC
-   [ ] Blocking vs non-blocking I/O

## 🟠 Tier 2: Strong SWE Knowledge

-   [ ] Synchronization
-   [ ] Livelock
-   [ ] Memory fragmentation
-   [ ] Segmentation
-   [ ] Shared memory
-   [ ] Message passing
-   [ ] File descriptors
-   [ ] File systems
-   [ ] Interrupts
-   [ ] fork
-   [ ] exec
-   [ ] wait
-   [ ] Zombie process
-   [ ] Orphan process
-   [ ] Copy-on-write
-   [ ] Atomic operations
-   [ ] Cache locality
-   [ ] CPU cache
-   [ ] Garbage collection
-   [ ] Thread pools
-   [ ] Java + OS
-   [ ] Node.js + OS

## 🟡 Tier 3: Awareness

-   [ ] Disk scheduling
-   [ ] BIOS/UEFI
-   [ ] Bootloader
-   [ ] Virtualization
-   [ ] Hypervisors
-   [ ] Containers
-   [ ] Namespaces
-   [ ] cgroups
-   [ ] Advanced memory ordering
-   [ ] Advanced kernel architecture

# 61. Final Interview Simulation

## Round 1: Fundamentals

-   [ ] What is an Operating System?
-   [ ] What is a kernel?
-   [ ] What is a system call?
-   [ ] User mode vs kernel mode?
-   [ ] What happens when a program makes a system call?
-   [ ] Program vs process?
-   [ ] What is a process?
-   [ ] Explain process states.
-   [ ] What is PCB?
-   [ ] What is context switching?

## Round 2: Processes and Scheduling

-   [ ] What is CPU scheduling?
-   [ ] Explain FCFS.
-   [ ] Explain SJF.
-   [ ] Explain Round Robin.
-   [ ] Explain Priority Scheduling.
-   [ ] What is starvation?
-   [ ] What is aging?
-   [ ] What is response time?
-   [ ] What is turnaround time?
-   [ ] What is waiting time?

## Round 3: Threads and Concurrency

-   [ ] Process vs thread?
-   [ ] What is multithreading?
-   [ ] Concurrency vs parallelism?
-   [ ] What is a race condition?
-   [ ] What is a critical section?
-   [ ] What is synchronization?
-   [ ] What is a mutex?
-   [ ] What is a semaphore?
-   [ ] Mutex vs semaphore?
-   [ ] What is thread safety?

## Round 4: Deadlocks

-   [ ] What is deadlock?
-   [ ] Explain the four conditions of deadlock.
-   [ ] Give a real-world example.
-   [ ] How can deadlock be prevented?
-   [ ] How can deadlock be avoided?
-   [ ] What is Banker's Algorithm?
-   [ ] What is a safe state?
-   [ ] Deadlock vs starvation?
-   [ ] Deadlock vs livelock?
-   [ ] How would you debug a deadlock?

## Round 5: Memory

-   [ ] What is virtual memory?
-   [ ] Why do we need virtual memory?
-   [ ] What is paging?
-   [ ] Page vs frame?
-   [ ] What is a page table?
-   [ ] What is TLB?
-   [ ] What is a page fault?
-   [ ] Explain page replacement.
-   [ ] What is LRU?
-   [ ] What is thrashing?

## Round 6: Memory + Programming

-   [ ] Stack vs heap?
-   [ ] What causes stack overflow?
-   [ ] What causes memory leaks?
-   [ ] What is garbage collection?
-   [ ] Can Java have memory leaks?
-   [ ] What is OutOfMemoryError?
-   [ ] What is StackOverflowError?
-   [ ] What is copy-on-write?
-   [ ] What happens when a process accesses invalid memory?
-   [ ] What is process isolation?

## Round 7: I/O and IPC

-   [ ] What is IPC?
-   [ ] Pipe vs shared memory?
-   [ ] What is message passing?
-   [ ] Blocking vs non-blocking I/O?
-   [ ] Synchronous vs asynchronous I/O?
-   [ ] What is an interrupt?
-   [ ] What is DMA?
-   [ ] What is a file descriptor?
-   [ ] What happens when a file is opened?
-   [ ] How does the OS handle I/O?

## Round 8: Modern Software Engineering

-   [ ] How does Java interact with the OS?
-   [ ] How does JVM memory relate to OS memory?
-   [ ] How does Node.js interact with the OS?
-   [ ] Why can Node.js handle many I/O operations?
-   [ ] What is the event loop?
-   [ ] What is a thread pool?
-   [ ] What is a container?
-   [ ] Container vs VM?
-   [ ] How do containers use OS isolation?
-   [ ] How would you diagnose a high-CPU production server?

# 62. Final Confidence Test

Without looking at notes, explain these aloud:

-   [ ] What is an OS?
-   [ ] What is a kernel?
-   [ ] What is a system call?
-   [ ] User mode vs kernel mode.
-   [ ] Program vs process.
-   [ ] Process states.
-   [ ] PCB.
-   [ ] Context switching.
-   [ ] CPU scheduling.
-   [ ] Round Robin.
-   [ ] Process vs thread.
-   [ ] Concurrency vs parallelism.
-   [ ] Race condition.
-   [ ] Critical section.
-   [ ] Mutex.
-   [ ] Semaphore.
-   [ ] Deadlock.
-   [ ] Four conditions of deadlock.
-   [ ] Deadlock prevention.
-   [ ] Virtual memory.
-   [ ] Paging.
-   [ ] Page table.
-   [ ] TLB.
-   [ ] Page fault.
-   [ ] LRU.
-   [ ] Thrashing.
-   [ ] Stack vs heap.
-   [ ] Memory leak.
-   [ ] Garbage collection.
-   [ ] IPC.
-   [ ] Shared memory.
-   [ ] Blocking vs non-blocking I/O.
-   [ ] Interrupt.
-   [ ] File descriptor.
-   [ ] fork.
-   [ ] exec.
-   [ ] Zombie vs orphan.
-   [ ] Copy-on-write.
-   [ ] Cache locality.
-   [ ] Java + OS.
-   [ ] Node.js + OS.
-   [ ] Container vs VM.

# 63. OS Interview Confidence Rule

For every major concept, answer:

### 1. What?

What is it?

### 2. Why?

Why does the operating system need it?

### 3. How?

How does it actually work?

### 4. When?

When does it happen or when should it be used?

### 5. Example?

Can you give a real Software Engineering example?

### 6. Problem?

What problem does it solve?

### 7. Trade-off?

What performance, memory, or complexity cost does it introduce?

### 8. Failure?

What happens if it goes wrong?

# Final Target

You should be able to confidently answer:

-   [ ] What happens when you run a program?
-   [ ] Process vs thread?
-   [ ] Why are threads generally cheaper than processes?
-   [ ] What happens during a context switch?
-   [ ] Explain Round Robin scheduling.
-   [ ] What is a race condition?
-   [ ] Mutex vs semaphore?
-   [ ] Explain deadlock with an example.
-   [ ] What are the four conditions for deadlock?
-   [ ] What is virtual memory?
-   [ ] What happens during a page fault?
-   [ ] What is TLB?
-   [ ] Why is LRU useful?
-   [ ] Stack vs heap?
-   [ ] What is a memory leak?
-   [ ] How does garbage collection work?
-   [ ] What is IPC?
-   [ ] Blocking vs non-blocking I/O?
-   [ ] What happens when a system call is made?
-   [ ] How does Node.js handle multiple requests?
-   [ ] How does Java/JVM interact with the Operating System?
-   [ ] What happens when a server runs out of memory?
-   [ ] How would you debug a high-CPU production server?

## Final Goal

The goal is **not to become an OS/kernel engineer**.

The goal is to become a **Software Engineer who understands what the
machine is doing underneath the code.**

If you can confidently handle **Tier 1 + processes/threads +
synchronization/deadlocks + virtual memory + system calls + I/O +
practical Java/Node.js connections**, your OS preparation is at a strong
fresher-SWE interview level.
