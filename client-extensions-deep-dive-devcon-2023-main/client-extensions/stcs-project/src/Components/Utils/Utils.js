import axios from 'axios';

export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJhNzYxZWZhZmU3ZGM3NTdiNjg1MWRjOTdhYzczY2JmOWEzZDE1OTI0MzliODZlYWJiODgyYTYyZWEzNzMzZCIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY4ODYyNTA3OSwiZXhwIjoxNjg4NjI1Njc5LCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.FHMLeWWWJny10stuyc-uNUhhttJZ_zGBrBDe6UidKVMsEt6qsIza9mT9Xw8itGqGcFSN5tv9H-ajlpQspa3uIF_-4yWWmxo5NkL2s29FhMksfo4-K3TJXcN-KFCMFjaaytNBpEX6S_R5mDFDEm-8tn6B0mVaqd0t3jxTgNPjRe6PYh_3qzYy5Z4vvLoNkyUaL7vTBLA6ZHikYinzsUdyOU8qV7qpXlJCUQKYzDVE2u3NZr_n8P1ZQ5W8d4rRWUZStDzNW4vmRKjtwpv-uLPt12-xkjVZJaxYvByiOv5ZuxLNV7TCOUDrj8QZsMOyzfe1d3DbjbQksTZ5dAC3HA4BZg",
          'Content-Type': 'application/json'
        }
      })

      response=await response.json();
    console.log("this is api data", response)

  return response;    
}


export  function ChangeDateFormat(date)
{
    const originalDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    console.log(formattedDate);
    return formattedDate;
}









