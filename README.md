# exam-storage

To run, start mongodb.

```
manouchehri:~/workspace (master) $ sudo service mongod start
Rather than invoking init scripts through /etc/init.d, use the service(8)
utility, e.g. service mongod start

Since the script you are attempting to invoke has been converted to an
Upstart job, you may also use the start(8) utility, e.g. start mongod
```

Then then start listening.

```
manouchehri:~/workspace (master) $ sudo mongod --smallfiles
2016-04-11T23:41:33.399+0000 [initandlisten] MongoDB starting : pid=6456 port=27017 dbpath=/data/db 64-bit host=manouchehri-comp2406-exam-storage-2941207
2016-04-11T23:41:33.399+0000 [initandlisten] db version v2.6.11
2016-04-11T23:41:33.399+0000 [initandlisten] git version: d00c1735675c457f75a12d530bee85421f0c5548
2016-04-11T23:41:33.399+0000 [initandlisten] build info: Linux build4.ny.cbi.10gen.cc 2.6.32-431.3.1.el6.x86_64 #1 SMP Fri Jan 3 21:39:27 UTC 2014 x86_64 BOOST_LIB_VERSION=1_49
2016-04-11T23:41:33.399+0000 [initandlisten] allocator: tcmalloc
2016-04-11T23:41:33.399+0000 [initandlisten] options: { storage: { smallFiles: true } }
2016-04-11T23:41:33.408+0000 [initandlisten] journal dir=/data/db/journal
2016-04-11T23:41:33.409+0000 [initandlisten] recover : no journal files present, no recovery needed
2016-04-11T23:41:33.737+0000 [initandlisten] preallocateIsFaster=true 3
2016-04-11T23:41:34.082+0000 [initandlisten] preallocateIsFaster=true 2.72
2016-04-11T23:41:35.404+0000 [initandlisten] allocating new ns file /data/db/local.ns, filling with zeroes...
2016-04-11T23:41:35.523+0000 [FileAllocator] allocating new datafile /data/db/local.0, filling with zeroes...
2016-04-11T23:41:35.523+0000 [FileAllocator] creating directory /data/db/_tmp
2016-04-11T23:41:35.533+0000 [FileAllocator] done allocating datafile /data/db/local.0, size: 16MB,  took 0.003 secs
2016-04-11T23:41:35.535+0000 [initandlisten] build index on: local.startup_log properties: { v: 1, key: { _id: 1 }, name: "_id_", ns: "local.startup_log" }
2016-04-11T23:41:35.536+0000 [initandlisten]     added index to empty collection
2016-04-11T23:41:35.536+0000 [initandlisten] command local.$cmd command: create { create: "startup_log", size: 10485760, capped: true } ntoreturn:1 keyUpdates:0 numYields:0  reslen:37 132ms
2016-04-11T23:41:35.537+0000 [initandlisten] waiting for connections on port 27017
2016-04-11T23:41:44.181+0000 [initandlisten] connection accepted from 127.0.0.1:60162 #1 (1 connection now open)
2016-04-11T23:41:44.181+0000 [initandlisten] connection accepted from 127.0.0.1:60164 #2 (2 connections now open)
2016-04-11T23:41:44.188+0000 [conn1] end connection 127.0.0.1:60162 (1 connection now open)
....
```
