import { generateCppInput } from "./inputGenerator.js";
import { cppSerializer } from "./serializer.js";

export const generateCppWrapper = (
  userCode,
  functionName,
  testCase,
  problem,
) => {
  const returnType = problem.returnType.cpp;
  const parameters = problem.parameters.cpp;

  let declarations = "";
  let functionArguments = "";

  parameters.forEach((param) => {
    const value = testCase.input[param.name];
    declarations += generateCppInput(
      param.type,
      param.name,
      testCase.input[param.name],
    );

    functionArguments += `${param.name},`;
  });

  functionArguments = functionArguments.slice(0, -1);

  let outputCode = "";

  if (returnType === "void") {
    outputCode = `
obj.${functionName}(${functionArguments});

cout<<"[";

for(int i=0;i<${parameters[0].name}.size();i++)
{
    cout<<${parameters[0].name}[i];

    if(i!=${parameters[0].name}.size()-1)
        cout<<",";
}

cout<<"]";
`;
  } else {
    outputCode = `
auto ans = obj.${functionName}(${functionArguments});

${cppSerializer(returnType)}
`;
  }

  return `

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
};
