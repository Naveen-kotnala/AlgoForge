export const generateCppWrapper = (
  userCode,
  functionName,
  testCase,
  returnType,
  parameters,
) => {
  let declarations = "";
  let functionArguments = "";

  // Generate input variables
  parameters.forEach((param) => {
    const value = testCase.input[param.name];

    if (param.type === "vector<int>") {
      declarations += `
      vector<int> ${param.name} = ${JSON.stringify(value)
        .replaceAll("[", "{")
        .replaceAll("]", "}")};
      `;
    } else if (param.type === "vector<vector<int>>") {
      declarations += `
      vector<vector<int>> ${param.name} = ${JSON.stringify(value)
        .replaceAll("[", "{")
        .replaceAll("]", "}")};
      `;
    } else if (param.type === "string") {
      declarations += `
      string ${param.name} = "${value}";
      `;
    } else if (param.type === "int") {
      declarations += `
      int ${param.name} = ${value};
      `;
    }

    functionArguments += param.name + ",";
  });

  // remove last comma
  functionArguments = functionArguments.slice(0, -1);

  let outputCode = "";

  // vector<int> output
  if (returnType === "vector<int>") {
    outputCode = `

    auto ans = obj.${functionName}(${functionArguments});


    cout<<"[";

    for(int i=0;i<ans.size();i++)
    {
        cout<<ans[i];

        if(i != ans.size()-1)
            cout<<",";
    }

    cout<<"]";

    `;
  }

  // normal int/string/bool output
  else {
    outputCode = `

    auto ans = obj.${functionName}(${functionArguments});

    cout << ans;

    `;
  }

  const wrapper = `

#include<bits/stdc++.h>
using namespace std;


${userCode}



int main()
{

    Solution obj;


    ${declarations}


    ${outputCode}


    return 0;
}

`;

  return wrapper;
};
