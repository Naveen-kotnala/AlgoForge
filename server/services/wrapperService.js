export const generateCppWrapper = (userCode, functionName, testCase) => {
  const nums = JSON.stringify(testCase.input.nums)
    .replaceAll("[", "{")
    .replaceAll("]", "}");

  const target = testCase.input.target;

  const wrapper = `

#include<bits/stdc++.h>
using namespace std;


${userCode}


int main(){

    Solution obj;


    vector<int> nums = ${nums};

    int target = ${target};


    vector<int> ans = obj.${functionName}(nums,target);


    cout<<"[";

    for(int i=0;i<ans.size();i++){

        cout<<ans[i];

        if(i != ans.size()-1)
            cout<<",";

    }

    cout<<"]";


    return 0;
}

`;

  return wrapper;
};
