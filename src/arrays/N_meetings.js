/**
There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time? 
*/

//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let start = new Array(n);
        let end = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            start[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            end[i] = input_ar2[i];
        let obj = new Solution();
        console.log(obj.maxMeetings(start, end, n));
    }
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} start
 * @param {number[]} end
 * @param {number} n
 * @returns {number}
*/

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    maxMeetings(start, end, n)
    {
        // code here
        let meetings = [];
        for ( let i =0; i < n; ++i ) {
            meetings.push({
                startTime: start[i],
                endTime: end[i]
            });
        }
        meetings.sort(function(a, b) { return a.endTime - b.endTime });
        let count = 1;
        let curr_meeting = meetings[0];
        for (let j = 1; j < meetings.length; ++j) {
            let next_meeting = {...meetings[j]};
            if(next_meeting['startTime'] > curr_meeting['endTime']) {
                count++;
                curr_meeting = {...next_meeting};
            }
        }
        return count;
    }
    
}