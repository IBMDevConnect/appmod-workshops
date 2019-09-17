# Steps to execute Bulkhead demo

## Pre-requisite

1. Node.JS & NPM installation

## Steps

1. $ cd Bulkhead/BulkHeadAPI

2. $ npm install

3. $ npm start

4. `$ cd Bulkhead/ms1` && `$ cd Bulkhead/ms2` && `$ cd Bulkhead/ms3` in three different terminals.

5. `$ npm install` in all the three terminals

6. `$ npm start` in all the three terminals. 

7. Enter command `requestdb`in all the three terminals

Now you can see that the first two requests are served and then the third request is served after successful completion of first two requests.

```
The database server started
Currently serving request number 1
Currently serving request number 2
Served request number 1
Currently serving request number 3
Served request number 2
Served request number 3
```