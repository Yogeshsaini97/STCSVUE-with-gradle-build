
export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJkYWE0NjMzYzNlMTBhZDcwM2ZkZTdiZDZiNjllNGVmY2Q1YzBhYjMzNDU5OWE0YzYxNTE2N2E2NzY5ZjhmNiIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY4ODY5ODY1MiwiZXhwIjoxNjg4Njk5MjUyLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.rxJRQCYEOdws-U6SwOcCYl70TXU9IiGN3CfzCe0MaWix22nzWUqJXIoeAKKRmHMnEfDbK7s0kCLOw26Y69HVfhZPnI1Gso3cn_gFec-3rCTmeePjaHrLq91094qXmj4Jq8VfpgbS4YIrdVh5J9B_wUpBc51K2m_4aUTOduoZMH5U0DeFkROXFDYpn-IkRYGx34AVum9NTebIWmpRTTWmdoJPR5s82WH4B32xLHYPb4GOa_Rnrc8ReH10d3OvNlz72V-5be6g7oa7V98TllVom_cu9_VXbZtRUnQsBvU7w-z4vkWfu2G29D1zMq5lshVynv-PKSeSkHDvEJRwxgygjw",
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









